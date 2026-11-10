fx_version 'cerulean'
game 'gta5'
lua54 'yes'

name 'creator-toolkit'
author 'MaDas Studio'
description 'Creator Toolkit - Suite d\'outils créatifs pour FiveM (Light Studio, Prop Studio, FX Studio)'
version '1.0.0'

dependencies {
    'oxmysql'
}

shared_scripts {
    'config.lua'
}

client_scripts {
    'client/main.lua',
    'client/props.lua',
    'client/thumbs.lua'
}

server_scripts {
    '@oxmysql/lib/MySQL.lua',
    'server/db.lua',
    'server/migration.lua',
    'server/props.lua',
    'server/main.lua',
    'server/thumbs.js'
}

ui_page 'web/dist/index.html'

files {
    'web/dist/index.html',
    'web/dist/assets/**',
    'web/dist/thumbnails/**',
    'lights.json'
}
