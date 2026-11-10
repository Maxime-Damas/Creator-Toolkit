import React from 'react';
import { useLightStore } from '../store/useLightStore';
import { X, Sun, Box, Sparkles, Layers } from 'lucide-react';

export const Header: React.FC = () => {
  const {
    toolkitName,
    statusText,
    activeStudio,
    studios,
    setActiveStudio,
    requestCancel,
  } = useLightStore();

  const getStudioIcon = (id: string, isActive: boolean) => {
    const iconClass = `w-3 h-3 ${isActive ? 'text-hud-accent' : 'text-hud-muted'}`;
    switch (id) {
      case 'light':
        return <Sun className={iconClass} />;
      case 'prop':
        return <Box className={iconClass} />;
      case 'fx':
        return <Sparkles className={iconClass} />;
      default:
        return <Layers className={iconClass} />;
    }
  };

  return (
    <header className="fixed top-3 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2.5 px-3 py-1.5 bg-hud-panel border border-hud-border rounded shadow-md select-none pointer-events-auto">
      {/* Marque & Statut */}
      <div className="flex items-center gap-2 pr-2.5 border-r border-hud-border">
        <span className="text-[11px] font-bold tracking-wider uppercase text-hud-text">
          {toolkitName || 'CREATOR TOOLKIT'}
        </span>
        <span className="text-hud-borderLight text-xs">/</span>
        <span className="text-[10px] font-mono text-hud-muted">
          {statusText}
        </span>
      </div>

      {/* Navigation entre les Studios (Onglets) */}
      <nav aria-label="Studios" className="flex items-center gap-1 bg-hud-bg/80 p-0.5 rounded border border-hud-border">
        {studios.map((studio) => {
          const isActive = activeStudio === studio.id;
          return (
            <button
              key={studio.id}
              onClick={() => setActiveStudio(studio.id)}
              title={studio.description || studio.label || studio.name}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
                isActive
                  ? 'bg-hud-surface text-hud-text border border-hud-borderLight shadow-sm font-semibold'
                  : 'text-hud-muted hover:text-hud-text hover:bg-hud-surface/50 border border-transparent'
              }`}
            >
              {getStudioIcon(studio.id, isActive)}
              <span>{studio.label || studio.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Bouton Fermer */}
      <div className="pl-1 border-l border-hud-border">
        <button
          onClick={requestCancel}
          title="Fermer l'éditeur (Échap ou F5)"
          className="w-6 h-6 flex items-center justify-center rounded text-hud-muted hover:text-hud-text hover:bg-hud-surface transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </header>
  );
};
