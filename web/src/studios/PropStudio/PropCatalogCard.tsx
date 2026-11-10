import React, { useState } from 'react';
import { CatalogProp } from '../../types/props';
import { Box, Camera, Copy, Check, Plus } from 'lucide-react';

interface PropCatalogCardProps {
  item: CatalogProp;
  onSpawn: (model: string) => void;
  onCaptureSingle: (model: string) => void;
  hasThumbnail: boolean;
  thumbVersion?: number;
}

export const PropCatalogCard: React.FC<PropCatalogCardProps> = React.memo(({
  item,
  onSpawn,
  onCaptureSingle,
  hasThumbnail,
  thumbVersion,
}) => {
  const [imgError, setImgError] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(item.model);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleCapture = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgError(false);
    onCaptureSingle(item.model);
  };

  // URL de la miniature : stable pour le cache CEF/Chromium, actualisée seulement lors d'une recapture
  const thumbUrl = `thumbnails/${item.model}.webp${thumbVersion ? `?v=${thumbVersion}` : ''}`;

  return (
    <div
      onClick={() => onSpawn(item.model)}
      className="group relative p-2 rounded-lg bg-hud-surface/40 hover:bg-hud-surface border border-hud-border/70 hover:border-hud-accent/70 transition-all cursor-pointer flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md select-none"
    >
      {/* 1. ZONE IMAGE / MINIATURE 3D FIDÈLE */}
      <div className="w-full h-28 rounded bg-hud-bg/80 border border-hud-border/50 overflow-hidden flex items-center justify-center relative mb-2">
        {!imgError && hasThumbnail ? (
          <img
            src={thumbUrl}
            alt={item.label}
            onError={() => setImgError(true)}
            className="w-full h-full object-contain p-1.5 group-hover:scale-105 transition-transform duration-200"
            loading="lazy"
            decoding="async"
          />
        ) : (
          /* Image de remplacement / Fallback si pas de miniature */
          <div className="flex flex-col items-center justify-center text-hud-muted/50 p-2 text-center group-hover:text-hud-muted transition-colors">
            <Box className="w-8 h-8 stroke-[1.2] mb-1" />
            <span className="text-[9px] font-mono tracking-tight opacity-75">
              Sans miniature
            </span>
          </div>
        )}

        {/* 4. CATÉGORIE (Badge en haut à droite) */}
        <span className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-hud-panel/90 backdrop-blur-sm border border-hud-border/70 text-[9px] font-semibold text-hud-text tracking-tight shadow-sm">
          {item.category}
        </span>

        {/* Bouton rapide de capture individuelle (sur hover) */}
        <button
          onClick={handleCapture}
          className="absolute bottom-1.5 right-1.5 w-6 h-6 rounded bg-hud-panel/90 hover:bg-hud-accent text-hud-muted hover:text-white border border-hud-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-sm"
          title="Capturer / Régénérer la miniature GTA V de ce prop"
        >
          <Camera className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* INFORMATIONS PRINCIPALES */}
      <div className="space-y-0.5 min-w-0 pb-1">
        {/* 1. NOM LISIBLE DU PROP */}
        <span
          className="text-xs font-bold text-hud-text truncate block group-hover:text-hud-accent transition-colors"
          title={item.label}
        >
          {item.label}
        </span>

        {/* 2. SPAWN NAME (Nom technique GTA V) */}
        <div className="flex items-center justify-between gap-1">
          <span
            className="text-[10px] font-mono text-hud-muted truncate block"
            title={item.model}
          >
            {item.model}
          </span>
          <button
            onClick={handleCopy}
            className="w-4 h-4 flex items-center justify-center text-hud-muted hover:text-hud-text opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
            title="Copier le spawn name"
          >
            {copied ? (
              <Check className="w-3 h-3 text-green-400" />
            ) : (
              <Copy className="w-3 h-3" />
            )}
          </button>
        </div>
      </div>

      {/* BOUTON D'ACTION INFERIEUR */}
      <div className="pt-1.5 border-t border-hud-border/40 flex items-center justify-between text-[10px]">
        <span className="text-hud-muted/70 font-mono text-[9px]">GTA V</span>
        <span className="text-hud-accent font-semibold flex items-center gap-0.5 opacity-90 group-hover:opacity-100 transition-opacity">
          <Plus className="w-3 h-3" />
          <span>Placer</span>
        </span>
      </div>
    </div>
  );
});

