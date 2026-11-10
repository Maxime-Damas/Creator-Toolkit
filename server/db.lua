-- =============================================================================
-- CREATOR TOOLKIT - COUCHE DE PERSISTENCE OXMYSQL
-- =============================================================================

DB = {
    IsReady = false,
    Lights = {},
    Hierarchy = {},
    Props = {},
    PropHierarchy = {},
    Assemblages = {},
    Migrations = {}
}

--------------------------------------------------------------------------------
-- 1. Initialisation Automatique des Tables SQL
--------------------------------------------------------------------------------

local CREATE_TABLES = {
    [[
        CREATE TABLE IF NOT EXISTS `creatortoolkit_migrations` (
            `id` INT AUTO_INCREMENT PRIMARY KEY,
            `migration_key` VARCHAR(64) NOT NULL UNIQUE,
            `status` VARCHAR(20) NOT NULL DEFAULT 'completed',
            `items_migrated` INT NOT NULL DEFAULT 0,
            `items_skipped` INT NOT NULL DEFAULT 0,
            `items_errors` INT NOT NULL DEFAULT 0,
            `details` LONGTEXT DEFAULT NULL,
            `executed_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    ]],
    [[
        CREATE TABLE IF NOT EXISTS `creatortoolkit_groups` (
            `id` VARCHAR(64) PRIMARY KEY,
            `name` VARCHAR(128) NOT NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    ]],
    [[
        CREATE TABLE IF NOT EXISTS `creatortoolkit_families` (
            `id` VARCHAR(64) PRIMARY KEY,
            `group_id` VARCHAR(64) DEFAULT NULL,
            `name` VARCHAR(128) NOT NULL,
            `sync_properties` LONGTEXT DEFAULT NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            INDEX `idx_families_group` (`group_id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    ]],
    [[
        CREATE TABLE IF NOT EXISTS `creatortoolkit_lights` (
            `id` VARCHAR(64) PRIMARY KEY,
            `creator` VARCHAR(64) NOT NULL DEFAULT 'Unknown',
            `model` VARCHAR(64) NOT NULL DEFAULT 'none',
            `coords_x` DECIMAL(10,3) NOT NULL,
            `coords_y` DECIMAL(10,3) NOT NULL,
            `coords_z` DECIMAL(10,3) NOT NULL,
            `heading` DECIMAL(6,2) NOT NULL DEFAULT 0.00,
            `rot_x` DECIMAL(6,2) NOT NULL DEFAULT 0.00,
            `rot_y` DECIMAL(6,2) NOT NULL DEFAULT 0.00,
            `rot_z` DECIMAL(6,2) NOT NULL DEFAULT 0.00,
            `rgb_r` SMALLINT UNSIGNED NOT NULL DEFAULT 255,
            `rgb_g` SMALLINT UNSIGNED NOT NULL DEFAULT 180,
            `rgb_b` SMALLINT UNSIGNED NOT NULL DEFAULT 60,
            `intensity` DECIMAL(6,2) NOT NULL DEFAULT 8.50,
            `radius` DECIMAL(6,2) NOT NULL DEFAULT 14.00,
            `render_distance` DECIMAL(6,2) NOT NULL DEFAULT 80.00,
            `texture_variation` INT NOT NULL DEFAULT 0,
            `collision` TINYINT(1) NOT NULL DEFAULT 0,
            `cast_shadow` TINYINT(1) NOT NULL DEFAULT 1,
            `offset_z` DECIMAL(6,2) NOT NULL DEFAULT 0.00,
            `shape` VARCHAR(32) NOT NULL DEFAULT 'cone',
            `shape_param` DECIMAL(6,2) NOT NULL DEFAULT 55.00,
            `invert_direction` TINYINT(1) NOT NULL DEFAULT 0,
            `native_light` TINYINT(1) NOT NULL DEFAULT 0,
            `group_id` VARCHAR(64) DEFAULT NULL,
            `family_id` VARCHAR(64) DEFAULT NULL,
            `group_name` VARCHAR(64) DEFAULT NULL,
            `attached_data` LONGTEXT DEFAULT NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            INDEX `idx_lights_group` (`group_id`),
            INDEX `idx_lights_family` (`family_id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    ]],
    [[
        CREATE TABLE IF NOT EXISTS `creatortoolkit_prop_groups` (
            `id` VARCHAR(64) PRIMARY KEY,
            `name` VARCHAR(128) NOT NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    ]],
    [[
        CREATE TABLE IF NOT EXISTS `creatortoolkit_prop_families` (
            `id` VARCHAR(64) PRIMARY KEY,
            `group_id` VARCHAR(64) DEFAULT NULL,
            `name` VARCHAR(128) NOT NULL,
            `sync_properties` LONGTEXT DEFAULT NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            INDEX `idx_prop_families_group` (`group_id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    ]],
    [[
        CREATE TABLE IF NOT EXISTS `creatortoolkit_props` (
            `id` VARCHAR(64) PRIMARY KEY,
            `legacy_id` INT DEFAULT NULL,
            `creator` VARCHAR(64) NOT NULL DEFAULT 'Unknown',
            `model` VARCHAR(64) NOT NULL,
            `coords_x` DECIMAL(10,3) NOT NULL,
            `coords_y` DECIMAL(10,3) NOT NULL,
            `coords_z` DECIMAL(10,3) NOT NULL,
            `heading` DECIMAL(6,2) NOT NULL DEFAULT 0.00,
            `rot_x` DECIMAL(6,2) NOT NULL DEFAULT 0.00,
            `rot_y` DECIMAL(6,2) NOT NULL DEFAULT 0.00,
            `rot_z` DECIMAL(6,2) NOT NULL DEFAULT 0.00,
            `render_distance` DECIMAL(6,2) NOT NULL DEFAULT 80.00,
            `texture_variation` INT NOT NULL DEFAULT 0,
            `collision` TINYINT(1) NOT NULL DEFAULT 1,
            `bucket` INT NOT NULL DEFAULT 0,
            `opacity` INT NOT NULL DEFAULT 255,
            `scale` DECIMAL(6,2) NOT NULL DEFAULT 1.00,
            `physics` TINYINT(1) NOT NULL DEFAULT 0,
            `group_id` VARCHAR(64) DEFAULT NULL,
            `family_id` VARCHAR(64) DEFAULT NULL,
            `metadata` LONGTEXT DEFAULT NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            INDEX `idx_props_legacy` (`legacy_id`),
            INDEX `idx_props_bucket` (`bucket`),
            INDEX `idx_props_group` (`group_id`),
            INDEX `idx_props_family` (`family_id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    ]],
    [[
        CREATE TABLE IF NOT EXISTS `creatortoolkit_assemblages` (
            `id` VARCHAR(64) PRIMARY KEY,
            `name` VARCHAR(128) NOT NULL,
            `category` VARCHAR(64) NOT NULL DEFAULT 'Général',
            `description` TEXT DEFAULT NULL,
            `thumbnail` VARCHAR(255) DEFAULT NULL,
            `props_data` LONGTEXT NOT NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            INDEX `idx_assemblages_category` (`category`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    ]]
}

function DB.Init()
    local success = true
    for _, query in ipairs(CREATE_TABLES) do
        local ok, err = pcall(function()
            MySQL.query.await(query)
        end)
        if not ok then
            print(("[CreatorToolkit] [DB ERREUR] Échec création de table: %s"):format(tostring(err)))
            success = false
        end
    end

    -- Migration automatique des colonnes group_id et family_id pour creatortoolkit_props
    pcall(function()
        MySQL.query.await("ALTER TABLE `creatortoolkit_props` ADD COLUMN IF NOT EXISTS `group_id` VARCHAR(64) DEFAULT NULL")
        MySQL.query.await("ALTER TABLE `creatortoolkit_props` ADD COLUMN IF NOT EXISTS `family_id` VARCHAR(64) DEFAULT NULL")
    end)
    DB.IsReady = success
    if success then
        print("[CreatorToolkit] Base de données MySQL initialisée avec succès (oxmysql).")
    end
    return success
end

--------------------------------------------------------------------------------
-- 2. Convertisseurs & Helpers de Données
--------------------------------------------------------------------------------

local function parseLightRow(row)
    if not row then return nil end

    local attached = nil
    if row.attached_data and row.attached_data ~= "" then
        local ok, decoded = pcall(json.decode, row.attached_data)
        if ok and type(decoded) == "table" then
            attached = decoded
        end
    end

    local rot = {
        x = tonumber(row.rot_x) or 0.0,
        y = tonumber(row.rot_y) or 0.0,
        z = tonumber(row.rot_z) or tonumber(row.heading) or 0.0
    }

    return {
        id = tostring(row.id),
        creator = tostring(row.creator or "Unknown"),
        model = tostring(row.model or "none"),
        coords = {
            x = tonumber(row.coords_x) or 0.0,
            y = tonumber(row.coords_y) or 0.0,
            z = tonumber(row.coords_z) or 0.0
        },
        heading = tonumber(row.heading) or rot.z,
        rotation = rot,
        rgb = {
            r = tonumber(row.rgb_r) or 255,
            g = tonumber(row.rgb_g) or 180,
            b = tonumber(row.rgb_b) or 60
        },
        intensity = tonumber(row.intensity) or 8.5,
        radius = tonumber(row.radius) or 14.0,
        renderDistance = tonumber(row.render_distance) or 80.0,
        textureVariation = tonumber(row.texture_variation) or 0,
        collision = (row.collision == 1 or row.collision == true),
        castShadow = (row.cast_shadow == 1 or row.cast_shadow == true),
        offsetZ = tonumber(row.offset_z) or 0.0,
        shape = tostring(row.shape or "cone"),
        shapeParam = tonumber(row.shape_param) or 55.0,
        invertDirection = (row.invert_direction == 1 or row.invert_direction == true),
        nativeLight = (row.native_light == 1 or row.native_light == true),
        groupId = (row.group_id and row.group_id ~= "") and tostring(row.group_id) or nil,
        familyId = (row.family_id and row.family_id ~= "") and tostring(row.family_id) or nil,
        group = (row.family_id and row.family_id ~= "") and tostring(row.family_id)
            or ((row.group_id and row.group_id ~= "") and tostring(row.group_id) or row.group_name),
        attached = attached
    }
end

local function parsePropRow(row)
    if not row then return nil end

    local meta = nil
    if row.metadata and row.metadata ~= "" then
        local ok, decoded = pcall(json.decode, row.metadata)
        if ok and type(decoded) == "table" then
            meta = decoded
        end
    end

    local rot = {
        x = tonumber(row.rot_x) or 0.0,
        y = tonumber(row.rot_y) or 0.0,
        z = tonumber(row.rot_z) or tonumber(row.heading) or 0.0
    }

    return {
        id = tostring(row.id),
        legacyId = row.legacy_id and tonumber(row.legacy_id) or nil,
        creator = tostring(row.creator or "Unknown"),
        model = tostring(row.model),
        coords = {
            x = tonumber(row.coords_x) or 0.0,
            y = tonumber(row.coords_y) or 0.0,
            z = tonumber(row.coords_z) or 0.0
        },
        heading = tonumber(row.heading) or rot.z,
        rotation = rot,
        renderDistance = tonumber(row.render_distance) or 80.0,
        textureVariation = tonumber(row.texture_variation) or 0,
        collision = (row.collision == 1 or row.collision == true),
        bucket = tonumber(row.bucket) or 0,
        opacity = tonumber(row.opacity) or 255,
        scale = tonumber(row.scale) or 1.0,
        physics = (row.physics == 1 or row.physics == true),
        groupId = (row.group_id and row.group_id ~= "") and tostring(row.group_id) or nil,
        familyId = (row.family_id and row.family_id ~= "") and tostring(row.family_id) or nil,
        group = (row.family_id and row.family_id ~= "") and tostring(row.family_id)
            or ((row.group_id and row.group_id ~= "") and tostring(row.group_id) or nil),
        metadata = meta
    }
end

--------------------------------------------------------------------------------
-- 3. Module Light Studio (creatortoolkit_lights)
--------------------------------------------------------------------------------

function DB.Lights.GetAll()
    local ok, rows = pcall(function()
        return MySQL.query.await("SELECT * FROM `creatortoolkit_lights` ORDER BY `created_at` ASC")
    end)
    if not ok or not rows then
        print(("[CreatorToolkit] [DB ERREUR] GetAll lights: %s"):format(tostring(rows)))
        return {}
    end

    local list = {}
    for _, row in ipairs(rows) do
        table.insert(list, parseLightRow(row))
    end
    return list
end

function DB.Lights.Create(light)
    if not light or not light.id or not light.coords then return false end

    local rot = light.rotation or { x = 0.0, y = 0.0, z = light.heading or 0.0 }
    local rgb = light.rgb or { r = 255, g = 180, b = 60 }
    local attachedStr = light.attached and json.encode(light.attached) or nil

    local query = [[
        INSERT INTO `creatortoolkit_lights` (
            `id`, `creator`, `model`, `coords_x`, `coords_y`, `coords_z`,
            `heading`, `rot_x`, `rot_y`, `rot_z`, `rgb_r`, `rgb_g`, `rgb_b`,
            `intensity`, `radius`, `render_distance`, `texture_variation`,
            `collision`, `cast_shadow`, `offset_z`, `shape`, `shape_param`,
            `invert_direction`, `native_light`, `group_id`, `family_id`,
            `group_name`, `attached_data`
        ) VALUES (
            ?, ?, ?, ?, ?, ?,
            ?, ?, ?, ?, ?, ?, ?,
            ?, ?, ?, ?,
            ?, ?, ?, ?, ?,
            ?, ?, ?, ?,
            ?, ?
        )
    ]]

    local params = {
        light.id,
        light.creator or "Unknown",
        light.model or "none",
        tonumber(string.format("%.3f", light.coords.x)),
        tonumber(string.format("%.3f", light.coords.y)),
        tonumber(string.format("%.3f", light.coords.z)),
        tonumber(string.format("%.2f", light.heading or rot.z or 0.0)),
        tonumber(string.format("%.2f", rot.x or 0.0)),
        tonumber(string.format("%.2f", rot.y or 0.0)),
        tonumber(string.format("%.2f", rot.z or 0.0)),
        math.floor(rgb.r or 255),
        math.floor(rgb.g or 180),
        math.floor(rgb.b or 60),
        tonumber(string.format("%.2f", light.intensity or 8.5)),
        tonumber(string.format("%.2f", light.radius or 14.0)),
        tonumber(string.format("%.2f", light.renderDistance or 80.0)),
        tonumber(light.textureVariation or 0),
        light.collision and 1 or 0,
        (light.castShadow ~= false) and 1 or 0,
        tonumber(string.format("%.2f", light.offsetZ or 0.0)),
        light.shape or "cone",
        tonumber(string.format("%.2f", light.shapeParam or 55.0)),
        light.invertDirection and 1 or 0,
        light.nativeLight and 1 or 0,
        (light.groupId and light.groupId ~= "") and light.groupId or nil,
        (light.familyId and light.familyId ~= "") and light.familyId or nil,
        (light.group and light.group ~= "") and light.group or nil,
        attachedStr
    }

    local ok, err = pcall(function()
        return MySQL.insert.await(query, params)
    end)

    if not ok then
        print(("[CreatorToolkit] [DB ERREUR] Création lumière %s: %s"):format(light.id, tostring(err)))
        return false
    end
    return true
end

function DB.Lights.Update(light)
    if not light or not light.id then return false end

    local rot = light.rotation or { x = 0.0, y = 0.0, z = light.heading or 0.0 }
    local rgb = light.rgb or { r = 255, g = 180, b = 60 }
    local attachedStr = light.attached and json.encode(light.attached) or nil

    local query = [[
        UPDATE `creatortoolkit_lights` SET
            `model` = ?,
            `coords_x` = ?, `coords_y` = ?, `coords_z` = ?,
            `heading` = ?, `rot_x` = ?, `rot_y` = ?, `rot_z` = ?,
            `rgb_r` = ?, `rgb_g` = ?, `rgb_b` = ?,
            `intensity` = ?, `radius` = ?, `render_distance` = ?, `texture_variation` = ?,
            `collision` = ?, `cast_shadow` = ?, `offset_z` = ?,
            `shape` = ?, `shape_param` = ?,
            `invert_direction` = ?, `native_light` = ?,
            `group_id` = ?, `family_id` = ?, `group_name` = ?,
            `attached_data` = ?
        WHERE `id` = ?
    ]]

    local params = {
        light.model or "none",
        tonumber(string.format("%.3f", light.coords.x)),
        tonumber(string.format("%.3f", light.coords.y)),
        tonumber(string.format("%.3f", light.coords.z)),
        tonumber(string.format("%.2f", light.heading or rot.z or 0.0)),
        tonumber(string.format("%.2f", rot.x or 0.0)),
        tonumber(string.format("%.2f", rot.y or 0.0)),
        tonumber(string.format("%.2f", rot.z or 0.0)),
        math.floor(rgb.r or 255),
        math.floor(rgb.g or 180),
        math.floor(rgb.b or 60),
        tonumber(string.format("%.2f", light.intensity or 8.5)),
        tonumber(string.format("%.2f", light.radius or 14.0)),
        tonumber(string.format("%.2f", light.renderDistance or 80.0)),
        tonumber(light.textureVariation or 0),
        light.collision and 1 or 0,
        (light.castShadow ~= false) and 1 or 0,
        tonumber(string.format("%.2f", light.offsetZ or 0.0)),
        light.shape or "cone",
        tonumber(string.format("%.2f", light.shapeParam or 55.0)),
        light.invertDirection and 1 or 0,
        light.nativeLight and 1 or 0,
        (light.groupId and light.groupId ~= "") and light.groupId or nil,
        (light.familyId and light.familyId ~= "") and light.familyId or nil,
        (light.group and light.group ~= "") and light.group or nil,
        attachedStr,
        light.id
    }

    local ok, err = pcall(function()
        return MySQL.update.await(query, params)
    end)

    if not ok then
        print(("[CreatorToolkit] [DB ERREUR] Mise à jour lumière %s: %s"):format(light.id, tostring(err)))
        return false
    end
    return true
end

function DB.Lights.Delete(lightId)
    if not lightId then return false end
    local ok, err = pcall(function()
        return MySQL.update.await("DELETE FROM `creatortoolkit_lights` WHERE `id` = ?", { lightId })
    end)
    if not ok then
        print(("[CreatorToolkit] [DB ERREUR] Suppression lumière %s: %s"):format(lightId, tostring(err)))
        return false
    end
    return true
end

function DB.Lights.SaveMultiple(lightsList)
    if not lightsList or #lightsList == 0 then return true end

    local queries = {}
    for _, light in ipairs(lightsList) do
        local rot = light.rotation or { x = 0.0, y = 0.0, z = light.heading or 0.0 }
        local rgb = light.rgb or { r = 255, g = 180, b = 60 }
        local attachedStr = light.attached and json.encode(light.attached) or nil

        table.insert(queries, {
            query = [[
                INSERT INTO `creatortoolkit_lights` (
                    `id`, `creator`, `model`, `coords_x`, `coords_y`, `coords_z`,
                    `heading`, `rot_x`, `rot_y`, `rot_z`, `rgb_r`, `rgb_g`, `rgb_b`,
                    `intensity`, `radius`, `render_distance`, `texture_variation`,
                    `collision`, `cast_shadow`, `offset_z`, `shape`, `shape_param`,
                    `invert_direction`, `native_light`, `group_id`, `family_id`,
                    `group_name`, `attached_data`
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ON DUPLICATE KEY UPDATE
                    `coords_x` = VALUES(`coords_x`), `coords_y` = VALUES(`coords_y`), `coords_z` = VALUES(`coords_z`),
                    `heading` = VALUES(`heading`), `rot_x` = VALUES(`rot_x`), `rot_y` = VALUES(`rot_y`), `rot_z` = VALUES(`rot_z`),
                    `rgb_r` = VALUES(`rgb_r`), `rgb_g` = VALUES(`rgb_g`), `rgb_b` = VALUES(`rgb_b`),
                    `intensity` = VALUES(`intensity`), `radius` = VALUES(`radius`),
                    `render_distance` = VALUES(`render_distance`), `texture_variation` = VALUES(`texture_variation`),
                    `collision` = VALUES(`collision`), `cast_shadow` = VALUES(`cast_shadow`),
                    `offset_z` = VALUES(`offset_z`), `shape` = VALUES(`shape`), `shape_param` = VALUES(`shape_param`),
                    `invert_direction` = VALUES(`invert_direction`), `native_light` = VALUES(`native_light`),
                    `group_id` = VALUES(`group_id`), `family_id` = VALUES(`family_id`), `group_name` = VALUES(`group_name`),
                    `attached_data` = VALUES(`attached_data`)
            ]],
            values = {
                light.id,
                light.creator or "Unknown",
                light.model or "none",
                tonumber(string.format("%.3f", light.coords.x)),
                tonumber(string.format("%.3f", light.coords.y)),
                tonumber(string.format("%.3f", light.coords.z)),
                tonumber(string.format("%.2f", light.heading or rot.z or 0.0)),
                tonumber(string.format("%.2f", rot.x or 0.0)),
                tonumber(string.format("%.2f", rot.y or 0.0)),
                tonumber(string.format("%.2f", rot.z or 0.0)),
                math.floor(rgb.r or 255),
                math.floor(rgb.g or 180),
                math.floor(rgb.b or 60),
                tonumber(string.format("%.2f", light.intensity or 8.5)),
                tonumber(string.format("%.2f", light.radius or 14.0)),
                tonumber(string.format("%.2f", light.renderDistance or 80.0)),
                tonumber(light.textureVariation or 0),
                light.collision and 1 or 0,
                (light.castShadow ~= false) and 1 or 0,
                tonumber(string.format("%.2f", light.offsetZ or 0.0)),
                light.shape or "cone",
                tonumber(string.format("%.2f", light.shapeParam or 55.0)),
                light.invertDirection and 1 or 0,
                light.nativeLight and 1 or 0,
                (light.groupId and light.groupId ~= "") and light.groupId or nil,
                (light.familyId and light.familyId ~= "") and light.familyId or nil,
                (light.group and light.group ~= "") and light.group or nil,
                attachedStr
            }
        })
    end

    local ok, res = pcall(function()
        return MySQL.transaction.await(queries)
    end)
    if not ok then
        print(("[CreatorToolkit] [DB ERREUR] SaveMultiple: %s"):format(tostring(res)))
        return false
    end
    return true
end

--------------------------------------------------------------------------------
-- 4. Module Hiérarchie : Groupes & Familles (creatortoolkit_groups / creatortoolkit_families)
--------------------------------------------------------------------------------

function DB.Hierarchy.Get()
    local okG, groups = pcall(function()
        return MySQL.query.await("SELECT `id`, `name` FROM `creatortoolkit_groups` ORDER BY `created_at` ASC")
    end)
    local okF, families = pcall(function()
        return MySQL.query.await("SELECT `id`, `group_id` AS `groupId`, `name`, `sync_properties` FROM `creatortoolkit_families` ORDER BY `created_at` ASC")
    end)

    local resGroups = {}
    if okG and groups then
        for _, g in ipairs(groups) do
            table.insert(resGroups, { id = tostring(g.id), name = tostring(g.name) })
        end
    end

    local resFamilies = {}
    if okF and families then
        for _, f in ipairs(families) do
            table.insert(resFamilies, {
                id = tostring(f.id),
                groupId = (f.groupId and f.groupId ~= "") and tostring(f.groupId) or nil,
                name = tostring(f.name)
            })
        end
    end

    return {
        groups = resGroups,
        families = resFamilies
    }
end

function DB.Hierarchy.Save(hierarchyData)
    if not hierarchyData or type(hierarchyData) ~= "table" then return false end

    local queries = {}

    -- Groupes
    table.insert(queries, { query = "DELETE FROM `creatortoolkit_groups`" })
    for _, g in ipairs(hierarchyData.groups or {}) do
        if g.id and g.name then
            table.insert(queries, {
                query = "INSERT INTO `creatortoolkit_groups` (`id`, `name`) VALUES (?, ?)",
                values = { tostring(g.id), tostring(g.name) }
            })
        end
    end

    -- Familles
    table.insert(queries, { query = "DELETE FROM `creatortoolkit_families`" })
    for _, f in ipairs(hierarchyData.families or {}) do
        if f.id and f.name then
            table.insert(queries, {
                query = "INSERT INTO `creatortoolkit_families` (`id`, `group_id`, `name`) VALUES (?, ?, ?)",
                values = {
                    tostring(f.id),
                    (f.groupId and f.groupId ~= "") and tostring(f.groupId) or nil,
                    tostring(f.name)
                }
            })
        end
    end

    local ok, err = pcall(function()
        return MySQL.transaction.await(queries)
    end)
    if not ok then
        print(("[CreatorToolkit] [DB ERREUR] Save Hierarchy: %s"):format(tostring(err)))
        return false
    end
    return true
end

function DB.Hierarchy.AssignLights(lightIds, groupId, familyId)
    if not lightIds or #lightIds == 0 then return false end

    local gVal = (groupId and groupId ~= "") and tostring(groupId) or nil
    local fVal = (familyId and familyId ~= "") and tostring(familyId) or nil
    local groupName = fVal or gVal

    local queries = {}
    for _, id in ipairs(lightIds) do
        table.insert(queries, {
            query = "UPDATE `creatortoolkit_lights` SET `group_id` = ?, `family_id` = ?, `group_name` = ? WHERE `id` = ?",
            values = { gVal, fVal, groupName, id }
        })
    end

    local ok, err = pcall(function()
        return MySQL.transaction.await(queries)
    end)
    if not ok then
        print(("[CreatorToolkit] [DB ERREUR] AssignLights: %s"):format(tostring(err)))
        return false
    end
    return true
end

--------------------------------------------------------------------------------
-- 5. Module Prop Studio (creatortoolkit_props)
--------------------------------------------------------------------------------

function DB.Props.GetAll()
    local ok, rows = pcall(function()
        return MySQL.query.await("SELECT * FROM `creatortoolkit_props` ORDER BY `created_at` ASC")
    end)
    if not ok or not rows then
        print(("[CreatorToolkit] [DB ERREUR] GetAll props: %s"):format(tostring(rows)))
        return {}
    end

    local list = {}
    for _, row in ipairs(rows) do
        table.insert(list, parsePropRow(row))
    end
    return list
end

function DB.Props.Create(prop)
    if not prop or not prop.id or not prop.model or not prop.coords then return false end

    local rot = prop.rotation or { x = 0.0, y = 0.0, z = prop.heading or 0.0 }
    local metaStr = prop.metadata and json.encode(prop.metadata) or nil

    local query = [[
        INSERT INTO `creatortoolkit_props` (
            `id`, `legacy_id`, `creator`, `model`,
            `coords_x`, `coords_y`, `coords_z`,
            `heading`, `rot_x`, `rot_y`, `rot_z`,
            `render_distance`, `texture_variation`, `collision`,
            `bucket`, `opacity`, `scale`, `physics`,
            `group_id`, `family_id`, `metadata`
        ) VALUES (
            :id, :legacy_id, :creator, :model,
            :coords_x, :coords_y, :coords_z,
            :heading, :rot_x, :rot_y, :rot_z,
            :render_distance, :texture_variation, :collision,
            :bucket, :opacity, :scale, :physics,
            :group_id, :family_id, :metadata
        )
        ON DUPLICATE KEY UPDATE
            `model` = VALUES(`model`),
            `coords_x` = VALUES(`coords_x`),
            `coords_y` = VALUES(`coords_y`),
            `coords_z` = VALUES(`coords_z`),
            `heading` = VALUES(`heading`),
            `rot_x` = VALUES(`rot_x`),
            `rot_y` = VALUES(`rot_y`),
            `rot_z` = VALUES(`rot_z`),
            `render_distance` = VALUES(`render_distance`),
            `texture_variation` = VALUES(`texture_variation`),
            `collision` = VALUES(`collision`),
            `bucket` = VALUES(`bucket`),
            `opacity` = VALUES(`opacity`),
            `scale` = VALUES(`scale`),
            `physics` = VALUES(`physics`),
            `group_id` = VALUES(`group_id`),
            `family_id` = VALUES(`family_id`),
            `metadata` = VALUES(`metadata`)
    ]]

    local params = {
        id = prop.id,
        legacy_id = prop.legacyId or nil,
        creator = prop.creator or "Unknown",
        model = prop.model,
        coords_x = tonumber(string.format("%.3f", prop.coords.x)),
        coords_y = tonumber(string.format("%.3f", prop.coords.y)),
        coords_z = tonumber(string.format("%.3f", prop.coords.z)),
        heading = tonumber(string.format("%.2f", prop.heading or rot.z or 0.0)),
        rot_x = tonumber(string.format("%.2f", rot.x or 0.0)),
        rot_y = tonumber(string.format("%.2f", rot.y or 0.0)),
        rot_z = tonumber(string.format("%.2f", rot.z or 0.0)),
        render_distance = tonumber(string.format("%.2f", prop.renderDistance or 80.0)),
        texture_variation = tonumber(prop.textureVariation or 0),
        collision = (prop.collision ~= false) and 1 or 0,
        bucket = tonumber(prop.bucket or 0),
        opacity = tonumber(prop.opacity or 255),
        scale = tonumber(string.format("%.2f", prop.scale or 1.0)),
        physics = prop.physics and 1 or 0,
        group_id = (prop.groupId and prop.groupId ~= "") and prop.groupId or nil,
        family_id = (prop.familyId and prop.familyId ~= "") and prop.familyId or nil,
        metadata = metaStr
    }

    local ok, err = pcall(function()
        return MySQL.query.await(query, params)
    end)
    if not ok then
        print(("[CreatorToolkit] [DB ERREUR] Création prop %s: %s"):format(prop.id, tostring(err)))
        return false
    end
    return true
end

function DB.Props.Update(prop)
    if not prop or not prop.id then return false end

    local rot = prop.rotation or { x = 0.0, y = 0.0, z = prop.heading or 0.0 }
    local metaStr = prop.metadata and json.encode(prop.metadata) or nil

    local query = [[
        UPDATE `creatortoolkit_props` SET
            `model` = :model,
            `coords_x` = :coords_x, `coords_y` = :coords_y, `coords_z` = :coords_z,
            `heading` = :heading, `rot_x` = :rot_x, `rot_y` = :rot_y, `rot_z` = :rot_z,
            `render_distance` = :render_distance, `texture_variation` = :texture_variation, `collision` = :collision,
            `bucket` = :bucket, `opacity` = :opacity, `scale` = :scale, `physics` = :physics,
            `group_id` = :group_id, `family_id` = :family_id, `metadata` = :metadata
        WHERE `id` = :id
    ]]

    local params = {
        id = prop.id,
        model = prop.model,
        coords_x = tonumber(string.format("%.3f", prop.coords.x)),
        coords_y = tonumber(string.format("%.3f", prop.coords.y)),
        coords_z = tonumber(string.format("%.3f", prop.coords.z)),
        heading = tonumber(string.format("%.2f", prop.heading or rot.z or 0.0)),
        rot_x = tonumber(string.format("%.2f", rot.x or 0.0)),
        rot_y = tonumber(string.format("%.2f", rot.y or 0.0)),
        rot_z = tonumber(string.format("%.2f", rot.z or 0.0)),
        render_distance = tonumber(string.format("%.2f", prop.renderDistance or 80.0)),
        texture_variation = tonumber(prop.textureVariation or 0),
        collision = (prop.collision ~= false) and 1 or 0,
        bucket = tonumber(prop.bucket or 0),
        opacity = tonumber(prop.opacity or 255),
        scale = tonumber(string.format("%.2f", prop.scale or 1.0)),
        physics = prop.physics and 1 or 0,
        group_id = (prop.groupId and prop.groupId ~= "") and prop.groupId or nil,
        family_id = (prop.familyId and prop.familyId ~= "") and prop.familyId or nil,
        metadata = metaStr
    }

    local ok, err = pcall(function()
        return MySQL.query.await(query, params)
    end)
    if not ok then
        print(("[CreatorToolkit] [DB ERREUR] Mise à jour prop %s: %s"):format(prop.id, tostring(err)))
        return false
    end
    return true
end

function DB.Props.Delete(propId)
    if not propId then return false end
    local ok, err = pcall(function()
        return MySQL.update.await("DELETE FROM `creatortoolkit_props` WHERE `id` = ?", { propId })
    end)
    if not ok then
        print(("[CreatorToolkit] [DB ERREUR] Suppression prop %s: %s"):format(propId, tostring(err)))
        return false
    end
    return true
end

function DB.Props.SaveMultiple(propsList)
    if not propsList or #propsList == 0 then return true end

    local queries = {}
    for _, prop in ipairs(propsList) do
        local rot = prop.rotation or { x = 0.0, y = 0.0, z = prop.heading or 0.0 }
        local metaStr = prop.metadata and json.encode(prop.metadata) or nil

        table.insert(queries, {
            query = [[
                INSERT INTO `creatortoolkit_props` (
                    `id`, `legacy_id`, `creator`, `model`,
                    `coords_x`, `coords_y`, `coords_z`,
                    `heading`, `rot_x`, `rot_y`, `rot_z`,
                    `render_distance`, `texture_variation`, `collision`,
                    `bucket`, `opacity`, `scale`, `physics`,
                    `group_id`, `family_id`, `metadata`
                ) VALUES (
                    :id, :legacy_id, :creator, :model,
                    :coords_x, :coords_y, :coords_z,
                    :heading, :rot_x, :rot_y, :rot_z,
                    :render_distance, :texture_variation, :collision,
                    :bucket, :opacity, :scale, :physics,
                    :group_id, :family_id, :metadata
                )
                ON DUPLICATE KEY UPDATE
                    `coords_x` = VALUES(`coords_x`), `coords_y` = VALUES(`coords_y`), `coords_z` = VALUES(`coords_z`),
                    `heading` = VALUES(`heading`), `rot_x` = VALUES(`rot_x`), `rot_y` = VALUES(`rot_y`), `rot_z` = VALUES(`rot_z`),
                    `render_distance` = VALUES(`render_distance`), `texture_variation` = VALUES(`texture_variation`),
                    `collision` = VALUES(`collision`), `bucket` = VALUES(`bucket`),
                    `opacity` = VALUES(`opacity`), `scale` = VALUES(`scale`), `physics` = VALUES(`physics`),
                    `group_id` = VALUES(`group_id`), `family_id` = VALUES(`family_id`), `metadata` = VALUES(`metadata`)
            ]],
            values = {
                id = prop.id,
                legacy_id = prop.legacyId or nil,
                creator = prop.creator or "Unknown",
                model = prop.model,
                coords_x = tonumber(string.format("%.3f", prop.coords.x)),
                coords_y = tonumber(string.format("%.3f", prop.coords.y)),
                coords_z = tonumber(string.format("%.3f", prop.coords.z)),
                heading = tonumber(string.format("%.2f", prop.heading or rot.z or 0.0)),
                rot_x = tonumber(string.format("%.2f", rot.x or 0.0)),
                rot_y = tonumber(string.format("%.2f", rot.y or 0.0)),
                rot_z = tonumber(string.format("%.2f", rot.z or 0.0)),
                render_distance = tonumber(string.format("%.2f", prop.renderDistance or 80.0)),
                texture_variation = tonumber(prop.textureVariation or 0),
                collision = (prop.collision ~= false) and 1 or 0,
                bucket = tonumber(prop.bucket or 0),
                opacity = tonumber(prop.opacity or 255),
                scale = tonumber(string.format("%.2f", prop.scale or 1.0)),
                physics = prop.physics and 1 or 0,
                group_id = (prop.groupId and prop.groupId ~= "") and prop.groupId or nil,
                family_id = (prop.familyId and prop.familyId ~= "") and prop.familyId or nil,
                metadata = metaStr
            }
        })
    end

    local ok, res = pcall(function()
        return MySQL.transaction.await(queries)
    end)
    if not ok then
        print(("[CreatorToolkit] [DB ERREUR] SaveMultiple props: %s"):format(tostring(res)))
        return false
    end
    return true
end

--------------------------------------------------------------------------------
-- 5.1 Module Hiérarchie Props : Groupes & Familles (creatortoolkit_prop_groups / creatortoolkit_prop_families)
--------------------------------------------------------------------------------

function DB.PropHierarchy.Get()
    local okG, groups = pcall(function()
        return MySQL.query.await("SELECT `id`, `name` FROM `creatortoolkit_prop_groups` ORDER BY `created_at` ASC")
    end)
    local okF, families = pcall(function()
        return MySQL.query.await("SELECT `id`, `group_id` AS `groupId`, `name`, `sync_properties` FROM `creatortoolkit_prop_families` ORDER BY `created_at` ASC")
    end)

    local resGroups = {}
    if okG and groups then
        for _, g in ipairs(groups) do
            table.insert(resGroups, { id = tostring(g.id), name = tostring(g.name) })
        end
    end

    local resFamilies = {}
    if okF and families then
        for _, f in ipairs(families) do
            table.insert(resFamilies, {
                id = tostring(f.id),
                groupId = (f.groupId and f.groupId ~= "") and tostring(f.groupId) or nil,
                name = tostring(f.name)
            })
        end
    end

    return {
        groups = resGroups,
        families = resFamilies
    }
end

function DB.PropHierarchy.Save(hierarchyData)
    if not hierarchyData or type(hierarchyData) ~= "table" then return false end

    local queries = {}

    -- Groupes
    table.insert(queries, { query = "DELETE FROM `creatortoolkit_prop_groups`" })
    for _, g in ipairs(hierarchyData.groups or {}) do
        if g.id and g.name then
            table.insert(queries, {
                query = "INSERT INTO `creatortoolkit_prop_groups` (`id`, `name`) VALUES (?, ?)",
                values = { tostring(g.id), tostring(g.name) }
            })
        end
    end

    -- Familles
    table.insert(queries, { query = "DELETE FROM `creatortoolkit_prop_families`" })
    for _, f in ipairs(hierarchyData.families or {}) do
        if f.id and f.name then
            table.insert(queries, {
                query = "INSERT INTO `creatortoolkit_prop_families` (`id`, `group_id`, `name`) VALUES (?, ?, ?)",
                values = {
                    tostring(f.id),
                    (f.groupId and f.groupId ~= "") and tostring(f.groupId) or nil,
                    tostring(f.name)
                }
            })
        end
    end

    local ok, err = pcall(function()
        return MySQL.transaction.await(queries)
    end)
    if not ok then
        print(("[CreatorToolkit] [DB ERREUR] Save Prop Hierarchy: %s"):format(tostring(err)))
        return false
    end
    return true
end

function DB.PropHierarchy.AssignProps(propIds, groupId, familyId)
    if not propIds or #propIds == 0 then return false end

    local gVal = (groupId and groupId ~= "") and tostring(groupId) or nil
    local fVal = (familyId and familyId ~= "") and tostring(familyId) or nil

    local queries = {}
    for _, id in ipairs(propIds) do
        table.insert(queries, {
            query = "UPDATE `creatortoolkit_props` SET `group_id` = ?, `family_id` = ? WHERE `id` = ?",
            values = { gVal, fVal, id }
        })
    end

    local ok, err = pcall(function()
        return MySQL.transaction.await(queries)
    end)
    if not ok then
        print(("[CreatorToolkit] [DB ERREUR] AssignProps: %s"):format(tostring(err)))
        return false
    end
    return true
end

--------------------------------------------------------------------------------
-- 6. Suivi des Migrations (creatortoolkit_migrations)
--------------------------------------------------------------------------------

function DB.Migrations.GetHistory()
    local ok, rows = pcall(function()
        return MySQL.query.await("SELECT * FROM `creatortoolkit_migrations` ORDER BY `id` ASC")
    end)
    if not ok or not rows then return {} end
    return rows
end

function DB.Migrations.Record(key, status, migrated, skipped, errors, details)
    local query = [[
        INSERT INTO `creatortoolkit_migrations` (
            `migration_key`, `status`, `items_migrated`, `items_skipped`, `items_errors`, `details`
        ) VALUES (?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
            `status` = VALUES(`status`),
            `items_migrated` = VALUES(`items_migrated`),
            `items_skipped` = VALUES(`items_skipped`),
            `items_errors` = VALUES(`items_errors`),
            `details` = VALUES(`details`),
            `executed_at` = CURRENT_TIMESTAMP
    ]]
    local ok, err = pcall(function()
        return MySQL.insert.await(query, {
            key,
            status or "completed",
            migrated or 0,
            skipped or 0,
            errors or 0,
            details or nil
        })
    end)
    if not ok then
        print(("[CreatorToolkit] [DB ERREUR] Record migration %s: %s"):format(key, tostring(err)))
    end
    return ok
end

--------------------------------------------------------------------------------
-- 7. Module Assemblages / Prefabs (creatortoolkit_assemblages)
--------------------------------------------------------------------------------

function DB.Assemblages.GetAll()
    local ok, rows = pcall(function()
        return MySQL.query.await("SELECT * FROM `creatortoolkit_assemblages` ORDER BY `created_at` DESC")
    end)
    if not ok or not rows then return {} end

    local assemblages = {}
    for _, r in ipairs(rows) do
        local propsData = {}
        if r.props_data and r.props_data ~= "" then
            local decoded = json.decode(r.props_data)
            if type(decoded) == "table" then
                propsData = decoded
            end
        end

        table.insert(assemblages, {
            id = r.id,
            name = r.name,
            category = r.category or 'Général',
            description = r.description or '',
            thumbnail = r.thumbnail or '',
            propsCount = #propsData,
            propsData = propsData,
            createdAt = r.created_at,
            updatedAt = r.updated_at
        })
    end
    return assemblages
end

function DB.Assemblages.Get(id)
    if not id then return nil end
    local ok, row = pcall(function()
        return MySQL.single.await("SELECT * FROM `creatortoolkit_assemblages` WHERE `id` = ?", { id })
    end)
    if not ok or not row then return nil end

    local propsData = {}
    if row.props_data and row.props_data ~= "" then
        local decoded = json.decode(row.props_data)
        if type(decoded) == "table" then
            propsData = decoded
        end
    end

    return {
        id = row.id,
        name = row.name,
        category = row.category or 'Général',
        description = row.description or '',
        thumbnail = row.thumbnail or '',
        propsCount = #propsData,
        propsData = propsData,
        createdAt = row.created_at,
        updatedAt = row.updated_at
    }
end

function DB.Assemblages.Save(assemblage)
    if not assemblage or not assemblage.id or not assemblage.name then return false end
    local propsJson = json.encode(assemblage.propsData or {})

    local query = [[
        INSERT INTO `creatortoolkit_assemblages` (
            `id`, `name`, `category`, `description`, `thumbnail`, `props_data`
        ) VALUES (?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
            `name` = VALUES(`name`),
            `category` = VALUES(`category`),
            `description` = VALUES(`description`),
            `thumbnail` = VALUES(`thumbnail`),
            `props_data` = VALUES(`props_data`),
            `updated_at` = CURRENT_TIMESTAMP
    ]]

    local ok, err = pcall(function()
        return MySQL.query.await(query, {
            assemblage.id,
            assemblage.name,
            assemblage.category or 'Général',
            assemblage.description or '',
            assemblage.thumbnail or '',
            propsJson
        })
    end)

    if not ok then
        print(("[CreatorToolkit] [DB ERREUR] Save Assemblage: %s"):format(tostring(err)))
        return false
    end
    return true
end

function DB.Assemblages.Delete(id)
    if not id then return false end
    local ok, err = pcall(function()
        return MySQL.update.await("DELETE FROM `creatortoolkit_assemblages` WHERE `id` = ?", { id })
    end)
    if not ok then
        print(("[CreatorToolkit] [DB ERREUR] Delete Assemblage: %s"):format(tostring(err)))
        return false
    end
    return true
end

