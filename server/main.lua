-- =============================================================================
-- CREATOR TOOLKIT - SERVEUR PRINCIPAL (OXMYSQL & SYNC CLIENTS)
-- =============================================================================

local lights = {}
local hierarchy = {
    groups = {},
    families = {}
}

local resourceName = GetCurrentResourceName()
ServerState = {}

--------------------------------------------------------------------------------
-- 1. Initialisation & Chargement depuis MySQL
--------------------------------------------------------------------------------

function ServerState.ReloadFromDatabase()
    if not DB.IsReady then
        DB.Init()
    end

    local loadedLights = DB.Lights.GetAll()
    local loadedHierarchy = DB.Hierarchy.Get()

    lights = loadedLights or {}
    hierarchy = loadedHierarchy or { groups = {}, families = {} }

    print(("[CreatorToolkit] [BDD] Cache rechargé : %d lumières, %d groupes, %d familles."):format(
        #lights,
        #(hierarchy.groups or {}),
        #(hierarchy.families or {})
    ))

    -- Diffusion immédiate à l'ensemble des joueurs connectés
    TriggerClientEvent('lightstudio:syncLights', -1, lights, hierarchy)
end

local function initializeDatabaseAndCache()
    DB.Init()

    -- Vérifier si la base de données est vide et si l'auto-migration est activée
    if Config.AutoMigrateOnFirstStart ~= false then
        local countLights = 0
        local okL, resL = pcall(function()
            return MySQL.scalar.await("SELECT COUNT(*) FROM `creatortoolkit_lights`")
        end)
        if okL and resL then
            countLights = tonumber(resL) or 0
        end

        local countGroups = 0
        local okG, resG = pcall(function()
            return MySQL.scalar.await("SELECT COUNT(*) FROM `creatortoolkit_groups`")
        end)
        if okG and resG then
            countGroups = tonumber(resG) or 0
        end

        -- Si la base est vierge et qu'un fichier JSON existe, lancer la migration automatique
        if countLights == 0 and countGroups == 0 then
            local jsonLights = LoadResourceFile(resourceName, "lights.json")
            local jsonHierarchy = LoadResourceFile(resourceName, "hierarchy.json")
            if (jsonLights and jsonLights ~= "" and jsonLights ~= "[]") or
               (jsonHierarchy and jsonHierarchy ~= "" and jsonHierarchy ~= "{}") then
                print("[CreatorToolkit] Base MySQL vierge détectée. Lancement automatique de la migration des fichiers JSON...")
                Migration.Run(0)
                return
            end
        end
    end

    ServerState.ReloadFromDatabase()
end

MySQL.ready(function()
    initializeDatabaseAndCache()
end)

AddEventHandler('onResourceStart', function(resName)
    if resName == resourceName then
        if MySQL and MySQL.ready then
            -- MySQL.ready se charge de l'initialisation
        else
            initializeDatabaseAndCache()
        end
    end
end)

--------------------------------------------------------------------------------
-- 2. Synchronisation Joueurs
--------------------------------------------------------------------------------

-- Requête explicite du client (au spawn ou à l'ouverture du NUI)
RegisterNetEvent('lightstudio:requestLights', function()
    local src = source
    TriggerClientEvent('lightstudio:syncLights', src, lights, hierarchy)
end)

-- Envoi automatique à la connexion d'un joueur
AddEventHandler('playerJoining', function()
    local src = source
    TriggerClientEvent('lightstudio:syncLights', src, lights, hierarchy)
end)

--------------------------------------------------------------------------------
-- 3. Gestion de la Hiérarchie (Groupes & Familles)
--------------------------------------------------------------------------------

RegisterNetEvent('lightstudio:saveHierarchy', function(newHierarchy)
    local src = source
    if not newHierarchy or type(newHierarchy) ~= "table" then return end

    hierarchy = {
        groups = newHierarchy.groups or {},
        families = newHierarchy.families or {}
    }

    -- Persistance asynchrone dans MySQL
    DB.Hierarchy.Save(hierarchy)

    -- Synchronisation immédiate des clients (0ms lag)
    TriggerClientEvent('lightstudio:syncHierarchy', -1, hierarchy)
    TriggerClientEvent('lightstudio:syncLights', -1, lights, hierarchy)

    print(("[CreatorToolkit] Hiérarchie sauvegardée en BDD par %s (%d groupes, %d familles)"):format(
        GetPlayerName(src) or "Unknown",
        #hierarchy.groups,
        #hierarchy.families
    ))
end)

RegisterNetEvent('lightstudio:assignLightsHierarchy', function(data)
    local src = source
    if not data or not data.ids or type(data.ids) ~= "table" then return end

    local changedLights = {}
    for _, id in ipairs(data.ids) do
        for i, light in ipairs(lights) do
            if light.id == id then
                if data.groupId ~= nil then
                    lights[i].groupId = (data.groupId == false or data.groupId == "") and nil or tostring(data.groupId)
                end
                if data.familyId ~= nil then
                    lights[i].familyId = (data.familyId == false or data.familyId == "") and nil or tostring(data.familyId)
                end
                lights[i].group = lights[i].familyId or lights[i].groupId
                table.insert(changedLights, lights[i])
                break
            end
        end
    end

    if #changedLights > 0 then
        -- Sauvegarde asynchrone en BDD
        DB.Lights.SaveMultiple(changedLights)
        TriggerClientEvent('lightstudio:syncLights', -1, lights, hierarchy)
    end
end)

--------------------------------------------------------------------------------
-- 4. Création & Sauvegarde d'une Lumière
--------------------------------------------------------------------------------

RegisterNetEvent('lightstudio:saveLight', function(lightData)
    local src = source
    if not lightData or not lightData.coords or not lightData.model then
        return
    end

    -- Génération d'un identifiant unique sécurisé
    local lightId = string.format("light_%d_%d", os.time(), math.random(1000, 9999))

    local newLight = {
        id = lightId,
        creator = GetPlayerName(src) or "Unknown",
        model = lightData.model,
        coords = {
            x = tonumber(string.format("%.3f", lightData.coords.x)),
            y = tonumber(string.format("%.3f", lightData.coords.y)),
            z = tonumber(string.format("%.3f", lightData.coords.z))
        },
        heading = tonumber(string.format("%.2f", lightData.heading or 0.0)),
        rotation = {
            x = tonumber(string.format("%.2f", (lightData.rotation and lightData.rotation.x) or 0.0)),
            y = tonumber(string.format("%.2f", (lightData.rotation and lightData.rotation.y) or 0.0)),
            z = tonumber(string.format("%.2f", (lightData.rotation and lightData.rotation.z) or lightData.heading or 0.0))
        },
        rgb = {
            r = math.floor(tonumber(lightData.rgb and lightData.rgb.r) or 255),
            g = math.floor(tonumber(lightData.rgb and lightData.rgb.g) or 180),
            b = math.floor(tonumber(lightData.rgb and lightData.rgb.b) or 60)
        },
        intensity = tonumber(string.format("%.1f", lightData.intensity or 8.5)),
        radius = tonumber(string.format("%.1f", lightData.radius or 14.0)),
        renderDistance = tonumber(string.format("%.1f", lightData.renderDistance or 80.0)),
        textureVariation = tonumber(lightData.textureVariation) or 0,
        collision = (lightData.collision == true),
        castShadow = (lightData.castShadow ~= false),
        offsetZ = tonumber(string.format("%.2f", lightData.offsetZ or 0.0)),
        shape = lightData.shape or 'cone',
        shapeParam = tonumber(string.format("%.1f", lightData.shapeParam or (lightData.shape == 'cone' and 55.0 or 1.0))),
        invertDirection = (lightData.invertDirection == true),
        nativeLight = (lightData.nativeLight == true),
        groupId = (lightData.groupId and lightData.groupId ~= "") and tostring(lightData.groupId) or nil,
        familyId = (lightData.familyId and lightData.familyId ~= "") and tostring(lightData.familyId) or nil,
        group = (lightData.group and lightData.group ~= "") and tostring(lightData.group) or nil,
        attached = lightData.attached
    }

    -- 1. Ajout dans le cache mémoire
    table.insert(lights, newLight)

    -- 2. Écriture MySQL asynchrone
    DB.Lights.Create(newLight)

    -- 3. Diffusion temps-réel à tous les joueurs
    TriggerClientEvent('lightstudio:syncLights', -1, lights, hierarchy)
    print(("[CreatorToolkit] Lumière '%s' (%s) créée en BDD par %s"):format(newLight.id, newLight.model, newLight.creator))
end)

--------------------------------------------------------------------------------
-- 5. Duplication d'un Prop / d'une Lumière
--------------------------------------------------------------------------------

RegisterNetEvent('lightstudio:duplicateLight', function(sourceData)
    local src = source
    if not sourceData or not sourceData.coords or not sourceData.model then
        return
    end

    -- Nouvel identifiant serveur unique
    local newLightId = string.format("light_%d_%d", os.time(), math.random(1000, 9999))

    local newLight = {
        id = newLightId,
        creator = GetPlayerName(src) or "Unknown",
        model = sourceData.model,
        coords = {
            x = tonumber(string.format("%.3f", sourceData.coords.x)),
            y = tonumber(string.format("%.3f", sourceData.coords.y)),
            z = tonumber(string.format("%.3f", sourceData.coords.z))
        },
        heading = tonumber(string.format("%.2f", sourceData.heading or 0.0)),
        rotation = {
            x = tonumber(string.format("%.2f", (sourceData.rotation and sourceData.rotation.x) or 0.0)),
            y = tonumber(string.format("%.2f", (sourceData.rotation and sourceData.rotation.y) or 0.0)),
            z = tonumber(string.format("%.2f", (sourceData.rotation and sourceData.rotation.z) or sourceData.heading or 0.0))
        },
        rgb = {
            r = math.floor(tonumber(sourceData.rgb and sourceData.rgb.r) or 255),
            g = math.floor(tonumber(sourceData.rgb and sourceData.rgb.g) or 180),
            b = math.floor(tonumber(sourceData.rgb and sourceData.rgb.b) or 60)
        },
        intensity = tonumber(string.format("%.1f", sourceData.intensity or 8.5)),
        radius = tonumber(string.format("%.1f", sourceData.radius or 14.0)),
        renderDistance = tonumber(string.format("%.1f", sourceData.renderDistance or 80.0)),
        textureVariation = tonumber(sourceData.textureVariation) or 0,
        collision = (sourceData.collision == true),
        castShadow = (sourceData.castShadow ~= false),
        offsetZ = tonumber(string.format("%.2f", sourceData.offsetZ or 0.0)),
        shape = sourceData.shape or 'cone',
        shapeParam = tonumber(string.format("%.1f", sourceData.shapeParam or (sourceData.shape == 'cone' and 55.0 or 1.0))),
        invertDirection = (sourceData.invertDirection == true),
        nativeLight = (sourceData.nativeLight == true),
        groupId = (sourceData.groupId and sourceData.groupId ~= "") and tostring(sourceData.groupId) or nil,
        familyId = (sourceData.familyId and sourceData.familyId ~= "") and tostring(sourceData.familyId) or nil,
        group = (sourceData.group and sourceData.group ~= "") and tostring(sourceData.group) or (sourceData.familyId or sourceData.groupId),
        attached = sourceData.attached
    }

    -- 1. Ajout dans le cache mémoire
    table.insert(lights, newLight)

    -- 2. Écriture MySQL asynchrone
    DB.Lights.Create(newLight)

    -- 3. Diffusion à l'ensemble des joueurs pour affichage immédiat
    TriggerClientEvent('lightstudio:syncLights', -1, lights, hierarchy)

    -- 4. Notification spécifique au client auteur pour sélectionner immédiatement la nouvelle copie
    TriggerClientEvent('lightstudio:onLightDuplicated', src, newLight)

    print(("[CreatorToolkit] Prop '%s' dupliqué avec succès -> nouvel ID '%s' par %s"):format(
        tostring(sourceData.id or "nouveau"),
        newLight.id,
        newLight.creator
    ))
end)

--------------------------------------------------------------------------------
-- 6. Mise à Jour d'une Lumière Existante
--------------------------------------------------------------------------------

RegisterNetEvent('lightstudio:updateLight', function(lightData)
    local src = source
    if not lightData or not lightData.id then return end

    local foundIndex = nil
    for i, light in ipairs(lights) do
        if light.id == lightData.id then
            foundIndex = i
            break
        end
    end

    if foundIndex then
        lights[foundIndex].model = lightData.model or lights[foundIndex].model
        if lightData.coords then
            lights[foundIndex].coords = {
                x = tonumber(string.format("%.3f", lightData.coords.x)),
                y = tonumber(string.format("%.3f", lightData.coords.y)),
                z = tonumber(string.format("%.3f", lightData.coords.z))
            }
        end
        if lightData.heading ~= nil then
            lights[foundIndex].heading = tonumber(string.format("%.2f", lightData.heading))
        end
        if lightData.rotation then
            lights[foundIndex].rotation = {
                x = tonumber(string.format("%.2f", lightData.rotation.x or 0.0)),
                y = tonumber(string.format("%.2f", lightData.rotation.y or 0.0)),
                z = tonumber(string.format("%.2f", lightData.rotation.z or lightData.heading or 0.0))
            }
        end
        if lightData.rgb then
            lights[foundIndex].rgb = {
                r = math.floor(tonumber(lightData.rgb.r) or 255),
                g = math.floor(tonumber(lightData.rgb.g) or 180),
                b = math.floor(tonumber(lightData.rgb.b) or 60)
            }
        end
        if lightData.intensity ~= nil then
            lights[foundIndex].intensity = tonumber(string.format("%.1f", lightData.intensity))
        end
        if lightData.radius ~= nil then
            lights[foundIndex].radius = tonumber(string.format("%.1f", lightData.radius))
        end
        if lightData.renderDistance ~= nil then
            lights[foundIndex].renderDistance = tonumber(string.format("%.1f", lightData.renderDistance))
        end
        if lightData.textureVariation ~= nil then
            lights[foundIndex].textureVariation = tonumber(lightData.textureVariation) or 0
        end
        if lightData.collision ~= nil then
            lights[foundIndex].collision = (lightData.collision == true)
        end
        if lightData.castShadow ~= nil then
            lights[foundIndex].castShadow = (lightData.castShadow == true)
        end
        if lightData.offsetZ ~= nil then
            lights[foundIndex].offsetZ = tonumber(string.format("%.2f", lightData.offsetZ))
        end
        if lightData.shape ~= nil then
            lights[foundIndex].shape = lightData.shape
        end
        if lightData.shapeParam ~= nil then
            lights[foundIndex].shapeParam = tonumber(string.format("%.1f", lightData.shapeParam))
        end
        if lightData.invertDirection ~= nil then
            lights[foundIndex].invertDirection = (lightData.invertDirection == true)
        end
        if lightData.nativeLight ~= nil then
            lights[foundIndex].nativeLight = (lightData.nativeLight == true)
        end
        if lightData.groupId ~= nil then
            lights[foundIndex].groupId = (lightData.groupId == false or lightData.groupId == "") and nil or tostring(lightData.groupId)
        end
        if lightData.familyId ~= nil then
            lights[foundIndex].familyId = (lightData.familyId == false or lightData.familyId == "") and nil or tostring(lightData.familyId)
        end
        if lightData.group ~= nil then
            lights[foundIndex].group = (lightData.group == false or lightData.group == "") and nil or tostring(lightData.group)
        end
        if lightData.attached ~= nil then
            lights[foundIndex].attached = (lightData.attached == false) and nil or lightData.attached
        end

        -- 1. Persistance asynchrone MySQL
        DB.Lights.Update(lights[foundIndex])

        -- 2. Diffusion temps-réel à tous les joueurs
        TriggerClientEvent('lightstudio:syncLights', -1, lights, hierarchy)
        print(("[CreatorToolkit] Lumière '%s' mise à jour en BDD par %s"):format(lightData.id, GetPlayerName(src) or "Unknown"))
    end
end)

--------------------------------------------------------------------------------
-- 7. Mise à Jour de Famille de Lumières (Synchronisation & Déplacement)
--------------------------------------------------------------------------------

local function applyFamilyUpdate(data, src)
    if not data or not data.ids or type(data.ids) ~= "table" then return end

    local updates = data.updates or {}
    local positions = data.positions or {}
    local changedLights = {}

    for _, id in ipairs(data.ids) do
        for i, light in ipairs(lights) do
            if light.id == id then
                if data.familyId ~= nil then
                    lights[i].familyId = (data.familyId == false or data.familyId == "") and nil or tostring(data.familyId)
                    lights[i].group = lights[i].familyId
                end
                if data.groupId ~= nil then
                    lights[i].groupId = (data.groupId == false or data.groupId == "") and nil or tostring(data.groupId)
                end

                if positions[id] then
                    local p = positions[id]
                    if p.coords then
                        lights[i].coords = {
                            x = tonumber(string.format("%.3f", p.coords.x)),
                            y = tonumber(string.format("%.3f", p.coords.y)),
                            z = tonumber(string.format("%.3f", p.coords.z))
                        }
                    end
                    if p.heading ~= nil then
                        lights[i].heading = tonumber(string.format("%.2f", p.heading))
                    end
                    if p.rotation then
                        lights[i].rotation = {
                            x = tonumber(string.format("%.2f", p.rotation.x or 0.0)),
                            y = tonumber(string.format("%.2f", p.rotation.y or 0.0)),
                            z = tonumber(string.format("%.2f", p.rotation.z or lights[i].heading))
                        }
                    end
                end

                if updates.rgb then
                    lights[i].rgb = {
                        r = math.floor(tonumber(updates.rgb.r) or 255),
                        g = math.floor(tonumber(updates.rgb.g) or 180),
                        b = math.floor(tonumber(updates.rgb.b) or 60)
                    }
                end
                if updates.intensity ~= nil then
                    lights[i].intensity = tonumber(string.format("%.1f", updates.intensity))
                end
                if updates.radius ~= nil then
                    lights[i].radius = tonumber(string.format("%.1f", updates.radius))
                end
                if updates.shape ~= nil then
                    lights[i].shape = updates.shape
                end
                if updates.shapeParam ~= nil then
                    lights[i].shapeParam = tonumber(string.format("%.1f", updates.shapeParam))
                end
                if updates.invertDirection ~= nil then
                    lights[i].invertDirection = (updates.invertDirection == true)
                end
                if updates.nativeLight ~= nil then
                    lights[i].nativeLight = (updates.nativeLight == true)
                end

                table.insert(changedLights, lights[i])
                break
            end
        end
    end

    if #changedLights > 0 then
        -- Sauvegarde asynchrone MySQL en batch
        DB.Lights.SaveMultiple(changedLights)
        TriggerClientEvent('lightstudio:syncLights', -1, lights, hierarchy)
        print(("[CreatorToolkit] Famille (%d lumières) mise à jour en BDD par %s"):format(#data.ids, GetPlayerName(src) or "Unknown"))
    end
end

RegisterNetEvent('lightstudio:updateFamilyLights', function(data)
    applyFamilyUpdate(data, source)
end)

RegisterNetEvent('lightstudio:updateGroupLights', function(data)
    applyFamilyUpdate(data, source)
end)

RegisterNetEvent('lightstudio:setGroupForLights', function(data)
    local src = source
    if not data or not data.ids or type(data.ids) ~= "table" then return end

    local groupVal = (data.group and data.group ~= "") and tostring(data.group) or nil
    local changedLights = {}

    for _, id in ipairs(data.ids) do
        for i, light in ipairs(lights) do
            if light.id == id then
                lights[i].familyId = groupVal
                lights[i].group = groupVal
                table.insert(changedLights, lights[i])
                break
            end
        end
    end

    if #changedLights > 0 then
        DB.Lights.SaveMultiple(changedLights)
        TriggerClientEvent('lightstudio:syncLights', -1, lights, hierarchy)
    end
end)

--------------------------------------------------------------------------------
-- 8. Suppression d'une Lumière
--------------------------------------------------------------------------------

RegisterNetEvent('lightstudio:deleteLight', function(lightId)
    local src = source
    if not lightId then return end

    local indexToRemove = nil
    for i, light in ipairs(lights) do
        if light.id == lightId then
            indexToRemove = i
            break
        end
    end

    if indexToRemove then
        table.remove(lights, indexToRemove)

        -- Suppression en BDD
        DB.Lights.Delete(lightId)

        TriggerClientEvent('lightstudio:syncLights', -1, lights, hierarchy)
        print(("[CreatorToolkit] Lumière '%s' supprimée de la BDD par %s"):format(lightId, GetPlayerName(src) or "Unknown"))
    end
end)

--------------------------------------------------------------------------------
-- 9. Rechargement à Chaud de config.lua (Hot Reload)
--------------------------------------------------------------------------------

local function reloadConfigFile()
    local content = LoadResourceFile(resourceName, "config.lua")
    if not content or content == "" then
        print("[CreatorToolkit] Erreur : Impossible de lire config.lua !")
        return false, nil
    end

    local loadFunc, err = load(content, "config.lua", "t", _G)
    if not loadFunc then
        print("[CreatorToolkit] Erreur de syntaxe dans config.lua : " .. tostring(err))
        return false, nil
    end

    local status, execErr = pcall(loadFunc)
    if not status then
        print("[CreatorToolkit] Erreur d'exécution de config.lua : " .. tostring(execErr))
        return false, nil
    end

    print(("[CreatorToolkit] config.lua rechargé sur le serveur avec succès (%d props configurés)."):format(#(Config.LightProps or {})))
    return true, content
end

RegisterNetEvent('lightstudio:requestReloadConfig', function()
    local src = source
    local success, content = reloadConfigFile()
    if success then
        TriggerClientEvent('lightstudio:syncConfig', -1, content)
        print(("[CreatorToolkit] Configuration diffusée à tous les clients par %s."):format(GetPlayerName(src) or "Console"))
    end
end)

RegisterCommand('lightreload', function(source, args)
    local success, content = reloadConfigFile()
    if success then
        TriggerClientEvent('lightstudio:syncConfig', -1, content)
        if source > 0 then
            TriggerClientEvent('chat:addMessage', source, {
                color = { 229, 138, 50 },
                args = { "Creator Toolkit", ("Configuration rechargée avec succès ! (%d props disponibles)"):format(#(Config.LightProps or {})) }
            })
        end
    else
        if source > 0 then
            TriggerClientEvent('chat:addMessage', source, {
                color = { 214, 91, 91 },
                args = { "Creator Toolkit", "Erreur lors du rechargement de config.lua (vérifiez la console)." }
            })
        end
    end
end, false)

RegisterCommand('lightrefresh', function(source, args)
    local success, content = reloadConfigFile()
    if success then
        TriggerClientEvent('lightstudio:syncConfig', -1, content)
        if source > 0 then
            TriggerClientEvent('chat:addMessage', source, {
                color = { 229, 138, 50 },
                args = { "Creator Toolkit", ("Configuration rechargée avec succès ! (%d props disponibles)"):format(#(Config.LightProps or {})) }
            })
        end
    else
        if source > 0 then
            TriggerClientEvent('chat:addMessage', source, {
                color = { 214, 91, 91 },
                args = { "Creator Toolkit", "Erreur lors du rechargement de config.lua (vérifiez la console)." }
            })
        end
    end
end, false)
