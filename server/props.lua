-- =============================================================================
-- CREATOR TOOLKIT - PROP STUDIO : SERVEUR & SYNCHRONISATION
-- =============================================================================

ServerProps = {
    Cache = {},      -- [id] = propData
    Locks = {},      -- [id] = { src = source, name = playerName, time = timestamp }
    LastSync = {},   -- [src] = timestamp (ms) pour limitation de fréquence
    Hierarchy = {    -- Hiérarchie officielle des props
        groups = {},
        families = {}
    },
    Assemblages = {} -- [id] = assemblageData (Prefabs)
}

local resourceName = GetCurrentResourceName()

--------------------------------------------------------------------------------
-- 1. Permissions & Sécurité
--------------------------------------------------------------------------------

local function checkPermission(src, permType)
    if src == 0 then return true end
    if Config.RequireAdminPermissions == false then return true end
    local perms = (Config and Config.PropStudio and Config.PropStudio.Permissions) or {}
    local req = perms[permType] or ('creator.prop.' .. tostring(permType))

    if IsPlayerAceAllowed(src, req) then return true end
    if IsPlayerAceAllowed(src, 'creator.admin') then return true end
    if IsPlayerAceAllowed(src, 'admin') then return true end
    if IsPlayerAceAllowed(src, 'command') then return true end
    return false
end

--------------------------------------------------------------------------------
-- 2. Initialisation & Chargement depuis MySQL
--------------------------------------------------------------------------------

function ServerProps.Init()
    if not DB.IsReady then
        DB.Init()
    end

    local list = DB.Props.GetAll()
    ServerProps.Cache = {}

    for _, p in ipairs(list or {}) do
        if p and p.id then
            ServerProps.Cache[p.id] = p
        end
    end

    local loadedHierarchy = DB.PropHierarchy.Get()
    ServerProps.Hierarchy = loadedHierarchy or { groups = {}, families = {} }

    local loadedAssemblages = DB.Assemblages.GetAll()
    ServerProps.Assemblages = {}
    local assCount = 0
    for _, a in ipairs(loadedAssemblages or {}) do
        if a and a.id then
            ServerProps.Assemblages[a.id] = a
            assCount = assCount + 1
        end
    end

    local count = 0
    for _ in pairs(ServerProps.Cache) do count = count + 1 end
    print(("[CreatorToolkit] [Prop Studio] %d props, hiérarchie (%d groupes, %d familles) et %d assemblages chargés depuis MySQL."):format(
        count,
        #(ServerProps.Hierarchy.groups or {}),
        #(ServerProps.Hierarchy.families or {}),
        assCount
    ))

    -- Diffusion automatique à tous les clients déjà connectés
    local propsList = {}
    for _, prop in pairs(ServerProps.Cache) do
        table.insert(propsList, prop)
    end
    local assemblagesList = {}
    for _, a in pairs(ServerProps.Assemblages or {}) do
        table.insert(assemblagesList, a)
    end
    TriggerClientEvent('creatortoolkit:propStudio:syncProps', -1, propsList, ServerProps.Locks, ServerProps.Hierarchy, assemblagesList)
end

AddEventHandler('onResourceStart', function(resName)
    if resName == resourceName then
        CreateThread(function()
            Wait(300)
            ServerProps.Init()
        end)
    end
end)

-- Synchronisation automatique lors de la connexion d'un joueur
AddEventHandler('playerJoining', function()
    local src = source
    local propsList = {}
    for _, prop in pairs(ServerProps.Cache) do
        table.insert(propsList, prop)
    end
    local assemblagesList = {}
    for _, a in pairs(ServerProps.Assemblages or {}) do
        table.insert(assemblagesList, a)
    end
    TriggerClientEvent('creatortoolkit:propStudio:syncProps', src, propsList, ServerProps.Locks, ServerProps.Hierarchy, assemblagesList)
end)

--------------------------------------------------------------------------------
-- 3. Gestion des Verrous d'Édition (Multi-Admins)
--------------------------------------------------------------------------------

local function isLockExpired(lockInfo)
    if not lockInfo then return true end
    local timeout = (Config and Config.PropStudio and Config.PropStudio.LockTimeout) or 180
    return (os.time() - lockInfo.time) > timeout
end

local function cleanExpiredLocks()
    for propId, lock in pairs(ServerProps.Locks) do
        if isLockExpired(lock) then
            ServerProps.Locks[propId] = nil
            TriggerClientEvent('creatortoolkit:propStudio:syncLock', -1, propId, nil)
        end
    end
end

-- Demande de verrou pour édition (libre pour tout administrateur)
RegisterNetEvent('creatortoolkit:propStudio:requestLock', function(propId)
    local src = source
    if not propId or propId == "" then return end

    if not checkPermission(src, 'edit') then
        TriggerClientEvent('creatortoolkit:propStudio:lockDenied', src, propId, "Permission refusée")
        return
    end

    local pName = GetPlayerName(src) or "Admin"
    ServerProps.Locks[propId] = {
        src = src,
        name = pName,
        time = os.time()
    }

    TriggerClientEvent('creatortoolkit:propStudio:lockGranted', src, propId)
    TriggerClientEvent('creatortoolkit:propStudio:syncLock', -1, propId, {
        ownerSrc = src,
        ownerName = pName
    })
end)

-- Libération de verrou
RegisterNetEvent('creatortoolkit:propStudio:releaseLock', function(propId)
    local src = source
    if not propId then return end

    local lock = ServerProps.Locks[propId]
    if lock and lock.src == src then
        ServerProps.Locks[propId] = nil
        TriggerClientEvent('creatortoolkit:propStudio:syncLock', -1, propId, nil)
    end
end)

-- Libération automatique lors de la déconnexion
AddEventHandler('playerDropped', function()
    local src = source
    local released = false

    for propId, lock in pairs(ServerProps.Locks) do
        if lock and lock.src == src then
            ServerProps.Locks[propId] = nil
            TriggerClientEvent('creatortoolkit:propStudio:syncLock', -1, propId, nil)
            released = true
        end
    end

    ServerProps.LastSync[src] = nil
end)

--------------------------------------------------------------------------------
-- 4. Requête de Synchronisation Complète
--------------------------------------------------------------------------------

RegisterNetEvent('creatortoolkit:propStudio:requestProps', function()
    local src = source
    cleanExpiredLocks()

    local propsList = {}
    for _, prop in pairs(ServerProps.Cache) do
        table.insert(propsList, prop)
    end

    local assemblagesList = {}
    for _, a in pairs(ServerProps.Assemblages or {}) do
        table.insert(assemblagesList, a)
    end

    -- Envoi de la liste des props, des verrous, de la hiérarchie et des assemblages
    TriggerClientEvent('creatortoolkit:propStudio:syncProps', src, propsList, ServerProps.Locks, ServerProps.Hierarchy, assemblagesList)
end)

--------------------------------------------------------------------------------
-- 5. Synchronisation en Direct (Live Transform Gizmo ~20 FPS)
--------------------------------------------------------------------------------

RegisterNetEvent('creatortoolkit:propStudio:liveTransform', function(data)
    local src = source
    if not data or not data.id or not data.coords then return end

    if not checkPermission(src, 'edit') then return end

    -- Limitation de fréquence (rate-limit : max 20Hz = 50ms)
    local now = GetGameTimer()
    local last = ServerProps.LastSync[src] or 0
    local minInterval = (Config and Config.PropStudio and Config.PropStudio.SyncInterval) or 50
    if (now - last) < (minInterval - 5) then
        return
    end
    ServerProps.LastSync[src] = now

    -- Mise à jour dans le cache mémoire serveur
    local cached = ServerProps.Cache[data.id]
    if cached then
        cached.coords = {
            x = tonumber(string.format("%.3f", data.coords.x)),
            y = tonumber(string.format("%.3f", data.coords.y)),
            z = tonumber(string.format("%.3f", data.coords.z))
        }
        if data.rotation then
            cached.rotation = {
                x = tonumber(string.format("%.2f", data.rotation.x or 0.0)),
                y = tonumber(string.format("%.2f", data.rotation.y or 0.0)),
                z = tonumber(string.format("%.2f", data.rotation.z or data.heading or 0.0))
            }
            cached.heading = cached.rotation.z
        end
    end

    ServerProps.Locks[data.id] = {
        src = src,
        name = GetPlayerName(src) or "Admin",
        time = os.time()
    }

    -- Diffusion aux AUTRES clients en temps réel
    TriggerClientEvent('creatortoolkit:propStudio:onLiveTransform', -1, {
        id = data.id,
        coords = data.coords,
        rotation = data.rotation,
        sender = src
    })
end)

--------------------------------------------------------------------------------
-- 6. Sauvegarde Définitive d'un Prop (Création ou Mise à Jour)
--------------------------------------------------------------------------------

RegisterNetEvent('creatortoolkit:propStudio:saveProp', function(propData)
    local src = source
    if not propData or not propData.model or not propData.coords then
        return
    end

    if not checkPermission(src, 'edit') then
        TriggerClientEvent('creatortoolkit:propStudio:notify', src, "Vous n'avez pas la permission de sauvegarder ce prop.", "error")
        return
    end

    local isNew = (not propData.id or propData.id == "" or string.sub(tostring(propData.id), 1, 4) == "new_")
    local propId = propData.id

    if isNew then
        propId = string.format("prop_%d_%d", os.time(), math.random(1000, 9999))
    end

    local rot = propData.rotation or { x = 0.0, y = 0.0, z = propData.heading or 0.0 }

    local finalProp = {
        id = propId,
        creator = GetPlayerName(src) or "Admin",
        model = tostring(propData.model),
        coords = {
            x = tonumber(string.format("%.3f", propData.coords.x)),
            y = tonumber(string.format("%.3f", propData.coords.y)),
            z = tonumber(string.format("%.3f", propData.coords.z))
        },
        heading = tonumber(string.format("%.2f", propData.heading or rot.z or 0.0)),
        rotation = {
            x = tonumber(string.format("%.2f", rot.x or 0.0)),
            y = tonumber(string.format("%.2f", rot.y or 0.0)),
            z = tonumber(string.format("%.2f", rot.z or 0.0))
        },
        renderDistance = tonumber(string.format("%.1f", propData.renderDistance or 150.0)),
        textureVariation = tonumber(propData.textureVariation) or 0,
        collision = (propData.collision ~= false),
        bucket = tonumber(propData.bucket or 0),
        opacity = tonumber(propData.opacity or 255),
        scale = tonumber(string.format("%.2f", propData.scale or 1.0)),
        physics = (propData.physics == true),
        groupId = (propData.groupId and propData.groupId ~= "") and propData.groupId or nil,
        familyId = (propData.familyId and propData.familyId ~= "") and propData.familyId or nil,
        metadata = propData.metadata or {}
    }

    -- 1. Écriture / Mise à jour dans MySQL (asynchrone)
    local dbSuccess = false
    if isNew then
        dbSuccess = DB.Props.Create(finalProp)
    else
        dbSuccess = DB.Props.Update(finalProp)
    end

    if not dbSuccess then
        print(("[CreatorToolkit] [ERREUR] Échec de la persistance MySQL pour le prop %s"):format(propId))
    end

    -- 2. Mise à jour de la mémoire officielle serveur
    ServerProps.Cache[propId] = finalProp

    -- 3. Attribuer le verrou à l'auteur pour lui permettre de continuer immédiatement
    ServerProps.Locks[propId] = {
        src = src,
        name = GetPlayerName(src) or "Admin",
        time = os.time()
    }

    -- 4. Diffusion à l'ensemble des joueurs
    TriggerClientEvent('creatortoolkit:propStudio:syncSingleProp', -1, finalProp)
    TriggerClientEvent('creatortoolkit:propStudio:syncLock', -1, propId, {
        ownerSrc = src,
        ownerName = ServerProps.Locks[propId].name
    })

    -- 5. Confirmation à l'auteur
    TriggerClientEvent('creatortoolkit:propStudio:onPropSaved', src, finalProp, isNew)

    print(("[CreatorToolkit] [Prop Studio] Prop '%s' (%s) sauvegardé par %s (Nouveau: %s)"):format(
        propId, finalProp.model, finalProp.creator, tostring(isNew)
    ))
end)

--------------------------------------------------------------------------------
-- 7. Duplication d'un Prop (LShift)
--------------------------------------------------------------------------------

RegisterNetEvent('creatortoolkit:propStudio:duplicateProp', function(sourcePropId)
    local src = source
    if not sourcePropId then return end

    if not checkPermission(src, 'edit') then
        TriggerClientEvent('creatortoolkit:propStudio:notify', src, "Permission de dupliquer refusée.", "error")
        return
    end

    local srcProp = ServerProps.Cache[sourcePropId]
    if not srcProp then return end

    local newPropId = string.format("prop_%d_%d", os.time(), math.random(1000, 9999))

    local newProp = {
        id = newPropId,
        creator = GetPlayerName(src) or "Admin",
        model = srcProp.model,
        coords = {
            x = tonumber(string.format("%.3f", srcProp.coords.x + 0.3)),
            y = tonumber(string.format("%.3f", srcProp.coords.y + 0.3)),
            z = tonumber(string.format("%.3f", srcProp.coords.z))
        },
        heading = srcProp.heading or 0.0,
        rotation = {
            x = srcProp.rotation.x or 0.0,
            y = srcProp.rotation.y or 0.0,
            z = srcProp.rotation.z or 0.0
        },
        renderDistance = srcProp.renderDistance or 150.0,
        textureVariation = srcProp.textureVariation or 0,
        collision = (srcProp.collision ~= false),
        bucket = srcProp.bucket or 0,
        opacity = srcProp.opacity or 255,
        scale = srcProp.scale or 1.0,
        physics = false,
        groupId = srcProp.groupId,
        familyId = srcProp.familyId,
        metadata = srcProp.metadata or {}
    }

    -- Persistance MySQL
    DB.Props.Create(newProp)

    -- Mémoire & Verrou
    ServerProps.Cache[newPropId] = newProp
    ServerProps.Locks[newPropId] = {
        src = src,
        name = GetPlayerName(src) or "Admin",
        time = os.time()
    }

    -- Diffusion
    TriggerClientEvent('creatortoolkit:propStudio:syncSingleProp', -1, newProp)
    TriggerClientEvent('creatortoolkit:propStudio:syncLock', -1, newPropId, {
        ownerSrc = src,
        ownerName = ServerProps.Locks[newPropId].name
    })

    -- Notification exclusive à l'auteur pour sélection immédiate
    TriggerClientEvent('creatortoolkit:propStudio:onPropDuplicated', src, newProp)

    print(("[CreatorToolkit] [Prop Studio] Prop '%s' dupliqué -> nouvel ID '%s' par %s"):format(
        sourcePropId, newPropId, newProp.creator
    ))
end)

--------------------------------------------------------------------------------
-- 8. Suppression d'un Prop (Suppr)
--------------------------------------------------------------------------------

RegisterNetEvent('creatortoolkit:propStudio:deleteProp', function(propId)
    local src = source
    if not propId then return end

    if not checkPermission(src, 'delete') then
        TriggerClientEvent('creatortoolkit:propStudio:notify', src, "Permission de supprimer refusée.", "error")
        return
    end

    -- 1. Suppression MySQL
    DB.Props.Delete(propId)

    -- 2. Suppression mémoire & verrou
    ServerProps.Cache[propId] = nil
    ServerProps.Locks[propId] = nil

    -- 3. Diffusion à tous les clients pour suppression de l'entité locale
    TriggerClientEvent('creatortoolkit:propStudio:onPropDeleted', -1, propId)
    TriggerClientEvent('creatortoolkit:propStudio:syncLock', -1, propId, nil)

    print(("[CreatorToolkit] [Prop Studio] Prop '%s' supprimé par %s"):format(
        propId, GetPlayerName(src) or "Admin"
    ))
end)

--------------------------------------------------------------------------------
-- 9. Hiérarchie : Groupes et Familles de Props
--------------------------------------------------------------------------------

RegisterNetEvent('creatortoolkit:propStudio:saveHierarchy', function(newHierarchy)
    local src = source
    if not newHierarchy or type(newHierarchy) ~= "table" then return end

    ServerProps.Hierarchy = {
        groups = newHierarchy.groups or {},
        families = newHierarchy.families or {}
    }

    -- Persistance MySQL
    DB.PropHierarchy.Save(ServerProps.Hierarchy)

    -- Synchronisation immédiate avec tous les clients
    TriggerClientEvent('creatortoolkit:propStudio:syncHierarchy', -1, ServerProps.Hierarchy)

    print(("[CreatorToolkit] [Prop Studio] Hiérarchie sauvegardée en BDD par %s (%d groupes, %d familles)"):format(
        GetPlayerName(src) or "Unknown",
        #(ServerProps.Hierarchy.groups or {}),
        #(ServerProps.Hierarchy.families or {})
    ))
end)

RegisterNetEvent('creatortoolkit:propStudio:assignPropsHierarchy', function(data)
    local src = source
    if not data or not data.ids or type(data.ids) ~= "table" then return end

    local gVal = (data.groupId and data.groupId ~= "" and data.groupId ~= false) and tostring(data.groupId) or nil
    local fVal = (data.familyId and data.familyId ~= "" and data.familyId ~= false) and tostring(data.familyId) or nil

    local changedProps = {}
    for _, id in ipairs(data.ids) do
        local p = ServerProps.Cache[id]
        if p then
            if data.groupId ~= nil then
                p.groupId = gVal
            end
            if data.familyId ~= nil then
                p.familyId = fVal
            end
            table.insert(changedProps, p)
        end
    end

    if #changedProps > 0 then
        -- Sauvegarde MySQL
        DB.PropHierarchy.AssignProps(data.ids, gVal, fVal)
        for _, p in ipairs(changedProps) do
            TriggerClientEvent('creatortoolkit:propStudio:syncSingleProp', -1, p)
        end
    end
end)

RegisterNetEvent('creatortoolkit:propStudio:updateFamilyProps', function(data)
    local src = source
    if not data or not data.ids or type(data.ids) ~= "table" then return end

    local positions = data.positions or {}
    local changedProps = {}

    for _, id in ipairs(data.ids) do
        local p = ServerProps.Cache[id]
        local pos = positions[id]
        if p and pos then
            if pos.coords then
                p.coords = {
                    x = tonumber(string.format("%.3f", pos.coords.x)),
                    y = tonumber(string.format("%.3f", pos.coords.y)),
                    z = tonumber(string.format("%.3f", pos.coords.z))
                }
            end
            if pos.rotation then
                p.rotation = {
                    x = tonumber(string.format("%.2f", pos.rotation.x or 0.0)),
                    y = tonumber(string.format("%.2f", pos.rotation.y or 0.0)),
                    z = tonumber(string.format("%.2f", pos.rotation.z or pos.heading or 0.0))
                }
                p.heading = p.rotation.z
            elseif pos.heading ~= nil then
                p.heading = tonumber(string.format("%.2f", pos.heading))
                p.rotation = p.rotation or { x = 0.0, y = 0.0, z = p.heading }
                p.rotation.z = p.heading
            end
            table.insert(changedProps, p)
        end
    end

    if #changedProps > 0 then
        -- Persistance MySQL en bloc
        DB.Props.SaveMultiple(changedProps)

        -- Synchronisation de chaque prop modifié à tous les clients
        for _, p in ipairs(changedProps) do
            TriggerClientEvent('creatortoolkit:propStudio:syncSingleProp', -1, p)
        end
    end
end)

--------------------------------------------------------------------------------
-- 11. Gestion des Assemblages (Prefabs)
--------------------------------------------------------------------------------

RegisterNetEvent('creatortoolkit:propStudio:requestAssemblages', function()
    local src = source
    local list = {}
    for _, a in pairs(ServerProps.Assemblages or {}) do
        table.insert(list, a)
    end
    TriggerClientEvent('creatortoolkit:propStudio:syncAssemblages', src, list)
end)

RegisterNetEvent('creatortoolkit:propStudio:saveAssemblage', function(data)
    local src = source
    if not data or not data.name or data.name == "" then
        TriggerClientEvent('creatortoolkit:propStudio:notify', src, "Nom d'assemblage invalide.", "error")
        return
    end

    local assemblageId = (data.id and data.id ~= "") and data.id or string.format("assemblage_%d_%d", os.time(), math.random(1000, 9999))
    local propsData = data.propsData or {}
    if #propsData == 0 then
        TriggerClientEvent('creatortoolkit:propStudio:notify', src, "L'assemblage ne contient aucun prop.", "error")
        return
    end

    local assemblage = {
        id = assemblageId,
        name = tostring(data.name),
        category = (data.category and data.category ~= "") and tostring(data.category) or "Général",
        description = data.description and tostring(data.description) or "",
        thumbnail = data.thumbnail and tostring(data.thumbnail) or "",
        propsCount = #propsData,
        propsData = propsData
    }

    ServerProps.Assemblages[assemblageId] = assemblage
    DB.Assemblages.Save(assemblage)

    TriggerClientEvent('creatortoolkit:propStudio:onAssemblageSaved', -1, assemblage)
    TriggerClientEvent('creatortoolkit:propStudio:notify', src, ("Assemblage '%s' sauvegardé (%d props)."):format(assemblage.name, #propsData), "success")
end)

RegisterNetEvent('creatortoolkit:propStudio:deleteAssemblage', function(assemblageId)
    local src = source
    if not assemblageId or not ServerProps.Assemblages[assemblageId] then return end

    local name = ServerProps.Assemblages[assemblageId].name
    ServerProps.Assemblages[assemblageId] = nil
    DB.Assemblages.Delete(assemblageId)

    TriggerClientEvent('creatortoolkit:propStudio:onAssemblageDeleted', -1, assemblageId)
    TriggerClientEvent('creatortoolkit:propStudio:notify', src, ("Assemblage '%s' supprimé du catalogue."):format(name), "info")
end)

RegisterNetEvent('creatortoolkit:propStudio:duplicateAssemblage', function(assemblageId)
    local src = source
    local orig = ServerProps.Assemblages[assemblageId]
    if not orig then return end

    local newId = string.format("assemblage_%d_%d", os.time(), math.random(1000, 9999))
    local clone = {
        id = newId,
        name = orig.name .. " (Copie)",
        category = orig.category,
        description = orig.description,
        thumbnail = orig.thumbnail,
        propsCount = orig.propsCount,
        propsData = orig.propsData
    }

    ServerProps.Assemblages[newId] = clone
    DB.Assemblages.Save(clone)

    TriggerClientEvent('creatortoolkit:propStudio:onAssemblageSaved', -1, clone)
    TriggerClientEvent('creatortoolkit:propStudio:notify', src, ("Assemblage '%s' dupliqué."):format(clone.name), "success")
end)

RegisterNetEvent('creatortoolkit:propStudio:spawnAssemblage', function(data)
    local src = source
    if not data or not data.assemblageId then return end

    local assemblage = ServerProps.Assemblages[data.assemblageId]
    if not assemblage then
        TriggerClientEvent('creatortoolkit:propStudio:notify', src, "Assemblage introuvable.", "error")
        return
    end

    local spawnCoords = data.spawnCoords or { x = 0.0, y = 0.0, z = 0.0 }
    local spawnHeading = tonumber(data.spawnHeading or 0.0) or 0.0
    local rad = math.rad(spawnHeading)
    local cosA = math.cos(rad)
    local sinA = math.sin(rad)

    -- Création d'une nouvelle famille pour cet assemblage placé
    local newFamilyId = string.format("fam_%d_%d", os.time(), math.random(1000, 9999))
    local familyName = (data.familyName and data.familyName ~= "") and data.familyName or assemblage.name

    local newFamily = {
        id = newFamilyId,
        name = familyName,
        groupId = nil
    }
    table.insert(ServerProps.Hierarchy.families, newFamily)
    DB.PropHierarchy.Save(ServerProps.Hierarchy)
    TriggerClientEvent('creatortoolkit:propStudio:syncHierarchy', -1, ServerProps.Hierarchy)

    -- Création des props individuels indépendants
    local spawnedProps = {}
    local spawnedIds = {}
    local creatorName = GetPlayerName(src) or "Admin"
    local playerBucket = GetPlayerRoutingBucket(src) or 0

    for i, pData in ipairs(assemblage.propsData or {}) do
        local rel = pData.relCoords or { x = 0.0, y = 0.0, z = 0.0 }
        local rotX = rel.x * cosA - rel.y * sinA
        local rotY = rel.x * sinA + rel.y * cosA

        local finalX = tonumber(string.format("%.3f", spawnCoords.x + rotX))
        local finalY = tonumber(string.format("%.3f", spawnCoords.y + rotY))
        local finalZ = tonumber(string.format("%.3f", spawnCoords.z + (rel.z or 0.0)))

        local origRot = pData.rotation or { x = 0.0, y = 0.0, z = pData.heading or 0.0 }
        local finalHeading = tonumber(string.format("%.2f", ((pData.heading or origRot.z or 0.0) + spawnHeading) % 360.0))
        local finalRot = {
            x = tonumber(string.format("%.2f", origRot.x or 0.0)),
            y = tonumber(string.format("%.2f", origRot.y or 0.0)),
            z = finalHeading
        }

        local propId = string.format("prop_%d_%d_%d", os.time(), math.random(100, 999), i)
        local prop = {
            id = propId,
            creator = creatorName,
            model = pData.model,
            coords = { x = finalX, y = finalY, z = finalZ },
            heading = finalHeading,
            rotation = finalRot,
            renderDistance = tonumber(pData.renderDistance or 80.0),
            textureVariation = tonumber(pData.textureVariation or 0),
            collision = (pData.collision ~= false),
            bucket = playerBucket,
            opacity = tonumber(pData.opacity or 255),
            scale = tonumber(pData.scale or 1.0),
            physics = (pData.physics == true),
            groupId = nil,
            familyId = newFamilyId,
            metadata = pData.metadata or {}
        }

        ServerProps.Cache[propId] = prop
        table.insert(spawnedProps, prop)
        table.insert(spawnedIds, propId)
    end

    -- Persistance MySQL en bloc
    if #spawnedProps > 0 then
        DB.Props.SaveMultiple(spawnedProps)

        for _, prop in ipairs(spawnedProps) do
            TriggerClientEvent('creatortoolkit:propStudio:syncSingleProp', -1, prop)
        end

        TriggerClientEvent('creatortoolkit:propStudio:onAssemblagePlaced', src, {
            success = true,
            familyId = newFamilyId,
            propIds = spawnedIds,
            name = familyName,
            count = #spawnedProps
        })

        TriggerClientEvent('creatortoolkit:propStudio:notify', src, ("Assemblage '%s' placé avec succès (%d props)."):format(familyName, #spawnedProps), "success")
    end
end)

