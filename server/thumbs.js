// =============================================================================
// CREATOR TOOLKIT - GESTIONNAIRE DE MINIATURES (SERVER NODE.JS)
// =============================================================================

const fs = require('fs');
const path = require('path');

const resourceName = GetCurrentResourceName();
const resPath = GetResourcePath(resourceName);

// Répertoires de destination des miniatures
const distThumbsDir = path.join(resPath, 'web', 'dist', 'thumbnails');
const publicThumbsDir = path.join(resPath, 'web', 'public', 'thumbnails');

// Création automatique des dossiers
for (const dir of [distThumbsDir, publicThumbsDir]) {
    try {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    } catch (e) {
        console.error('[CreatorToolkit] Erreur création dossier thumbnails:', e);
    }
}

// Fonction pour lister les miniatures existantes
function getExistingThumbnails() {
    try {
        if (!fs.existsSync(distThumbsDir)) return [];
        const files = fs.readdirSync(distThumbsDir);
        return files
            .filter(f => f.endsWith('.webp') || f.endsWith('.jpg') || f.endsWith('.png'))
            .map(f => f.replace(/\.(webp|jpg|png)$/, ''));
    } catch (e) {
        return [];
    }
}

// Événement : Sauvegarde d'une miniature reçue du client
onNet('creatortoolkit:propStudio:saveThumbnail', (model, dataUri) => {
    const src = source;
    if (!model || !dataUri) return;

    try {
        const comma = dataUri.indexOf(',');
        const raw = comma !== -1 ? dataUri.slice(comma + 1) : dataUri;
        const buffer = Buffer.from(raw, 'base64');
        const ext = dataUri.startsWith('data:image/png') ? 'png' : 'webp';

        const filename = `${model}.${ext}`;
        const distFile = path.join(distThumbsDir, filename);
        const publicFile = path.join(publicThumbsDir, filename);

        // Sauvegarde synchrone dans dist (affichage immédiat dans NUI)
        fs.writeFileSync(distFile, buffer);

        // Sauvegarde dans public (persistance lors d'un build Vite ultérieur)
        try {
            fs.writeFileSync(publicFile, buffer);
        } catch (_) {}

        // Notification de tous les clients
        emitNet('creatortoolkit:propStudio:onThumbnailSaved', -1, model, filename);

        console.log(`[CreatorToolkit] [Miniature] Sauvegardée avec succès : ${filename} (${Math.round(buffer.length / 1024)} Ko)`);
    } catch (err) {
        console.error('[CreatorToolkit] Erreur sauvegarde miniature ' + model + ':', err);
    }
});

// Événement : Demande de la liste des miniatures existantes
onNet('creatortoolkit:propStudio:requestThumbnailsList', () => {
    const src = source;
    emitNet('creatortoolkit:propStudio:syncThumbnailsList', src, getExistingThumbnails());
});
