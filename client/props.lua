-- =============================================================================
-- CREATOR TOOLKIT - PROP STUDIO : CLIENT (LOCAL ENTITIES & CULLING)
-- =============================================================================

PropClient = {
    AllProps = {},          -- [id] = propData (table officielle en mémoire)
    LocalEntities = {},     -- [id] = entityHandle (objets GTA 3D créés localement)
    EntityToPropId = {},    -- [entityHandle] = id
    Locks = {},             -- [id] = { ownerSrc, ownerName }
    SelectedPropId = nil,   -- ID du prop actuellement sélectionné
    SelectedEntity = nil,   -- Handle de l'entité locale sélectionnée
    IsEditorActive = false, -- Mode édition du Prop Studio actif
    IsSimulatingPhysics = false,
    Hierarchy = {           -- Hiérarchie locale (groupes et familles)
        groups = {},
        families = {}
    }
}

local resourceName = GetCurrentResourceName()

--------------------------------------------------------------------------------
-- 1. Distance Culling Optimisé (Entités 100% Locales, 0 Entité Réseau)
--------------------------------------------------------------------------------

local function loadModel(modelHash)
    if not IsModelInCdimage(modelHash) or not IsModelValid(modelHash) then
        return false
    end
    RequestModel(modelHash)
    local timeout = GetGameTimer() + 2500
    while not HasModelLoaded(modelHash) and GetGameTimer() < timeout do
        Wait(10)
    end
    return HasModelLoaded(modelHash)
end

local function spawnLocalProp(prop)
    if not prop or not prop.id or not prop.model or not prop.coords then return end
    if PropClient.LocalEntities[prop.id] and DoesEntityExist(PropClient.LocalEntities[prop.id]) then
        return
    end

    local modelHash = type(prop.model) == "number" and prop.model or GetHashKey(prop.model)
    local ok = loadModel(modelHash)
    if not ok then
        return
    end

    -- Création d'une entité STRICTEMENT LOCALE (isNetwork = false, bScriptHostObj = false)
    local ent = CreateObjectNoOffset(modelHash, prop.coords.x, prop.coords.y, prop.coords.z, false, false, false)
    if not ent or ent == 0 or not DoesEntityExist(ent) then
        SetModelAsNoLongerNeeded(modelHash)
        return
    end

    local rot = prop.rotation or { x = 0.0, y = 0.0, z = prop.heading or 0.0 }
    SetEntityCoordsNoOffset(ent, prop.coords.x, prop.coords.y, prop.coords.z, false, false, false)
    SetEntityRotation(ent, rot.x or 0.0, rot.y or 0.0, rot.z or 0.0, 2, true)
    
    local hasCollision = (prop.collision ~= false)
    SetEntityCollision(ent, hasCollision, hasCollision)
    
    if prop.textureVariation and prop.textureVariation > 0 then
        SetObjectTextureVariation(ent, prop.textureVariation)
    end

    FreezeEntityPosition(ent, true)
    SetModelAsNoLongerNeeded(modelHash)

    PropClient.LocalEntities[prop.id] = ent
    PropClient.EntityToPropId[ent] = prop.id

    if prop.id == PropClient.SelectedPropId then
        PropClient.SelectedEntity = ent
    end
end

local function despawnLocalProp(propId, force)
    local ent = PropClient.LocalEntities[propId]
    if ent and DoesEntityExist(ent) then
        -- Ne jamais supprimer le prop en cours de manipulation lors du simple culling périodique de distance
        if not force and propId == PropClient.SelectedPropId and PropClient.IsEditorActive then
            return
        end
        SetEntityDrawOutline(ent, false)
        SetEntityAsMissionEntity(ent, true, true)
        DeleteObject(ent)
        if DoesEntityExist(ent) then
            DeleteEntity(ent)
        end
    end
    PropClient.LocalEntities[propId] = nil
    if ent then
        PropClient.EntityToPropId[ent] = nil
    end
    if propId == PropClient.SelectedPropId then
        PropClient.SelectedEntity = nil
        PropClient.SelectedPropId = nil
    end
end

-- Boucle de Culling périodique & Détection Proximité optimisée
CreateThread(function()
    while true do
        local isEditor = PropClient.IsEditorActive
        local interval = isEditor and ((Config and Config.PropStudio and Config.PropStudio.CullingInterval) or 600) or 1200
        Wait(interval)

        local ped = PlayerPedId()
        local pCoords = GetEntityCoords(ped)
        local loadedCount = 0

        local camCoord = isEditor and GetCreatorCamData() or nil
        local centerPos = camCoord or pCoords
        local nearbyRadius = (Config and Config.PropNearbyRadius)
            or (Config and Config.PropStudio and Config.PropStudio.NearbyRadius)
            or (Config and Config.NearbyRadius)
            or 10.0

        local nearbyProps = {}

        for propId, prop in pairs(PropClient.AllProps) do
            if prop and prop.coords then
                local pPos = vector3(prop.coords.x, prop.coords.y, prop.coords.z)
                local distPed = #(pCoords - pPos)
                local renderDist = tonumber(prop.renderDistance) or 150.0

                if distPed <= renderDist then
                    if not PropClient.LocalEntities[propId] or not DoesEntityExist(PropClient.LocalEntities[propId]) then
                        spawnLocalProp(prop)
                    end
                    loadedCount = loadedCount + 1
                else
                    if PropClient.LocalEntities[propId] and propId ~= PropClient.SelectedPropId then
                        despawnLocalProp(propId)
                    end
                end

                if isEditor then
                    local distCam = #(centerPos - pPos)
                    if distCam <= nearbyRadius or propId == PropClient.SelectedPropId then
                        table.insert(nearbyProps, {
                            id = prop.id,
                            model = prop.model,
                            coords = prop.coords,
                            rotation = prop.rotation,
                            renderDistance = prop.renderDistance,
                            textureVariation = prop.textureVariation,
                            collision = prop.collision,
                            groupId = prop.groupId,
                            familyId = prop.familyId,
                            group = prop.familyId or prop.groupId or prop.group,
                            distance = math.floor(distCam * 10) / 10
                        })
                    end
                end
            end
        end

        -- Mise à jour NUI unique avec count inclus
        if isEditor then
            table.sort(nearbyProps, function(a, b) return a.distance < b.distance end)

            SendNUIMessage({
                action = 'propStudio:updateNearbyProps',
                props = nearbyProps,
                count = loadedCount
            })
        end
    end
end)

--------------------------------------------------------------------------------
-- 2. Nettoyage lors de l'arrêt de la ressource
--------------------------------------------------------------------------------

AddEventHandler('onResourceStop', function(resName)
    if resName == resourceName then
        for propId, ent in pairs(PropClient.LocalEntities) do
            if ent and DoesEntityExist(ent) then
                DeleteEntity(ent)
            end
        end
        PropClient.LocalEntities = {}
        PropClient.EntityToPropId = {}
    end
end)

-- Requête automatique de synchronisation au démarrage du client
CreateThread(function()
    Wait(2000)
    TriggerServerEvent('creatortoolkit:propStudio:requestProps')
end)

--------------------------------------------------------------------------------
-- 3. Synchronisation Serveur -> Client
--------------------------------------------------------------------------------

-- Réception de la liste complète des props, des verrous et de la hiérarchie
RegisterNetEvent('creatortoolkit:propStudio:syncProps', function(propsList, locks, hierarchy, assemblages)
    PropClient.AllProps = {}
    PropClient.Locks = locks or {}
    if hierarchy then
        PropClient.Hierarchy = hierarchy
    end
    PropClient.Assemblages = {}
    for _, a in ipairs(assemblages or {}) do
        if a and a.id then
            PropClient.Assemblages[a.id] = a
        end
    end

    for _, p in ipairs(propsList or {}) do
        if p and p.id then
            PropClient.AllProps[p.id] = p
        end
    end

    -- Mettre à jour la NUI
    SendNUIMessage({
        action = 'propStudio:syncProps',
        props = propsList or {},
        locks = PropClient.Locks,
        hierarchy = PropClient.Hierarchy,
        assemblages = assemblages or {}
    })
end)

-- Synchronisation des assemblages (Prefabs)
RegisterNetEvent('creatortoolkit:propStudio:syncAssemblages', function(assemblages)
    PropClient.Assemblages = {}
    for _, a in ipairs(assemblages or {}) do
        if a and a.id then
            PropClient.Assemblages[a.id] = a
        end
    end
    SendNUIMessage({
        action = 'propStudio:syncAssemblages',
        assemblages = assemblages or {}
    })
end)

RegisterNetEvent('creatortoolkit:propStudio:onAssemblageSaved', function(assemblage)
    if not assemblage or not assemblage.id then return end
    PropClient.Assemblages[assemblage.id] = assemblage
    SendNUIMessage({
        action = 'propStudio:assemblageSaved',
        assemblage = assemblage
    })
end)

RegisterNetEvent('creatortoolkit:propStudio:onAssemblageDeleted', function(id)
    if not id then return end
    PropClient.Assemblages[id] = nil
    SendNUIMessage({
        action = 'propStudio:assemblageDeleted',
        id = id
    })
end)

RegisterNetEvent('creatortoolkit:propStudio:onAssemblagePlaced', function(data)
    SendNUIMessage({
        action = 'propStudio:assemblagePlaced',
        data = data
    })
end)

-- Synchronisation de la hiérarchie seule
RegisterNetEvent('creatortoolkit:propStudio:syncHierarchy', function(hierarchy)
    if hierarchy then
        PropClient.Hierarchy = hierarchy
        SendNUIMessage({
            action = 'propStudio:syncHierarchy',
            hierarchy = hierarchy
        })
    end
end)

-- Mise à jour d'un prop unique (sauvegarde ou création)
RegisterNetEvent('creatortoolkit:propStudio:syncSingleProp', function(prop)
    if not prop or not prop.id then return end

    PropClient.AllProps[prop.id] = prop

    -- Mettre à jour l'entité locale si déjà spawnée
    local ent = PropClient.LocalEntities[prop.id]
    if ent and DoesEntityExist(ent) then
        local rot = prop.rotation or { x = 0.0, y = 0.0, z = prop.heading or 0.0 }
        SetEntityCoordsNoOffset(ent, prop.coords.x, prop.coords.y, prop.coords.z, false, false, false)
        SetEntityRotation(ent, rot.x or 0.0, rot.y or 0.0, rot.z or 0.0, 2, true)
        local col = (prop.collision ~= false)
        SetEntityCollision(ent, col, col)
        if prop.textureVariation and prop.textureVariation > 0 then
            SetObjectTextureVariation(ent, prop.textureVariation)
        end
    end

    SendNUIMessage({
        action = 'propStudio:syncSingleProp',
        prop = prop
    })
end)

-- Transformation en direct reçue d'un autre administrateur
RegisterNetEvent('creatortoolkit:propStudio:onLiveTransform', function(data)
    if not data or not data.id or not data.coords then return end
    if data.sender == GetPlayerServerId(PlayerId()) then return end

    -- Mettre à jour les données locales en mémoire
    local prop = PropClient.AllProps[data.id]
    if prop then
        prop.coords = data.coords
        if data.rotation then prop.rotation = data.rotation end
    end

    -- Mettre à jour l'entité 3D locale (reste figée)
    local ent = PropClient.LocalEntities[data.id]
    if ent and DoesEntityExist(ent) then
        SetEntityCoordsNoOffset(ent, data.coords.x, data.coords.y, data.coords.z, false, false, false)
        if data.rotation then
            SetEntityRotation(ent, data.rotation.x or 0.0, data.rotation.y or 0.0, data.rotation.z or 0.0, 2, true)
        end
    end
end)

-- Synchronisation des verrous
RegisterNetEvent('creatortoolkit:propStudio:syncLock', function(propId, lockInfo)
    if not propId then return end
    PropClient.Locks[propId] = lockInfo

    SendNUIMessage({
        action = 'propStudio:syncLock',
        propId = propId,
        lock = lockInfo
    })
end)

RegisterNetEvent('creatortoolkit:propStudio:lockGranted', function(propId)
    SendNUIMessage({
        action = 'propStudio:lockStatus',
        propId = propId,
        granted = true
    })
end)

RegisterNetEvent('creatortoolkit:propStudio:lockDenied', function(propId, ownerName)
    SendNUIMessage({
        action = 'propStudio:lockStatus',
        propId = propId,
        granted = false,
        ownerName = ownerName
    })
end)

-- Suppression d'un prop
RegisterNetEvent('creatortoolkit:propStudio:onPropDeleted', function(propId)
    if not propId then return end
    despawnLocalProp(propId, true)
    PropClient.AllProps[propId] = nil
    PropClient.Locks[propId] = nil

    if propId == PropClient.SelectedPropId then
        PropClient.SelectedPropId = nil
        PropClient.SelectedEntity = nil
    end

    SendNUIMessage({
        action = 'propStudio:propDeleted',
        propId = propId
    })
end)

-- Duplication réussie
RegisterNetEvent('creatortoolkit:propStudio:onPropDuplicated', function(newProp)
    if not newProp or not newProp.id then return end

    PropClient.AllProps[newProp.id] = newProp
    spawnLocalProp(newProp)

    -- Sélectionner automatiquement la nouvelle copie
    PropClient.SelectedPropId = newProp.id
    PropClient.SelectedEntity = PropClient.LocalEntities[newProp.id]

    SendNUIMessage({
        action = 'propStudio:onPropSelected',
        prop = newProp
    })
end)

-- Sauvegarde ou création confirmée
RegisterNetEvent('creatortoolkit:propStudio:onPropSaved', function(prop, isNew)
    if not prop or not prop.id then return end

    PropClient.AllProps[prop.id] = prop
    spawnLocalProp(prop)

    if isNew then
        -- Sélection automatique immédiate dès la création
        PropClient.SelectedPropId = prop.id
        PropClient.SelectedEntity = PropClient.LocalEntities[prop.id]

        SendNUIMessage({
            action = 'propStudio:onPropSelected',
            prop = prop
        })
    end
end)

--------------------------------------------------------------------------------
-- 4. Rendu Visuel : Contours Lumineux (Outline Sélection) & Flèche Animée
--------------------------------------------------------------------------------

local modelHeightCache = {}
local function getModelMaxZ(model)
    local cached = modelHeightCache[model]
    if cached ~= nil then return cached end
    local minDim, maxDim = GetModelDimensions(model)
    local z = (maxDim and maxDim.z) and maxDim.z or 0.5
    modelHeightCache[model] = z
    return z
end

local lastOutlinedEntity = nil

CreateThread(function()
    while true do
        if PropClient.IsEditorActive then
            local selectedEnt = PropClient.SelectedEntity

            -- 1. Gestion ultra-optimisée du contour : uniquement sur l'entité sélectionnée
            if selectedEnt and DoesEntityExist(selectedEnt) then
                if lastOutlinedEntity ~= selectedEnt then
                    if lastOutlinedEntity and DoesEntityExist(lastOutlinedEntity) then
                        SetEntityDrawOutline(lastOutlinedEntity, false)
                    end
                    lastOutlinedEntity = selectedEnt
                    SetEntityDrawOutlineColor(0, 255, 100, 255)
                    SetEntityDrawOutline(selectedEnt, true)
                end

                -- 2. Indicateur flèche verte animée pointant vers le bas sur le prop sélectionné
                local coords = GetEntityCoords(selectedEnt)
                local model = GetEntityModel(selectedEnt)
                local maxZ = getModelMaxZ(model)
                local topZ = coords.z + maxZ + 0.35 + (math.sin(GetGameTimer() / 240.0) * 0.08)

                DrawMarker(
                    2, -- Flèche vers le bas
                    coords.x, coords.y, topZ,
                    0.0, 0.0, 0.0,
                    180.0, 0.0, 0.0,
                    0.35, 0.35, 0.35,
                    0, 255, 100, 220,
                    false, true, 2, false, nil, nil, false
                )
            else
                if lastOutlinedEntity then
                    if DoesEntityExist(lastOutlinedEntity) then
                        SetEntityDrawOutline(lastOutlinedEntity, false)
                    end
                    lastOutlinedEntity = nil
                end
            end

            Wait(0)
        else
            if lastOutlinedEntity then
                if DoesEntityExist(lastOutlinedEntity) then
                    SetEntityDrawOutline(lastOutlinedEntity, false)
                end
                lastOutlinedEntity = nil
            end
            Wait(300)
        end
    end
end)

--------------------------------------------------------------------------------
-- 5. Sélection 3D dans le Monde via Raycast & Proximité Géométrique
--------------------------------------------------------------------------------

local function getScreenResolution()
    local resX, resY = GetActiveScreenResolution()
    if not resX or resX <= 0 then resX = 1920 end
    if not resY or resY <= 0 then resY = 1080 end
    return resX, resY
end

local function getRayFromScreen(screenX, screenY, maxDistance, screenW, screenH)
    maxDistance = maxDistance or 120.0

    local camCoords, camRot, camFov = GetCreatorCamData()
    local fov = camFov or 48.0

    local resW, resH = getScreenResolution()
    screenW = tonumber(screenW) or resW
    screenH = tonumber(screenH) or resH

    -- Normalisation NDC (-1.0 à 1.0)
    local ndcX = (screenX / screenW) * 2.0 - 1.0
    local ndcY = 1.0 - (screenY / screenH) * 2.0

    local aspect = screenW / math.max(1.0, screenH)
    local fovRad = math.rad(fov * 0.5)
    local tanFov = math.tan(fovRad)

    local pitchRad = math.rad(camRot.x)
    local yawRad = math.rad(camRot.z)

    local forward = vector3(
        -math.sin(yawRad) * math.cos(pitchRad),
        math.cos(yawRad) * math.cos(pitchRad),
        math.sin(pitchRad)
    )

    local right = vector3(
        math.cos(yawRad),
        math.sin(yawRad),
        0.0
    )

    local up = vector3(
        right.y * forward.z - right.z * forward.y,
        right.z * forward.x - right.x * forward.z,
        right.x * forward.y - right.y * forward.x
    )

    local rayDir = forward + (right * (ndcX * tanFov * aspect)) + (up * (ndcY * tanFov))
    local dirLen = #(rayDir)
    if dirLen > 0.0001 then
        rayDir = rayDir / dirLen
    end

    local rayEnd = camCoords + rayDir * maxDistance
    return camCoords, rayDir, rayEnd
end

local function findPropUnderCursor(screenX, screenY, screenW, screenH)
    local camCoords, rayDir, rayEnd = getRayFromScreen(screenX, screenY, 120.0, screenW, screenH)

    -- 1. Test physique ShapeTestRay natif GTA
    local rayHandle = StartShapeTestRay(
        camCoords.x, camCoords.y, camCoords.z,
        rayEnd.x, rayEnd.y, rayEnd.z,
        51, -- 1 | 2 | 16 | 32 (World, Véhicules, Objets, Peds)
        PlayerPedId(),
        0
    )
    local _, hit, hitCoords, _, entityHit = GetShapeTestResult(rayHandle)

    if hit == 1 and entityHit and DoesEntityExist(entityHit) then
        local propId = PropClient.EntityToPropId[entityHit]
        if propId and PropClient.AllProps[propId] then
            return propId, entityHit
        end
    end

    -- 2. Test géométrique de distance au rayon (indépendant de collision = false ou meshes fins)
    local bestPropId = nil
    local bestEntity = nil
    local closestT = 999999.0

    for pId, prop in pairs(PropClient.AllProps) do
        if prop and prop.coords then
            local pPos = vector3(prop.coords.x, prop.coords.y, prop.coords.z)
            local toProp = pPos - camCoords
            local t = toProp.x * rayDir.x + toProp.y * rayDir.y + toProp.z * rayDir.z

            -- Prop devant la caméra
            if t > 0.3 and t < 120.0 then
                local ptOnRay = camCoords + rayDir * t
                local distToRay = #(pPos - ptOnRay)

                local ent = PropClient.LocalEntities[pId]
                local tol = 1.3
                if ent and DoesEntityExist(ent) then
                    local minDim, maxDim = GetModelDimensions(GetEntityModel(ent))
                    local maxExtent = math.max(math.abs(maxDim.x), math.max(math.abs(maxDim.y), math.abs(maxDim.z)))
                    tol = math.max(0.9, maxExtent + 0.35)
                end

                if distToRay <= tol and t < closestT then
                    closestT = t
                    bestPropId = pId
                    bestEntity = ent
                end
            end
        end
    end

    return bestPropId, bestEntity
end

RegisterNUICallback('propStudio:worldClick', function(data, cb)
    if not PropClient.IsEditorActive then
        cb({ hit = false })
        return
    end

    local ok, err = pcall(function()
        local resW, resH = getScreenResolution()
        local screenW = tonumber(data.screenWidth) or resW
        local screenH = tonumber(data.screenHeight) or resH
        local sx = tonumber(data.screenX) or (screenW / 2)
        local sy = tonumber(data.screenY) or (screenH / 2)

        local propId, ent = findPropUnderCursor(sx, sy, screenW, screenH)

        if propId and PropClient.AllProps[propId] then
            PropClient.SelectedPropId = propId
            if not ent or not DoesEntityExist(ent) then
                spawnLocalProp(PropClient.AllProps[propId])
                ent = PropClient.LocalEntities[propId]
            end
            PropClient.SelectedEntity = ent

            TriggerServerEvent('creatortoolkit:propStudio:requestLock', propId)

            local p = PropClient.AllProps[propId]
            cb({ hit = true, prop = p })
            SendNUIMessage({
                action = 'propStudio:onPropSelected',
                prop = p
            })
            return
        end

        cb({ hit = false })
    end)

    if not ok then
        print(("[CreatorToolkit] Erreur dans worldClick : %s"):format(tostring(err)))
        cb({ hit = false })
    end
end)

--------------------------------------------------------------------------------
-- 6. Simulation Physique Dynamique (Touche I)
--------------------------------------------------------------------------------

RegisterNUICallback('propStudio:applyPhysics', function(_, cb)
    local propId = PropClient.SelectedPropId
    local ent = PropClient.SelectedEntity

    if not propId or not ent or not DoesEntityExist(ent) or PropClient.IsSimulatingPhysics then
        cb({ success = false })
        return
    end

    PropClient.IsSimulatingPhysics = true
    cb({ success = true })

    CreateThread(function()
        -- 1. Défiger et activer collisions + dynamique
        FreezeEntityPosition(ent, false)
        SetEntityCollision(ent, true, true)
        SetEntityDynamic(ent, true)
        ActivatePhysics(ent)

        -- 2. Légère impulsion vers le bas
        local impulseZ = (Config and Config.PropStudio and Config.PropStudio.Physics and Config.PropStudio.Physics.impulseZ) or -0.4
        SetEntityVelocity(ent, 0.0, 0.0, impulseZ)

        local startTime = GetGameTimer()
        local maxDur = ((Config and Config.PropStudio and Config.PropStudio.Physics and Config.PropStudio.Physics.maxDuration) or 6.0) * 1000
        local velThreshold = (Config and Config.PropStudio and Config.PropStudio.Physics and Config.PropStudio.Physics.velocityThreshold) or 0.02

        while (GetGameTimer() - startTime) < maxDur do
            Wait(50)
            if not DoesEntityExist(ent) then break end

            local currentVel = GetEntityVelocity(ent)
            local speed = #(currentVel)

            -- Synchronisation continue de la descente aux autres clients
            local curPos = GetEntityCoords(ent)
            local curRot = GetEntityRotation(ent, 2)
            TriggerServerEvent('creatortoolkit:propStudio:liveTransform', {
                id = propId,
                coords = { x = curPos.x, y = curPos.y, z = curPos.z },
                rotation = { x = curRot.x, y = curRot.y, z = curRot.z }
            })

            -- Si l'objet s'est stabilisé (vitesse quasi nulle après au moins 500ms)
            if (GetGameTimer() - startTime) > 500 and speed < velThreshold then
                break
            end
        end

        -- 3. Refiger et sauvegarder définitivement
        if DoesEntityExist(ent) then
            FreezeEntityPosition(ent, true)
            local finalCoords = GetEntityCoords(ent)
            local finalRot = GetEntityRotation(ent, 2)

            local propData = PropClient.AllProps[propId]
            if propData then
                propData.coords = {
                    x = tonumber(string.format("%.3f", finalCoords.x)),
                    y = tonumber(string.format("%.3f", finalCoords.y)),
                    z = tonumber(string.format("%.3f", finalCoords.z))
                }
                propData.rotation = {
                    x = tonumber(string.format("%.2f", finalRot.x)),
                    y = tonumber(string.format("%.2f", finalRot.y)),
                    z = tonumber(string.format("%.2f", finalRot.z))
                }
                propData.heading = propData.rotation.z

                TriggerServerEvent('creatortoolkit:propStudio:saveProp', propData)

                SendNUIMessage({
                    action = 'propStudio:updateTransform',
                    coords = propData.coords,
                    rotation = propData.rotation,
                    heading = propData.heading
                })
            end
        end

        PropClient.IsSimulatingPhysics = false
    end)
end)

--------------------------------------------------------------------------------
-- 7. Plaquer au Sol (Snap Ground — Touche G)
--------------------------------------------------------------------------------

RegisterNUICallback('propStudio:snapGround', function(_, cb)
    local propId = PropClient.SelectedPropId
    local ent = PropClient.SelectedEntity

    if not propId or not ent or not DoesEntityExist(ent) then
        cb({ success = false })
        return
    end

    local pos = GetEntityCoords(ent)
    local rayStart = vector3(pos.x, pos.y, pos.z + 1.5)
    local rayEnd = vector3(pos.x, pos.y, pos.z - 15.0)

    local rayHandle = StartShapeTestRay(
        rayStart.x, rayStart.y, rayStart.z,
        rayEnd.x, rayEnd.y, rayEnd.z,
        19, -- 1 | 2 | 16 (World, Véhicules, Objets)
        ent,
        0
    )
    local _, hit, hitCoords = GetShapeTestResult(rayHandle)

    if hit == 1 then
        SetEntityCoordsNoOffset(ent, pos.x, pos.y, hitCoords.z, false, false, false)
        local propData = PropClient.AllProps[propId]
        if propData then
            propData.coords.z = tonumber(string.format("%.3f", hitCoords.z))
            TriggerServerEvent('creatortoolkit:propStudio:saveProp', propData)
            SendNUIMessage({
                action = 'propStudio:updateTransform',
                coords = propData.coords,
                rotation = propData.rotation,
                heading = propData.heading
            })
        end
        cb({ success = true, z = hitCoords.z })
    else
        cb({ success = false })
    end
end)

--------------------------------------------------------------------------------
-- 8. Callbacks NUI Principaux
--------------------------------------------------------------------------------

-- Requête de props
RegisterNUICallback('propStudio:requestProps', function(_, cb)
    TriggerServerEvent('creatortoolkit:propStudio:requestProps')
    cb('ok')
end)

-- Validation d'un modèle personnalisé tapé à la main
RegisterNUICallback('propStudio:validateCustomModel', function(data, cb)
    local modelName = data and data.model and tostring(data.model) or ""
    if modelName == "" then
        cb({ valid = false, error = "Nom de modèle vide" })
        return
    end

    local modelHash = GetHashKey(modelName)
    if not IsModelInCdimage(modelHash) or not IsModelValid(modelHash) then
        cb({ valid = false, error = "Modèle introuvable ou invalide dans GTA V" })
        return
    end

    cb({ valid = true, model = modelName })
end)

-- Placement d'un prop depuis le catalogue ou custom
RegisterNUICallback('propStudio:spawnProp', function(data, cb)
    local modelName = data and data.model and tostring(data.model)
    if not modelName or modelName == "" then
        cb({ success = false, error = "Modèle manquant" })
        return
    end

    local camCoord, camRot = GetCreatorCamData()
    local radX = math.rad(camRot.x)
    local radZ = math.rad(camRot.z)

    local forward = vector3(
        -math.sin(radZ) * math.cos(radX),
        math.cos(radZ) * math.cos(radX),
        math.sin(radX)
    )

    -- Raycast pour tenter de trouver le sol ou une surface devant la caméra
    local rayEnd = camCoord + forward * 10.0
    local rayHandle = StartShapeTestRay(
        camCoord.x, camCoord.y, camCoord.z,
        rayEnd.x, rayEnd.y, rayEnd.z,
        19,
        PlayerPedId(),
        0
    )
    local _, hit, hitCoords = GetShapeTestResult(rayHandle)

    local spawnCoords = (hit == 1) and hitCoords or (camCoord + forward * 3.5)

    local newPropPayload = {
        model = modelName,
        coords = {
            x = tonumber(string.format("%.3f", spawnCoords.x)),
            y = tonumber(string.format("%.3f", spawnCoords.y)),
            z = tonumber(string.format("%.3f", spawnCoords.z))
        },
        heading = tonumber(string.format("%.2f", camRot.z)),
        rotation = {
            x = 0.0,
            y = 0.0,
            z = tonumber(string.format("%.2f", camRot.z))
        },
        renderDistance = (Config and Config.PropStudio and Config.PropStudio.DefaultRenderDistance) or 150.0,
        textureVariation = 0,
        collision = true
    }

    -- Envoi au serveur pour génération de l'ID unique et sauvegarde MySQL
    TriggerServerEvent('creatortoolkit:propStudio:saveProp', newPropPayload)
    cb({ success = true })
end)

-- Sélection d'un prop depuis la liste de l'interface
RegisterNUICallback('propStudio:selectProp', function(data, cb)
    local propId = data and data.id
    if not propId then
        cb({ success = false })
        return
    end

    if PropClient.SelectedPropId and PropClient.SelectedPropId ~= propId then
        -- Libérer le verrou précédent
        TriggerServerEvent('creatortoolkit:propStudio:releaseLock', PropClient.SelectedPropId)
    end

    PropClient.SelectedPropId = propId
    local ent = PropClient.LocalEntities[propId]
    if ent and DoesEntityExist(ent) then
        PropClient.SelectedEntity = ent
    else
        -- Si non encore spawnée, forcer le spawn
        local p = PropClient.AllProps[propId]
        if p then
            spawnLocalProp(p)
        end
    end

    TriggerServerEvent('creatortoolkit:propStudio:requestLock', propId)
    cb({ success = true })
end)

-- Désélection
RegisterNUICallback('propStudio:deselectProp', function(_, cb)
    if PropClient.SelectedPropId then
        TriggerServerEvent('creatortoolkit:propStudio:releaseLock', PropClient.SelectedPropId)
    end
    PropClient.SelectedPropId = nil
    PropClient.SelectedEntity = nil
    cb('ok')
end)

-- Déplacement en direct par le Gizmo
RegisterNUICallback('propStudio:moveEntity', function(data, cb)
    local propId = PropClient.SelectedPropId
    if not propId then
        cb('ok')
        return
    end

    local pos = data.position
    local rot = data.rotation

    -- Mettre à jour l'entité locale immédiatement (0ms lag visuel)
    local ent = PropClient.SelectedEntity
    if ent and DoesEntityExist(ent) then
        SetEntityCoordsNoOffset(ent, pos.x, pos.y, pos.z, false, false, false)
        if rot then
            SetEntityRotation(ent, rot.x, rot.y, rot.z, 2, true)
        end
    end

    -- Mettre à jour la mémoire locale
    local prop = PropClient.AllProps[propId]
    if prop then
        prop.coords = pos
        if rot then
            prop.rotation = rot
            prop.heading = rot.z
        end
    end

    -- Diffusion réseau en direct aux autres admins (rate-limité à 20Hz côté serveur)
    TriggerServerEvent('creatortoolkit:propStudio:liveTransform', {
        id = propId,
        coords = pos,
        rotation = rot,
        heading = rot and rot.z or 0.0
    })

    cb('ok')
end)

-- Sauvegarde définitive à la fin de la manipulation
RegisterNUICallback('propStudio:saveEntity', function(data, cb)
    local propId = PropClient.SelectedPropId
    if not propId then
        cb('ok')
        return
    end

    local prop = PropClient.AllProps[propId]
    if prop then
        if data.position then prop.coords = data.position end
        if data.rotation then
            prop.rotation = data.rotation
            prop.heading = data.rotation.z
        end
        TriggerServerEvent('creatortoolkit:propStudio:saveProp', prop)
    end
    cb('ok')
end)

-- Modification des propriétés dans l'inspecteur (Render Distance, Texture Variation, Collision)
RegisterNUICallback('propStudio:updateProperties', function(data, cb)
    local propId = PropClient.SelectedPropId
    if not propId or not data then
        cb({ success = false })
        return
    end

    local prop = PropClient.AllProps[propId]
    if not prop then
        cb({ success = false })
        return
    end

    if data.renderDistance ~= nil then
        prop.renderDistance = tonumber(data.renderDistance) or prop.renderDistance
    end

    if data.textureVariation ~= nil then
        prop.textureVariation = tonumber(data.textureVariation) or 0
        local ent = PropClient.SelectedEntity
        if ent and DoesEntityExist(ent) then
            SetObjectTextureVariation(ent, prop.textureVariation)
        end
    end

    if data.collision ~= nil then
        prop.collision = (data.collision == true)
        local ent = PropClient.SelectedEntity
        if ent and DoesEntityExist(ent) then
            SetEntityCollision(ent, prop.collision, prop.collision)
        end
    end

    if data.coords ~= nil then
        prop.coords = {
            x = tonumber(string.format("%.3f", data.coords.x)),
            y = tonumber(string.format("%.3f", data.coords.y)),
            z = tonumber(string.format("%.3f", data.coords.z))
        }
        local ent = PropClient.SelectedEntity
        if ent and DoesEntityExist(ent) then
            SetEntityCoordsNoOffset(ent, prop.coords.x, prop.coords.y, prop.coords.z, false, false, false)
        end
    end

    if data.rotation ~= nil then
        prop.rotation = {
            x = tonumber(string.format("%.2f", data.rotation.x or 0.0)),
            y = tonumber(string.format("%.2f", data.rotation.y or 0.0)),
            z = tonumber(string.format("%.2f", data.rotation.z or 0.0))
        }
        prop.heading = prop.rotation.z
        local ent = PropClient.SelectedEntity
        if ent and DoesEntityExist(ent) then
            SetEntityRotation(ent, prop.rotation.x, prop.rotation.y, prop.rotation.z, 2, true)
        end
    end

    -- Sauvegarde en base de données
    TriggerServerEvent('creatortoolkit:propStudio:saveProp', prop)
    cb({ success = true, prop = prop })
end)

-- Duplication (LShift)
RegisterNUICallback('propStudio:duplicateProp', function(_, cb)
    if PropClient.SelectedPropId then
        TriggerServerEvent('creatortoolkit:propStudio:duplicateProp', PropClient.SelectedPropId)
        cb({ success = true })
    else
        cb({ success = false, error = "Aucun prop sélectionné" })
    end
end)

-- Suppression (Suppr)
RegisterNUICallback('propStudio:deleteProp', function(data, cb)
    local targetId = (data and data.id) or PropClient.SelectedPropId
    if targetId then
        despawnLocalProp(targetId, true)
        TriggerServerEvent('creatortoolkit:propStudio:deleteProp', targetId)
        cb({ success = true })
    else
        cb({ success = false, error = "Aucun prop sélectionné" })
    end
end)

-- Quitter l'éditeur (Exit button)
RegisterNUICallback('propStudio:exit', function(_, cb)
    if PropClient.SelectedPropId then
        TriggerServerEvent('creatortoolkit:propStudio:releaseLock', PropClient.SelectedPropId)
    end
    PropClient.SelectedPropId = nil
    PropClient.SelectedEntity = nil
    PropClient.IsEditorActive = false

    -- Désactiver les outlines
    for _, ent in pairs(PropClient.LocalEntities) do
        if ent and DoesEntityExist(ent) then
            SetEntityDrawOutline(ent, false)
        end
    end

    cb('ok')
end)

-- Gestion de l'état actif lors du changement de Studio
RegisterNetEvent('creatortoolkit:client:setStudio', function(studioId)
    PropClient.IsEditorActive = (studioId == 'prop')
    if not PropClient.IsEditorActive then
        for _, ent in pairs(PropClient.LocalEntities) do
            if ent and DoesEntityExist(ent) then
                SetEntityDrawOutline(ent, false)
            end
        end
    end
end)

--------------------------------------------------------------------------------
-- 10. Callbacks NUI Hiérarchie (Groupes & Familles)
--------------------------------------------------------------------------------

RegisterNUICallback('propStudio:saveHierarchy', function(data, cb)
    if data and data.hierarchy then
        PropClient.Hierarchy = data.hierarchy
        TriggerServerEvent('creatortoolkit:propStudio:saveHierarchy', data.hierarchy)
    end
    cb('ok')
end)

RegisterNUICallback('propStudio:assignPropsHierarchy', function(data, cb)
    if not data or not data.ids then
        cb('error')
        return
    end
    TriggerServerEvent('creatortoolkit:propStudio:assignPropsHierarchy', data)
    cb('ok')
end)

RegisterNUICallback('propStudio:saveFamily', function(data, cb)
    if not data or not data.ids then
        cb('error')
        return
    end
    TriggerServerEvent('creatortoolkit:propStudio:updateFamilyProps', data)
    cb('ok')
end)

RegisterNUICallback('propStudio:setFamilyCenter', function(data, cb)
    cb('ok')
end)

--------------------------------------------------------------------------------
-- 11. Callbacks NUI Assemblages (Prefabs)
--------------------------------------------------------------------------------

RegisterNUICallback('propStudio:saveAssemblage', function(data, cb)
    if not data or not data.name or not data.propsData then
        cb({ success = false, error = "Données invalides" })
        return
    end
    TriggerServerEvent('creatortoolkit:propStudio:saveAssemblage', data)
    cb({ success = true })
end)

RegisterNUICallback('propStudio:deleteAssemblage', function(data, cb)
    local id = data and data.id
    if not id then
        cb({ success = false })
        return
    end
    TriggerServerEvent('creatortoolkit:propStudio:deleteAssemblage', id)
    cb({ success = true })
end)

RegisterNUICallback('propStudio:duplicateAssemblage', function(data, cb)
    local id = data and data.id
    if not id then
        cb({ success = false })
        return
    end
    TriggerServerEvent('creatortoolkit:propStudio:duplicateAssemblage', id)
    cb({ success = true })
end)

RegisterNUICallback('propStudio:spawnAssemblage', function(data, cb)
    local assemblageId = data and data.assemblageId
    if not assemblageId then
        cb({ success = false, error = "Assemblage manquant" })
        return
    end

    local camCoord, camRot = GetCreatorCamData()
    local radX = math.rad(camRot.x)
    local radZ = math.rad(camRot.z)

    local forward = vector3(
        -math.sin(radZ) * math.cos(radX),
        math.cos(radZ) * math.cos(radX),
        math.sin(radX)
    )

    -- Raycast pour détecter le sol ou une surface devant la caméra
    local rayEnd = camCoord + forward * 15.0
    local rayHandle = StartShapeTestRay(
        camCoord.x, camCoord.y, camCoord.z,
        rayEnd.x, rayEnd.y, rayEnd.z,
        19,
        PlayerPedId(),
        0
    )
    local _, hit, hitCoords = GetShapeTestResult(rayHandle)

    local spawnCoords = (hit == 1) and hitCoords or (camCoord + forward * 4.0)

    local payload = {
        assemblageId = assemblageId,
        spawnCoords = {
            x = tonumber(string.format("%.3f", spawnCoords.x)),
            y = tonumber(string.format("%.3f", spawnCoords.y)),
            z = tonumber(string.format("%.3f", spawnCoords.z))
        },
        spawnHeading = tonumber(string.format("%.2f", camRot.z)),
        familyName = data.familyName
    }

    TriggerServerEvent('creatortoolkit:propStudio:spawnAssemblage', payload)
    cb({ success = true })
end)

