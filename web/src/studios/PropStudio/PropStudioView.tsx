import React, { useMemo, useState, useEffect } from 'react';
import { usePropStore } from '../../store/usePropStore';
import { PropItem } from '../../types/props';
import { PropCatalogCard } from './PropCatalogCard';
import { AssemblageCard } from './AssemblageCard';
import { SaveAssemblageModal } from './SaveAssemblageModal';
import {
  Box,
  Search,
  X,
  Layers,
  Check,
  ChevronDown,
  ChevronRight,
  Folder,
  FolderOpen,
  FolderPlus,
  FolderX,
  Plus,
  MoreVertical,
  Edit2,
  Trash2,
  Square,
  CheckSquare,
  MoveRight,
  AlertCircle,
  ShieldAlert,
  Camera,
  Loader2,
  Sparkles,
  RefreshCw,
} from 'lucide-react';

export const PropStudioView: React.FC = () => {
  const {
    catalogOpen,
    categories,
    catalog,
    selectedCategory,
    searchQuery,
    customModelInput,
    nearbyProps,
    selectedPropId,
    selectedProp,
    toastMessage,
    toastType,
    // Hiérarchie
    groups,
    families,
    collapsedFolders,
    toggleFolderCollapse,
    createGroup,
    renameGroup,
    deleteGroup,
    createFamily,
    renameFamily,
    deleteFamily,
    moveFamilyToGroup,
    assignMultipleProps,
    selectedFamilyId,
    setSelectedFamilyId,
    multiSelectedIds,
    toggleMultiSelectId,
    selectAllNearby,
    clearMultiSelect,
    // Actions
    setCatalogOpen,
    setSelectedCategory,
    setSearchQuery,
    setCustomModelInput,
    selectProp,
    deselectProp,
    spawnProp,
    placeCustomModel,
    updatePropPosition,
    updatePropRotation,
    updatePropProperties,
    exitEditor,
    // Miniatures
    existingThumbnails,
    thumbVersions,
    isGeneratingThumbs,
    thumbProgress,
    generateThumbs,
    generateSingleThumb,
    cancelThumbs,
    // Assemblages (Prefabs)
    assemblages,
    openSaveAssemblageModal,
    spawnAssemblage,
    duplicateAssemblage,
    deleteAssemblage,
  } = usePropStore();

  const [copied, setCopied] = useState(false);
  const [thumbDropdownOpen, setThumbDropdownOpen] = useState(false);

  // État de création rapide (Groupe / Famille)
  const [createType, setCreateType] = useState<'group' | 'family' | null>(null);
  const [createParentGroupId, setCreateParentGroupId] = useState<string | null>(null);
  const [createName, setCreateName] = useState('');

  // État de renommage inline
  const [renamingTarget, setRenamingTarget] = useState<{ id: string; type: 'group' | 'family'; name: string } | null>(null);

  // Menu contextuel ouvert
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);

  // Menu d'assignation pour multi-sélection
  const [assignDropdownOpen, setAssignDropdownOpen] = useState(false);

  // Helpers pour vérifier l'appartenance d'un prop
  const getPropFamily = (prop: PropItem) => {
    if (prop.familyId) {
      return families.find((f) => f.id === prop.familyId) || null;
    }
    if (prop.group) {
      return families.find((f) => f.id === prop.group || f.name === prop.group) || null;
    }
    return null;
  };

  // Gestion de la création
  const handleConfirmCreate = async () => {
    const name = createName.trim();
    if (createType === 'group') {
      await createGroup(name || `Nouveau Groupe ${groups.length + 1}`);
    } else if (createType === 'family') {
      await createFamily(
        name || `Nouvelle Famille ${families.length + 1}`,
        createParentGroupId,
        multiSelectedIds
      );
    }
    setCreateType(null);
    setCreateParentGroupId(null);
    setCreateName('');
  };

  // Gestion du renommage
  const handleConfirmRename = async () => {
    if (!renamingTarget) return;
    const clean = renamingTarget.name.trim();
    if (clean) {
      if (renamingTarget.type === 'group') {
        await renameGroup(renamingTarget.id, clean);
      } else {
        await renameFamily(renamingTarget.id, clean);
      }
    }
    setRenamingTarget(null);
  };

  const allSelected = nearbyProps.length > 0 && multiSelectedIds.length === nearbyProps.length;

  // Filtrage des Assemblages (Prefabs)
  const filteredAssemblages = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return assemblages.filter((item) => {
      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) ||
        (item.category && item.category.toLowerCase().includes(q)) ||
        (item.description && item.description.toLowerCase().includes(q))
      );
    });
  }, [assemblages, searchQuery]);

  // Filtrage du catalogue de props individuels
  const filteredCatalog = useMemo(() => {
    if (selectedCategory === 'Assemblages') return [];
    return catalog.filter((item) => {
      const matchCat =
        selectedCategory === 'Everything' || item.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        q === '' ||
        item.label.toLowerCase().includes(q) ||
        item.model.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [catalog, selectedCategory, searchQuery]);

  // Pagination progressive (Infinite Scroll) pour fluidité absolue de l'UI
  const [displayLimit, setDisplayLimit] = useState(36);

  useEffect(() => {
    setDisplayLimit(36);
  }, [selectedCategory, searchQuery]);

  const handleScrollCatalog = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop - clientHeight < 180) {
      setDisplayLimit((prev) => prev + 24);
    }
  };

  const visibleCatalog = useMemo(() => {
    return filteredCatalog.slice(0, displayLimit);
  }, [filteredCatalog, displayLimit]);

  const visibleAssemblages = useMemo(() => {
    return filteredAssemblages.slice(0, displayLimit);
  }, [filteredAssemblages, displayLimit]);

  // Props libres à la racine (pas de famille et pas de groupe)
  const rootLooseProps = nearbyProps.filter((p) => !p.groupId && !getPropFamily(p));

  // Familles à la racine (pas de groupId)
  const rootFamilies = families.filter((f) => !f.groupId);

  const handleCopyModel = (model: string) => {
    navigator.clipboard?.writeText(model);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  // Helper pour afficher une ligne de prop
  const renderPropRow = (p: PropItem & { distance?: number }) => {
    const isSelected = selectedPropId === p.id;
    const isChecked = multiSelectedIds.includes(p.id);

    return (
      <div
        key={p.id}
        className={`h-7 px-1.5 rounded flex items-center justify-between text-xs transition-colors group ${
          isSelected
            ? 'bg-hud-surface text-hud-text border border-hud-borderLight shadow-sm font-semibold'
            : 'hover:bg-hud-surface/40 text-hud-muted hover:text-hud-text'
        }`}
      >
        <div className="flex items-center gap-1.5 min-w-0 flex-1">
          {/* Checkbox de sélection multiple */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleMultiSelectId(p.id);
            }}
            className="w-4 h-4 flex items-center justify-center text-hud-muted hover:text-hud-accent transition-colors shrink-0"
            title="Sélectionner pour action groupée"
          >
            {isChecked ? (
              <CheckSquare className="w-3.5 h-3.5 text-hud-accent" />
            ) : (
              <Square className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
            )}
          </button>

          {/* Clic pour sélection et Gizmo */}
          <button
            onClick={() => selectProp(p.id)}
            className="flex items-center gap-1.5 min-w-0 flex-1 text-left"
          >
            <Box className={`w-3 h-3 shrink-0 ${isSelected ? 'text-hud-accent' : 'text-hud-muted'}`} />
            <span className="truncate">{p.label || p.model}</span>
          </button>
        </div>

        <div className="flex items-center gap-1 shrink-0 ml-1">
          {p.distance !== undefined && (
            <span className="text-[9px] font-mono text-hud-muted">
              {p.distance.toFixed(1)}m
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* =========================================================================
          1. EN BAS DE L'UI : CATALOGUE DE PROPS
      ========================================================================= */}
      <nav
        aria-label="Catalogue de props"
        className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 select-none pointer-events-auto"
      >
        {catalogOpen ? (
          <div className="w-[92vw] max-w-5xl bg-hud-panel border border-hud-border rounded-xl shadow-2xl p-3 flex flex-col gap-2.5 animate-in fade-in slide-in-from-bottom-2 duration-150">
            {/* Barre Supérieure du Catalogue */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-hud-border">
              {/* Titre & Compteur */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-hud-surface flex items-center justify-center border border-hud-borderLight text-hud-accent">
                  {selectedCategory === 'Assemblages' ? (
                    <Layers className="w-3.5 h-3.5 text-amber-400" />
                  ) : (
                    <Box className="w-3.5 h-3.5" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-hud-text">
                      {selectedCategory === 'Assemblages'
                        ? 'Assemblages (Préfabs)'
                        : 'Catalogue de Props'}
                    </span>
                    <span className="text-[10px] text-hud-muted font-mono">
                      {selectedCategory === 'Assemblages'
                        ? `(${filteredAssemblages.length} assemblages)`
                        : `(${filteredCatalog.length} objets)`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Champ de recherche */}
              <div className="relative w-56 sm:w-64">
                <Search className="w-3.5 h-3.5 text-hud-muted absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Rechercher par nom ou modèle..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-7 pl-8 pr-6 bg-hud-surface border border-hud-border rounded text-xs text-hud-text placeholder:text-hud-muted/70 focus:outline-none focus:border-hud-accent"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-hud-muted hover:text-hud-text"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Contrôles Miniatures & Réduire */}
              <div className="flex items-center gap-2">
                {/* Générateur de miniatures GTA V */}
                {isGeneratingThumbs ? (
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium animate-pulse">
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>
                      {thumbProgress
                        ? `${thumbProgress.current} / ${thumbProgress.total} (${thumbProgress.model})`
                        : 'Capture en cours...'}
                    </span>
                    <button
                      onClick={() => cancelThumbs()}
                      className="ml-1 px-1.5 py-0.5 rounded bg-red-500/20 hover:bg-red-500 text-red-200 hover:text-white text-[10px] transition-colors"
                      title="Arrêter la génération"
                    >
                      Arrêter
                    </button>
                  </div>
                ) : (
                  <div className="relative">
                    <button
                      onClick={() => setThumbDropdownOpen((v) => !v)}
                      className="flex items-center gap-1.5 px-2.5 h-7 rounded bg-hud-surface hover:bg-hud-surface/80 border border-hud-border text-hud-muted hover:text-hud-text text-xs transition-colors"
                      title="Générer des miniatures avec screenshot-basic"
                    >
                      <Camera className="w-3.5 h-3.5 text-hud-accent" />
                      <span>Miniatures</span>
                      <ChevronDown className="w-3 h-3 opacity-60" />
                    </button>

                    {thumbDropdownOpen && (
                      <div className="absolute right-0 bottom-full mb-1 w-52 bg-hud-panel border border-hud-border rounded-lg shadow-2xl py-1 z-50 text-xs">
                        <button
                          onClick={() => {
                            setThumbDropdownOpen(false);
                            generateThumbs('missing');
                          }}
                          className="w-full text-left px-3 py-1.5 hover:bg-hud-surface flex items-center gap-2 text-hud-text"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-hud-accent" />
                          <span>Générer les manquantes</span>
                        </button>
                        <button
                          onClick={() => {
                            setThumbDropdownOpen(false);
                            generateThumbs('all');
                          }}
                          className="w-full text-left px-3 py-1.5 hover:bg-hud-surface flex items-center gap-2 text-hud-text"
                        >
                          <RefreshCw className="w-3.5 h-3.5 text-amber-400" />
                          <span>Tout régénérer ({catalog.length})</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Bouton Réduire */}
                <button
                  onClick={() => setCatalogOpen(false)}
                  className="flex items-center gap-1 px-2.5 h-7 rounded bg-hud-surface hover:bg-hud-surface/80 border border-hud-border text-hud-muted hover:text-hud-text text-xs transition-colors"
                  title="Masquer le catalogue (Touche C)"
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                  <span>Masquer [C]</span>
                </button>
              </div>
            </div>

            {/* Catégories Défilantes */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-hud-borderLight/40">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                const isAssemblage = cat === 'Assemblages';
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-0.5 rounded text-[11px] font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                      isActive
                        ? isAssemblage
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/60 shadow-sm font-bold'
                          : 'bg-hud-surface text-hud-text border border-hud-borderLight shadow-sm font-semibold'
                        : isAssemblage
                        ? 'text-amber-400 hover:text-amber-300 hover:bg-amber-500/10 border border-amber-500/30'
                        : 'text-hud-muted hover:text-hud-text hover:bg-hud-surface/40 border border-transparent'
                    }`}
                  >
                    {isAssemblage && <Layers className="w-3 h-3 text-amber-400" />}
                    <span>{cat}</span>
                    {isAssemblage && assemblages.length > 0 && (
                      <span className="px-1 py-0.2 rounded-full bg-amber-500/20 text-amber-300 text-[9px] font-mono">
                        {assemblages.length}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Grille des Cartes (Props ou Assemblages) avec virtualisation / chargement progressif */}
            <div
              onScroll={handleScrollCatalog}
              className="max-h-72 overflow-y-auto pr-1.5 scrollbar-thin scrollbar-thumb-hud-borderLight/40"
            >
              {selectedCategory === 'Assemblages' ? (
                /* 1. Affichage spécifique de la catégorie Assemblages */
                filteredAssemblages.length === 0 ? (
                  <div className="p-8 text-center bg-hud-bg/40 rounded-xl border border-hud-border flex flex-col items-center justify-center">
                    <Layers className="w-10 h-10 text-amber-400/50 mb-2 stroke-[1.2]" />
                    <span className="text-xs font-bold text-hud-text mb-1">
                      {searchQuery
                        ? 'Aucun assemblage ne correspond à votre recherche'
                        : 'Aucun assemblage enregistré'}
                    </span>
                    <p className="text-[11px] text-hud-muted max-w-sm mb-2">
                      Créez une famille contenant plusieurs props dans le panneau de droite, puis cliquez sur{' '}
                      <span className="text-amber-300 font-semibold">"Assemblage"</span> pour sauvegarder votre composition réutilisable !
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5">
                      {visibleAssemblages.map((item) => (
                        <AssemblageCard
                          key={item.id}
                          item={item}
                          onSpawn={spawnAssemblage}
                          onDuplicate={duplicateAssemblage}
                          onDelete={deleteAssemblage}
                          onEdit={(ass) => openSaveAssemblageModal('', ass)}
                        />
                      ))}
                    </div>
                    {displayLimit < filteredAssemblages.length && (
                      <div className="py-2 text-center text-[10px] text-hud-muted font-mono">
                        Affichage de {visibleAssemblages.length} sur {filteredAssemblages.length} assemblages (défiler pour voir plus...)
                      </div>
                    )}
                  </>
                )
              ) : (
                /* 2. Affichage des props individuels */
                filteredCatalog.length === 0 ? (
                  <div className="p-6 text-center text-hud-muted text-xs bg-hud-bg/40 rounded border border-hud-border">
                    Aucun prop ne correspond à votre recherche.
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5">
                      {visibleCatalog.map((item) => (
                        <PropCatalogCard
                          key={item.model}
                          item={item}
                          onSpawn={spawnProp}
                          onCaptureSingle={generateSingleThumb}
                          hasThumbnail={Boolean(existingThumbnails[item.model])}
                          thumbVersion={thumbVersions[item.model]}
                        />
                      ))}
                    </div>
                    {displayLimit < filteredCatalog.length && (
                      <div className="py-2 text-center text-[10px] text-hud-muted font-mono">
                        Affichage de {visibleCatalog.length} sur {filteredCatalog.length} props (défiler pour charger la suite...)
                      </div>
                    )}
                  </>
                )
              )}
            </div>
          </div>
        ) : (
          /* Bouton Ouvrir le Catalogue */
          <button
            onClick={() => setCatalogOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-hud-panel border border-hud-borderLight shadow-xl text-hud-text hover:text-white hover:border-hud-accent text-xs font-semibold transition-all hover:scale-105 active:scale-95"
            title="Afficher le catalogue de props (Touche C)"
          >
            <Box className="w-3.5 h-3.5 text-hud-accent" />
            <span>Catalogue de Props [C]</span>
            <span className="text-[10px] text-hud-muted font-mono">
              ({catalog.length})
            </span>
          </button>
        )}
      </nav>

      {/* =========================================================================
          2. PANNEAU DE DROITE : INSPECTEUR ET PLAN DE TRAVAIL (GROUPES & FAMILLES)
      ========================================================================= */}
      <aside
        aria-label="Inspecteur de prop et Plan de travail"
        className="fixed top-14 right-4 z-30 w-80 max-h-[calc(100vh-4.5rem)] bg-hud-panel border border-hud-border rounded-lg shadow-2xl p-3 flex flex-col gap-2.5 overflow-hidden select-none pointer-events-auto"
      >
        {/* ================= SECTION A : INSPECTEUR PROP ================= */}
        {selectedProp ? (
          <div className="space-y-2 pb-2 border-b border-hud-border">
            {/* Header Prop */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 rounded bg-hud-surface flex items-center justify-center border border-hud-border text-hud-accent shrink-0">
                  <Box className="w-3.5 h-3.5" />
                </div>
                <div className="truncate">
                  <span className="text-xs font-bold text-hud-text uppercase tracking-wider block truncate">
                    {selectedProp.label || selectedProp.model}
                  </span>
                  <span
                    onClick={() => handleCopyModel(selectedProp.model)}
                    className="text-[9px] font-mono text-hud-muted hover:text-hud-text cursor-pointer truncate block"
                    title="Cliquer pour copier le nom du modèle"
                  >
                    {copied ? 'Copié !' : selectedProp.model}
                  </span>
                </div>
              </div>

              {/* Bouton Fermer Sélection */}
              <button
                onClick={deselectProp}
                className="w-5 h-5 rounded hover:bg-hud-surface text-hud-muted hover:text-hud-text flex items-center justify-center transition-colors shrink-0"
                title="Désélectionner (Échap)"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Coordonnées X / Y / Z */}
            <div className="grid grid-cols-3 gap-1 pt-1">
              {(['x', 'y', 'z'] as const).map((axis) => (
                <div
                  key={axis}
                  className="flex items-center gap-1 bg-hud-surface/50 border border-hud-border rounded px-1.5 py-0.5"
                >
                  <span className="text-[9px] font-mono uppercase text-hud-muted font-bold">
                    {axis}
                  </span>
                  <input
                    type="number"
                    step="0.05"
                    value={
                      selectedProp.coords[axis] !== undefined
                        ? Number(selectedProp.coords[axis]).toFixed(2)
                        : '0.00'
                    }
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      if (!isNaN(val)) {
                        updatePropPosition({ [axis]: val }, false);
                      }
                    }}
                    onBlur={(e) => {
                      const val = parseFloat(e.target.value);
                      if (!isNaN(val)) {
                        updatePropPosition({ [axis]: val }, true);
                      }
                    }}
                    className="w-full bg-transparent text-[11px] font-mono text-hud-text text-right focus:outline-none"
                  />
                </div>
              ))}
            </div>

            {/* Rotation Roll / Pitch / Yaw (Heading) */}
            <div className="grid grid-cols-3 gap-1">
              {(['x', 'y', 'z'] as const).map((axis) => (
                <div
                  key={axis}
                  className="flex items-center gap-1 bg-hud-surface/50 border border-hud-border rounded px-1.5 py-0.5"
                >
                  <span className="text-[9px] font-mono uppercase text-hud-accent font-bold">
                    {axis === 'z' ? 'Yaw' : axis === 'x' ? 'Roll' : 'Pitch'}
                  </span>
                  <input
                    type="number"
                    step="5"
                    value={
                      selectedProp.rotation && selectedProp.rotation[axis] !== undefined
                        ? Math.round(selectedProp.rotation[axis])
                        : '0'
                    }
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      if (!isNaN(val)) {
                        updatePropRotation({ [axis]: val }, false);
                      }
                    }}
                    onBlur={(e) => {
                      const val = parseFloat(e.target.value);
                      if (!isNaN(val)) {
                        updatePropRotation({ [axis]: val }, true);
                      }
                    }}
                    className="w-full bg-transparent text-[11px] font-mono text-hud-text text-right focus:outline-none"
                  />
                </div>
              ))}
            </div>

            {/* Propriétés : Render Distance & Texture & Collision */}
            <div className="space-y-1.5 pt-1 border-t border-hud-border/40">
              {/* Render Distance */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] text-hud-text font-medium">Render distance</span>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    min="10"
                    max="400"
                    step="5"
                    value={selectedProp.renderDistance || 150}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      if (!isNaN(val)) {
                        updatePropProperties({ renderDistance: val }, false);
                      }
                    }}
                    onBlur={(e) => {
                      const val = parseFloat(e.target.value);
                      if (!isNaN(val)) {
                        updatePropProperties({ renderDistance: val }, true);
                      }
                    }}
                    className="w-16 h-6 px-1 bg-hud-surface border border-hud-border rounded text-[11px] font-mono text-hud-text text-center focus:outline-none focus:border-hud-accent"
                  />
                  <span className="text-[9px] font-mono text-hud-muted">m</span>
                </div>
              </div>

              {/* Texture Variation */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] text-hud-text font-medium">Texture variation</span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => {
                      const cur = selectedProp.textureVariation || 0;
                      if (cur > 0) {
                        updatePropProperties({ textureVariation: cur - 1 }, true);
                      }
                    }}
                    className="w-5 h-5 rounded bg-hud-surface hover:bg-hud-surface/80 border border-hud-border text-hud-text text-xs flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="w-6 text-center text-xs font-mono text-hud-text">
                    {selectedProp.textureVariation || 0}
                  </span>
                  <button
                    onClick={() => {
                      const cur = selectedProp.textureVariation || 0;
                      if (cur < 15) {
                        updatePropProperties({ textureVariation: cur + 1 }, true);
                      }
                    }}
                    className="w-5 h-5 rounded bg-hud-surface hover:bg-hud-surface/80 border border-hud-border text-hud-text text-xs flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Collision Toggle */}
              <div className="flex items-center justify-between gap-2 pt-0.5">
                <span className="text-[10px] text-hud-text font-medium">Collision</span>
                <button
                  onClick={() => {
                    updatePropProperties(
                      { collision: !(selectedProp.collision !== false) },
                      true
                    );
                  }}
                  className={`px-2.5 py-0.5 rounded text-[10px] font-medium transition-colors ${
                    selectedProp.collision !== false
                      ? 'bg-hud-accent text-white font-semibold'
                      : 'bg-hud-surface text-hud-muted border border-hud-border'
                  }`}
                >
                  {selectedProp.collision !== false ? 'Activée' : 'Désactivée'}
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* État : Aucun Prop Sélectionné */
          <div className="p-2.5 text-center space-y-1.5 bg-hud-bg/50 border border-hud-border rounded">
            <span className="text-[10px] font-bold text-hud-text uppercase tracking-wider block">
              Aucun prop sélectionné
            </span>
            <span className="text-[9px] text-hud-muted block leading-relaxed">
              Cliquez sur un prop dans le monde 3D ou sélectionnez-en un ci-dessous.
            </span>

            {/* Placement Manuel / Modèle Custom */}
            <div className="pt-1.5 border-t border-hud-border space-y-1">
              <span className="text-[9px] font-mono uppercase text-hud-muted block text-left">
                Placer un modèle GTA V custom :
              </span>
              <div className="flex items-center gap-1">
                <input
                  type="text"
                  placeholder="prop_bench_01a..."
                  value={customModelInput}
                  onChange={(e) => setCustomModelInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') placeCustomModel();
                  }}
                  className="flex-1 h-6 px-2 bg-hud-surface border border-hud-border rounded text-[11px] text-hud-text placeholder:text-hud-muted/60 focus:outline-none focus:border-hud-accent font-mono"
                />
                <button
                  onClick={placeCustomModel}
                  className="h-6 px-2 rounded bg-hud-accent hover:bg-hud-accent/90 text-white text-[10px] font-semibold transition-colors shrink-0 shadow-sm"
                >
                  Placer
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= SECTION B : PLAN DE TRAVAIL (GROUPES & FAMILLES) ================= */}
        <div className="flex-1 flex flex-col min-h-0 space-y-1.5">
          {/* Barre d'outils du Plan de travail */}
          <div className="flex items-center justify-between pb-1 border-b border-hud-border">
            <div className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-hud-accent" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-hud-text">
                Plan de travail
              </span>
              <span className="text-[9px] font-mono px-1 rounded bg-hud-surface border border-hud-border text-hud-muted">
                {nearbyProps.length}
              </span>
            </div>

            {/* Boutons d'ajout rapides */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  setCreateType('group');
                  setCreateParentGroupId(null);
                  setCreateName(`Groupe ${groups.length + 1}`);
                }}
                className="h-5 px-1.5 rounded bg-hud-surface hover:bg-hud-surface/80 border border-hud-border text-hud-text text-[10px] font-medium flex items-center gap-1 transition-colors"
                title="Créer un groupe (dossier organisationnel)"
              >
                <FolderPlus className="w-3 h-3 text-hud-muted" />
                <span>+ Groupe</span>
              </button>

              <button
                onClick={() => {
                  setCreateType('family');
                  setCreateParentGroupId(null);
                  setCreateName(`Famille ${families.length + 1}`);
                }}
                className="h-5 px-1.5 rounded bg-hud-accent/20 hover:bg-hud-accent/30 border border-hud-accent/40 text-hud-accent text-[10px] font-semibold flex items-center gap-1 transition-colors"
                title="Créer une famille (synchronisation & manipulation rigide)"
              >
                <Layers className="w-3 h-3 text-hud-accent" />
                <span>+ Famille</span>
              </button>
            </div>
          </div>

          {/* Formulaire inline de création */}
          {createType && (
            <div className="p-2 rounded bg-hud-surface border border-hud-border flex flex-col gap-1.5 animate-in fade-in duration-100">
              <div className="flex items-center justify-between text-[11px] font-semibold text-hud-text">
                <span>
                  {createType === 'group'
                    ? 'Nouveau Groupe (Dossier)'
                    : `Nouvelle Famille${createParentGroupId ? ' (dans groupe)' : ''}`}
                </span>
                <button
                  onClick={() => setCreateType(null)}
                  className="text-hud-muted hover:text-hud-text"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center gap-1">
                <input
                  type="text"
                  autoFocus
                  value={createName}
                  onChange={(e) => setCreateName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleConfirmCreate()}
                  placeholder="Nom..."
                  className="flex-1 h-6 px-1.5 rounded bg-hud-bg border border-hud-border text-xs text-hud-text placeholder-hud-muted/60 focus:outline-none focus:border-hud-accent"
                />
                <button
                  onClick={handleConfirmCreate}
                  className="h-6 px-2 rounded bg-hud-accent text-white font-semibold text-[11px] hover:bg-hud-accent/90 transition-colors flex items-center gap-1 shrink-0"
                >
                  <Check className="w-3 h-3" />
                  <span>OK</span>
                </button>
              </div>
            </div>
          )}

          {/* Barre d'action multi-sélection */}
          {multiSelectedIds.length > 0 && (
            <div className="p-2 rounded bg-hud-surface border border-hud-border flex flex-col gap-1.5 animate-in fade-in duration-100">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-semibold text-hud-text">
                  {multiSelectedIds.length} prop{multiSelectedIds.length > 1 ? 's' : ''} sélectionné{multiSelectedIds.length > 1 ? 's' : ''}
                </span>
                <button
                  onClick={clearMultiSelect}
                  className="text-[10px] text-hud-muted hover:text-hud-text underline transition-colors"
                >
                  Annuler
                </button>
              </div>

              <div className="flex items-center gap-1 relative">
                {/* Lier en famille */}
                <button
                  onClick={() => {
                    setCreateType('family');
                    setCreateParentGroupId(null);
                    setCreateName(`Famille ${families.length + 1}`);
                  }}
                  className="flex-1 h-6 rounded bg-hud-accent/20 hover:bg-hud-accent/30 border border-hud-accent/40 text-hud-accent text-[11px] font-medium flex items-center justify-center gap-1 transition-colors"
                  title="Créer une famille pour lier et manipuler ensemble ces props"
                >
                  <Layers className="w-3 h-3" />
                  <span>Créer Famille</span>
                </button>

                {/* Menu Déroulant Assigner */}
                <button
                  onClick={() => setAssignDropdownOpen(!assignDropdownOpen)}
                  className="h-6 px-2 rounded bg-hud-bg hover:bg-hud-surface border border-hud-border text-hud-text text-[11px] font-medium flex items-center gap-1 transition-colors"
                  title="Classer dans un groupe ou une famille existante"
                >
                  <span>Assigner...</span>
                  <ChevronDown className="w-3 h-3 text-hud-muted" />
                </button>

                {/* Retirer de toute organisation */}
                <button
                  onClick={() => assignMultipleProps(multiSelectedIds, null, null)}
                  className="h-6 px-2 rounded bg-hud-bg hover:bg-red-950/40 hover:text-red-300 border border-hud-border text-hud-muted text-[11px] font-medium flex items-center justify-center gap-1 transition-colors"
                  title="Détacher de tout groupe et famille (libérer à la racine)"
                >
                  <FolderX className="w-3 h-3" />
                </button>

                {/* Popover du menu d'assignation */}
                {assignDropdownOpen && (
                  <div
                    className="absolute right-0 top-7 z-50 w-48 bg-hud-panel border border-hud-border rounded shadow-xl p-1 text-xs flex flex-col gap-0.5 max-h-56 overflow-y-auto"
                    onMouseLeave={() => setAssignDropdownOpen(false)}
                  >
                    <span className="text-[9px] uppercase font-bold text-hud-muted px-1.5 py-1">
                      Assigner au Groupe :
                    </span>
                    {groups.map((g) => (
                      <button
                        key={g.id}
                        onClick={() => {
                          assignMultipleProps(multiSelectedIds, g.id, undefined);
                          setAssignDropdownOpen(false);
                        }}
                        className="h-6 px-2 rounded hover:bg-hud-surface text-left text-hud-text flex items-center gap-1.5 transition-colors truncate"
                      >
                        <Folder className="w-3 h-3 text-hud-muted shrink-0" />
                        <span className="truncate">{g.name}</span>
                      </button>
                    ))}
                    {groups.length === 0 && (
                      <span className="text-[10px] text-hud-muted italic px-2 py-0.5">
                        Aucun groupe créé
                      </span>
                    )}

                    <div className="border-t border-hud-border my-1" />

                    <span className="text-[9px] uppercase font-bold text-hud-accent px-1.5 py-1">
                      Lier à la Famille :
                    </span>
                    {families.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => {
                          assignMultipleProps(multiSelectedIds, undefined, f.id);
                          setAssignDropdownOpen(false);
                        }}
                        className="h-6 px-2 rounded hover:bg-hud-surface text-left text-hud-text flex items-center gap-1.5 transition-colors truncate"
                      >
                        <Layers className="w-3 h-3 text-hud-accent shrink-0" />
                        <span className="truncate">{f.name}</span>
                      </button>
                    ))}
                    {families.length === 0 && (
                      <span className="text-[10px] text-hud-muted italic px-2 py-0.5">
                        Aucune famille créée
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ARBORESCENCE DU PLAN DE TRAVAIL */}
          {nearbyProps.length === 0 ? (
            <div className="py-4 px-2 text-center text-[11px] text-hud-muted bg-hud-surface/40 rounded border border-hud-border">
              Aucun prop détecté à proximité.
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto pr-0.5 space-y-1.5 scrollbar-thin scrollbar-thumb-hud-borderLight/40 max-h-72">
              {/* Bouton Tout cocher */}
              <div className="flex items-center justify-between px-1 text-[10px] text-hud-muted">
                <button
                  onClick={() => (allSelected ? clearMultiSelect() : selectAllNearby())}
                  className="flex items-center gap-1 hover:text-hud-text transition-colors"
                >
                  {allSelected ? (
                    <CheckSquare className="w-3 h-3 text-hud-accent" />
                  ) : (
                    <Square className="w-3 h-3" />
                  )}
                  <span>{allSelected ? 'Tout décocher' : 'Tout cocher'}</span>
                </button>
              </div>

              {/* 1. NIVEAU GROUPES (Dossiers d'organisation) */}
              {groups.map((group) => {
                const isGroupCollapsed = !!collapsedFolders[`grp_${group.id}`];
                const groupFamilies = families.filter((f) => f.groupId === group.id);
                const groupDirectProps = nearbyProps.filter(
                  (p) => p.groupId === group.id && !getPropFamily(p)
                );
                const totalGroupProps = nearbyProps.filter((p) => {
                  if (p.groupId === group.id) return true;
                  const fam = getPropFamily(p);
                  return fam && fam.groupId === group.id;
                });

                const isRenamingThisGroup = renamingTarget?.id === group.id;

                return (
                  <div key={group.id} className="rounded border border-hud-border/60 bg-hud-bg/40 overflow-hidden">
                    {/* En-tête du groupe */}
                    <div className="h-7 px-1.5 bg-hud-surface/60 hover:bg-hud-surface flex items-center justify-between gap-1 transition-colors">
                      <div className="flex items-center gap-1 min-w-0 flex-1">
                        <button
                          onClick={() => toggleFolderCollapse(`grp_${group.id}`)}
                          className="w-4 h-4 flex items-center justify-center text-hud-muted hover:text-hud-text transition-colors"
                          title={isGroupCollapsed ? 'Déplier le groupe' : 'Replier le groupe'}
                        >
                          {isGroupCollapsed ? (
                            <ChevronRight className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>

                        {isGroupCollapsed ? (
                          <Folder className="w-3.5 h-3.5 text-hud-muted shrink-0" />
                        ) : (
                          <FolderOpen className="w-3.5 h-3.5 text-hud-accent shrink-0" />
                        )}

                        {isRenamingThisGroup ? (
                          <div className="flex items-center gap-1 flex-1">
                            <input
                              type="text"
                              autoFocus
                              value={renamingTarget.name}
                              onChange={(e) =>
                                setRenamingTarget({ ...renamingTarget, name: e.target.value })
                              }
                              onKeyDown={(e) => e.key === 'Enter' && handleConfirmRename()}
                              className="h-5 px-1 rounded bg-hud-bg border border-hud-accent text-xs text-hud-text w-full focus:outline-none"
                            />
                            <button
                              onClick={handleConfirmRename}
                              className="text-hud-accent hover:text-white"
                            >
                              <Check className="w-3 h-3" />
                            </button>
                          </div>
                        ) : (
                          <span
                            onDoubleClick={() =>
                              setRenamingTarget({ id: group.id, type: 'group', name: group.name })
                            }
                            className="text-xs font-semibold text-hud-text truncate cursor-pointer"
                            title="Double-clic pour renommer"
                          >
                            {group.name}
                          </span>
                        )}

                        <span className="text-[9px] font-mono text-hud-muted shrink-0 ml-1">
                          ({totalGroupProps.length})
                        </span>
                      </div>

                      {/* Actions rapides du groupe */}
                      <div className="flex items-center gap-0.5 relative">
                        <button
                          onClick={() => {
                            setCreateType('family');
                            setCreateParentGroupId(group.id);
                            setCreateName(`Famille ${families.length + 1}`);
                          }}
                          className="w-5 h-5 flex items-center justify-center rounded text-hud-muted hover:text-hud-accent transition-colors"
                          title="Créer une famille dans ce groupe"
                        >
                          <Plus className="w-3 h-3" />
                        </button>

                        <button
                          onClick={() =>
                            setMenuOpenId(menuOpenId === `grp_${group.id}` ? null : `grp_${group.id}`)
                          }
                          className="w-5 h-5 flex items-center justify-center rounded text-hud-muted hover:text-hud-text transition-colors"
                          title="Options du groupe"
                        >
                          <MoreVertical className="w-3 h-3" />
                        </button>

                        {/* Menu contextuel du groupe */}
                        {menuOpenId === `grp_${group.id}` && (
                          <div
                            className="absolute right-0 top-6 z-50 w-36 bg-hud-panel border border-hud-border rounded shadow-lg p-1 text-xs flex flex-col gap-0.5"
                            onMouseLeave={() => setMenuOpenId(null)}
                          >
                            <button
                              onClick={() => {
                                setRenamingTarget({ id: group.id, type: 'group', name: group.name });
                                setMenuOpenId(null);
                              }}
                              className="h-6 px-2 rounded hover:bg-hud-surface text-left text-hud-text flex items-center gap-1.5 transition-colors"
                            >
                              <Edit2 className="w-3 h-3 text-hud-muted" />
                              <span>Renommer</span>
                            </button>
                            <button
                              onClick={() => {
                                deleteGroup(group.id);
                                setMenuOpenId(null);
                              }}
                              className="h-6 px-2 rounded hover:bg-red-950/40 text-left text-red-300 flex items-center gap-1.5 transition-colors"
                            >
                              <Trash2 className="w-3 h-3 text-red-400" />
                              <span>Supprimer</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Contenu du groupe */}
                    {!isGroupCollapsed && (
                      <div className="p-1 pl-3 space-y-1 border-t border-hud-border/40">
                        {/* Familles contenues dans ce groupe */}
                        {groupFamilies.map((family) => {
                          const isFamCollapsed = !!collapsedFolders[`fam_${family.id}`];
                          const famProps = nearbyProps.filter(
                            (p) => p.familyId === family.id || (p.group === family.id && !p.familyId)
                          );
                          const isFamActive = selectedFamilyId === family.id;
                          const isRenamingThisFam = renamingTarget?.id === family.id;

                          return (
                            <div
                              key={family.id}
                              className={`rounded border transition-colors ${
                                isFamActive
                                  ? 'border-hud-accent/60 bg-hud-accent/10'
                                  : 'border-hud-border/50 bg-hud-surface/30'
                              }`}
                            >
                              {/* En-tête de famille */}
                              <div className="h-6 px-1.5 flex items-center justify-between gap-1">
                                <div className="flex items-center gap-1 min-w-0 flex-1">
                                  <button
                                    onClick={() => toggleFolderCollapse(`fam_${family.id}`)}
                                    className="w-4 h-4 flex items-center justify-center text-hud-muted hover:text-hud-text"
                                  >
                                    {isFamCollapsed ? (
                                      <ChevronRight className="w-3 h-3" />
                                    ) : (
                                      <ChevronDown className="w-3 h-3" />
                                    )}
                                  </button>

                                  <Layers className="w-3 h-3 text-hud-accent shrink-0" />

                                  {isRenamingThisFam ? (
                                    <div className="flex items-center gap-1 flex-1">
                                      <input
                                        type="text"
                                        autoFocus
                                        value={renamingTarget.name}
                                        onChange={(e) =>
                                          setRenamingTarget({ ...renamingTarget, name: e.target.value })
                                        }
                                        onKeyDown={(e) => e.key === 'Enter' && handleConfirmRename()}
                                        className="h-5 px-1 rounded bg-hud-bg border border-hud-accent text-xs text-hud-text w-full focus:outline-none"
                                      />
                                      <button
                                        onClick={handleConfirmRename}
                                        className="text-hud-accent hover:text-white"
                                      >
                                        <Check className="w-3 h-3" />
                                      </button>
                                    </div>
                                  ) : (
                                    <span
                                      onDoubleClick={() =>
                                        setRenamingTarget({ id: family.id, type: 'family', name: family.name })
                                      }
                                      className="text-xs font-medium text-hud-text truncate cursor-pointer"
                                      title="Double-clic pour renommer"
                                    >
                                      {family.name}
                                    </span>
                                  )}

                                  <span className="text-[9px] font-mono text-hud-muted shrink-0 ml-1">
                                    ({famProps.length})
                                  </span>
                                </div>

                                {/* Sélection Gizmo Famille */}
                                <div className="flex items-center gap-1 relative">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      openSaveAssemblageModal(family.id);
                                    }}
                                    className="px-1.5 h-4.5 rounded text-[9px] font-semibold bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1 transition-colors"
                                    title="Enregistrer cette famille comme Assemblage (Préfab)"
                                  >
                                    <Layers className="w-2.5 h-2.5" />
                                    <span>Assemblage</span>
                                  </button>

                                  <button
                                    onClick={() =>
                                      setSelectedFamilyId(isFamActive ? null : family.id)
                                    }
                                    className={`px-1.5 h-4.5 rounded text-[9px] font-bold tracking-tight transition-colors ${
                                      isFamActive
                                        ? 'bg-hud-accent text-white shadow-sm'
                                        : 'bg-hud-surface hover:bg-hud-surface/80 text-hud-muted hover:text-hud-text border border-hud-border'
                                    }`}
                                    title="Attacher le Gizmo à cette famille pour déplacement collectif rigide"
                                  >
                                    {isFamActive ? 'Famille Active' : 'Sélect. Famille'}
                                  </button>

                                  <button
                                    onClick={() =>
                                      setMenuOpenId(menuOpenId === `fam_${family.id}` ? null : `fam_${family.id}`)
                                    }
                                    className="w-4 h-4 flex items-center justify-center text-hud-muted hover:text-hud-text"
                                  >
                                    <MoreVertical className="w-3 h-3" />
                                  </button>

                                  {/* Menu contextuel de la famille */}
                                  {menuOpenId === `fam_${family.id}` && (
                                    <div
                                      className="absolute right-0 top-5 z-50 w-40 bg-hud-panel border border-hud-border rounded shadow-lg p-1 text-xs flex flex-col gap-0.5"
                                      onMouseLeave={() => setMenuOpenId(null)}
                                    >
                                      <button
                                        onClick={() => {
                                          openSaveAssemblageModal(family.id);
                                          setMenuOpenId(null);
                                        }}
                                        className="h-6 px-2 rounded hover:bg-amber-500/20 text-left text-amber-300 flex items-center gap-1.5 font-medium"
                                      >
                                        <Layers className="w-3 h-3 text-amber-400" />
                                        <span>Enregistrer Assemblage</span>
                                      </button>
                                      <div className="border-t border-hud-border/40 my-0.5" />
                                      <button
                                        onClick={() => {
                                          setRenamingTarget({ id: family.id, type: 'family', name: family.name });
                                          setMenuOpenId(null);
                                        }}
                                        className="h-6 px-2 rounded hover:bg-hud-surface text-left text-hud-text flex items-center gap-1.5"
                                      >
                                        <Edit2 className="w-3 h-3 text-hud-muted" />
                                        <span>Renommer</span>
                                      </button>
                                      <button
                                        onClick={() => {
                                          moveFamilyToGroup(family.id, null);
                                          setMenuOpenId(null);
                                        }}
                                        className="h-6 px-2 rounded hover:bg-hud-surface text-left text-hud-text flex items-center gap-1.5"
                                      >
                                        <MoveRight className="w-3 h-3 text-hud-muted" />
                                        <span>Sortir du groupe</span>
                                      </button>
                                      <button
                                        onClick={() => {
                                          deleteFamily(family.id);
                                          setMenuOpenId(null);
                                        }}
                                        className="h-6 px-2 rounded hover:bg-red-950/40 text-left text-red-300 flex items-center gap-1.5"
                                      >
                                        <Trash2 className="w-3 h-3 text-red-400" />
                                        <span>Dissoudre</span>
                                      </button>
                                    </div>
                                  )}
                                </div>
                              </div>

                              {/* Props de la famille */}
                              {!isFamCollapsed && (
                                <div className="p-1 pl-4 space-y-0.5 border-t border-hud-border/30">
                                  {famProps.length === 0 ? (
                                    <span className="text-[10px] text-hud-muted italic px-1 block">
                                      Aucun prop dans cette famille
                                    </span>
                                  ) : (
                                    famProps.map(renderPropRow)
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}

                        {/* Props directes rattachées au groupe */}
                        {groupDirectProps.map(renderPropRow)}

                        {groupFamilies.length === 0 && groupDirectProps.length === 0 && (
                          <span className="text-[10px] text-hud-muted italic px-1 py-0.5 block">
                            Dossier vide (glissez ou assignez des props ici)
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* 2. FAMILLES À LA RACINE (Hors de tout groupe) */}
              {rootFamilies.map((family) => {
                const isFamCollapsed = !!collapsedFolders[`fam_${family.id}`];
                const famProps = nearbyProps.filter(
                  (p) => p.familyId === family.id || (p.group === family.id && !p.familyId)
                );
                const isFamActive = selectedFamilyId === family.id;
                const isRenamingThisFam = renamingTarget?.id === family.id;

                return (
                  <div
                    key={family.id}
                    className={`rounded border transition-colors ${
                      isFamActive
                        ? 'border-hud-accent/60 bg-hud-accent/10'
                        : 'border-hud-border/60 bg-hud-surface/40'
                    }`}
                  >
                    <div className="h-7 px-1.5 flex items-center justify-between gap-1">
                      <div className="flex items-center gap-1 min-w-0 flex-1">
                        <button
                          onClick={() => toggleFolderCollapse(`fam_${family.id}`)}
                          className="w-4 h-4 flex items-center justify-center text-hud-muted hover:text-hud-text"
                        >
                          {isFamCollapsed ? (
                            <ChevronRight className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>

                        <Layers className="w-3.5 h-3.5 text-hud-accent shrink-0" />

                        {isRenamingThisFam ? (
                          <div className="flex items-center gap-1 flex-1">
                            <input
                              type="text"
                              autoFocus
                              value={renamingTarget.name}
                              onChange={(e) =>
                                setRenamingTarget({ ...renamingTarget, name: e.target.value })
                              }
                              onKeyDown={(e) => e.key === 'Enter' && handleConfirmRename()}
                              className="h-5 px-1 rounded bg-hud-bg border border-hud-accent text-xs text-hud-text w-full focus:outline-none"
                            />
                            <button
                              onClick={handleConfirmRename}
                              className="text-hud-accent hover:text-white"
                            >
                              <Check className="w-3 h-3" />
                            </button>
                          </div>
                        ) : (
                          <span
                            onDoubleClick={() =>
                              setRenamingTarget({ id: family.id, type: 'family', name: family.name })
                            }
                            className="text-xs font-semibold text-hud-text truncate cursor-pointer"
                            title="Double-clic pour renommer"
                          >
                            {family.name}
                          </span>
                        )}

                        <span className="text-[9px] font-mono text-hud-muted shrink-0 ml-1">
                          ({famProps.length})
                        </span>
                      </div>

                      <div className="flex items-center gap-1 relative">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openSaveAssemblageModal(family.id);
                          }}
                          className="px-1.5 h-4.5 rounded text-[9px] font-semibold bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1 transition-colors"
                          title="Enregistrer cette famille comme Assemblage (Préfab)"
                        >
                          <Layers className="w-2.5 h-2.5" />
                          <span>Assemblage</span>
                        </button>

                        <button
                          onClick={() => setSelectedFamilyId(isFamActive ? null : family.id)}
                          className={`px-1.5 h-4.5 rounded text-[9px] font-bold tracking-tight transition-colors ${
                            isFamActive
                              ? 'bg-hud-accent text-white shadow-sm'
                              : 'bg-hud-surface hover:bg-hud-surface/80 text-hud-muted hover:text-hud-text border border-hud-border'
                          }`}
                          title="Attacher le Gizmo à cette famille pour déplacement collectif rigide"
                        >
                          {isFamActive ? 'Famille Active' : 'Sélect. Famille'}
                        </button>

                        <button
                          onClick={() =>
                            setMenuOpenId(menuOpenId === `fam_${family.id}` ? null : `fam_${family.id}`)
                          }
                          className="w-4 h-4 flex items-center justify-center text-hud-muted hover:text-hud-text"
                        >
                          <MoreVertical className="w-3 h-3" />
                        </button>

                        {/* Menu contextuel de la famille racine */}
                        {menuOpenId === `fam_${family.id}` && (
                          <div
                            className="absolute right-0 top-6 z-50 w-40 bg-hud-panel border border-hud-border rounded shadow-lg p-1 text-xs flex flex-col gap-0.5"
                            onMouseLeave={() => setMenuOpenId(null)}
                          >
                            <button
                              onClick={() => {
                                openSaveAssemblageModal(family.id);
                                setMenuOpenId(null);
                              }}
                              className="h-6 px-2 rounded hover:bg-amber-500/20 text-left text-amber-300 flex items-center gap-1.5 font-medium"
                            >
                              <Layers className="w-3 h-3 text-amber-400" />
                              <span>Enregistrer Assemblage</span>
                            </button>
                            <div className="border-t border-hud-border/40 my-0.5" />
                            <button
                              onClick={() => {
                                setRenamingTarget({ id: family.id, type: 'family', name: family.name });
                                setMenuOpenId(null);
                              }}
                              className="h-6 px-2 rounded hover:bg-hud-surface text-left text-hud-text flex items-center gap-1.5"
                            >
                              <Edit2 className="w-3 h-3 text-hud-muted" />
                              <span>Renommer</span>
                            </button>

                            {groups.length > 0 && (
                              <div className="border-t border-hud-border my-0.5" />
                            )}
                            {groups.map((g) => (
                              <button
                                key={g.id}
                                onClick={() => {
                                  moveFamilyToGroup(family.id, g.id);
                                  setMenuOpenId(null);
                                }}
                                className="h-6 px-2 rounded hover:bg-hud-surface text-left text-hud-text flex items-center gap-1.5 truncate"
                              >
                                <Folder className="w-3 h-3 text-hud-muted shrink-0" />
                                <span className="truncate">Déplacer dans {g.name}</span>
                              </button>
                            ))}

                            <div className="border-t border-hud-border my-0.5" />
                            <button
                              onClick={() => {
                                deleteFamily(family.id);
                                setMenuOpenId(null);
                              }}
                              className="h-6 px-2 rounded hover:bg-red-950/40 text-left text-red-300 flex items-center gap-1.5"
                            >
                              <Trash2 className="w-3 h-3 text-red-400" />
                              <span>Dissoudre</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {!isFamCollapsed && (
                      <div className="p-1 pl-4 space-y-0.5 border-t border-hud-border/40">
                        {famProps.length === 0 ? (
                          <span className="text-[10px] text-hud-muted italic px-1 block">
                            Aucun prop dans cette famille
                          </span>
                        ) : (
                          famProps.map(renderPropRow)
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* 3. PROPS LIBRES À LA RACINE (Pas de groupe et pas de famille) */}
              {rootLooseProps.length > 0 && (
                <div className="rounded border border-hud-border/40 bg-hud-surface/20 p-1 space-y-0.5">
                  <div className="px-1 py-0.5 text-[9px] uppercase font-bold text-hud-muted flex items-center justify-between">
                    <span>Props libres à la racine</span>
                    <span className="font-mono">({rootLooseProps.length})</span>
                  </div>
                  {rootLooseProps.map(renderPropRow)}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bouton Exit [✕] */}
        <div className="pt-2 mt-auto border-t border-hud-border">
          <button
            onClick={exitEditor}
            className="w-full h-7 rounded bg-hud-surface hover:bg-hud-surface/80 border border-hud-border text-hud-text text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
          >
            <X className="w-3 h-3 text-hud-muted" />
            <span>Fermer [✕]</span>
          </button>
        </div>
      </aside>

      {/* Toast Notification Flottante */}
      {toastMessage && (
        <div
          role="status"
          className="fixed bottom-16 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded bg-hud-panel border border-hud-borderLight shadow-2xl flex items-center gap-2 text-xs font-medium text-hud-text animate-in fade-in slide-in-from-bottom-2 duration-150"
        >
          {toastType === 'error' && <AlertCircle className="w-3.5 h-3.5 text-red-400" />}
          {toastType === 'warning' && <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />}
          {toastType === 'success' && <Check className="w-3.5 h-3.5 text-green-400" />}
          {toastType === 'info' && <Box className="w-3.5 h-3.5 text-hud-accent" />}
          <span>{toastMessage}</span>
        </div>
      )}
      {/* Modal d'Enregistrement & Gestion des Assemblages */}
      <SaveAssemblageModal />
    </>
  );
};
