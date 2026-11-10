local isEditing = false
local hasSelectedProp = false
local selectedLightId = nil
local editProp = nil
local editCoords = vector3(0.0, 0.0, 0.0)
local editHeading = 0.0
local editRotation = vector3(0.0, 0.0, 0.0)
local studioOrigin = vector3(0.0, 0.0, 0.0)

-- Caméra orbitale Freecam & Vol Libre
local orbitCam = nil
local cameraMode = 'freecam' -- 'freecam' par défaut à l'ouverture, ou 'orbit'
local camPitch = 20.0
local camYaw = 0.0
local camDistance = Config.Camera.defaultDistance or 4.2
local freecamPos = vector3(0.0, 0.0, 0.0)
local freecamPitch = 0.0
local freecamYaw = 0.0
local isGizmoDragging = false
local editAttachData = nil
local currentStudio = Config.DefaultStudio or 'light'
local lastToggleTime = 0

local editLightData = {
    model = Config.LightProps[1].model,
    offsetZ = Config.LightProps[1].offsetZ or 0.0,
    rgb = { r = Config.Defaults.rgb.r, g = Config.Defaults.rgb.g, b = Config.Defaults.rgb.b },
    intensity = Config.Defaults.intensity,
    radius = Config.Defaults.radius,
    renderDistance = 80.0,
    textureVariation = 0,
    collision = false,
    shape = Config.Defaults.shape or 'cone',
    shapeParam = Config.Defaults.shapeParam or 55.0,
    invertDirection = true,
    nativeLight = false,
    castShadow = (Config.Defaults and Config.Defaults.castShadow ~= false)
}

-- Synchronisation des lumières existantes
local allLights = {}
local nearbyLights = {}
local spawnedEntities = {}
local attachedEntityCache = {}
local currentHierarchy = { groups = {}, families = {} }
local refreshNearbyLights -- Déclaration préalable pour usage global dans le script

--------------------------------------------------------------------------------
-- Utilitaires Mathématiques & Vecteurs
--------------------------------------------------------------------------------

local function getPropLabel(model)
    for _, p in ipairs(Config.LightProps) do
        if p.model == model then
            return p.label
        end
    end
    if model == 'none' then
        return 'Lumière Pure (Sans Prop)'
    end
    return model
end

local function resolveInvertDirection(val, model)
    if val ~= nil then
        return (val == true)
    end
    return (model ~= nil and model ~= 'none')
end

local function rotationToDirection(rot, inverted)
    local rx = (type(rot) == 'vector3' and rot.x) or (type(rot) == 'table' and rot.x) or 0.0
    local rz = (type(rot) == 'vector3' and rot.z) or (type(rot) == 'table' and rot.z) or 0.0
    local z = math.rad(rz + (inverted and 180.0 or 0.0))
    local pitch = rx * (inverted and -1.0 or 1.0)
    local x = math.rad(pitch)
    local horizontal = math.abs(math.cos(x))
    return vector3(-math.sin(z) * horizontal, math.cos(z) * horizontal, math.sin(x))
end

local function loadModel(modelHash)
    if not HasModelLoaded(modelHash) then
        RequestModel(modelHash)
        local timeout = GetGameTimer() + 5000
        while not HasModelLoaded(modelHash) and GetGameTimer() < timeout do
            Wait(10)
        end
    end
    return HasModelLoaded(modelHash)
end

local function cleanEditProp()
    if editProp and DoesEntityExist(editProp) then
        if IsEntityAttached(editProp) then
            DetachEntity(editProp, true, true)
        end
        DeleteEntity(editProp)
        editProp = nil
    end
end

local function spawnEditProp(modelName, coords, rot)
    cleanEditProp()

    if not modelName or modelName == 'none' or modelName == '' then
        return nil
    end

    local modelHash = joaat(modelName)
    if not loadModel(modelHash) then
        print(("[LightStudio] Erreur: Impossible de charger le modèle %s"):format(modelName))
        return nil
    end

    local obj = CreateObject(modelHash, coords.x, coords.y, coords.z, false, false, false)
    SetEntityCoordsNoOffset(obj, coords.x, coords.y, coords.z, true, false, false)
    if rot then
        SetEntityRotation(obj, rot.x, rot.y, rot.z, 2, true)
    else
        SetEntityHeading(obj, 0.0)
    end
    FreezeEntityPosition(obj, true)
    local hasCollision = editLightData.collision == true
    SetEntityCollision(obj, hasCollision, hasCollision)
    if editLightData.textureVariation and editLightData.textureVariation > 0 then
        SetObjectTextureVariation(obj, editLightData.textureVariation)
    end
    SetModelAsNoLongerNeeded(modelHash)
    SetEntityLights(obj, editLightData.nativeLight and true or false)

    if editAttachData and DoesEntityExist(editAttachData.entity) then
        AttachEntityToEntity(
            obj,
            editAttachData.entity,
            editAttachData.bone or 0,
            editAttachData.offset.x, editAttachData.offset.y, editAttachData.offset.z,
            editAttachData.rotation.x or 0.0, editAttachData.rotation.y or 0.0, editAttachData.rotation.z or 0.0,
            false, false, false, false, 2, true
        )
    end

    return obj
end

--------------------------------------------------------------------------------
-- Système d'Attachement (Véhicules, Peds, Objets)
--------------------------------------------------------------------------------

local function findAttachedEntity(attached)
    if not attached then return nil end

    if attached.type == 'vehicle' then
        if attached.netId and attached.netId ~= 0 then
            if NetworkDoesNetworkIdExist(attached.netId) then
                local ent = NetworkGetEntityFromNetworkId(attached.netId)
                if ent and DoesEntityExist(ent) then return ent end
            end
        end
        if attached.plate and attached.plate ~= "" then
            local cleanTargetPlate = string.gsub(attached.plate, "^%s*(.-)%s*$", "%1"):upper()
            local vehs = GetGamePool('CVehicle')
            for _, v in ipairs(vehs) do
                local plate = GetVehicleNumberPlateText(v)
                plate = plate and string.gsub(plate, "^%s*(.-)%s*$", "%1"):upper() or ""
                if plate == cleanTargetPlate then return v end
            end
        end
    elseif attached.type == 'ped' then
        if attached.serverId then
            local pHandle = GetPlayerFromServerId(attached.serverId)
            if pHandle and pHandle ~= -1 then
                local pPed = GetPlayerPed(pHandle)
                if pPed and DoesEntityExist(pPed) then
                    return pPed
                end
            end
        end
        if attached.netId and attached.netId ~= 0 then
            if NetworkDoesNetworkIdExist(attached.netId) then
                local ent = NetworkGetEntityFromNetworkId(attached.netId)
                if ent and DoesEntityExist(ent) then return ent end
            end
        end
        if attached.isSelf then
            return PlayerPedId()
        end
    elseif attached.type == 'object' then
        if attached.netId and attached.netId ~= 0 then
            if NetworkDoesNetworkIdExist(attached.netId) then
                local ent = NetworkGetEntityFromNetworkId(attached.netId)
                if ent and DoesEntityExist(ent) then return ent end
            end
        end
    end

    return nil
end

local function detachCurrentEdit()
    if editProp and DoesEntityExist(editProp) then
        if IsEntityAttached(editProp) then
            DetachEntity(editProp, true, true)
        end
        SetEntityCoordsNoOffset(editProp, editCoords.x, editCoords.y, editCoords.z, true, false, false)
        SetEntityRotation(editProp, editRotation.x, editRotation.y, editRotation.z, 2, true)
    end
    editAttachData = nil
    SendNUIMessage({
        action = 'updateAttachment',
        attached = false
    })
end

local function attachCurrentEdit(targetEntity, targetType, targetName)
    if not targetEntity or not DoesEntityExist(targetEntity) then
        return false
    end

    local entCoords = GetEntityCoords(targetEntity)
    local entRot = GetEntityRotation(targetEntity, 2)
    local relOffset = GetOffsetFromEntityGivenWorldCoords(targetEntity, editCoords.x, editCoords.y, editCoords.z)
    local relRot = editRotation - entRot

    local netId = 0
    if NetworkGetEntityIsNetworked(targetEntity) then
        netId = NetworkGetNetworkIdFromEntity(targetEntity)
    else
        if IsEntityAPed(targetEntity) then
            netId = PedToNet(targetEntity)
        elseif IsEntityAVehicle(targetEntity) then
            netId = VehToNet(targetEntity)
        end
    end

    local plate = nil
    local isSelfPed = false
    local serverId = nil

    if targetType == 'vehicle' or IsEntityAVehicle(targetEntity) then
        targetType = 'vehicle'
        local rawPlate = GetVehicleNumberPlateText(targetEntity)
        plate = rawPlate and string.gsub(rawPlate, "^%s*(.-)%s*$", "%1") or ""
        if not targetName or targetName == "" then
            local modelHash = GetEntityModel(targetEntity)
            local displayName = GetDisplayNameFromVehicleModel(modelHash)
            targetName = (displayName and displayName ~= "CARNOTFOUND") and displayName or ("Véhicule " .. (plate ~= "" and ("[" .. plate .. "]") or ""))
        end
    elseif targetType == 'ped' or IsEntityAPed(targetEntity) then
        targetType = 'ped'
        if targetEntity == PlayerPedId() then
            isSelfPed = true
            serverId = GetPlayerServerId(PlayerId())
            targetName = "Mon Personnage (Ped)"
        else
            for _, pid in ipairs(GetActivePlayers()) do
                if GetPlayerPed(pid) == targetEntity then
                    serverId = GetPlayerServerId(pid)
                    targetName = "Joueur [" .. GetPlayerName(pid) .. "]"
                    break
                end
            end
            if not targetName or targetName == "" then
                targetName = "Ped / PNJ"
            end
        end
    else
        targetType = 'object'
        if not targetName or targetName == "" then
            targetName = "Objet / Décor"
        end
    end

    editAttachData = {
        type = targetType,
        entity = targetEntity,
        netId = netId,
        plate = plate,
        serverId = serverId,
        isSelf = isSelfPed,
        name = targetName,
        bone = 0,
        offset = { x = relOffset.x, y = relOffset.y, z = relOffset.z },
        rotation = { x = relRot.x, y = relRot.y, z = relRot.z }
    }

    if editProp and DoesEntityExist(editProp) then
        AttachEntityToEntity(
            editProp,
            targetEntity,
            0,
            relOffset.x, relOffset.y, relOffset.z,
            relRot.x, relRot.y, relRot.z,
            false, false, false, false, 2, true
        )
    end

    SendNUIMessage({
        action = 'updateAttachment',
        attached = true,
        targetType = targetType,
        targetName = targetName
    })

    return true
end

--------------------------------------------------------------------------------
-- Moteur de Rendu Lumineux (Directionnel & Ambiance)
--------------------------------------------------------------------------------

local function renderLightInstance(coords, rotation, offsetZ, rgb, radius, intensity, shape, shapeParam, isInverted, isPreview, model, castShadow, shadowId)
    local oz = offsetZ or 0.0
    local rot = rotation or vector3(0.0, 0.0, 0.0)
    local dir = rotationToDirection(rot, isInverted)
    local lightPos = coords + vector3(0.0, 0.0, oz)
    local lightShape = shape or 'cone'
    local param = shapeParam or (lightShape == 'cone' and 55.0 or 1.0)
    local useShadow = (castShadow ~= false)

    if lightShape == 'cone' then
        local coneAngle = math.max(10.0, math.min(125.0, param + 0.0))
        -- Décalage vers l'avant si le modèle 3D du prop physique est présent, pour éviter que la lampe projette une ombre sur sa propre carcasse
        local spotOrigin = (model and model ~= 'none') and (lightPos + (dir * 0.28)) or lightPos

        -- 1. Faisceau directionnel (avec ombres dynamiques si activé et slot disponible)
        local validShadowId = (shadowId or 0) % 4
        if useShadow then
            local shadowFn = DrawSpotLightWithShadow or _DRAW_SPOT_LIGHT_WITH_SHADOW
            if shadowFn then
                pcall(shadowFn,
                    spotOrigin.x,
                    spotOrigin.y,
                    spotOrigin.z,
                    dir.x,
                    dir.y,
                    dir.z,
                    rgb.r,
                    rgb.g,
                    rgb.b,
                    radius * 2.2,
                    intensity * 3.0,
                    1.0,        -- roundness
                    coneAngle,  -- angle d'ouverture en degrés
                    12.0,       -- falloff
                    validShadowId
                )
            end
        else
            DrawSpotLight(
                spotOrigin.x,
                spotOrigin.y,
                spotOrigin.z,
                dir.x,
                dir.y,
                dir.z,
                rgb.r,
                rgb.g,
                rgb.b,
                radius * 2.2,
                intensity * 3.0,
                1.0,        -- hardness
                coneAngle,  -- angle d'ouverture en degrés
                12.0        -- falloff
            )
        end

        -- 2. Éclairage d'ambiance 360° au niveau de l'ampoule / source
        -- Assure que la lampe et ses abords immédiats restent visibles sous tous les angles de caméra
        DrawLightWithRange(
            spotOrigin.x,
            spotOrigin.y,
            spotOrigin.z,
            rgb.r,
            rgb.g,
            rgb.b,
            math.min(radius * 0.45, 6.0),
            intensity * 0.35
        )

        -- 2. Visualisation fil de fer 3D du Cône dans l'éditeur
        if isPreview then
            local dist = math.min(radius * 1.6, 15.0)
            local coneRadius = math.tan(math.rad(coneAngle * 0.5)) * dist
            local baseCenter = lightPos + (dir * dist)

            -- Base orthonormée orthogonale au vecteur direction
            local up = vector3(0.0, 0.0, 1.0)
            if math.abs(dir.z) > 0.95 then
                up = vector3(1.0, 0.0, 0.0)
            end
            local right = vector3(
                dir.y * up.z - dir.z * up.y,
                dir.z * up.x - dir.x * up.z,
                dir.x * up.y - dir.y * up.x
            )
            local rLen = math.sqrt(right.x * right.x + right.y * right.y + right.z * right.z)
            if rLen > 0.001 then right = right / rLen end

            local orthoUp = vector3(
                dir.y * right.z - dir.z * right.y,
                dir.z * right.x - dir.x * right.z,
                dir.x * right.y - dir.y * right.x
            )

            -- Cercle de base du cône (16 segments)
            local segments = 16
            local prevPt = nil
            for i = 0, segments do
                local angle = (i / segments) * (math.pi * 2.0)
                local cosA = math.cos(angle)
                local sinA = math.sin(angle)
                local pt = baseCenter + (right * (cosA * coneRadius)) + (orthoUp * (sinA * coneRadius))

                if prevPt then
                    DrawLine(prevPt.x, prevPt.y, prevPt.z, pt.x, pt.y, pt.z, rgb.r, rgb.g, rgb.b, 200)
                end
                prevPt = pt

                -- Lignes de génératrice aux 4 points cardinaux
                if i % 4 == 0 then
                    DrawLine(lightPos.x, lightPos.y, lightPos.z, pt.x, pt.y, pt.z, rgb.r, rgb.g, rgb.b, 220)
                end
            end

            -- Faisceau central
            DrawLine(lightPos.x, lightPos.y, lightPos.z, baseCenter.x, baseCenter.y, baseCenter.z, rgb.r, rgb.g, rgb.b, 240)

            -- Marqueur source
            DrawMarker(28, lightPos.x, lightPos.y, lightPos.z, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.3, 0.3, 0.3, rgb.r, rgb.g, rgb.b, 220, false, false, 2, nil, nil, false)
        end

    elseif lightShape == 'sphere' then
        local sphereRadius = radius * math.max(0.2, math.min(3.0, param + 0.0))

        -- 1. Éclairage omnidirectionnel pur 360°
        DrawLightWithRange(
            lightPos.x,
            lightPos.y,
            lightPos.z,
            rgb.r,
            rgb.g,
            rgb.b,
            sphereRadius,
            intensity * 1.5
        )

        -- 2. Visualisation fil de fer 3D de la Sphère dans l'éditeur
        if isPreview then
            DrawMarker(
                28,
                lightPos.x, lightPos.y, lightPos.z,
                0.0, 0.0, 0.0,
                0.0, 0.0, 0.0,
                sphereRadius * 2.0, sphereRadius * 2.0, sphereRadius * 2.0,
                rgb.r, rgb.g, rgb.b,
                35,
                false, false, 2, nil, nil, false
            )

            DrawMarker(
                28,
                lightPos.x, lightPos.y, lightPos.z,
                0.0, 0.0, 0.0,
                0.0, 0.0, 0.0,
                0.35, 0.35, 0.35,
                rgb.r, rgb.g, rgb.b,
                220,
                false, false, 2, nil, nil, false
            )
        end

    elseif lightShape == 'box' then
        local scale = math.max(0.2, math.min(3.0, param + 0.0))
        local halfSize = (radius * 0.45) * scale

        -- 1. Éclairage volumétrique cubique
        DrawLightWithRange(
            lightPos.x,
            lightPos.y,
            lightPos.z,
            rgb.r,
            rgb.g,
            rgb.b,
            halfSize * 2.2,
            intensity * 1.4
        )

        -- 6 spots directionnels orientés sur les 6 faces du cube pour texturer le volume
        local axes = {
            vector3(1.0, 0.0, 0.0),
            vector3(-1.0, 0.0, 0.0),
            vector3(0.0, 1.0, 0.0),
            vector3(0.0, -1.0, 0.0),
            vector3(0.0, 0.0, 1.0),
            vector3(0.0, 0.0, -1.0)
        }
        for _, axis in ipairs(axes) do
            DrawSpotLight(
                lightPos.x, lightPos.y, lightPos.z,
                axis.x, axis.y, axis.z,
                rgb.r, rgb.g, rgb.b,
                halfSize * 2.4,
                intensity * 1.1,
                1.0,
                85.0,
                15.0
            )
        end

        -- 2. Visualisation fil de fer 3D du Cube dans l'éditeur (12 arêtes orientées)
        if isPreview then
            local hs = halfSize
            local corners = {
                vector3(-hs, -hs, -hs),
                vector3( hs, -hs, -hs),
                vector3( hs,  hs, -hs),
                vector3(-hs,  hs, -hs),
                vector3(-hs, -hs,  hs),
                vector3( hs, -hs,  hs),
                vector3( hs,  hs,  hs),
                vector3(-hs,  hs,  hs),
            }

            local radZ = math.rad((rot.z or 0.0) + (isInverted and 180.0 or 0.0))
            local cosZ = math.cos(radZ)
            local sinZ = math.sin(radZ)
            local rotatedCorners = {}
            for i, c in ipairs(corners) do
                local rx = c.x * cosZ - c.y * sinZ
                local ry = c.x * sinZ + c.y * cosZ
                local rz = c.z
                rotatedCorners[i] = lightPos + vector3(rx, ry, rz)
            end

            local edges = {
                {1,2}, {2,3}, {3,4}, {4,1},
                {5,6}, {6,7}, {7,8}, {8,5},
                {1,5}, {2,6}, {3,7}, {4,8}
            }

            for _, edge in ipairs(edges) do
                local p1 = rotatedCorners[edge[1]]
                local p2 = rotatedCorners[edge[2]]
                DrawLine(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z, rgb.r, rgb.g, rgb.b, 220)
            end

            -- Marqueur central
            DrawMarker(
                43,
                lightPos.x, lightPos.y, lightPos.z,
                0.0, 0.0, 0.0,
                rot.x or 0.0, rot.y or 0.0, rot.z or 0.0,
                hs * 2.0, hs * 2.0, hs * 2.0,
                rgb.r, rgb.g, rgb.b,
                25,
                false, false, 2, nil, nil, false
            )
        end
    end

    -- Flèche directionnelle si la lumière n'a pas de prop physique
    if isPreview and editLightData.model == 'none' then
        local arrowRotZ = ((rot.z or 0.0) + (isInverted and 180.0 or 0.0)) % 360.0
        DrawMarker(
            2,
            lightPos.x + dir.x * 0.45,
            lightPos.y + dir.y * 0.45,
            lightPos.z + dir.z * 0.45,
            dir.x, dir.y, dir.z,
            rot.x, rot.y, arrowRotZ,
            0.2, 0.2, 0.2,
            rgb.r, rgb.g, rgb.b,
            240,
            false, false, 2, false, nil, nil, false
        )
    end
end

--------------------------------------------------------------------------------
-- Caméra Scriptée (Freecam Libre & Orbite)
--------------------------------------------------------------------------------

local function createScriptCam(initialPos, initialYaw)
    if orbitCam and DoesCamExist(orbitCam) then
        DestroyCam(orbitCam, false)
    end

    freecamPos = initialPos
    freecamPitch = 0.0
    freecamYaw = initialYaw
    camPitch = 20.0
    camYaw = initialYaw
    camDistance = Config.Camera.defaultDistance or 4.2

    orbitCam = CreateCam("DEFAULT_SCRIPTED_CAMERA", true)
    SetCamFov(orbitCam, Config.Camera.fov or 48.0)
    SetCamCoord(orbitCam, freecamPos.x, freecamPos.y, freecamPos.z)
    SetCamRot(orbitCam, freecamPitch, 0.0, freecamYaw, 2)
    SetCamActive(orbitCam, true)
    RenderScriptCams(true, true, 400, true, true)

    StopCamPointing(orbitCam)
end

local function updateOrbitCam(targetCenter)
    if not orbitCam or not DoesCamExist(orbitCam) then return end

    local radPitch = math.rad(camPitch)
    local radYaw = math.rad(camYaw)

    local cx = targetCenter.x + camDistance * math.cos(radPitch) * math.sin(radYaw)
    local cy = targetCenter.y - camDistance * math.cos(radPitch) * math.cos(radYaw)
    local cz = targetCenter.z + camDistance * math.sin(radPitch)

    SetCamCoord(orbitCam, cx, cy, cz)
    PointCamAtCoord(orbitCam, targetCenter.x, targetCenter.y, targetCenter.z)
end

local function destroyScriptCam()
    if orbitCam and DoesCamExist(orbitCam) then
        StopCamPointing(orbitCam)
        RenderScriptCams(false, true, 400, true, true)
        DestroyCam(orbitCam, false)
        orbitCam = nil
    end
end

function GetCreatorCamData()
    if orbitCam and DoesCamExist(orbitCam) then
        return GetCamCoord(orbitCam), GetCamRot(orbitCam, 2), GetCamFov(orbitCam)
    end
    return GetGameplayCamCoord(), GetGameplayCamRot(2), 48.0
end

--------------------------------------------------------------------------------
-- Désactivation Complète des Contrôles & Mode Ghost (Noclip)
--------------------------------------------------------------------------------

local function disableControls()
    DisableAllControlActions(0)
    DisablePlayerFiring(PlayerId(), true)

    -- Bloquer formellement les commandes armes, attaques et molette
    DisableControlAction(0, 14, true)  -- INPUT_WEAPON_WHEEL_NEXT
    DisableControlAction(0, 15, true)  -- INPUT_WEAPON_WHEEL_PREV
    DisableControlAction(0, 16, true)  -- INPUT_SELECT_NEXT_WEAPON
    DisableControlAction(0, 17, true)  -- INPUT_SELECT_PREV_WEAPON
    DisableControlAction(0, 24, true)  -- INPUT_ATTACK
    DisableControlAction(0, 25, true)  -- INPUT_AIM
    DisableControlAction(0, 37, true)  -- INPUT_SELECT_WEAPON
    DisableControlAction(0, 241, true) -- INPUT_CURSOR_SCROLL_UP
    DisableControlAction(0, 242, true) -- INPUT_CURSOR_SCROLL_DOWN
    DisableControlAction(0, 257, true) -- INPUT_ATTACK2
    DisableControlAction(0, 263, true) -- INPUT_MELEE_ATTACK1
    DisableControlAction(0, 264, true) -- INPUT_MELEE_ATTACK2
    DisableControlAction(0, 200, true) -- Échap / Menu Pause
end

local function setPlayerGhostMode(enable)
    local ped = PlayerPedId()
    if enable then
        SetEntityVisible(ped, false, false)
        SetEntityAlpha(ped, 0, false)
        SetEntityCollision(ped, false, false)
        FreezeEntityPosition(ped, true)
        SetPlayerInvincible(PlayerId(), true)
    else
        SetEntityVisible(ped, true, false)
        ResetEntityAlpha(ped)
        SetEntityCollision(ped, true, true)
        FreezeEntityPosition(ped, false)
        SetPlayerInvincible(PlayerId(), false)
    end
end

--------------------------------------------------------------------------------
-- Ouverture / Fermeture de l'Éditeur
--------------------------------------------------------------------------------

local function openEditor()
    if isEditing then return end

    lastToggleTime = GetGameTimer()

    local ped = PlayerPedId()
    local pCoords = GetEntityCoords(ped)
    local pHeading = GetEntityHeading(ped)

    studioOrigin = pCoords
    isEditing = true
    hasSelectedProp = false
    selectedLightId = nil
    cleanEditProp()

    cameraMode = 'freecam'
    isGizmoDragging = false

    -- Mettre le joueur en mode fantôme
    setPlayerGhostMode(true)

    -- Initialiser la caméra au niveau des yeux en vol libre direct
    local initialCamPos = pCoords + vector3(0.0, 0.0, 0.8)
    createScriptCam(initialCamPos, pHeading)

    -- Donner le focus total au NUI (souris et clavier)
    SetNuiFocus(true, true)

    SendNUIMessage({
        action = 'open',
        toolkitName = 'Creator Toolkit',
        studios = Config.Studios,
        defaultStudio = Config.DefaultStudio or 'light',
        props = Config.LightProps,
        propCategories = Config.PropCategories or {},
        propCatalog = Config.PropCatalog or {},
        defaults = Config.Defaults,
        coords = { x = pCoords.x, y = pCoords.y, z = pCoords.z },
        heading = pHeading,
        rotation = { x = editRotation.x, y = editRotation.y, z = editRotation.z },
        hierarchy = currentHierarchy,
        hasSelectedProp = false
    })

    local activeSt = currentStudio or Config.DefaultStudio or 'light'
    TriggerEvent('creatortoolkit:client:setStudio', activeSt)
    if activeSt == 'prop' then
        TriggerServerEvent('creatortoolkit:propStudio:requestProps')
    end
end

local function closeEditor()
    if not isEditing then return end

    lastToggleTime = GetGameTimer()

    isEditing = false
    hasSelectedProp = false
    selectedLightId = nil
    isGizmoDragging = false
    editAttachData = nil

    TriggerEvent('creatortoolkit:client:setStudio', 'none')

    cleanEditProp()
    destroyScriptCam()
    setPlayerGhostMode(false)

    SetNuiFocus(false, false)

    SendNUIMessage({
        action = 'close'
    })
end

--------------------------------------------------------------------------------
-- Callbacks NUI (Gizmo Three.js & Caméra)
--------------------------------------------------------------------------------

-- Mouvement direct depuis le Gizmo TransformControls open-source
RegisterNUICallback('moveEntity', function(data, cb)
    if not isEditing then
        cb('ok')
        return
    end

    local oldPos = editCoords
    local oldHeading = editHeading

    local newPos = editCoords
    local newRot = editRotation
    local newHeading = editHeading

    if data.position then
        newPos = vector3(
            tonumber(data.position.x) or editCoords.x,
            tonumber(data.position.y) or editCoords.y,
            tonumber(data.position.z) or editCoords.z
        )
    end

    if data.rotation then
        newRot = vector3(
            tonumber(data.rotation.x) or 0.0,
            tonumber(data.rotation.y) or 0.0,
            tonumber(data.rotation.z) or editHeading
        )
        newHeading = newRot.z
    end

    local deltaCoords = newPos - oldPos
    local deltaHeading = (newHeading - oldHeading)

    editCoords = newPos
    editRotation = newRot
    editHeading = newHeading

    if editProp and DoesEntityExist(editProp) then
        SetEntityCoordsNoOffset(editProp, editCoords.x, editCoords.y, editCoords.z, true, false, false)
        SetEntityRotation(editProp, editRotation.x, editRotation.y, editRotation.z, 2, true)
    end

    -- Mouvement de Famille : déplacer et pivoter toutes les lumières de la famille ensemble
    local targetFamily = (data.familyId and data.familyId ~= "") and data.familyId
        or ((data.family and data.family ~= "") and data.family
        or ((data.group and data.group ~= "") and data.group
        or (editLightData.familyId or editLightData.group)))

    local applyFamily = (data.applyToFamily == true)
        or (data.applyToGroup == true)
        or (data.familyId ~= nil and data.familyId ~= "")
        or (data.family ~= nil and data.family ~= "")
        or (targetFamily and data.applyToFamily ~= false)

    if targetFamily and applyFamily and (#deltaCoords > 0.0001 or math.abs(deltaHeading) > 0.01) then
        local rad = math.rad(deltaHeading)
        local cosA = math.cos(rad)
        local sinA = math.sin(rad)
        local pivot = oldPos

        for _, l in ipairs(allLights) do
            local isMember = (l.familyId == targetFamily) or (l.group == targetFamily)
            if isMember and l.id ~= selectedLightId then
                local curX = l.coords.x
                local curY = l.coords.y
                local curZ = l.coords.z

                -- 1. Déplacement en translation
                curX = curX + deltaCoords.x
                curY = curY + deltaCoords.y
                curZ = curZ + deltaCoords.z

                -- 2. Rotation rigide autour du pivot si rotation appliquée
                if math.abs(deltaHeading) > 0.01 then
                    local dx = curX - pivot.x
                    local dy = curY - pivot.y
                    local rx = (dx * cosA) - (dy * sinA)
                    local ry = (dx * sinA) + (dy * cosA)
                    curX = pivot.x + rx
                    curY = pivot.y + ry

                    l.heading = ((l.heading or 0.0) + deltaHeading) % 360.0
                    if l.rotation then
                        l.rotation = {
                            x = l.rotation.x or 0.0,
                            y = l.rotation.y or 0.0,
                            z = l.heading
                        }
                    end
                end

                l.coords = { x = curX, y = curY, z = curZ }

                -- 3. Mise à jour de l'entité prop 3D dans le monde FiveM
                local ent = spawnedEntities[l.id]
                if ent and DoesEntityExist(ent) then
                    SetEntityCoordsNoOffset(ent, curX, curY, curZ, true, false, false)
                    if math.abs(deltaHeading) > 0.01 then
                        local rotX = (l.rotation and l.rotation.x) or 0.0
                        local rotY = (l.rotation and l.rotation.y) or 0.0
                        SetEntityRotation(ent, rotX, rotY, l.heading, 2, true)
                    end
                end
            end
        end
    end

    -- Si l'objet est attaché, mettre à jour son offset et sa rotation relative à l'entité
    if editAttachData and DoesEntityExist(editAttachData.entity) then
        local relOffset = GetOffsetFromEntityGivenWorldCoords(editAttachData.entity, editCoords.x, editCoords.y, editCoords.z)
        local entRot = GetEntityRotation(editAttachData.entity, 2)
        local relRot = editRotation - entRot

        editAttachData.offset = { x = relOffset.x, y = relOffset.y, z = relOffset.z }
        editAttachData.rotation = { x = relRot.x, y = relRot.y, z = relRot.z }

        if editProp and DoesEntityExist(editProp) then
            AttachEntityToEntity(
                editProp,
                editAttachData.entity,
                editAttachData.bone or 0,
                relOffset.x, relOffset.y, relOffset.z,
                relRot.x, relRot.y, relRot.z,
                false, false, false, false, 2, true
            )
        end
    end

    cb('ok')
end)

-- Définir le centre de pivot d'un groupe pour le gizmo
RegisterNUICallback('setGroupCenter', function(data, cb)
    if data.coords then
        editCoords = vector3(
            tonumber(data.coords.x) or editCoords.x,
            tonumber(data.coords.y) or editCoords.y,
            tonumber(data.coords.z) or editCoords.z
        )
    end
    if data.heading ~= nil then
        editHeading = tonumber(data.heading) or 0.0
        editRotation = vector3(0.0, 0.0, editHeading)
    end
    cb('ok')
end)

RegisterNUICallback('setDragging', function(data, cb)
    isGizmoDragging = data.dragging and true or false
    cb('ok')
end)

-- Basculer Mode Caméra (Orbite / Freecam)
RegisterNUICallback('setCameraMode', function(data, cb)
    if data.mode then
        if data.mode == 'freecam' then
            cameraMode = 'freecam'
            if orbitCam and DoesCamExist(orbitCam) then
                freecamPos = GetCamCoord(orbitCam)
                local rot = GetCamRot(orbitCam, 2)
                freecamPitch = rot.x
                freecamYaw = rot.z
                StopCamPointing(orbitCam)
                SetCamRot(orbitCam, freecamPitch, 0.0, freecamYaw, 2)
            end
        elseif data.mode == 'orbit' then
            if hasSelectedProp then
                cameraMode = 'orbit'
                if orbitCam and DoesCamExist(orbitCam) then
                    local curCamPos = GetCamCoord(orbitCam)
                    local offset = curCamPos - editCoords
                    local dist = #offset
                    camDistance = math.max(Config.Camera.minDistance or 1.4, math.min(Config.Camera.maxDistance or 18.0, dist))
                end
            else
                cameraMode = 'freecam'
            end
        end
    end
    cb('ok')
end)

-- Déplacement en Freecam
RegisterNUICallback('freecamMove', function(data, cb)
    if not isEditing or not orbitCam or cameraMode ~= 'freecam' then
        cb('ok')
        return
    end

    local radYaw = math.rad(freecamYaw)
    local radPitch = math.rad(freecamPitch)

    local forwardVec = vector3(
        -math.sin(radYaw) * math.cos(radPitch),
        math.cos(radYaw) * math.cos(radPitch),
        math.sin(radPitch)
    )
    local rightVec = vector3(math.cos(radYaw), math.sin(radYaw), 0.0)
    local upVec = vector3(0.0, 0.0, 1.0)

    local baseSpeed = data.fast and (Config.Camera.freecamFastSpeed or 20.0) or (Config.Camera.freecamSpeed or 9.0)
    local speed = baseSpeed * (tonumber(data.dt) or 0.016)

    local fwd = tonumber(data.forward) or 0.0
    local rgt = tonumber(data.right) or 0.0
    local up = tonumber(data.up) or 0.0

    local delta = (forwardVec * fwd + rightVec * rgt + upVec * up) * speed
    local nextPos = freecamPos + delta

    -- Délimitation du périmètre
    local anchor = (hasSelectedProp and editCoords) or studioOrigin
    local maxRadius = Config.Camera.freecamZoneRadius or 50.0
    local offset = nextPos - anchor
    local dist = #offset

    if dist > maxRadius then
        nextPos = anchor + (offset / dist) * maxRadius
    end

    freecamPos = nextPos
    SetCamCoord(orbitCam, freecamPos.x, freecamPos.y, freecamPos.z)
    StopCamPointing(orbitCam)
    SetCamRot(orbitCam, freecamPitch, 0.0, freecamYaw, 2)

    cb('ok')
end)

-- Rotation de la caméra
RegisterNUICallback('rotateCamera', function(data, cb)
    if not isEditing or not orbitCam then
        cb('ok')
        return
    end

    local sens = Config.Camera.orbitSensitivity or 0.35
    local dx = (tonumber(data.x) or 0.0) * sens
    local dy = (tonumber(data.y) or 0.0) * sens

    if cameraMode == 'orbit' then
        camYaw = (camYaw - dx) % 360.0
        camPitch = math.max(-45.0, math.min(75.0, camPitch + dy))
    else
        freecamYaw = (freecamYaw - dx) % 360.0
        freecamPitch = math.max(-85.0, math.min(85.0, freecamPitch - dy))
        StopCamPointing(orbitCam)
        SetCamRot(orbitCam, freecamPitch, 0.0, freecamYaw, 2)
    end

    cb('ok')
end)

-- Zoom caméra
RegisterNUICallback('zoomCamera', function(data, cb)
    if not isEditing or not orbitCam then
        cb('ok')
        return
    end

    local sens = Config.Camera.zoomSensitivity or 0.50
    local rawDelta = tonumber(data.delta) or 0
    local step = (rawDelta > 0 and 1 or -1) * sens
    local minD = Config.Camera.minDistance or 1.4
    local maxD = Config.Camera.maxDistance or 20.0

    camDistance = math.max(minD, math.min(maxD, camDistance + step))

    cb('ok')
end)

-- Sélection d'une lumière existante
RegisterNUICallback('selectExistingLight', function(data, cb)
    if not isEditing or not data.id then
        cb('error')
        return
    end

    local target = nil
    for _, l in ipairs(allLights) do
        if l.id == data.id then
            target = l
            break
        end
    end

    if target then
        cleanEditProp()

        if spawnedEntities[target.id] and DoesEntityExist(spawnedEntities[target.id]) then
            DeleteEntity(spawnedEntities[target.id])
            spawnedEntities[target.id] = nil
        end

        selectedLightId = target.id
        hasSelectedProp = true
        editCoords = vector3(target.coords.x, target.coords.y, target.coords.z)
        local rot = target.rotation or vector3(0.0, 0.0, target.heading or 0.0)
        editRotation = vector3(rot.x or 0.0, rot.y or 0.0, rot.z or target.heading or 0.0)
        editHeading = editRotation.z
        editLightData = {
            model = target.model or 'none',
            offsetZ = target.offsetZ or 0.0,
            rgb = { r = target.rgb.r, g = target.rgb.g, b = target.rgb.b },
            intensity = target.intensity,
            radius = target.radius,
            renderDistance = target.renderDistance or 80.0,
            textureVariation = target.textureVariation or 0,
            collision = target.collision == true,
            castShadow = (target.castShadow ~= false),
            shape = target.shape or 'cone',
            shapeParam = target.shapeParam or (target.shape == 'cone' and 55.0 or 1.0),
            invertDirection = resolveInvertDirection(target.invertDirection, target.model),
            nativeLight = target.nativeLight and true or false,
            groupId = target.groupId,
            familyId = target.familyId,
            group = target.familyId or target.groupId or target.group
        }

        if target.attached then
            local attachedEntity = findAttachedEntity(target.attached)
            attachedEntityCache[target.id] = attachedEntity

            if attachedEntity and DoesEntityExist(attachedEntity) then
                local curWorldPos = GetOffsetFromEntityInWorldCoords(
                    attachedEntity,
                    target.attached.offset.x,
                    target.attached.offset.y,
                    target.attached.offset.z
                )
                local entRot = GetEntityRotation(attachedEntity, 2)
                editCoords = curWorldPos
                editRotation = vector3(
                    entRot.x + (target.attached.rotation.x or 0.0),
                    entRot.y + (target.attached.rotation.y or 0.0),
                    entRot.z + (target.attached.rotation.z or 0.0)
                )
                editHeading = editRotation.z
            end

            editAttachData = {
                type = target.attached.type,
                name = target.attached.name,
                plate = target.attached.plate,
                netId = target.attached.netId,
                serverId = target.attached.serverId,
                isSelf = target.attached.isSelf,
                bone = target.attached.bone or 0,
                offset = target.attached.offset,
                rotation = target.attached.rotation,
                entity = attachedEntity
            }
            SendNUIMessage({
                action = 'updateAttachment',
                attached = true,
                targetType = target.attached.type,
                targetName = target.attached.name or target.attached.plate or "Entité attachée"
            })
        else
            editAttachData = nil
            SendNUIMessage({
                action = 'updateAttachment',
                attached = false
            })
        end

        if editLightData.model ~= 'none' then
            editProp = spawnEditProp(editLightData.model, editCoords, editRotation)
        end

        SendNUIMessage({
            action = 'updateTransform',
            coords = { x = editCoords.x, y = editCoords.y, z = editCoords.z },
            heading = editHeading,
            rotation = { x = editRotation.x, y = editRotation.y, z = editRotation.z }
        })
    end

    cb('ok')
end)

-- Spawn d'un nouveau prop (ou source pure)
RegisterNUICallback('spawnNewProp', function(data, cb)
    if not isEditing or not data.model then
        cb('error')
        return
    end

    cleanEditProp()
    editAttachData = nil
    SendNUIMessage({
        action = 'updateAttachment',
        attached = false
    })

    local camPos = (orbitCam and DoesCamExist(orbitCam)) and GetCamCoord(orbitCam) or studioOrigin
    local camRot = (orbitCam and DoesCamExist(orbitCam)) and GetCamRot(orbitCam, 2) or vector3(0.0, 0.0, 0.0)
    local forward = rotationToDirection(camRot)
    local spawnPos = camPos + (forward * 3.2)

    local foundGround, groundZ = GetGroundZFor_3dCoord(spawnPos.x, spawnPos.y, spawnPos.z + 1.0, false)
    if foundGround and math.abs(groundZ - spawnPos.z) < 2.5 then
        spawnPos = vector3(spawnPos.x, spawnPos.y, groundZ)
    end

    editCoords = spawnPos
    editHeading = (camRot.z + 180.0) % 360.0
    editRotation = vector3(0.0, 0.0, editHeading)

    editLightData.model = data.model
    editLightData.offsetZ = data.offsetZ or 0.0
    editLightData.invertDirection = (data.model ~= 'none')
    editLightData.nativeLight = false
    editLightData.castShadow = (Config.Defaults and Config.Defaults.castShadow ~= false)
    editLightData.groupId = nil
    editLightData.familyId = nil
    editLightData.group = nil
    selectedLightId = nil
    hasSelectedProp = true

    if editLightData.model ~= 'none' then
        editProp = spawnEditProp(editLightData.model, editCoords, editRotation)
    end

    SendNUIMessage({
        action = 'updateTransform',
        coords = { x = editCoords.x, y = editCoords.y, z = editCoords.z },
        heading = editHeading
    })

    cb('ok')
end)

-- Désélectionner le prop en cours
RegisterNUICallback('deselectProp', function(_, cb)
    cleanEditProp()
    editAttachData = nil
    SendNUIMessage({
        action = 'updateAttachment',
        attached = false
    })
    hasSelectedProp = false
    selectedLightId = nil
    cb('ok')
end)

-- Supprimer la lumière
RegisterNUICallback('deleteLight', function(data, cb)
    local targetId = data.id or selectedLightId
    if targetId then
        TriggerServerEvent('lightstudio:deleteLight', targetId)
        cleanEditProp()
        editAttachData = nil
        SendNUIMessage({
            action = 'updateAttachment',
            attached = false
        })
        hasSelectedProp = false
        selectedLightId = nil
    end
    cb('ok')
end)

--------------------------------------------------------------------------------
-- Callbacks NUI : Attachement (Véhicule, Ped, Raycast, Détacher)
--------------------------------------------------------------------------------

RegisterNUICallback('attachNearestVehicle', function(_, cb)
    if not isEditing or not hasSelectedProp then
        cb({ success = false, message = "Sélectionnez d'abord un prop ou une lumière" })
        return
    end

    local searchCenter = editCoords
    local vehs = GetGamePool('CVehicle')
    local closestVeh = nil
    local minDistance = 25.0

    for _, v in ipairs(vehs) do
        local vCoords = GetEntityCoords(v)
        local dist = #(searchCenter - vCoords)
        if dist < minDistance then
            closestVeh = v
            minDistance = dist
        end
    end

    if not closestVeh then
        local ped = PlayerPedId()
        local pedVeh = GetVehiclePedIsIn(ped, false)
        if pedVeh ~= 0 then
            closestVeh = pedVeh
        else
            closestVeh = GetClosestVehicle(searchCenter.x, searchCenter.y, searchCenter.z, 20.0, 0, 70)
            if closestVeh == 0 then closestVeh = nil end
        end
    end

    if closestVeh and DoesEntityExist(closestVeh) then
        local ok = attachCurrentEdit(closestVeh, 'vehicle', nil)
        if ok then
            cb({ success = true, name = editAttachData.name, type = 'vehicle' })
            return
        end
    end

    cb({ success = false, message = "Aucun véhicule détecté à proximité" })
end)

RegisterNUICallback('attachPlayerPed', function(_, cb)
    if not isEditing or not hasSelectedProp then
        cb({ success = false, message = "Sélectionnez d'abord un prop ou une lumière" })
        return
    end

    local ped = PlayerPedId()
    local ok = attachCurrentEdit(ped, 'ped', 'Mon Personnage (Ped)')
    if ok then
        cb({ success = true, name = editAttachData.name, type = 'ped' })
    else
        cb({ success = false, message = "Impossible d'attacher au personnage" })
    end
end)

RegisterNUICallback('attachRaycast', function(_, cb)
    if not isEditing or not hasSelectedProp or not orbitCam then
        cb({ success = false, message = "Caméra non disponible" })
        return
    end

    local camCoord = GetCamCoord(orbitCam)
    local camRot = GetCamRot(orbitCam, 2)
    local forward = rotationToDirection(camRot)
    local rayEnd = camCoord + (forward * 60.0)

    local rayHandle = StartShapeTestRay(camCoord.x, camCoord.y, camCoord.z, rayEnd.x, rayEnd.y, rayEnd.z, -1, PlayerPedId(), 0)
    local _, hit, hitCoords, _, entityHit = GetShapeTestResult(rayHandle)

    if hit == 1 and entityHit and DoesEntityExist(entityHit) and entityHit ~= editProp then
        local entType = GetEntityType(entityHit)
        if entType == 2 then -- Véhicule
            attachCurrentEdit(entityHit, 'vehicle', nil)
            cb({ success = true, name = editAttachData.name, type = 'vehicle' })
            return
        elseif entType == 1 then -- Ped
            attachCurrentEdit(entityHit, 'ped', nil)
            cb({ success = true, name = editAttachData.name, type = 'ped' })
            return
        elseif entType == 3 then -- Objet
            attachCurrentEdit(entityHit, 'object', nil)
            cb({ success = true, name = editAttachData.name, type = 'object' })
            return
        end
    end

    cb({ success = false, message = "Aucune entité (véhicule, ped, objet) visée" })
end)

RegisterNUICallback('detachEntity', function(_, cb)
    detachCurrentEdit()
    cb('ok')
end)

-- Prévisualisation des paramètres lumière & modèle
RegisterNUICallback('updatePreview', function(data, cb)
    if not isEditing then
        cb('ok')
        return
    end

    if data.model and data.model ~= editLightData.model then
        editLightData.model = data.model
        editLightData.offsetZ = data.offsetZ or 0.0
        if hasSelectedProp then
            if editLightData.model == 'none' then
                cleanEditProp()
            else
                editProp = spawnEditProp(editLightData.model, editCoords, editRotation)
            end
        end
    end

    if data.rgb then
        editLightData.rgb = {
            r = tonumber(data.rgb.r) or 255,
            g = tonumber(data.rgb.g) or 180,
            b = tonumber(data.rgb.b) or 60
        }
    end

    if data.intensity ~= nil then
        editLightData.intensity = tonumber(data.intensity) + 0.0
    end

    if data.radius ~= nil then
        editLightData.radius = tonumber(data.radius) + 0.0
    end

    if data.shape ~= nil then
        editLightData.shape = data.shape
    end

    if data.shapeParam ~= nil then
        editLightData.shapeParam = tonumber(data.shapeParam) + 0.0
    end

    if data.invertDirection ~= nil then
        editLightData.invertDirection = (data.invertDirection == true)
    end

    if data.nativeLight ~= nil then
        editLightData.nativeLight = (data.nativeLight == true)
        if editProp and DoesEntityExist(editProp) then
            SetEntityLights(editProp, editLightData.nativeLight)
        end
    end

    if data.renderDistance ~= nil then
        editLightData.renderDistance = tonumber(data.renderDistance) + 0.0
    end

    if data.textureVariation ~= nil then
        editLightData.textureVariation = tonumber(data.textureVariation) or 0
        if editProp and DoesEntityExist(editProp) then
            SetObjectTextureVariation(editProp, editLightData.textureVariation)
        end
    end

    if data.collision ~= nil then
        editLightData.collision = (data.collision == true)
        if editProp and DoesEntityExist(editProp) then
            SetEntityCollision(editProp, editLightData.collision, editLightData.collision)
        end
    end

    if data.castShadow ~= nil then
        editLightData.castShadow = (data.castShadow == true)
    end

    if data.groupId ~= nil then
        editLightData.groupId = (data.groupId == false or data.groupId == "") and nil or data.groupId
    end

    if data.familyId ~= nil then
        editLightData.familyId = (data.familyId == false or data.familyId == "") and nil or data.familyId
        editLightData.group = editLightData.familyId
    end

    if data.group ~= nil then
        editLightData.group = (data.group == false or data.group == "") and nil or data.group
    end

    if data.coords then
        editCoords = vector3(
            tonumber(data.coords.x) or editCoords.x,
            tonumber(data.coords.y) or editCoords.y,
            tonumber(data.coords.z) or editCoords.z
        )
        if editProp and DoesEntityExist(editProp) then
            SetEntityCoordsNoOffset(editProp, editCoords.x, editCoords.y, editCoords.z, true, false, false)
        end
    end

    if data.rotation then
        editRotation = vector3(
            tonumber(data.rotation.x) or editRotation.x,
            tonumber(data.rotation.y) or editRotation.y,
            tonumber(data.rotation.z) or editRotation.z
        )
        editHeading = editRotation.z
        if editProp and DoesEntityExist(editProp) then
            SetEntityRotation(editProp, editRotation.x, editRotation.y, editRotation.z, 2, true)
        end
    elseif data.heading ~= nil then
        editHeading = tonumber(data.heading) % 360.0
        editRotation = vector3(editRotation.x, editRotation.y, editHeading)
        if editProp and DoesEntityExist(editProp) then
            SetEntityRotation(editProp, editRotation.x, editRotation.y, editRotation.z, 2, true)
        end
    end

    cb('ok')
end)

-- Plaquer au sol
RegisterNUICallback('snapGround', function(data, cb)
    if not isEditing then
        cb({ success = false })
        return
    end

    local foundGround, groundZ = GetGroundZFor_3dCoord(editCoords.x, editCoords.y, editCoords.z + 1.0, false)
    if foundGround then
        local deltaZ = groundZ - editCoords.z
        editCoords = vector3(editCoords.x, editCoords.y, groundZ)

        if editProp and DoesEntityExist(editProp) then
            SetEntityCoordsNoOffset(editProp, editCoords.x, editCoords.y, editCoords.z, true, false, false)
        end

        local activeGroup = (data and data.group) or editLightData.group
        if activeGroup and activeGroup ~= "" then
            for _, l in ipairs(allLights) do
                if l.group == activeGroup and l.id ~= selectedLightId then
                    l.coords.z = l.coords.z + deltaZ
                    local ent = spawnedEntities[l.id]
                    if ent and DoesEntityExist(ent) then
                        SetEntityCoordsNoOffset(ent, l.coords.x, l.coords.y, l.coords.z, true, false, false)
                    end
                end
            end
        end

        SendNUIMessage({
            action = 'updateTransform',
            coords = { x = editCoords.x, y = editCoords.y, z = editCoords.z },
            heading = editHeading,
            rotation = { x = editRotation.x, y = editRotation.y, z = editRotation.z }
        })

        cb({ success = true, coords = { x = editCoords.x, y = editCoords.y, z = editCoords.z }, deltaZ = deltaZ })
    else
        cb({ success = false })
    end
end)

-- Sauvegarder
RegisterNUICallback('save', function(data, cb)
    if isEditing and hasSelectedProp then
        local targetId = data.id or selectedLightId

        local attachedData = nil
        if editAttachData then
            attachedData = {
                type = editAttachData.type,
                name = editAttachData.name,
                plate = editAttachData.plate,
                netId = editAttachData.netId,
                serverId = editAttachData.serverId,
                isSelf = editAttachData.isSelf,
                bone = editAttachData.bone or 0,
                offset = editAttachData.offset,
                rotation = editAttachData.rotation
            }
        end

        local lightPayload = {
            id = targetId,
            model = editLightData.model,
            coords = { x = editCoords.x, y = editCoords.y, z = editCoords.z },
            heading = editHeading,
            rotation = {
                x = editRotation.x,
                y = editRotation.y,
                z = editRotation.z
            },
            rgb = editLightData.rgb,
            intensity = editLightData.intensity,
            radius = editLightData.radius,
            renderDistance = editLightData.renderDistance or (data and data.renderDistance) or 80.0,
            textureVariation = editLightData.textureVariation or (data and data.textureVariation) or 0,
            collision = (editLightData.collision == true) or (data and data.collision == true),
            castShadow = (data and data.castShadow ~= nil) and (data.castShadow == true) or (editLightData.castShadow ~= false),
            offsetZ = editLightData.offsetZ or 0.0,
            shape = editLightData.shape or 'cone',
            shapeParam = editLightData.shapeParam or (editLightData.shape == 'cone' and 55.0 or 1.0),
            invertDirection = (editLightData.invertDirection == true),
            nativeLight = (editLightData.nativeLight == true),
            groupId = editLightData.groupId or (data and data.groupId),
            familyId = editLightData.familyId or (data and data.familyId),
            group = editLightData.familyId or editLightData.groupId or editLightData.group or (data and data.group),
            attached = attachedData
        }

        if targetId then
            TriggerServerEvent('lightstudio:updateLight', lightPayload)
        else
            TriggerServerEvent('lightstudio:saveLight', lightPayload)
        end
    end

    cleanEditProp()
    editAttachData = nil
    hasSelectedProp = false
    selectedLightId = nil
    cb('ok')
end)

local lastDuplicateTime = 0

local function requestDuplicateCurrentProp(extraData)
    local now = GetGameTimer()
    if (now - lastDuplicateTime) < 300 then return false end
    lastDuplicateTime = now

    if not isEditing then
        return false
    end

    if not hasSelectedProp and not (extraData and (extraData.id or extraData.model)) then
        return false
    end

    local attachedData = nil
    if editAttachData then
        attachedData = {
            type = editAttachData.type,
            name = editAttachData.name,
            plate = editAttachData.plate,
            netId = editAttachData.netId,
            serverId = editAttachData.serverId,
            isSelf = editAttachData.isSelf,
            bone = editAttachData.bone or 0,
            offset = editAttachData.offset,
            rotation = editAttachData.rotation
        }
    end

    local model = (editLightData and editLightData.model) or (extraData and extraData.model) or 'none'
    local coords = (editCoords and { x = editCoords.x, y = editCoords.y, z = editCoords.z }) or (extraData and extraData.coords) or { x = 0.0, y = 0.0, z = 0.0 }
    local rot = (editRotation and { x = editRotation.x, y = editRotation.y, z = editRotation.z }) or (extraData and extraData.rotation) or { x = 0.0, y = 0.0, z = 0.0 }
    local heading = editHeading or (extraData and extraData.heading) or rot.z or 0.0

    local payload = {
        id = selectedLightId or (extraData and extraData.id),
        model = model,
        coords = coords,
        heading = heading,
        rotation = rot,
        rgb = (editLightData and editLightData.rgb) or (extraData and extraData.rgb) or { r = 255, g = 255, b = 255 },
        intensity = (editLightData and editLightData.intensity) or (extraData and extraData.intensity) or 10.0,
        radius = (editLightData and editLightData.radius) or (extraData and extraData.radius) or 5.0,
        renderDistance = (editLightData and editLightData.renderDistance) or (extraData and extraData.renderDistance) or 80.0,
        textureVariation = (editLightData and editLightData.textureVariation) or (extraData and extraData.textureVariation) or 0,
        collision = (editLightData and editLightData.collision == true) or (extraData and extraData.collision == true),
        castShadow = (extraData and extraData.castShadow ~= nil) and (extraData.castShadow == true) or (editLightData and editLightData.castShadow ~= false),
        offsetZ = (editLightData and editLightData.offsetZ) or (extraData and extraData.offsetZ) or 0.0,
        shape = (editLightData and editLightData.shape) or (extraData and extraData.shape) or 'cone',
        shapeParam = (editLightData and editLightData.shapeParam) or (extraData and extraData.shapeParam) or 55.0,
        invertDirection = (editLightData and editLightData.invertDirection == true) or (extraData and extraData.invertDirection == true),
        nativeLight = (editLightData and editLightData.nativeLight == true) or (extraData and extraData.nativeLight == true),
        groupId = (editLightData and editLightData.groupId) or (extraData and extraData.groupId),
        familyId = (editLightData and editLightData.familyId) or (extraData and extraData.familyId),
        group = (editLightData and (editLightData.familyId or editLightData.groupId or editLightData.group)) or (extraData and (extraData.familyId or extraData.groupId or extraData.group)),
        attached = attachedData or (extraData and extraData.attached)
    }

    TriggerServerEvent('lightstudio:duplicateLight', payload)
    return true
end

-- Duplication instantanée d'un prop / d'une lumière (LShift)
RegisterNUICallback('duplicateLight', function(data, cb)
    local ok = requestDuplicateCurrentProp(data)
    cb(ok and 'ok' or 'error')
end)

RegisterNetEvent('lightstudio:onLightDuplicated', function(newLight)
    if not isEditing or not newLight then return end

    -- Nettoyer toute entité déjà créée par syncLights pour cette copie
    if spawnedEntities[newLight.id] and DoesEntityExist(spawnedEntities[newLight.id]) then
        DeleteEntity(spawnedEntities[newLight.id])
        spawnedEntities[newLight.id] = nil
    end

    -- 1. Mettre à jour l'état de l'éditeur sur la nouvelle copie
    selectedLightId = newLight.id
    hasSelectedProp = true
    editCoords = vector3(newLight.coords.x, newLight.coords.y, newLight.coords.z)
    local rot = newLight.rotation or vector3(0.0, 0.0, newLight.heading or 0.0)
    editRotation = vector3(rot.x or 0.0, rot.y or 0.0, rot.z or newLight.heading or 0.0)
    editHeading = editRotation.z

    editLightData = {
        model = newLight.model or 'none',
        offsetZ = newLight.offsetZ or 0.0,
        rgb = { r = newLight.rgb.r, g = newLight.rgb.g, b = newLight.rgb.b },
        intensity = newLight.intensity,
        radius = newLight.radius,
        renderDistance = newLight.renderDistance or 80.0,
        textureVariation = newLight.textureVariation or 0,
        collision = (newLight.collision == true),
        castShadow = (newLight.castShadow ~= false),
        shape = newLight.shape or 'cone',
        shapeParam = newLight.shapeParam or (newLight.shape == 'cone' and 55.0 or 1.0),
        invertDirection = resolveInvertDirection(newLight.invertDirection, newLight.model),
        nativeLight = (newLight.nativeLight == true),
        groupId = newLight.groupId,
        familyId = newLight.familyId,
        group = newLight.familyId or newLight.groupId or newLight.group
    }

    cleanEditProp()
    if editLightData.model ~= 'none' then
        editProp = spawnEditProp(editLightData.model, editCoords, editRotation)
    end

    -- Réactualiser les entités du monde pour faire apparaître l'original instantanément
    refreshNearbyLights()

    -- 2. Transmettre à NUI la sélection immédiate de la nouvelle copie
    SendNUIMessage({
        action = 'onLightDuplicated',
        light = newLight
    })

    SendNUIMessage({
        action = 'updateTransform',
        coords = { x = editCoords.x, y = editCoords.y, z = editCoords.z },
        heading = editHeading,
        rotation = { x = editRotation.x, y = editRotation.y, z = editRotation.z }
    })
end)

-- Prévisualisation instantanée pour tout un groupe (0ms lag dans le viewport 3D)
RegisterNUICallback('updateGroupPreview', function(data, cb)
    if not isEditing or not data or not data.ids then
        cb('error')
        return
    end

    local updates = data.updates or {}
    for _, id in ipairs(data.ids) do
        for _, l in ipairs(allLights) do
            if l.id == id then
                if updates.rgb then
                    l.rgb = {
                        r = tonumber(updates.rgb.r) or l.rgb.r,
                        g = tonumber(updates.rgb.g) or l.rgb.g,
                        b = tonumber(updates.rgb.b) or l.rgb.b
                    }
                end
                if updates.intensity ~= nil then l.intensity = tonumber(updates.intensity) + 0.0 end
                if updates.radius ~= nil then l.radius = tonumber(updates.radius) + 0.0 end
                if updates.shape ~= nil then l.shape = updates.shape end
                if updates.shapeParam ~= nil then l.shapeParam = tonumber(updates.shapeParam) + 0.0 end
                if updates.invertDirection ~= nil then l.invertDirection = (updates.invertDirection == true) end
                if updates.castShadow ~= nil then l.castShadow = (updates.castShadow == true) end
                if updates.nativeLight ~= nil then
                    l.nativeLight = (updates.nativeLight == true)
                    local prop = spawnedEntities[id]
                    if prop and DoesEntityExist(prop) then
                        SetEntityLights(prop, l.nativeLight)
                    end
                end
            end
        end

        if selectedLightId == id then
            if updates.rgb then editLightData.rgb = updates.rgb end
            if updates.intensity ~= nil then editLightData.intensity = updates.intensity end
            if updates.radius ~= nil then editLightData.radius = updates.radius end
            if updates.shape ~= nil then editLightData.shape = updates.shape end
            if updates.shapeParam ~= nil then editLightData.shapeParam = updates.shapeParam end
            if updates.invertDirection ~= nil then editLightData.invertDirection = updates.invertDirection end
            if updates.castShadow ~= nil then editLightData.castShadow = updates.castShadow end
            if updates.nativeLight ~= nil then editLightData.nativeLight = updates.nativeLight end
        end
    end

    cb('ok')
end)

-- Sauvegarde collective d'un groupe vers le serveur
RegisterNUICallback('saveGroup', function(data, cb)
    if not data or not data.ids then
        cb('error')
        return
    end

    local positions = data.positions or {}
    for _, l in ipairs(allLights) do
        if positions[l.id] then
            local p = positions[l.id]
            if p.coords then l.coords = p.coords end
            if p.heading ~= nil then l.heading = p.heading end
            if p.rotation then l.rotation = p.rotation end
        end
    end

    TriggerServerEvent('lightstudio:updateGroupLights', {
        ids = data.ids,
        group = data.group,
        positions = data.positions,
        updates = data.updates
    })
    cb('ok')
end)

-- Sauvegarde de la Hiérarchie (Groupes & Familles)
RegisterNUICallback('saveHierarchy', function(data, cb)
    if data and data.hierarchy then
        currentHierarchy = data.hierarchy
        TriggerServerEvent('lightstudio:saveHierarchy', data.hierarchy)
    end
    cb('ok')
end)

-- Attribution de Groupe / Famille pour une liste de spots
RegisterNUICallback('assignLightsHierarchy', function(data, cb)
    if not data or not data.ids then
        cb('error')
        return
    end
    TriggerServerEvent('lightstudio:assignLightsHierarchy', data)
    cb('ok')
end)

-- Prévisualisation instantanée pour une famille
RegisterNUICallback('updateFamilyPreview', function(data, cb)
    if not isEditing or not data or not data.ids then
        cb('error')
        return
    end

    local updates = data.updates or {}
    for _, id in ipairs(data.ids) do
        for _, l in ipairs(allLights) do
            if l.id == id then
                if updates.rgb then
                    l.rgb = {
                        r = tonumber(updates.rgb.r) or l.rgb.r,
                        g = tonumber(updates.rgb.g) or l.rgb.g,
                        b = tonumber(updates.rgb.b) or l.rgb.b
                    }
                end
                if updates.intensity ~= nil then l.intensity = tonumber(updates.intensity) + 0.0 end
                if updates.radius ~= nil then l.radius = tonumber(updates.radius) + 0.0 end
                if updates.shape ~= nil then l.shape = updates.shape end
                if updates.shapeParam ~= nil then l.shapeParam = tonumber(updates.shapeParam) + 0.0 end
                if updates.invertDirection ~= nil then l.invertDirection = (updates.invertDirection == true) end
                if updates.castShadow ~= nil then l.castShadow = (updates.castShadow == true) end
                if updates.nativeLight ~= nil then
                    l.nativeLight = (updates.nativeLight == true)
                    local prop = spawnedEntities[id]
                    if prop and DoesEntityExist(prop) then
                        SetEntityLights(prop, l.nativeLight)
                    end
                end
            end
        end

        if selectedLightId == id then
            if updates.rgb then editLightData.rgb = updates.rgb end
            if updates.intensity ~= nil then editLightData.intensity = updates.intensity end
            if updates.radius ~= nil then editLightData.radius = updates.radius end
            if updates.shape ~= nil then editLightData.shape = updates.shape end
            if updates.shapeParam ~= nil then editLightData.shapeParam = updates.shapeParam end
            if updates.invertDirection ~= nil then editLightData.invertDirection = updates.invertDirection end
            if updates.castShadow ~= nil then editLightData.castShadow = updates.castShadow end
            if updates.nativeLight ~= nil then editLightData.nativeLight = updates.nativeLight end
        end
    end

    cb('ok')
end)

-- Sauvegarde collective d'une famille vers le serveur
RegisterNUICallback('saveFamily', function(data, cb)
    if not data or not data.ids then
        cb('error')
        return
    end

    local positions = data.positions or {}
    for _, l in ipairs(allLights) do
        if positions[l.id] then
            local p = positions[l.id]
            if p.coords then l.coords = p.coords end
            if p.heading ~= nil then l.heading = p.heading end
            if p.rotation then l.rotation = p.rotation end
        end
    end

    TriggerServerEvent('lightstudio:updateFamilyLights', {
        ids = data.ids,
        familyId = data.familyId or data.group,
        groupId = data.groupId,
        positions = data.positions,
        updates = data.updates
    })
    cb('ok')
end)

-- Définir le centre de pivot d'une famille pour le gizmo
RegisterNUICallback('setFamilyCenter', function(data, cb)
    if data.coords then
        editCoords = vector3(
            tonumber(data.coords.x) or editCoords.x,
            tonumber(data.coords.y) or editCoords.y,
            tonumber(data.coords.z) or editCoords.z
        )
    end
    if data.heading ~= nil then
        editHeading = tonumber(data.heading) or 0.0
        editRotation = vector3(0.0, 0.0, editHeading)
    end
    cb('ok')
end)

-- Association / Dissolution de groupe pour une liste de spots (rétrocompatibilité)
RegisterNUICallback('setGroupForLights', function(data, cb)
    if not data or not data.ids then
        cb('error')
        return
    end
    TriggerServerEvent('lightstudio:setGroupForLights', {
        ids = data.ids,
        group = data.group
    })
    cb('ok')
end)

-- Basculer de Studio (Creator Toolkit)
RegisterNUICallback('setActiveStudio', function(data, cb)
    if data and data.studio then
        currentStudio = tostring(data.studio)
        TriggerEvent('creatortoolkit:client:setStudio', currentStudio)
        if currentStudio == 'prop' then
            TriggerServerEvent('creatortoolkit:propStudio:requestProps')
        end
    end
    cb('ok')
end)

-- Annuler / Fermer
RegisterNUICallback('cancel', function(_, cb)
    local now = GetGameTimer()
    if (now - lastToggleTime) < 500 then
        cb('ok')
        return
    end
    closeEditor()
    cb('ok')
end)

--------------------------------------------------------------------------------
-- Synchronisation Multijoueur & Gestion des Entités
--------------------------------------------------------------------------------

refreshNearbyLights = function()
    local ped = PlayerPedId()
    local pCoords = GetEntityCoords(ped)
    local camCoords = GetFinalRenderedCamCoord()
    local closeLights = {}

    for _, light in ipairs(allLights) do
        local lCoords = vector3(light.coords.x, light.coords.y, light.coords.z)
        local attachedEnt = nil

        if light.attached then
            attachedEnt = attachedEntityCache[light.id]
            if not attachedEnt or not DoesEntityExist(attachedEnt) then
                attachedEnt = findAttachedEntity(light.attached)
                attachedEntityCache[light.id] = attachedEnt
            end

            if attachedEnt and DoesEntityExist(attachedEnt) then
                lCoords = GetEntityCoords(attachedEnt)
            end
        end

        local distPed = #(pCoords - lCoords)
        local distCam = #(camCoords - lCoords)
        local dist = math.min(distPed, distCam)

        local maxDist = light.renderDistance or Config.CullingDistance or 80.0
        if dist <= maxDist then
            table.insert(closeLights, light)

            -- Créer l'entité physique du prop si pas en cours d'édition directe et pas 'none'
            if light.id ~= selectedLightId and light.model ~= 'none' then
                if not spawnedEntities[light.id] or not DoesEntityExist(spawnedEntities[light.id]) then
                    local modelHash = joaat(light.model)
                    if loadModel(modelHash) then
                        local prop = CreateObject(modelHash, lCoords.x, lCoords.y, lCoords.z, false, false, false)
                        SetEntityCoordsNoOffset(prop, lCoords.x, lCoords.y, lCoords.z, true, false, false)
                        local rot = light.rotation or vector3(0.0, 0.0, light.heading or 0.0)
                        SetEntityRotation(prop, rot.x or 0.0, rot.y or 0.0, rot.z or light.heading or 0.0, 2, true)
                        FreezeEntityPosition(prop, true)
                        local hasCollision = light.collision == true
                        SetEntityCollision(prop, hasCollision, hasCollision)
                        if light.textureVariation and light.textureVariation > 0 then
                            SetObjectTextureVariation(prop, light.textureVariation)
                        end
                        SetModelAsNoLongerNeeded(modelHash)
                        SetEntityLights(prop, light.nativeLight and true or false)
                        spawnedEntities[light.id] = prop

                        if light.attached and attachedEnt and DoesEntityExist(attachedEnt) then
                            AttachEntityToEntity(
                                prop,
                                attachedEnt,
                                light.attached.bone or 0,
                                light.attached.offset.x, light.attached.offset.y, light.attached.offset.z,
                                light.attached.rotation.x or 0.0, light.attached.rotation.y or 0.0, light.attached.rotation.z or 0.0,
                                false, false, false, false, 2, true
                            )
                        end
                    end
                else
                    SetEntityLights(spawnedEntities[light.id], light.nativeLight and true or false)
                    if light.attached and attachedEnt and DoesEntityExist(attachedEnt) then
                        if not IsEntityAttachedToEntity(spawnedEntities[light.id], attachedEnt) then
                            AttachEntityToEntity(
                                spawnedEntities[light.id],
                                attachedEnt,
                                light.attached.bone or 0,
                                light.attached.offset.x, light.attached.offset.y, light.attached.offset.z,
                                light.attached.rotation.x or 0.0, light.attached.rotation.y or 0.0, light.attached.rotation.z or 0.0,
                                false, false, false, false, 2, true
                            )
                        end
                    end
                end
            end
        else
            -- Hors de portée : supprimer l'entité
            if spawnedEntities[light.id] then
                if DoesEntityExist(spawnedEntities[light.id]) then
                    DeleteEntity(spawnedEntities[light.id])
                end
                spawnedEntities[light.id] = nil
            end
        end
    end

    -- Nettoyer les props supprimés du serveur
    for id, entity in pairs(spawnedEntities) do
        local exists = false
        for _, l in ipairs(allLights) do
            if l.id == id and l.model ~= 'none' then
                exists = true
                break
            end
        end
        if not exists or id == selectedLightId then
            if DoesEntityExist(entity) then
                DeleteEntity(entity)
            end
            spawnedEntities[id] = nil
        end
    end

    -- Nettoyer le cache d'entités attachées si la lumière n'existe plus
    for id, _ in pairs(attachedEntityCache) do
        local exists = false
        for _, l in ipairs(allLights) do
            if l.id == id and l.attached then
                exists = true
                break
            end
        end
        if not exists then
            attachedEntityCache[id] = nil
        end
    end

    table.sort(closeLights, function(a, b)
        local aCoords = vector3(a.coords.x, a.coords.y, a.coords.z)
        local bCoords = vector3(b.coords.x, b.coords.y, b.coords.z)
        local aDist = math.min(#(pCoords - aCoords), #(camCoords - aCoords))
        local bDist = math.min(#(pCoords - bCoords), #(camCoords - bCoords))
        return aDist < bDist
    end)

    nearbyLights = closeLights
end

RegisterNetEvent('lightstudio:syncLights', function(lights, hierarchy)
    allLights = lights or {}
    if hierarchy then
        currentHierarchy = hierarchy
    end
    refreshNearbyLights()
end)

RegisterNetEvent('lightstudio:syncHierarchy', function(hierarchy)
    if hierarchy then
        currentHierarchy = hierarchy
        SendNUIMessage({
            action = 'syncHierarchy',
            hierarchy = currentHierarchy
        })
    end
end)

-- Distance Culling toutes les 1000ms (0.00ms CPU en idle)
CreateThread(function()
    while true do
        Wait(1000)
        refreshNearbyLights()
    end
end)

-- Flux temps réel des lumières dans la zone de la caméra vers NUI (toutes les 200ms)
CreateThread(function()
    while true do
        if isEditing then
            local camPos = (orbitCam and DoesCamExist(orbitCam)) and GetCamCoord(orbitCam) or studioOrigin
            local roomRange = Config.NearbyRadius or 25.0
            local list = {}

            for _, light in ipairs(allLights) do
                local lCoords = vector3(light.coords.x, light.coords.y, light.coords.z)
                if light.attached then
                    local ent = attachedEntityCache[light.id]
                    if not ent or not DoesEntityExist(ent) then
                        ent = findAttachedEntity(light.attached)
                        attachedEntityCache[light.id] = ent
                    end
                    if ent and DoesEntityExist(ent) then
                        lCoords = GetOffsetFromEntityInWorldCoords(
                            ent,
                            light.attached.offset.x,
                            light.attached.offset.y,
                            light.attached.offset.z
                        )
                    end
                end

                local dist = #(camPos - lCoords)
                if dist <= roomRange then
                    table.insert(list, {
                        id = light.id,
                        model = light.model or 'none',
                        label = getPropLabel(light.model),
                        coords = { x = lCoords.x, y = lCoords.y, z = lCoords.z },
                        heading = light.heading or 0.0,
                        rotation = light.rotation,
                        rgb = light.rgb,
                        intensity = light.intensity,
                        radius = light.radius,
                        renderDistance = light.renderDistance or 80.0,
                        textureVariation = light.textureVariation or 0,
                        collision = (light.collision == true),
                        offsetZ = light.offsetZ or 0.0,
                        shape = light.shape or 'cone',
                        shapeParam = light.shapeParam,
                        invertDirection = resolveInvertDirection(light.invertDirection, light.model),
                        nativeLight = light.nativeLight and true or false,
                        groupId = light.groupId,
                        familyId = light.familyId,
                        group = light.familyId or light.groupId or light.group,
                        distance = tonumber(string.format("%.1f", dist)),
                        attached = light.attached
                    })
                end
            end

            table.sort(list, function(a, b) return a.distance < b.distance end)

            SendNUIMessage({
                action = 'updateNearbyLights',
                lights = list,
                hierarchy = currentHierarchy
            })

            Wait(200)
        else
            Wait(1000)
        end
    end
end)

-- Boucle de Rendu Principal : Contrôles, Éclairage Dynamique, Caméra & Three.js Gizmo
CreateThread(function()
    while true do
        local hasWork = isEditing or (#nearbyLights > 0)

        if not hasWork then
            Wait(500)
        else
            Wait(0)

            -- 1. Lumières sauvegardées dans le monde (Directionnelles & Ambiance)
            local currentShadowSlot = hasSelectedProp and 1 or 0
            for lightIdx, light in ipairs(nearbyLights) do
                if light.id ~= selectedLightId then
                    local lCoords = vector3(light.coords.x, light.coords.y, light.coords.z)
                    local rot = light.rotation or vector3(0.0, 0.0, light.heading or 0.0)

                    if light.attached then
                        local ent = attachedEntityCache[light.id]
                        if not ent or not DoesEntityExist(ent) then
                            ent = findAttachedEntity(light.attached)
                            attachedEntityCache[light.id] = ent
                        end

                        if ent and DoesEntityExist(ent) then
                            lCoords = GetOffsetFromEntityInWorldCoords(
                                ent,
                                light.attached.offset.x,
                                light.attached.offset.y,
                                light.attached.offset.z
                            )
                            local entRot = GetEntityRotation(ent, 2)
                            rot = vector3(
                                entRot.x + (light.attached.rotation.x or 0.0),
                                entRot.y + (light.attached.rotation.y or 0.0),
                                entRot.z + (light.attached.rotation.z or 0.0)
                            )

                            local spawnedProp = spawnedEntities[light.id]
                            if spawnedProp and DoesEntityExist(spawnedProp) then
                                if not IsEntityAttachedToEntity(spawnedProp, ent) then
                                    AttachEntityToEntity(
                                        spawnedProp,
                                        ent,
                                        light.attached.bone or 0,
                                        light.attached.offset.x, light.attached.offset.y, light.attached.offset.z,
                                        light.attached.rotation.x or 0.0, light.attached.rotation.y or 0.0, light.attached.rotation.z or 0.0,
                                        false, false, false, false, 2, true
                                    )
                                end
                            end
                        end
                    end

                    local wantsShadow = (light.castShadow ~= false)
                    local enableShadow = false
                    local assignedShadowId = 0
                    if wantsShadow and currentShadowSlot < 4 then
                        enableShadow = true
                        assignedShadowId = currentShadowSlot
                        currentShadowSlot = currentShadowSlot + 1
                    end

                    local isInverted = resolveInvertDirection(light.invertDirection, light.model)

                    renderLightInstance(
                        lCoords,
                        rot,
                        light.offsetZ,
                        light.rgb,
                        light.radius + 0.0,
                        light.intensity + 0.0,
                        light.shape,
                        light.shapeParam,
                        isInverted,
                        false,
                        light.model,
                        enableShadow,
                        assignedShadowId
                    )

                    -- Si dans l'éditeur et lumière sans prop : petit point de repère visuel
                    if isEditing and light.model == 'none' then
                        DrawMarker(
                            28,
                            lCoords.x, lCoords.y, lCoords.z + (light.offsetZ or 0.0),
                            0.0, 0.0, 0.0,
                            0.0, 0.0, 0.0,
                            0.2, 0.2, 0.2,
                            light.rgb.r, light.rgb.g, light.rgb.b,
                            160,
                            false, false, 2, nil, nil, false
                        )
                    end
                end
            end

            -- 2. Gestion de l'éditeur ouvert
            if isEditing then
                disableControls()

                -- Raccourci clavier de duplication (Left Shift / Sprint control 21)
                if hasSelectedProp and IsDisabledControlJustPressed(0, 21) then
                    if not IsDisabledControlPressed(0, 32) and not IsDisabledControlPressed(0, 33) and not IsDisabledControlPressed(0, 34) and not IsDisabledControlPressed(0, 35) then
                        requestDuplicateCurrentProp()
                    end
                end

                -- Synchronisation de position si le prop / la source en cours d'édition est attaché à une entité
                if hasSelectedProp and editAttachData and DoesEntityExist(editAttachData.entity) then
                    if not isGizmoDragging then
                        local ent = editAttachData.entity
                        local dynCoords = GetOffsetFromEntityInWorldCoords(
                            ent,
                            editAttachData.offset.x,
                            editAttachData.offset.y,
                            editAttachData.offset.z
                        )
                        local entRot = GetEntityRotation(ent, 2)
                        local dynRot = vector3(
                            entRot.x + (editAttachData.rotation.x or 0.0),
                            entRot.y + (editAttachData.rotation.y or 0.0),
                            entRot.z + (editAttachData.rotation.z or 0.0)
                        )
                        editCoords = dynCoords
                        editRotation = dynRot
                        editHeading = dynRot.z
                    end
                end

                -- Synchronisation et mise à jour de la caméra
                if orbitCam and DoesCamExist(orbitCam) then
                    if cameraMode == 'orbit' and hasSelectedProp then
                        local oz = editLightData.offsetZ or 0.0
                        local targetCenter = editCoords + vector3(0.0, 0.0, oz * 0.5)
                        updateOrbitCam(targetCenter)
                    else
                        StopCamPointing(orbitCam)
                        SetCamCoord(orbitCam, freecamPos.x, freecamPos.y, freecamPos.z)
                        SetCamRot(orbitCam, freecamPitch, 0.0, freecamYaw, 2)
                    end

                    -- Envoi continu de la matrice caméra vers NUI pour le Gizmo Three.js TransformControls
                    local camPos = GetCamCoord(orbitCam)
                    local camRot = GetCamRot(orbitCam, 2)
                    local camForward = rotationToDirection(camRot)
                    local camFov = GetCamFov(orbitCam)

                    SendNUIMessage({
                        action = 'camera',
                        position = { x = camPos.x, y = camPos.y, z = camPos.z },
                        forward = { x = camForward.x, y = camForward.y, z = camForward.z },
                        fov = camFov
                    })
                end

                -- Éclairage dynamique temps réel & Wireframe Marker du prop sélectionné
                if hasSelectedProp then
                    renderLightInstance(
                        editCoords,
                        editRotation,
                        editLightData.offsetZ,
                        editLightData.rgb,
                        editLightData.radius + 0.0,
                        editLightData.intensity + 0.0,
                        editLightData.shape,
                        editLightData.shapeParam,
                        resolveInvertDirection(editLightData.invertDirection, editLightData.model),
                        true,
                        editLightData.model,
                        (editLightData.castShadow ~= false),
                        0
                    )
                end
            end
        end
    end
end)

--------------------------------------------------------------------------------
-- Commandes Joueur & Key Mapping (Paramètres FiveM)
--------------------------------------------------------------------------------

local function toggleEditor()
    local now = GetGameTimer()
    if (now - lastToggleTime) < 600 then
        return
    end
    lastToggleTime = now

    if isEditing then
        closeEditor()
    else
        openEditor()
    end
end

local mainCommandName = (Config and Config.Command) or 'creatortoolkit'

RegisterCommand(mainCommandName, function()
    toggleEditor()
end, false)

-- Alias explicite garanti
if mainCommandName ~= 'creatortoolkit' then
    RegisterCommand('creatortoolkit', function()
        toggleEditor()
    end, false)
end

-- Alias de compatibilité
RegisterCommand('lightstudio', function()
    toggleEditor()
end, false)

RegisterKeyMapping(mainCommandName, "Ouvrir Creator Toolkit", "keyboard", (Config and Config.DefaultKey) or "F5")

--------------------------------------------------------------------------------
-- Rechargement à Chaud de config.lua (Hot Reload sans restart)
--------------------------------------------------------------------------------

RegisterNetEvent('lightstudio:syncConfig', function(rawConfig)
    if not rawConfig or rawConfig == "" then return end

    local loadFunc, err = load(rawConfig, "config.lua", "t", _G)
    if not loadFunc then
        print("^1[LightStudio] Erreur lors du chargement de la config reçue : " .. tostring(err) .. "^7")
        return
    end

    local status, execErr = pcall(loadFunc)
    if not status then
        print("^1[LightStudio] Erreur lors de l'exécution de la config reçue : " .. tostring(execErr) .. "^7")
        return
    end

    print(("^2[LightStudio] config.lua rechargé avec succès (%d props disponibles) !^7"):format(#(Config.LightProps or {})))

    -- Mise à jour immédiate des props dans l'interface NUI
    SendNUIMessage({
        action = 'updateProps',
        props = Config.LightProps,
        defaults = Config.Defaults
    })

    -- Rafraîchir les étiquettes et les listes
    refreshNearbyLights()

    -- Notification FiveM en jeu
    BeginTextCommandThefeedPost("STRING")
    AddTextComponentSubstringPlayerName(string.format("~y~[Light Studio]~s~ Configuration rechargée ! (~g~%d~s~ props)", #(Config.LightProps or {})))
    EndTextCommandThefeedPostTicker(false, true)
end)

RegisterCommand('lightreload', function()
    TriggerServerEvent('lightstudio:requestReloadConfig')
end, false)

RegisterCommand('lightrefresh', function()
    TriggerServerEvent('lightstudio:requestReloadConfig')
end, false)

--------------------------------------------------------------------------------
-- Nettoyage à l'arrêt de la ressource
--------------------------------------------------------------------------------

AddEventHandler('onResourceStop', function(resName)
    if resName == GetCurrentResourceName() then
        cleanEditProp()
        destroyScriptCam()
        setPlayerGhostMode(false)
        for _, entity in pairs(spawnedEntities) do
            if DoesEntityExist(entity) then
                DeleteEntity(entity)
            end
        end
        spawnedEntities = {}
        attachedEntityCache = {}
        SetNuiFocus(false, false)
    end
end)

CreateThread(function()
    Wait(2000)
    TriggerServerEvent('lightstudio:requestLights')
end)
