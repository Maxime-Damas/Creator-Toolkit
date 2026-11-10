import React from 'react';
import { Flame, Sparkles, Wand2, ShieldAlert } from 'lucide-react';

export const FXStudioView: React.FC = () => {
  return (
    <aside
      role="region"
      aria-label="FX Studio"
      className="fixed right-4 top-3 z-40 w-80 bg-hud-panel border border-hud-border rounded shadow-md p-3.5 select-none pointer-events-auto flex flex-col gap-3"
    >
      {/* En-tête */}
      <div className="flex items-center justify-between pb-2 border-b border-hud-border">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-hud-surface flex items-center justify-center border border-hud-borderLight text-hud-accent">
            <Flame className="w-3.5 h-3.5" />
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-hud-text">
              FX Studio
            </h2>
            <span className="text-[10px] text-hud-muted block">
              Effets visuels & particules
            </span>
          </div>
        </div>
        <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-hud-accent/15 border border-hud-accent/30 text-hud-accent font-semibold">
          En développement
        </span>
      </div>

      {/* Description du module */}
      <div className="p-2.5 rounded bg-hud-bg/60 border border-hud-border space-y-2">
        <p className="text-[11px] text-hud-muted leading-relaxed">
          Le <strong className="text-hud-text">FX Studio</strong> viendra enrichir vos scènes avec des particules, de la fumée, des étincelles et des effets visuels atmosphériques en temps réel.
        </p>
      </div>

      {/* Fonctionnalités prévues */}
      <div className="space-y-1.5">
        <span className="text-[10px] font-mono uppercase tracking-wider text-hud-muted/80 block">
          Fonctionnalités à venir
        </span>
        <div className="space-y-1 text-[11px]">
          <div className="flex items-center gap-2 p-1.5 rounded bg-hud-surface/40 border border-hud-border/60 text-hud-text">
            <Flame className="w-3 h-3 text-hud-muted shrink-0" />
            <span>Particules de fumée, feu & brouillard</span>
          </div>
          <div className="flex items-center gap-2 p-1.5 rounded bg-hud-surface/40 border border-hud-border/60 text-hud-text">
            <Sparkles className="w-3 h-3 text-hud-muted shrink-0" />
            <span>Gestion de la taille, densité et vitesse</span>
          </div>
          <div className="flex items-center gap-2 p-1.5 rounded bg-hud-surface/40 border border-hud-border/60 text-hud-text">
            <Wand2 className="w-3 h-3 text-hud-muted shrink-0" />
            <span>Liaison aux props et véhicules</span>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-hud-border flex items-center gap-2 text-[10px] text-hud-muted">
        <ShieldAlert className="w-3.5 h-3.5 text-hud-muted shrink-0" />
        <span>Basculez sur Light Studio pour configurer vos lumières.</span>
      </div>
    </aside>
  );
};

