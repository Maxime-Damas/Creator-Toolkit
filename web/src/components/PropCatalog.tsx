import React, { useMemo } from 'react';
import { useLightStore } from '../store/useLightStore';
import {
  FolderOpen,
  ChevronDown,
  Search,
  Box,
  Sparkles,
  X,
} from 'lucide-react';

export const PropCatalog: React.FC = () => {
  const {
    availableProps,
    propIndex,
    catalogOpen,
    selectedCategory,
    searchQuery,
    setCatalogOpen,
    toggleCatalog,
    setSelectedCategory,
    setSearchQuery,
    spawnNewProp,
  } = useLightStore();

  // Liste unique des catégories
  const categories = useMemo(() => {
    const set = new Set<string>();
    availableProps.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return ['Tous', ...Array.from(set)];
  }, [availableProps]);

  // Props filtrés par recherche et catégorie
  const filteredProps = useMemo(() => {
    return availableProps.filter((p) => {
      const matchCat =
        selectedCategory === 'Tous' || p.category === selectedCategory;
      const matchSearch =
        searchQuery.trim() === '' ||
        p.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.model.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [availableProps, selectedCategory, searchQuery]);

  return (
    <nav
      aria-label="Navigateur de props"
      className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 select-none pointer-events-auto"
    >
      {catalogOpen ? (
        <div className="w-[84vw] max-w-4xl bg-hud-panel border border-hud-border rounded shadow-lg p-2.5 flex flex-col gap-2 animate-in fade-in slide-in-from-bottom-2 duration-150">
          {/* Barre d'outils du catalogue */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-1.5 border-b border-hud-border">
            {/* Titre & Compteur */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-hud-muted">
                Navigateur d'assets
              </span>
              <span className="text-[10px] text-hud-muted font-mono">
                ({filteredProps.length})
              </span>
            </div>

            {/* Champ de recherche */}
            <div className="relative w-48">
              <Search className="w-3 h-3 text-hud-muted absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Filtrer par nom..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-6 pl-7 pr-6 bg-hud-surface border border-hud-border rounded text-xs text-hud-text placeholder:text-hud-muted/70 focus:outline-none focus:border-hud-accent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 text-hud-muted hover:text-hud-text"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Catégories (Onglets sobres) */}
            <div className="flex items-center gap-1 overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${
                    selectedCategory === cat
                      ? 'bg-hud-surface text-hud-text border border-hud-borderLight'
                      : 'text-hud-muted hover:text-hud-text hover:bg-hud-surface/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Bouton Replier */}
            <button
              onClick={() => setCatalogOpen(false)}
              className="flex items-center gap-1 px-1.5 py-0.5 rounded text-hud-muted hover:text-hud-text hover:bg-hud-surface text-xs transition-colors ml-auto"
            >
              <span>Réduire</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Grille de vignettes d'assets */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1.5 max-h-44 overflow-y-auto pr-0.5">
            {filteredProps.map((prop) => {
              const originalIndex = availableProps.findIndex(
                (p) => p.model === prop.model
              );
              const isSelected = originalIndex === propIndex;

              return (
                <button
                  key={prop.model}
                  onClick={() => spawnNewProp(originalIndex)}
                  className={`group flex flex-col p-2 rounded text-left transition-colors border ${
                    isSelected
                      ? 'bg-hud-surface border-hud-accent'
                      : 'bg-hud-surface/60 hover:bg-hud-surface border-transparent hover:border-hud-border'
                  }`}
                >
                  {/* Icône de prop technique ou source pure */}
                  <div className="w-7 h-7 rounded-sm bg-hud-bg/80 border border-hud-border flex items-center justify-center text-hud-muted group-hover:text-hud-text mb-1.5">
                    {prop.model === 'none' ? (
                      <Sparkles className="w-3.5 h-3.5 text-hud-accent" />
                    ) : (
                      <Box className="w-3.5 h-3.5" />
                    )}
                  </div>

                  <span className="text-xs font-medium text-hud-text truncate w-full">
                    {prop.label}
                  </span>
                  <span className="text-[10px] text-hud-muted font-mono truncate w-full">
                    {prop.model === 'none' ? 'Sans modèle 3D' : prop.model}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        /* Bouton replié */
        <button
          onClick={toggleCatalog}
          title="Ouvrir le catalogue de modèles (Touche C)"
          className="h-7 px-3 rounded bg-hud-panel border border-hud-border shadow-md flex items-center gap-2 text-xs font-medium text-hud-text hover:bg-hud-surface transition-colors"
        >
          <FolderOpen className="w-3.5 h-3.5 text-hud-accent" />
          <span>Catalogue Props</span>
          <kbd className="text-[9px] font-mono text-hud-muted px-1 py-0.2 bg-hud-bg rounded border border-hud-border/70">
            C
          </kbd>
        </button>
      )}
    </nav>
  );
};
