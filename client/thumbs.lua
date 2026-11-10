-- =============================================================================
-- CREATOR TOOLKIT - GÉNÉRATEUR AUTOMATIQUE DE MINIATURES (SCREENSHOT-BASIC)
-- =============================================================================

ThumbnailsClient = {
    Cache = {},             -- [modelName] = true
    IsGenerating = false,
    ShouldCancel = false
}

-- Point d'ancrage du studio photo (haute altitude dans le ciel pour 0 perturbation)
local STUDIO_COORDS = vector3(0.0, 0.0, 2500.0)

--------------------------------------------------------------------------------
-- 1. Initialisation & Synchronisation du Cache des Miniatures
--------------------------------------------------------------------------------

RegisterNetEvent('creatortoolkit:propStudio:syncThumbnailsList', function(modelsList)
    ThumbnailsClient.Cache = {}
    for _, model in ipairs(modelsList or {}) do
        ThumbnailsClient.Cache[model] = true
    end

    SendNUIMessage({
        action = 'propStudio:syncThumbnails',
        thumbnails = modelsList or {}
    })
end)

RegisterNetEvent('creatortoolkit:propStudio:onThumbnailSaved', function(model, filename)
    ThumbnailsClient.Cache[model] = true
    SendNUIMessage({
        action = 'propStudio:thumbnailAdded',
        model = model,
        filename = filename
    })
end)

-- Demande initiale de la liste des miniatures existantes
CreateThread(function()
    Wait(1000)
    TriggerServerEvent('creatortoolkit:propStudio:requestThumbnailsList')
end)

--------------------------------------------------------------------------------
-- 2. Scène de Présentation & Capture 3D
--------------------------------------------------------------------------------

local function loadModel(modelHash)
    if not HasModelLoaded(modelHash) then
        if not IsModelInCdimage(modelHash) and not IsModelValid(modelHash) then
            return false
        end
        RequestModel(modelHash)
        local timeout = GetGameTimer() + 3500
        while not HasModelLoaded(modelHash) and GetGameTimer() < timeout do
            Wait(25)
        end
    end
    return HasModelLoaded(modelHash)
end

-- Capture d'un modèle unique dans le studio dédié
local function captureSingleModel(modelName)
    local modelHash = type(modelName) == "number" and modelName or GetHashKey(modelName)
    local ok = loadModel(modelHash)
    if not ok then
        print(("[CreatorToolkit] [Miniature] Modèle invalide ou introuvable : %s"):format(modelName))
        return false, "Modèle introuvable dans GTA V"
    end

    -- 1. Création de l'entité locale
    local obj = CreateObjectNoOffset(modelHash, STUDIO_COORDS.x, STUDIO_COORDS.y, STUDIO_COORDS.z, false, false, false)
    if not obj or obj == 0 or not DoesEntityExist(obj) then
        SetModelAsNoLongerNeeded(modelHash)
        return false, "Échec création entité"
    end

    SetEntityCollision(obj, false, false)
    FreezeEntityPosition(obj, true)
    SetEntityRotation(obj, 0.0, 0.0, 0.0, 2, true)

    -- 2. Calcul précis des dimensions réelles via GetModelDimensions
    local minDim, maxDim = GetModelDimensions(modelHash)
    local sizeX = maxDim.x - minDim.x
    local sizeY = maxDim.y - minDim.y
    local sizeZ = maxDim.z - minDim.z
    local maxDimLen = math.max(sizeX, sizeY, sizeZ)
    if maxDimLen < 0.1 then maxDimLen = 0.5 end

    local centerOffset = (minDim + maxDim) * 0.5
    local targetPos = STUDIO_COORDS + centerOffset

    -- 3. Cadrage optique optimal (FOV 35° pour perspective naturelle)
    local fov = 35.0
    local halfFovRad = math.rad(fov * 0.5)
    local optimalDist = (maxDimLen * 0.5) / math.tan(halfFovRad) * 1.30 -- 30% de marge pour ne jamais couper l'objet

    -- Angle 3/4 perspective (20° d'élévation, 45° d'azimut)
    local elevRad = math.rad(20.0)
    local azimRad = math.rad(45.0)

    local camX = targetPos.x + optimalDist * math.cos(elevRad) * math.sin(azimRad)
    local camY = targetPos.y - optimalDist * math.cos(elevRad) * math.cos(azimRad)
    local camZ = targetPos.z + optimalDist * math.sin(elevRad)

    local cam = CreateCamWithParams('DEFAULT_SCRIPTED_CAMERA', camX, camY, camZ, 0.0, 0.0, 0.0, fov, false, 0)
    PointCamAtCoord(cam, targetPos.x, targetPos.y, targetPos.z)
    SetCamActive(cam, true)
    RenderScriptCams(true, false, 0, true, true)
    SetFocusPosAndVel(STUDIO_COORDS.x, STUDIO_COORDS.y, STUDIO_COORDS.z, 0.0, 0.0, 0.0)

    -- 4. Éclairage studio 3 points & attente de rendu des textures
    local renderTimeout = GetGameTimer() + 200
    while GetGameTimer() < renderTimeout do
        -- Key light (lumière principale chaude)
        DrawLightWithRange(camX, camY, camZ + 0.5, 255, 255, 255, optimalDist * 4.0, 3.0)
        -- Fill light (débouchage d'ombres)
        DrawLightWithRange(targetPos.x - maxDimLen, targetPos.y + maxDimLen, targetPos.z + maxDimLen, 180, 200, 220, maxDimLen * 4.0, 2.0)
        -- Rim light (détourage du bord)
        DrawLightWithRange(targetPos.x, targetPos.y + optimalDist, targetPos.z + maxDimLen, 240, 240, 255, optimalDist * 3.0, 2.5)
        Wait(0)
    end

    -- 5. Capture avec screenshot-basic
    local p = promise.new()
    local hasCaptured = false

    exports['screenshot-basic']:requestScreenshot({ encoding = 'webp', quality = 0.85 }, function(dataUri)
        hasCaptured = true
        p:resolve(dataUri)
    end)

    -- Timeout de sécurité pour la capture (5 secondes)
    SetTimeout(5000, function()
        if not hasCaptured then
            p:resolve(nil)
        end
    end)

    local dataUri = Citizen.Await(p)

    -- 6. Nettoyage immédiat de l'entité et de la caméra
    SetEntityAsMissionEntity(obj, true, true)
    DeleteObject(obj)
    SetModelAsNoLongerNeeded(modelHash)

    ClearFocus()
    DestroyCam(cam, false)
    RenderScriptCams(false, false, 0, true, true)

    if not dataUri or dataUri == "" then
        return false, "Échec capture screenshot-basic"
    end

    -- Envoi au serveur pour persistance disque
    TriggerLatentServerEvent('creatortoolkit:propStudio:saveThumbnail', 5000000, modelName, dataUri)
    ThumbnailsClient.Cache[modelName] = true

    return true, nil
end

--------------------------------------------------------------------------------
-- 3. Boucle de Traitement par Lot (Batch Generator)
--------------------------------------------------------------------------------

local function runBatchGeneration(mode)
    if ThumbnailsClient.IsGenerating then
        print("[CreatorToolkit] [Miniature] Génération déjà en cours !")
        return
    end

    local catalog = Config.PropCatalog or {}
    if #catalog == 0 then
        print("[CreatorToolkit] [Miniature] Catalogue vide.")
        return
    end

    -- Filtrer la liste des props à traiter
    local queue = {}
    for _, item in ipairs(catalog) do
        local exists = ThumbnailsClient.Cache[item.model]
        if mode == 'all' or not exists then
            table.insert(queue, item)
        end
    end

    if #queue == 0 then
        print("[CreatorToolkit] [Miniature] Toutes les miniatures sont déjà à jour !")
        SendNUIMessage({
            action = 'propStudio:notify',
            message = "Toutes les miniatures sont déjà générées !",
            type = 'info'
        })
        return
    end

    ThumbnailsClient.IsGenerating = true
    ThumbnailsClient.ShouldCancel = false

    -- Sauvegarde de l'état du joueur
    local ped = PlayerPedId()
    local savedCoords = GetEntityCoords(ped)
    local savedHeading = GetEntityHeading(ped)

    -- Isolation du joueur pendant la capture
    FreezeEntityPosition(ped, true)
    SetEntityVisible(ped, false, false)
    SetEntityCollision(ped, false, false)

    print(("[CreatorToolkit] [Miniature] Démarrage de la génération de %d miniatures (Mode: %s)..."):format(#queue, mode or 'missing'))

    SendNUIMessage({
        action = 'propStudio:thumbBatchStart',
        total = #queue
    })

    CreateThread(function()
        local successCount = 0
        local errorCount = 0

        for i, item in ipairs(queue) do
            if ThumbnailsClient.ShouldCancel then
                print("[CreatorToolkit] [Miniature] Génération interrompue par l'utilisateur.")
                break
            end

            -- Notification de progression
            SendNUIMessage({
                action = 'propStudio:thumbProgress',
                current = i,
                total = #queue,
                model = item.model,
                label = item.label
            })

            local ok, err = captureSingleModel(item.model)
            if ok then
                successCount = successCount + 1
            else
                errorCount = errorCount + 1
                print(("[CreatorToolkit] [Miniature] Erreur sur '%s' : %s"):format(item.model, tostring(err)))
            end

            Wait(100) -- Pause courte entre chaque modèle pour fluidité
        end

        -- Restauration du joueur
        SetEntityCoordsNoOffset(ped, savedCoords.x, savedCoords.y, savedCoords.z, false, false, false)
        SetEntityHeading(ped, savedHeading)
        FreezeEntityPosition(ped, false)
        SetEntityVisible(ped, true, true)
        SetEntityCollision(ped, true, true)

        ThumbnailsClient.IsGenerating = false
        ThumbnailsClient.ShouldCancel = false

        SendNUIMessage({
            action = 'propStudio:thumbBatchEnd',
            success = successCount,
            errors = errorCount,
            total = #queue
        })

        print(("[CreatorToolkit] [Miniature] Fin du traitement : %d réussies, %d erreurs sur %d modèles."):format(
            successCount, errorCount, #queue
        ))
    end)
end

--------------------------------------------------------------------------------
-- 4. Commandes Chat / Console
--------------------------------------------------------------------------------

-- Générer toutes les miniatures manquantes : /prop_gen_thumbs [missing|all]
RegisterCommand('prop_gen_thumbs', function(_, args)
    local mode = (args[1] and tostring(args[1]):lower() == 'all') and 'all' or 'missing'
    runBatchGeneration(mode)
end, false)

-- Générer ou rafraîchir un prop unique : /prop_thumb <model>
RegisterCommand('prop_thumb', function(_, args)
    if not args[1] or args[1] == "" then
        print("[CreatorToolkit] Usage: /prop_thumb <nom_du_modele>")
        return
    end
    local model = tostring(args[1])
    CreateThread(function()
        print(("[CreatorToolkit] Capture de la miniature pour '%s'..."):format(model))
        local ok, err = captureSingleModel(model)
        if ok then
            print(("[CreatorToolkit] Miniature générée avec succès pour '%s'."):format(model))
        else
            print(("[CreatorToolkit] Échec miniature '%s' : %s"):format(model, tostring(err)))
        end
    end)
end, false)

-- Annuler la génération en cours : /prop_cancel_thumbs
RegisterCommand('prop_cancel_thumbs', function()
    if ThumbnailsClient.IsGenerating then
        ThumbnailsClient.ShouldCancel = true
        print("[CreatorToolkit] [Miniature] Annulation demandée...")
    else
        print("[CreatorToolkit] [Miniature] Aucune génération en cours.")
    end
end, false)

--------------------------------------------------------------------------------
-- 5. Callbacks NUI
--------------------------------------------------------------------------------

RegisterNUICallback('propStudio:requestThumbnailsList', function(_, cb)
    TriggerServerEvent('creatortoolkit:propStudio:requestThumbnailsList')
    cb('ok')
end)

RegisterNUICallback('propStudio:generateThumbs', function(data, cb)
    local mode = (data and data.mode) or 'missing'
    runBatchGeneration(mode)
    cb('ok')
end)

RegisterNUICallback('propStudio:cancelThumbs', function(_, cb)
    ThumbnailsClient.ShouldCancel = true
    cb('ok')
end)

RegisterNUICallback('propStudio:generateSingleThumb', function(data, cb)
    local model = data and data.model
    if model then
        CreateThread(function()
            captureSingleModel(model)
        end)
    end
    cb('ok')
end)

-- Capture 3D d'un assemblage complet (composition de plusieurs props)
local function captureAssemblageGroup(assemblageId, propsList)
    if not propsList or #propsList == 0 then return false end

    local spawned = {}
    local minX, minY, minZ = 9999.0, 9999.0, 9999.0
    local maxX, maxY, maxZ = -9999.0, -9999.0, -9999.0

    for _, p in ipairs(propsList) do
        local mHash = type(p.model) == "number" and p.model or GetHashKey(p.model)
        local ok = loadModel(mHash)
        if ok then
            local rel = p.relCoords or { x = 0.0, y = 0.0, z = 0.0 }
            local spawnPos = STUDIO_COORDS + vector3(rel.x, rel.y, rel.z)
            local obj = CreateObjectNoOffset(mHash, spawnPos.x, spawnPos.y, spawnPos.z, false, false, false)
            if obj and obj ~= 0 and DoesEntityExist(obj) then
                SetEntityCollision(obj, false, false)
                FreezeEntityPosition(obj, true)
                local rot = p.rotation or { x = 0.0, y = 0.0, z = p.heading or 0.0 }
                SetEntityRotation(obj, rot.x or 0.0, rot.y or 0.0, rot.z or 0.0, 2, true)
                table.insert(spawned, { obj = obj, hash = mHash })

                local pMin, pMax = GetModelDimensions(mHash)
                minX = math.min(minX, rel.x + pMin.x)
                minY = math.min(minY, rel.y + pMin.y)
                minZ = math.min(minZ, rel.z + pMin.z)
                maxX = math.max(maxX, rel.x + pMax.x)
                maxY = math.max(maxY, rel.y + pMax.y)
                maxZ = math.max(maxZ, rel.z + pMax.z)
            end
        end
    end

    if #spawned == 0 then return false end

    local sizeX = maxX - minX
    local sizeY = maxY - minY
    local sizeZ = maxZ - minZ
    local maxDim = math.max(sizeX, sizeY, sizeZ, 1.0)

    local centerRel = vector3((minX + maxX) * 0.5, (minY + maxY) * 0.5, (minZ + maxZ) * 0.5)
    local targetPos = STUDIO_COORDS + centerRel

    local fov = 35.0
    local halfFov = math.rad(fov * 0.5)
    local optimalDist = (maxDim * 0.5) / math.tan(halfFov) * 1.35

    local elevRad = math.rad(22.0)
    local azimRad = math.rad(45.0)

    local camX = targetPos.x + optimalDist * math.cos(elevRad) * math.sin(azimRad)
    local camY = targetPos.y - optimalDist * math.cos(elevRad) * math.cos(azimRad)
    local camZ = targetPos.z + optimalDist * math.sin(elevRad)

    local cam = CreateCamWithParams('DEFAULT_SCRIPTED_CAMERA', camX, camY, camZ, 0.0, 0.0, 0.0, fov, false, 0)
    PointCamAtCoord(cam, targetPos.x, targetPos.y, targetPos.z)
    SetCamActive(cam, true)
    RenderScriptCams(true, false, 0, true, true)
    SetFocusPosAndVel(STUDIO_COORDS.x, STUDIO_COORDS.y, STUDIO_COORDS.z, 0.0, 0.0, 0.0)

    local renderTimeout = GetGameTimer() + 250
    while GetGameTimer() < renderTimeout do
        DrawLightWithRange(camX, camY, camZ + 0.5, 255, 255, 255, optimalDist * 4.0, 3.0)
        DrawLightWithRange(targetPos.x - maxDim, targetPos.y + maxDim, targetPos.z + maxDim, 180, 200, 220, maxDim * 4.0, 2.0)
        DrawLightWithRange(targetPos.x, targetPos.y + optimalDist, targetPos.z + maxDim, 240, 240, 255, optimalDist * 3.0, 2.5)
        Wait(0)
    end

    local p = promise.new()
    local hasCaptured = false
    exports['screenshot-basic']:requestScreenshot({ encoding = 'webp', quality = 0.85 }, function(dataUri)
        hasCaptured = true
        p:resolve(dataUri)
    end)

    SetTimeout(5000, function()
        if not hasCaptured then p:resolve(nil) end
    end)

    local dataUri = Citizen.Await(p)

    for _, item in ipairs(spawned) do
        SetEntityAsMissionEntity(item.obj, true, true)
        DeleteObject(item.obj)
        SetModelAsNoLongerNeeded(item.hash)
    end

    ClearFocus()
    DestroyCam(cam, false)
    RenderScriptCams(false, false, 0, true, true)

    if dataUri and dataUri ~= "" then
        TriggerLatentServerEvent('creatortoolkit:propStudio:saveThumbnail', 5000000, assemblageId, dataUri)
        return true
    end
    return false
end

RegisterNUICallback('propStudio:captureAssemblageThumb', function(data, cb)
    local id = data and data.assemblageId
    local propsList = data and data.propsData
    if id and propsList then
        CreateThread(function()
            captureAssemblageGroup(id, propsList)
        end)
    end
    cb('ok')
end)
