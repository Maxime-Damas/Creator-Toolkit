Config = {}

-- Commande principale pour ouvrir le Creator Toolkit
Config.Command = 'creatortoolkit'

-- Touche par défaut pour ouvrir l'interface (modifiable dans Échap > Paramètres > Touches > FiveM)
Config.DefaultKey = 'F5'

-- Studio actif par défaut à l'ouverture : 'light' | 'prop' | 'fx'
Config.DefaultStudio = 'light'

-- Studios intégrés au Creator Toolkit
Config.Studios = {
    {
        id = 'light',
        label = 'Light Studio',
        description = 'Éclairages, spots dynamiques & ambiances',
        enabled = true
    },
    {
        id = 'prop',
        label = 'Prop Studio',
        description = 'Placement, duplication & manipulation d\'objets',
        enabled = true
    },
    {
        id = 'fx',
        label = 'FX Studio',
        description = 'Effets visuels, particules & atmosphère',
        enabled = true
    }
}

-- Permission requise pour les commandes d'administration et de migration (ACE ou groupe)
Config.AdminPermission = 'command.creatortoolkit_migrate'
Config.RequireAdminPermissions = false -- Mettre à true en production pour exiger les permissions ACE

-- Exécuter automatiquement la migration si la base de données est vide au démarrage
Config.AutoMigrateOnFirstStart = true

-- Distance d'affichage / culling des lumières sauvegardées (en mètres)
Config.CullingDistance = 80.0

-- Rayon de détection des lumières dans la pièce / zone (en mètres)
Config.NearbyRadius = 10.0

-- Rayon de détection des props dans la pièce / zone (en mètres)
Config.PropNearbyRadius = 10.0

-- Touche pour basculer le curseur souris (Left ALT par défaut dans FiveM: 19)
Config.ToggleMouseControl = 19

-- Paramètres de la Freecam (Orbite & Vol Libre)
Config.Camera = {
    minDistance = 1.4,
    maxDistance = 18.0,
    defaultDistance = 4.2,
    fov = 48.0,
    orbitSensitivity = 0.35,
    zoomSensitivity = 0.60,
    freecamZoneRadius = 45.0, -- Périmètre max de vol libre dans la zone (en mètres)
    freecamSpeed = 9.0,       -- Vitesse de vol normal
    freecamFastSpeed = 20.0   -- Vitesse de vol avec SHIFT
}

-- Paramètres du Gizmo 3D
Config.Gizmo = {
    length = 0.85,
    snapTranslate = 0.25, -- Pas de translation en mètres si Snap actif
    snapRotate = 15.0     -- Pas de rotation en degrés si Snap actif
}

-- Vitesses de déplacement clavier
Config.MoveSpeed = 0.04
Config.HeightSpeed = 0.03
Config.RotationSpeed = 2.0
Config.FastMultiplier = 2.5

-- Valeurs par défaut à l'ouverture de l'éditeur
Config.Defaults = {
    rgb = { r = 255, g = 180, b = 60 },
    intensity = 8.5,
    radius = 14.0,
    shape = 'cone',      -- 'cone' (conique), 'sphere' (sphérique), 'box' (cubique)
    shapeParam = 55.0,   -- angle d'ouverture pour cone (10°-120°), échelle/diffusion pour sphere et box
    castShadow = true    -- Projette des ombres dynamiques (bloqué par les obstacles, props et murs)
}

-- Modèles de lampes GTA V disponibles avec catégories
Config.LightProps = {
    {
        model = 'none',
        label = 'Lumière Pure (Sans Prop)',
        category = 'Ambiance',
        description = 'Source de lumière libre sans objet 3D physique',
        offsetZ = 0.0
    },
    {
        model = 'xs_prop_arena_lights_tube_l_a',
        label = 'Tube Néon',
        category = 'Ambiance',
        description = 'Tube néon',
        offsetZ = 0.05
    },
    {
        model = 'prop_worklight_02a',
        label = 'Spot Halogène Double',
        category = 'Chantier',
        description = 'Double projecteur halogène sur trépied réglable',
        offsetZ = 1.65
    },
    {
        model = 'prop_worklight_03b',
        label = 'Projecteur Chantier Simple',
        category = 'Chantier',
        description = 'Projecteur jaune simple sur pied métallique',
        offsetZ = 1.45
    },
    {
        model = 'prop_studio_light_01',
        label = 'Spot Studio Pro',
        category = 'Studio',
        description = 'Lampe de studio photo/cinéma avec réflecteur',
        offsetZ = 1.80
    },
    {
        model = 'prop_flood_light',
        label = 'Projecteur Flood Large',
        category = 'Projecteur',
        description = 'Projecteur flood haute puissance pour grands espaces',
        offsetZ = 2.10
    },
    {
        model = 'prop_spot_clamp',
        label = 'Spot à Pince Compact',
        category = 'Compact',
        description = 'Spot directionnel compact à fixer sur support',
        offsetZ = 0.30
    },
    {
        model = 'prop_construc_light_01',
        label = 'Mât Luminaire Chantier',
        category = 'Chantier',
        description = 'Mât robuste d\'éclairage de travaux nocturnes',
        offsetZ = 2.40
    }
}

--------------------------------------------------------------------------------
-- Paramètres Généraux du Prop Studio
--------------------------------------------------------------------------------

Config.PropStudio = {
    -- Rayon de détection des props dans la pièce / zone pour l'interface (en mètres)
    NearbyRadius = 10.0,
    -- Distance d'affichage / culling par défaut (en mètres)
    DefaultRenderDistance = 150.0,
    -- Distance de culling maximale configurable par l'utilisateur
    MaxRenderDistance = 400.0,
    -- Fréquence du cycle de Distance Culling côté client (en ms)
    CullingInterval = 500,
    -- Fréquence maximale d'envoi des Live Transforms (50 ms = 20 Hz)
    SyncInterval = 50,
    -- Expiration automatique d'un verrou inactif (en secondes)
    LockTimeout = 180,
    -- Paramètres de la simulation physique (touche I)
    Physics = {
        velocityThreshold = 0.02, -- Seuil de stabilisation de vitesse
        maxDuration = 6.0,        -- Durée maximale de simulation physique (secondes)
        impulseZ = -0.4           -- Légère impulsion vers le bas
    },
    -- Contours lumineux (Outlines) en mode édition
    Outlines = {
        enabled = true,
        color = { 255, 255, 255, 180 },          -- Blanc pour les props chargés
        selectedColor = { 0, 255, 100, 255 }     -- Vert vif pour le prop sélectionné
    },
    -- Permissions ACE configurables (bypasse automatique pour console et admins)
    Permissions = {
        open = 'creator.prop.open',
        edit = 'creator.prop.edit',
        delete = 'creator.prop.delete'
    }
}

--------------------------------------------------------------------------------
-- Catégories Officielles du Prop Studio (22 catégories)
--------------------------------------------------------------------------------

Config.PropCategories = {
    'Bar',
    'Bathroom',
    'Bins',
    'Construction',
    'Electrical',
    'Equipment',
    'Garage',
    'Industrial',
    'Interior',
    'Kitchen',
    'Living room',
    'Medical',
    'Office',
    'Outdoor',
    'Plants',
    'Recreational',
    'Shelves',
    'Seating',
    'Storage',
    'Tables',
    'Utility',
    'Walls'
}

--------------------------------------------------------------------------------
-- Catalogue de Props GTA V Organisé par Catégorie
--------------------------------------------------------------------------------

Config.PropCatalog = {
    -- Bar
    { model = 'prop_bar_pump_01', label = 'Tireuse à bière', category = 'Bar' },
    { model = 'prop_bar_stool_01', label = 'Tabouret de bar', category = 'Bar' },
    { model = 'prop_wine_bot_01', label = 'Bouteille de vin', category = 'Bar' },
    { model = 'prop_champ_01a', label = 'Bouteille de champagne', category = 'Bar' },
    { model = 'prop_whiskey_bottle', label = 'Bouteille de whisky', category = 'Bar' },
    { model = 'prop_beer_bottle', label = 'Bouteille de bière', category = 'Bar' },
    { model = 'prop_cocktail_glass', label = 'Verre à cocktail', category = 'Bar' },

    -- Bathroom
    { model = 'prop_toilet_01', label = 'Toilettes', category = 'Bathroom' },
    { model = 'prop_sink_02', label = 'Lavabo moderne', category = 'Bathroom' },
    { model = 'prop_soap_disp_01', label = 'Distributeur de savon', category = 'Bathroom' },
    { model = 'prop_towel_rail_01', label = 'Porte-serviettes', category = 'Bathroom' },
    { model = 'prop_shower_rack_01', label = 'Étagère de douche', category = 'Bathroom' },

    -- Bins
    { model = 'prop_bin_05a', label = 'Poubelle publique bleue', category = 'Bins' },
    { model = 'prop_dumpster_01a', label = 'Conteneur benne poubelle', category = 'Bins' },
    { model = 'prop_cs_bin_01', label = 'Corbeille à papier métal', category = 'Bins' },
    { model = 'prop_bin_beach_01d', label = 'Poubelle de plage', category = 'Bins' },
    { model = 'prop_recyclebin_01a', label = 'Bac de tri recyclage', category = 'Bins' },

    -- Construction
    { model = 'prop_barrier_work05', label = 'Barrière de chantier', category = 'Construction' },
    { model = 'prop_mp_cone_01', label = 'Cône de signalisation', category = 'Construction' },
    { model = 'prop_scaffold_pole', label = 'Échafaudage métallique', category = 'Construction' },
    { model = 'prop_pallet_01a', label = 'Palette en bois', category = 'Construction' },
    { model = 'prop_cementmixer_01a', label = 'Bétonnière de chantier', category = 'Construction' },
    { model = 'prop_wheelbarrow01a', label = 'Brouette', category = 'Construction' },

    -- Electrical
    { model = 'prop_elecbox_01a', label = 'Boîtier électrique mural', category = 'Electrical' },
    { model = 'prop_generator_01a', label = 'Groupe électrogène', category = 'Electrical' },
    { model = 'prop_elecbox_02a', label = 'Transformateur électrique', category = 'Electrical' },
    { model = 'prop_cablespool_01a', label = 'Touret enrouleur câble', category = 'Electrical' },

    -- Equipment
    { model = 'prop_fire_exting_1a', label = 'Extincteur mural', category = 'Equipment' },
    { model = 'prop_tool_bench02', label = 'Établi avec outils', category = 'Equipment' },
    { model = 'prop_aircon_l_01', label = 'Climatiseur extérieur', category = 'Equipment' },
    { model = 'prop_watercooler', label = 'Fontaine à eau réfrigérée', category = 'Equipment' },

    -- Garage
    { model = 'prop_carjack', label = 'Cric hydraulique', category = 'Garage' },
    { model = 'prop_engine_hoist', label = 'Chèvre lève-moteur', category = 'Garage' },
    { model = 'prop_wheel_tyre', label = 'Pneu seul', category = 'Garage' },
    { model = 'prop_tyre_rack_01', label = 'Rack à pneus mural', category = 'Garage' },
    { model = 'prop_oilcan_01a', label = 'Bidon d\'huile moteur', category = 'Garage' },

    -- Industrial
    { model = 'prop_ind_barge_01', label = 'Cuve industrielle métal', category = 'Industrial' },
    { model = 'prop_chem_vial_02', label = 'Fût chimique toxique', category = 'Industrial' },
    { model = 'prop_pipe_stack_01', label = 'Piles de tuyaux métal', category = 'Industrial' },
    { model = 'prop_chemtank_01', label = 'Citerne de stockage', category = 'Industrial' },

    -- Interior
    { model = 'prop_tv_flat_01', label = 'Téléviseur écran plat', category = 'Interior' },
    { model = 'prop_hotel_clock_01', label = 'Horloge murale', category = 'Interior' },
    { model = 'apa_mp_h_acc_rugwoolm_01', label = 'Grand tapis de salon', category = 'Interior' },
    { model = 'vw_prop_vw_wallart_55a', label = 'Tableau d\'art moderne', category = 'Interior' },

    -- Kitchen
    { model = 'prop_cooker_03', label = 'Cuisinière avec four', category = 'Kitchen' },
    { model = 'prop_fridge_01', label = 'Grand réfrigérateur inox', category = 'Kitchen' },
    { model = 'prop_micro_01', label = 'Four micro-ondes', category = 'Kitchen' },
    { model = 'prop_coffee_mac_01', label = 'Cafetière expresso', category = 'Kitchen' },
    { model = 'prop_toaster_01', label = 'Grille-pain', category = 'Kitchen' },

    -- Living room
    { model = 'bkr_prop_clubhouse_sofa_01a', label = 'Canapé 3 places cuir', category = 'Living room' },
    { model = 'prop_armchair_01', label = 'Fauteuil confortable', category = 'Living room' },
    { model = 'prop_fbi3_coffee_table', label = 'Table basse salon', category = 'Living room' },
    { model = 'v_res_fh_floorlamp', label = 'Lampadaire de salon sur pied', category = 'Living room' },

    -- Medical
    { model = 'v_med_bed1', label = 'Lit d\'hôpital réglable', category = 'Medical' },
    { model = 'v_ret_ta_firstaid', label = 'Trousse de premiers secours', category = 'Medical' },
    { model = 'prop_ld_health_pack', label = 'Kit médical de soins', category = 'Medical' },
    { model = 'prop_wheelchair_01', label = 'Fauteuil roulant', category = 'Medical' },

    -- Office
    { model = 'prop_office_desk_01', label = 'Bureau de direction bois', category = 'Office' },
    { model = 'prop_off_chair_04', label = 'Fauteuil de bureau ergonomique', category = 'Office' },
    { model = 'prop_monitor_01b', label = 'Écran d\'ordinateur', category = 'Office' },
    { model = 'prop_printer_01', label = 'Imprimante réseau', category = 'Office' },
    { model = 'prop_watercooler_dark', label = 'Fontaine bonbonne d\'eau noire', category = 'Office' },

    -- Outdoor
    { model = 'prop_bench_01a', label = 'Banc public bois & fonte', category = 'Outdoor' },
    { model = 'prop_picnictable_01', label = 'Table de pique-nique', category = 'Outdoor' },
    { model = 'prop_parasol_01', label = 'Parasol de terrasse', category = 'Outdoor' },
    { model = 'prop_bbq_3', label = 'Barbecue extérieur', category = 'Outdoor' },
    { model = 'prop_bollard_02a', label = 'Bannière borne métal', category = 'Outdoor' },

    -- Plants
    { model = 'prop_plant_int_01a', label = 'Plante verte d\'intérieur pot', category = 'Plants' },
    { model = 'prop_plant_palm_01a', label = 'Palmier décoratif', category = 'Plants' },
    { model = 'prop_pot_plant_02a', label = 'Bonsaï en pot céramique', category = 'Plants' },
    { model = 'prop_bush_lrg_01', label = 'Grand buisson taillé', category = 'Plants' },

    -- Recreational
    { model = 'prop_pooltable_02', label = 'Table de billard', category = 'Recreational' },
    { model = 'prop_arcade_01', label = 'Borne d\'arcade rétro', category = 'Recreational' },
    { model = 'prop_jukebox_01', label = 'Jukebox lumineux vintage', category = 'Recreational' },
    { model = 'prop_dart_bd_01', label = 'Cible de fléchettes', category = 'Recreational' },

    -- Shelves
    { model = 'ch_prop_ch_laundry_shelving_01a', label = 'Étagère métallique industrielle', category = 'Shelves' },
    { model = 'v_res_tre_smallbookshelf', label = 'Bibliothèque en bois', category = 'Shelves' },
    { model = 'prop_cabinet_01', label = 'Armoire de rangement atelier', category = 'Shelves' },

    -- Seating
    { model = 'prop_chair_01a', label = 'Chaise en bois classique', category = 'Seating' },
    { model = 'prop_chair_02', label = 'Chaise de salle à manger', category = 'Seating' },
    { model = 'prop_chair_08', label = 'Chaise moderne plastique', category = 'Seating' },
    { model = 'prop_waiting_seat_01', label = 'Rangée sièges salle d\'attente', category = 'Seating' },

    -- Storage
    { model = 'prop_boxpile_01a', label = 'Pile de cartons de déménagement', category = 'Storage' },
    { model = 'prop_crate_01a', label = 'Caisse en bois de transport', category = 'Storage' },
    { model = 'prop_barrel_01a', label = 'Tonneau en bois rustique', category = 'Storage' },
    { model = 'prop_biotech_store', label = 'Conteneur sécurisé renforcé', category = 'Storage' },

    -- Tables
    { model = 'prop_table_03', label = 'Table à manger rectangulaire', category = 'Tables' },
    { model = 'prop_table_04', label = 'Table ronde bistrot', category = 'Tables' },
    { model = 'prop_patio_lounger1_table', label = 'Table basse de jardin', category = 'Tables' },

    -- Utility
    { model = 'ch_prop_ch_fuse_box_01a', label = 'Tableau à fusibles mural', category = 'Utility' },
    { model = 'prop_elecbox_03a', label = 'Compteur technique extérieur', category = 'Utility' },
    { model = 'prop_roofvent_01a', label = 'Ventilation de toiture', category = 'Utility' },
    { model = 'prop_roadcone02a', label = 'Plot de chantier lumineux', category = 'Utility' },

    -- Walls
    { model = 'prop_fncwood_01a', label = 'Palissade en bois', category = 'Walls' },
    { model = 'prop_fnclink_03a', label = 'Grillage métallique rigide', category = 'Walls' }
}
