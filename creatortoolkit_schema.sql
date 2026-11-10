-- =============================================================================
-- CREATOR TOOLKIT - SCHEMA SQL (OXMYSQL)
-- Suite d'outils créatifs FiveM : Light Studio, Prop Studio, FX Studio
-- =============================================================================

-- 1. Table de suivi des migrations (Idempotence, traçabilité & historique)
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

-- 2. Groupes organisationnels (Dossiers purs, organisation visuelle)
CREATE TABLE IF NOT EXISTS `creatortoolkit_groups` (
    `id` VARCHAR(64) PRIMARY KEY,
    `name` VARCHAR(128) NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. Familles de lumières (Liaison, synchronisation collective & pivot)
CREATE TABLE IF NOT EXISTS `creatortoolkit_families` (
    `id` VARCHAR(64) PRIMARY KEY,
    `group_id` VARCHAR(64) DEFAULT NULL,
    `name` VARCHAR(128) NOT NULL,
    `sync_properties` LONGTEXT DEFAULT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `idx_families_group` (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. Light Studio : Lumières sauvegardées
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

-- 5. Prop Studio : Objets et props placés
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
    `metadata` LONGTEXT DEFAULT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `idx_props_legacy` (`legacy_id`),
    INDEX `idx_props_bucket` (`bucket`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 6. Prop Studio : Assemblages / Préfabs de compositions d'objets
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

