import React from 'react';
import { useLightStore } from '../store/useLightStore';
import { ChevronLeft, ChevronRight, Keyboard } from 'lucide-react';

export const CommandBar: React.FC = () => {
  const { commandBarOpen, cameraMode, activeStudio, setCommandBarOpen } = useLightStore();

  return (
    <aside
      aria-label="Raccourcis et commandes"
      className="fixed left-4 top-1/2 -translate-y-1/2 z-40 select-none pointer-events-auto"
    >
      {commandBarOpen ? (
        <div className="w-60 bg-hud-panel border border-hud-border rounded shadow-md p-2.5 flex flex-col gap-2">
          {/* En-tête */}
          <div className="flex items-center justify-between pb-1.5 border-b border-hud-border">
            <span className="text-[10px] font-bold uppercase tracking-wider text-hud-muted">
              Raccourcis
            </span>
            <button
              onClick={() => setCommandBarOpen(false)}
              title="Réduire l'aide"
              className="w-5 h-5 flex items-center justify-center text-hud-muted hover:text-hud-text hover:bg-hud-surface rounded transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-1 text-[11px]">
            {/* Section Caméra */}
            <div className="pt-0.5 pb-1">
              <span className="text-[9px] font-mono uppercase tracking-wider text-hud-muted/70 block mb-1">
                Vue & Déplacement
              </span>
              <div className="space-y-1">
                <div className="flex items-center justify-between py-0.5">
                  <span className="text-hud-text">Ouvrir / Fermer</span>
                  <kbd className="px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-accent font-semibold">
                    F5
                  </kbd>
                </div>

                <div className="flex items-center justify-between py-0.5">
                  <span className="text-hud-text">Bascule Caméra</span>
                  <kbd className="px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-muted">
                    F
                  </kbd>
                </div>

                {cameraMode === 'freecam' ? (
                  <>
                    <div className="flex items-center justify-between py-0.5">
                      <span className="text-hud-text">Voler</span>
                      <kbd className="px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-muted">
                        Z / Q / S / D
                      </kbd>
                    </div>
                    <div className="flex items-center justify-between py-0.5">
                      <span className="text-hud-text">Monter / Descendre</span>
                      <kbd className="px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-muted">
                        Espace / Ctrl
                      </kbd>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-between py-0.5">
                    <span className="text-hud-text">Zoom caméra</span>
                    <kbd className="px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-muted">
                      Molette
                    </kbd>
                  </div>
                )}

                <div className="flex items-center justify-between py-0.5">
                  <span className="text-hud-text">Orienter la vue</span>
                  <kbd className="px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-muted">
                    Glisser Souris
                  </kbd>
                </div>
              </div>
            </div>

            <div className="w-full h-[1px] bg-hud-border" />

            {/* Section Édition & Outils */}
            <div className="pt-0.5">
              <span className="text-[9px] font-mono uppercase tracking-wider text-hud-muted/70 block mb-1">
                Édition & Manipulation
              </span>
              <div className="space-y-1">
                <div className="flex items-center justify-between py-0.5">
                  <span className="text-hud-text">Déplacer (Translation)</span>
                  <kbd className="px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-muted">
                    E
                  </kbd>
                </div>

                <div className="flex items-center justify-between py-0.5">
                  <span className="text-hud-text">Pivoter (Rotation)</span>
                  <kbd className="px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-muted">
                    R
                  </kbd>
                </div>

                <div className="flex items-center justify-between py-0.5">
                  <span className="text-hud-text">Aimantation (Snap)</span>
                  <kbd className="px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-muted">
                    X
                  </kbd>
                </div>

                <div className="flex items-center justify-between py-0.5">
                  <span className="text-hud-text">Plaquer au sol</span>
                  <kbd className="px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-muted">
                    G
                  </kbd>
                </div>

                <div className="flex items-center justify-between py-0.5">
                  <span className="text-hud-text">Catalogue de props</span>
                  <kbd className="px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-muted">
                    C
                  </kbd>
                </div>

                {activeStudio === 'prop' && (
                  <div className="flex items-center justify-between py-0.5">
                    <span className="text-hud-text">Appliquer physique</span>
                    <kbd className="px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-accent font-semibold">
                      I
                    </kbd>
                  </div>
                )}

                <div className="flex items-center justify-between py-0.5">
                  <span className="text-hud-text">Dupliquer le prop</span>
                  <kbd className="px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-accent font-semibold">
                    LShift
                  </kbd>
                </div>

                <div className="flex items-center justify-between py-0.5">
                  <span className="text-hud-text">
                    {activeStudio === 'prop' ? 'Supprimer le prop' : 'Supprimer le spot'}
                  </span>
                  <kbd className="px-1.5 py-0.2 rounded-sm bg-hud-surface border border-hud-border text-[9px] font-mono text-hud-muted">
                    Suppr
                  </kbd>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setCommandBarOpen(true)}
          title="Afficher les commandes"
          className="flex items-center gap-1.5 px-2 py-1.5 rounded bg-hud-panel border border-hud-border shadow-md text-hud-muted hover:text-hud-text transition-colors"
        >
          <Keyboard className="w-3.5 h-3.5" />
          <span className="text-[10px] font-medium uppercase tracking-wider">Aide</span>
          <ChevronRight className="w-3 h-3 text-hud-muted" />
        </button>
      )}
    </aside>
  );
};
