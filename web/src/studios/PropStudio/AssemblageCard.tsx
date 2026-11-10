import React, { useState } from 'react';
import { AssemblageItem } from '../../types/props';
import { Layers, Copy, Trash2, Edit2, Plus, Sparkles } from 'lucide-react';

interface AssemblageCardProps {
  item: AssemblageItem;
  onSpawn: (id: string) => void;
  onDuplicate: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (item: AssemblageItem) => void;
}

export const AssemblageCard: React.FC<AssemblageCardProps> = React.memo(({
  item,
  onSpawn,
  onDuplicate,
  onDelete,
  onEdit,
}) => {
  const [imgError, setImgError] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const thumbUrl = item.thumbnail
    ? item.thumbnail
    : item.propsData?.[0]?.model
    ? `thumbnails/${item.propsData[0].model}.webp`
    : null;

  return (
    <div
      onClick={() => onSpawn(item.id)}
      className="group relative p-2.5 rounded-xl bg-hud-surface/40 hover:bg-hud-surface/90 border border-hud-border hover:border-amber-500/70 transition-all cursor-pointer flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg select-none"
    >
      {/* 1. ZONE IMAGE / APERÇU 3D */}
      <div className="w-full h-28 rounded-lg bg-hud-bg/80 border border-hud-border/60 overflow-hidden flex items-center justify-center relative mb-2 group-hover:border-amber-500/40 transition-colors">
        {!imgError && thumbUrl ? (
          <img
            src={thumbUrl}
            alt={item.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-contain p-1.5 group-hover:scale-105 transition-transform duration-200"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-amber-400/60 p-2 text-center">
            <Layers className="w-9 h-9 stroke-[1.4] mb-1" />
            <span className="text-[9px] font-mono tracking-tight opacity-75">
              Assemblage
            </span>
          </div>
        )}

        {/* 4. CATÉGORIE PERSONNALISÉE (Badge en haut à gauche) */}
        <span className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full bg-hud-panel/90 backdrop-blur-sm border border-amber-500/40 text-[9px] font-semibold text-amber-300 tracking-tight shadow-sm flex items-center gap-1">
          <Sparkles className="w-2.5 h-2.5" />
          <span>{item.category || 'Général'}</span>
        </span>

        {/* 3. NOMBRE DE PROPS (Badge en haut à droite) */}
        <span className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-hud-panel/90 backdrop-blur-sm border border-hud-border text-[9px] font-mono font-bold text-hud-text shadow-sm flex items-center gap-1">
          <Layers className="w-2.5 h-2.5 text-hud-accent" />
          <span>{item.propsCount || item.propsData?.length || 0} props</span>
        </span>

        {/* Boutons d'actions rapides en bas à droite (au survol) */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-1.5 right-1.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity bg-hud-panel/95 backdrop-blur-sm p-0.5 rounded border border-hud-border"
        >
          <button
            onClick={() => onEdit(item)}
            className="w-5 h-5 rounded hover:bg-hud-surface text-hud-muted hover:text-hud-text flex items-center justify-center transition-colors"
            title="Modifier l'assemblage"
          >
            <Edit2 className="w-3 h-3" />
          </button>
          <button
            onClick={() => onDuplicate(item.id)}
            className="w-5 h-5 rounded hover:bg-hud-surface text-hud-muted hover:text-hud-accent flex items-center justify-center transition-colors"
            title="Dupliquer l'assemblage"
          >
            <Copy className="w-3 h-3" />
          </button>
          {confirmDelete ? (
            <button
              onClick={() => onDelete(item.id)}
              className="px-1.5 h-5 rounded bg-red-600 hover:bg-red-700 text-white text-[9px] font-bold flex items-center justify-center transition-colors animate-pulse"
              title="Confirmer la suppression"
            >
              Supprimer ?
            </button>
          ) : (
            <button
              onClick={() => {
                setConfirmDelete(true);
                setTimeout(() => setConfirmDelete(false), 3000);
              }}
              className="w-5 h-5 rounded hover:bg-red-500/20 text-hud-muted hover:text-red-400 flex items-center justify-center transition-colors"
              title="Supprimer du catalogue"
            >
              <Trash2 className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* INFORMATIONS PRINCIPALES */}
      <div className="space-y-1 min-w-0 pb-1">
        {/* 1. NOM DE L'ASSEMBLAGE */}
        <span
          className="text-xs font-bold text-hud-text truncate block group-hover:text-amber-400 transition-colors"
          title={item.name}
        >
          {item.name}
        </span>

        {/* Description facultative */}
        {item.description ? (
          <p className="text-[10px] text-hud-muted truncate" title={item.description}>
            {item.description}
          </p>
        ) : (
          <span className="text-[9px] font-mono text-hud-muted/70 block">
            Composition de {item.propsCount || item.propsData?.length || 0} objets
          </span>
        )}
      </div>

      {/* BOUTON PLACER */}
      <div className="pt-1.5 border-t border-hud-border/50 flex items-center justify-between text-[10px]">
        <span className="text-hud-muted font-medium text-[9px]">Prêt à placer</span>
        <span className="text-amber-400 font-bold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
          <Plus className="w-3 h-3" />
          <span>Placer</span>
        </span>
      </div>
    </div>
  );
});

