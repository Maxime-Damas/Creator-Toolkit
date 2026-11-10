-- =============================================================================
-- CREATOR TOOLKIT - MOTEUR DE MIGRATION VERS OXMYSQL
-- =============================================================================

Migration = {}

local resourceName = GetCurrentResourceName()

--------------------------------------------------------------------------------
-- Helpers Internes
--------------------------------------------------------------------------------

local function notify(src, msg, color)
    color = color or { 229, 138, 50 }
    if src == 0 then
        print(("[CreatorToolkit Migration] %s"):format(msg))
    else
        TriggerClientEvent('chat:addMessage', src, {
            color = color,
            args = { "Creator Toolkit", msg }
        })
        print(("[CreatorToolkit Migration] (%s) %s"):format(GetPlayerName(src) or "Admin", msg))
    end
end

local function hasPermission(src)
    if src == 0 then return true end
    if Config.RequireAdminPermissions == false then return true end
    local perm = Config.AdminPermission or 'command.creatortoolkit_migrate'
    if IsPlayerAceAllowed(src, perm) then return true end
    if IsPlayerAceAllowed(src, 'creator.admin') then return true end
    if IsPlayerAceAllowed(src, 'admin') then return true end
    if IsPlayerAceAllowed(src, 'command') then return true end
    return false
end

local function tableExists(tableName)
    local ok, res = pcall(function()
        return MySQL.query.await("SHOW TABLES LIKE ?", { tableName })
    end)
    return ok and res and #res > 0
end

--------------------------------------------------------------------------------
-- 1. Analyse Prévisionnelle (Dry-Run)
--------------------------------------------------------------------------------

function Migration.DryRun(src)
    notify(src, "Démarrage de l'analyse prévisionnelle (Dry-Run)...", { 59, 130, 246 })

    if not DB.IsReady then
        DB.Init()
    end

    local stats = {
        lights = { detected = 0, toMigrate = 0, alreadyMigrated = 0, errors = 0 },
        groups = { detected = 0, toMigrate = 0, alreadyMigrated = 0, errors = 0 },
        families = { detected = 0, toMigrate = 0, alreadyMigrated = 0, errors = 0 },
        props = { detected = 0, toMigrate = 0, alreadyMigrated = 0, errors = 0 }
    }

    -- 1.1 Analyse de hierarchy.json
    local hierContent = LoadResourceFile(resourceName, "hierarchy.json")
    local hierData = { groups = {}, families = {} }
    if hierContent and hierContent ~= "" then
        local ok, dec = pcall(json.decode, hierContent)
        if ok and type(dec) == "table" then
            hierData = dec
        end
    end

    -- Groupes
    local existingGroups = {}
    local okG, dbGroups = pcall(function()
        return MySQL.query.await("SELECT `id` FROM `creatortoolkit_groups`")
    end)
    if okG and dbGroups then
        for _, r in ipairs(dbGroups) do existingGroups[r.id] = true end
    end

    for _, g in ipairs(hierData.groups or {}) do
        stats.groups.detected = stats.groups.detected + 1
        if existingGroups[g.id] then
            stats.groups.alreadyMigrated = stats.groups.alreadyMigrated + 1
        else
            stats.groups.toMigrate = stats.groups.toMigrate + 1
        end
    end

    -- Familles
    local existingFamilies = {}
    local okF, dbFam = pcall(function()
        return MySQL.query.await("SELECT `id` FROM `creatortoolkit_families`")
    end)
    if okF and dbFam then
        for _, r in ipairs(dbFam) do existingFamilies[r.id] = true end
    end

    for _, f in ipairs(hierData.families or {}) do
        stats.families.detected = stats.families.detected + 1
        if existingFamilies[f.id] then
            stats.families.alreadyMigrated = stats.families.alreadyMigrated + 1
        else
            stats.families.toMigrate = stats.families.toMigrate + 1
        end
    end

    -- 1.2 Analyse de lights.json
    local lightsContent = LoadResourceFile(resourceName, "lights.json")
    local lightsData = {}
    if lightsContent and lightsContent ~= "" then
        local ok, dec = pcall(json.decode, lightsContent)
        if ok and type(dec) == "table" then
            lightsData = dec
        end
    end

    local existingLights = {}
    local okL, dbLights = pcall(function()
        return MySQL.query.await("SELECT `id` FROM `creatortoolkit_lights`")
    end)
    if okL and dbLights then
        for _, r in ipairs(dbLights) do existingLights[r.id] = true end
    end

    for _, l in ipairs(lightsData) do
        stats.lights.detected = stats.lights.detected + 1
        if existingLights[l.id] then
            stats.lights.alreadyMigrated = stats.lights.alreadyMigrated + 1
        else
            stats.lights.toMigrate = stats.lights.toMigrate + 1
        end
    end

    -- 1.3 Analyse des Props Legacy (kq_propplacer)
    if tableExists("kq_propplacer") then
        local okP, kqRows = pcall(function()
            return MySQL.query.await("SELECT `id` FROM `kq_propplacer`")
        end)
        if okP and kqRows then
            stats.props.detected = #kqRows

            local existingProps = {}
            local okEP, dbProps = pcall(function()
                return MySQL.query.await("SELECT `legacy_id` FROM `creatortoolkit_props` WHERE `legacy_id` IS NOT NULL")
            end)
            if okEP and dbProps then
                for _, r in ipairs(dbProps) do existingProps[tonumber(r.legacy_id)] = true end
            end

            for _, r in ipairs(kqRows) do
                local lid = tonumber(r.id)
                if existingProps[lid] then
                    stats.props.alreadyMigrated = stats.props.alreadyMigrated + 1
                else
                    stats.props.toMigrate = stats.props.toMigrate + 1
                end
            end
        end
    end

    -- Rapport
    local totalDetected = stats.lights.detected + stats.groups.detected + stats.families.detected + stats.props.detected
    local totalToMigrate = stats.lights.toMigrate + stats.groups.toMigrate + stats.families.toMigrate + stats.props.toMigrate
    local totalAlready = stats.lights.alreadyMigrated + stats.groups.alreadyMigrated + stats.families.alreadyMigrated + stats.props.alreadyMigrated

    notify(src, "==================================================", { 229, 138, 50 })
    notify(src, " RAPPORT PRÉVISIONNEL (DRY-RUN) - CREATOR TOOLKIT", { 255, 255, 255 })
    notify(src, "==================================================", { 229, 138, 50 })
    notify(src, ("* Light Studio : %d lumières (À migrer: %d | Déjà en BDD: %d)"):format(
        stats.lights.detected, stats.lights.toMigrate, stats.lights.alreadyMigrated
    ), { 200, 200, 200 })
    notify(src, ("* Groupes : %d (À migrer: %d | Déjà en BDD: %d)"):format(
        stats.groups.detected, stats.groups.toMigrate, stats.groups.alreadyMigrated
    ), { 200, 200, 200 })
    notify(src, ("* Familles : %d (À migrer: %d | Déjà en BDD: %d)"):format(
        stats.families.detected, stats.families.toMigrate, stats.families.alreadyMigrated
    ), { 200, 200, 200 })
    notify(src, ("* Prop Studio (kq_propplacer) : %d props (À migrer: %d | Déjà en BDD: %d)"):format(
        stats.props.detected, stats.props.toMigrate, stats.props.alreadyMigrated
    ), { 200, 200, 200 })
    notify(src, "--------------------------------------------------", { 150, 150, 150 })
    notify(src, ("TOTAL DÉTECTÉ : %d | À MIGRER : %d | DÉJÀ MIGRÉ : %d"):format(
        totalDetected, totalToMigrate, totalAlready
    ), { 34, 197, 94 })
    notify(src, "Aucune donnée n'a été modifiée. Pour lancer la migration réelle : /creatortoolkit_migrate", { 229, 138, 50 })
end

--------------------------------------------------------------------------------
-- 2. Exécution Réelle de la Migration
--------------------------------------------------------------------------------

function Migration.Run(src)
    notify(src, "Démarrage de la migration globale Creator Toolkit vers oxmysql...", { 59, 130, 246 })

    if not DB.IsReady then
        DB.Init()
    end

    local summary = {
        lights = { total = 0, migrated = 0, skipped = 0, errors = 0 },
        groups = { total = 0, migrated = 0, skipped = 0, errors = 0 },
        families = { total = 0, migrated = 0, skipped = 0, errors = 0 },
        props = { total = 0, migrated = 0, skipped = 0, errors = 0 }
    }

    -- 2.1 Migration des Groupes & Familles (hierarchy.json)
    local hierContent = LoadResourceFile(resourceName, "hierarchy.json")
    local hierData = { groups = {}, families = {} }
    if hierContent and hierContent ~= "" then
        local ok, dec = pcall(json.decode, hierContent)
        if ok and type(dec) == "table" then
            hierData = dec
        end
    end

    -- Groupes
    for _, g in ipairs(hierData.groups or {}) do
        summary.groups.total = summary.groups.total + 1
        local exists = MySQL.single.await("SELECT 1 FROM `creatortoolkit_groups` WHERE `id` = ?", { g.id })
        if exists then
            summary.groups.skipped = summary.groups.skipped + 1
        else
            local ok, err = pcall(function()
                MySQL.insert.await("INSERT INTO `creatortoolkit_groups` (`id`, `name`) VALUES (?, ?)", {
                    tostring(g.id),
                    tostring(g.name or g.id)
                })
            end)
            if ok then
                summary.groups.migrated = summary.groups.migrated + 1
            else
                summary.groups.errors = summary.groups.errors + 1
                print(("[CreatorToolkit] Erreur migration groupe %s: %s"):format(g.id, tostring(err)))
            end
        end
    end

    -- Familles
    for _, f in ipairs(hierData.families or {}) do
        summary.families.total = summary.families.total + 1
        local exists = MySQL.single.await("SELECT 1 FROM `creatortoolkit_families` WHERE `id` = ?", { f.id })
        if exists then
            summary.families.skipped = summary.families.skipped + 1
        else
            local ok, err = pcall(function()
                MySQL.insert.await("INSERT INTO `creatortoolkit_families` (`id`, `group_id`, `name`) VALUES (?, ?, ?)", {
                    tostring(f.id),
                    (f.groupId and f.groupId ~= "") and tostring(f.groupId) or nil,
                    tostring(f.name or f.id)
                })
            end)
            if ok then
                summary.families.migrated = summary.families.migrated + 1
            else
                summary.families.errors = summary.families.errors + 1
                print(("[CreatorToolkit] Erreur migration famille %s: %s"):format(f.id, tostring(err)))
            end
        end
    end

    DB.Migrations.Record(
        "lightstudio_hierarchy",
        (summary.groups.errors + summary.families.errors == 0) and "completed" or "partial",
        summary.groups.migrated + summary.families.migrated,
        summary.groups.skipped + summary.families.skipped,
        summary.groups.errors + summary.families.errors,
        json.encode({ groups = summary.groups, families = summary.families })
    )

    -- 2.2 Migration des Lumières (lights.json)
    local lightsContent = LoadResourceFile(resourceName, "lights.json")
    local lightsData = {}
    if lightsContent and lightsContent ~= "" then
        local ok, dec = pcall(json.decode, lightsContent)
        if ok and type(dec) == "table" then
            lightsData = dec
        end
    end

    for _, l in ipairs(lightsData) do
        summary.lights.total = summary.lights.total + 1
        local exists = MySQL.single.await("SELECT 1 FROM `creatortoolkit_lights` WHERE `id` = ?", { l.id })
        if exists then
            summary.lights.skipped = summary.lights.skipped + 1
        else
            local ok = DB.Lights.Create(l)
            if ok then
                summary.lights.migrated = summary.lights.migrated + 1
            else
                summary.lights.errors = summary.lights.errors + 1
            end
        end
    end

    DB.Migrations.Record(
        "lightstudio_lights",
        (summary.lights.errors == 0) and "completed" or "partial",
        summary.lights.migrated,
        summary.lights.skipped,
        summary.lights.errors,
        json.encode(summary.lights)
    )

    -- 2.3 Migration des Props Legacy (kq_propplacer)
    if tableExists("kq_propplacer") then
        local okP, kqRows = pcall(function()
            return MySQL.query.await("SELECT `id`, `model`, `coords`, `rotation`, `metadata` FROM `kq_propplacer`")
        end)

        if okP and kqRows then
            for _, r in ipairs(kqRows) do
                summary.props.total = summary.props.total + 1
                local legacyId = tonumber(r.id)

                local exists = MySQL.single.await(
                    "SELECT 1 FROM `creatortoolkit_props` WHERE `legacy_id` = ?",
                    { legacyId }
                )

                if exists then
                    summary.props.skipped = summary.props.skipped + 1
                else
                    -- Décoder les coordonnées
                    local coords = { x = 0.0, y = 0.0, z = 0.0 }
                    if r.coords and r.coords ~= "" then
                        local cOk, cDec = pcall(json.decode, r.coords)
                        if cOk and type(cDec) == "table" then
                            coords = {
                                x = tonumber(cDec.x) or 0.0,
                                y = tonumber(cDec.y) or 0.0,
                                z = tonumber(cDec.z) or 0.0
                            }
                        end
                    end

                    -- Décoder la rotation
                    local rot = { x = 0.0, y = 0.0, z = 0.0 }
                    if r.rotation and r.rotation ~= "" then
                        local rOk, rDec = pcall(json.decode, r.rotation)
                        if rOk and type(rDec) == "table" then
                            rot = {
                                x = tonumber(rDec.x) or 0.0,
                                y = tonumber(rDec.y) or 0.0,
                                z = tonumber(rDec.z) or 0.0
                            }
                        end
                    end

                    -- Décoder les métadonnées
                    local meta = {}
                    if r.metadata and r.metadata ~= "" then
                        local mOk, mDec = pcall(json.decode, r.metadata)
                        if mOk and type(mDec) == "table" then
                            meta = mDec
                        end
                    end

                    local propId = string.format("prop_kq_%d", legacyId)
                    local propObj = {
                        id = propId,
                        legacyId = legacyId,
                        creator = "KuzQuality",
                        model = tostring(r.model),
                        coords = coords,
                        heading = rot.z or 0.0,
                        rotation = rot,
                        renderDistance = tonumber(meta.render) or 80.0,
                        textureVariation = tonumber(meta.texture) or 0,
                        collision = (meta.noCollision == true) and false or true,
                        bucket = tonumber(meta.bucket) or 0,
                        opacity = tonumber(meta.opacity) or 255,
                        scale = tonumber(meta.scale) or 1.0,
                        physics = (meta.physics == true or meta.physics == 1),
                        metadata = meta
                    }

                    local created = DB.Props.Create(propObj)
                    if created then
                        summary.props.migrated = summary.props.migrated + 1
                    else
                        summary.props.errors = summary.props.errors + 1
                    end
                end
            end

            DB.Migrations.Record(
                "kq_propplacer_props",
                (summary.props.errors == 0) and "completed" or "partial",
                summary.props.migrated,
                summary.props.skipped,
                summary.props.errors,
                json.encode(summary.props)
            )
        end
    end

    -- 2.4 Rechargement immédiat de la mémoire & Synchronisation clients
    if ServerState and ServerState.ReloadFromDatabase then
        ServerState.ReloadFromDatabase()
    end

    -- 2.5 Rapport Final
    local totalMigrated = summary.lights.migrated + summary.groups.migrated + summary.families.migrated + summary.props.migrated
    local totalSkipped = summary.lights.skipped + summary.groups.skipped + summary.families.skipped + summary.props.skipped
    local totalErrors = summary.lights.errors + summary.groups.errors + summary.families.errors + summary.props.errors

    notify(src, "==================================================", { 34, 197, 94 })
    notify(src, " MIGRATION GLOBALE TERMINÉE AVEC SUCCÈS !", { 255, 255, 255 })
    notify(src, "==================================================", { 34, 197, 94 })
    notify(src, ("* Light Studio : %d migrées | %d ignorées (déjà en BDD) | %d erreurs"):format(
        summary.lights.migrated, summary.lights.skipped, summary.lights.errors
    ), { 200, 200, 200 })
    notify(src, ("* Groupes : %d migrés | %d ignorés | %d erreurs"):format(
        summary.groups.migrated, summary.groups.skipped, summary.groups.errors
    ), { 200, 200, 200 })
    notify(src, ("* Familles : %d migrées | %d ignorées | %d erreurs"):format(
        summary.families.migrated, summary.families.skipped, summary.families.errors
    ), { 200, 200, 200 })
    notify(src, ("* Prop Studio : %d migrés | %d ignorés | %d erreurs"):format(
        summary.props.migrated, summary.props.skipped, summary.props.errors
    ), { 200, 200, 200 })
    notify(src, "--------------------------------------------------", { 150, 150, 150 })
    notify(src, ("TOTAL : %d éléments migrés vers MySQL | %d déjà existants | %d erreurs"):format(
        totalMigrated, totalSkipped, totalErrors
    ), { 34, 197, 94 })
end

--------------------------------------------------------------------------------
-- 3. Statut des Migrations
--------------------------------------------------------------------------------

function Migration.Status(src)
    notify(src, "Consultation du statut des migrations SQL...", { 59, 130, 246 })

    if not DB.IsReady then
        DB.Init()
    end

    local hist = DB.Migrations.GetHistory()

    local countL = MySQL.scalar.await("SELECT COUNT(*) FROM `creatortoolkit_lights`") or 0
    local countG = MySQL.scalar.await("SELECT COUNT(*) FROM `creatortoolkit_groups`") or 0
    local countF = MySQL.scalar.await("SELECT COUNT(*) FROM `creatortoolkit_families`") or 0
    local countP = MySQL.scalar.await("SELECT COUNT(*) FROM `creatortoolkit_props`") or 0

    notify(src, "==================================================", { 229, 138, 50 })
    notify(src, " STATUT PERSISTANCE SQL (OXMYSQL) - CREATOR TOOLKIT", { 255, 255, 255 })
    notify(src, "==================================================", { 229, 138, 50 })
    notify(src, ("* creatortoolkit_lights : %d lignes enregistrées"):format(countL), { 200, 200, 200 })
    notify(src, ("* creatortoolkit_groups : %d groupes enregistrés"):format(countG), { 200, 200, 200 })
    notify(src, ("* creatortoolkit_families : %d familles enregistrées"):format(countF), { 200, 200, 200 })
    notify(src, ("* creatortoolkit_props : %d props enregistrés"):format(countP), { 200, 200, 200 })
    notify(src, "--------------------------------------------------", { 150, 150, 150 })

    if #hist == 0 then
        notify(src, "Aucune migration enregistrée dans la table creatortoolkit_migrations.", { 239, 68, 68 })
    else
        notify(src, ("Historique des migrations (%d enregistrement(s)) :"):format(#hist), { 34, 197, 94 })
        for _, h in ipairs(hist) do
            notify(src, ("- [%s] %s | Migrés: %d | Ignorés: %d | Erreurs: %d (%s)"):format(
                h.status or "OK",
                h.migration_key,
                tonumber(h.items_migrated or 0),
                tonumber(h.items_skipped or 0),
                tonumber(h.items_errors or 0),
                tostring(h.executed_at or "N/A")
            ), { 180, 180, 180 })
        end
    end
end

--------------------------------------------------------------------------------
-- 4. Commandes Administrateur
--------------------------------------------------------------------------------

RegisterCommand('creatortoolkit_migrate', function(source, args)
    if not hasPermission(source) then
        notify(source, "Vous n'avez pas la permission d'exécuter cette commande.", { 239, 68, 68 })
        return
    end

    local sub = args[1] and string.lower(args[1]) or ""
    if sub == "dryrun" or sub == "test" then
        Migration.DryRun(source)
    elseif sub == "status" then
        Migration.Status(source)
    else
        Migration.Run(source)
    end
end, false)

