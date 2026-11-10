import React, { useState } from 'react';
import { useLightStore, NearbyLightItem } from '../store/useLightStore';
import {
  Folder,
  FolderOpen,
  FolderPlus,
  FolderX,
  Layers,
  ChevronRight,
  ChevronDown,
  Trash2,
  Edit2,
  Check,
  X,
  MoreVertical,
  Plus,
  CheckSquare,
  Square,
  MoveRight,
} from 'lucide-react';
import { rgbToHex } from '../utils/colorUtils';

export const NearbyLightsList: React.FC = () => {
  const {
    nearbyLights,
    selectedLightId,
    selectExistingLight,
    deleteSelectedLight,
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
    assignLightToGroup,
    assignLightToFamily,
    assignMultipleLights,
    selectedFamilyId,
    setSelectedFamilyId,
    multiSelectedIds,
    toggleMultiSelectId,
    selectAllNearby,
    clearMultiSelect,
  } = useLightStore();

  // État de création rapide
  const [createType, setCreateType] = useState<'group' | 'family' | null>(null);
  const [createParentGroupId, setCreateParentGroupId] = useState<string | null>(null);
  const [createName, setCreateName] = useState('');

  // État de renommage inline
  const [renamingTarget, setRenamingTarget] = useState<{ id: string; type: 'group' | 'family'; name: string } | null>(null);

  // Menu contextuel ouvert
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);

  // Menu d'assignation pour multi-sélection
  const [assignDropdownOpen, setAssignDropdownOpen] = useState(false);

  // Helpers pour vérifier l'appartenance d'un spot
  const isLightInFamily = (light: NearbyLightItem, famId: string, famName?: string) => {
    return light.familyId === famId || (light.group === famId && !light.familyId) || (famName && light.group === famName && !light.familyId);
  };

  const getLightFamily = (light: NearbyLightItem) => {
    if (light.familyId) {
      return families.find((f) => f.id === light.familyId) || null;
    }
    if (light.group) {
      return families.find((f) => f.id === light.group || f.name === light.group) || null;
    }
    return null;
  };

  const getLightGroup = (light: NearbyLightItem) => {
    if (light.groupId) {
      return groups.find((g) => g.id === light.groupId) || null;
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

  const allSelected = nearbyLights.length > 0 && multiSelectedIds.length === nearbyLights.length;

  // Calcul des spots libres à la racine (pas de famille et pas de groupe)
  const rootLooseLights = nearbyLights.filter((l) => {
    const fam = getLightFamily(l);
    const grp = getLightGroup(l);
    return !fam && !grp;
  });

  // Calcul des familles à la racine
  const rootFamilies = families.filter((f) => !f.groupId);

  return (
    <div className="pt-2 select-none">
      {/* En-tête avec titre, compteurs et boutons d'action rapide */}
      <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-hud-border">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-hud-muted">
            Plan de travail
          </span>
          <span className="text-[9px] text-hud-muted font-mono">
            ({nearbyLights.length} spot{nearbyLights.length > 1 ? 's' : ''})
          </span>
        </div>

        <div className="flex items-center gap-1">
          {/* Bouton Nouveau Groupe */}
          <button
            onClick={() => {
              setCreateType('group');
              setCreateParentGroupId(null);
              setCreateName(`Groupe ${groups.length + 1}`);
            }}
            className="h-5 px-1.5 rounded bg-hud-surface hover:bg-hud-surfaceHover border border-hud-border text-hud-text text-[10px] font-medium flex items-center gap-1 transition-colors"
            title="Créer un nouveau dossier d'organisation (Groupe)"
          >
            <FolderPlus className="w-3 h-3 text-hud-muted" />
            <span>+ Groupe</span>
          </button>

          {/* Bouton Nouvelle Famille */}
          <button
            onClick={() => {
              setCreateType('family');
              setCreateParentGroupId(null);
              setCreateName(`Famille ${families.length + 1}`);
            }}
            className="h-5 px-1.5 rounded bg-hud-accent/15 hover:bg-hud-accent/25 border border-hud-accent/40 text-hud-accent text-[10px] font-semibold flex items-center gap-1 transition-colors"
            title="Créer une famille synchronisée pour lier des lumières"
          >
            <Layers className="w-3 h-3 text-hud-accent" />
            <span>+ Famille</span>
          </button>

          {/* Tout sélectionner */}
          {nearbyLights.length > 0 && (
            <button
              onClick={() => (allSelected ? clearMultiSelect() : selectAllNearby())}
              className="w-5 h-5 flex items-center justify-center rounded text-hud-muted hover:text-hud-text hover:bg-hud-surface transition-colors ml-0.5"
              title={allSelected ? "Tout désélectionner" : "Tout sélectionner"}
            >
              {allSelected ? (
                <CheckSquare className="w-3.5 h-3.5 text-hud-accent" />
              ) : (
                <Square className="w-3.5 h-3.5" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Barre de création inline */}
      {createType && (
        <div className="p-2 mb-2 rounded bg-hud-surface border border-hud-accent/40 flex flex-col gap-1.5 animate-fadeIn">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-semibold text-hud-accent flex items-center gap-1">
              {createType === 'group' ? <Folder className="w-3.5 h-3.5" /> : <Layers className="w-3.5 h-3.5" />}
              {createType === 'group' ? 'Nouveau Groupe (Dossier)' : 'Nouvelle Famille (Synchronisée)'}
              {createParentGroupId && (
                <span className="text-[10px] text-hud-muted font-normal">
                  dans « {groups.find((g) => g.id === createParentGroupId)?.name} »
                </span>
              )}
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
              className="h-6 px-2 rounded bg-hud-accent text-white font-semibold text-[11px] hover:bg-hud-accentHover transition-colors flex items-center gap-1 shrink-0"
            >
              <Check className="w-3 h-3" />
              <span>OK</span>
            </button>
          </div>
        </div>
      )}

      {/* Barre d'action multi-sélection */}
      {multiSelectedIds.length > 0 && (
        <div className="p-2 mb-2 rounded bg-hud-surface border border-hud-border flex flex-col gap-1.5 animate-fadeIn">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-semibold text-hud-text">
              {multiSelectedIds.length} spot{multiSelectedIds.length > 1 ? 's' : ''} sélectionné{multiSelectedIds.length > 1 ? 's' : ''}
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
              title="Créer une famille pour lier et synchroniser ces spots"
            >
              <Layers className="w-3 h-3" />
              <span>Créer Famille</span>
            </button>

            {/* Menu Déroulant Assigner */}
            <button
              onClick={() => setAssignDropdownOpen(!assignDropdownOpen)}
              className="h-6 px-2 rounded bg-hud-bg hover:bg-hud-surfaceHover border border-hud-border text-hud-text text-[11px] font-medium flex items-center gap-1 transition-colors"
              title="Classer dans un groupe ou une famille existante"
            >
              <span>Assigner...</span>
              <ChevronDown className="w-3 h-3 text-hud-muted" />
            </button>

            {/* Retirer de toute organisation */}
            <button
              onClick={() => assignMultipleLights(multiSelectedIds, null, null)}
              className="h-6 px-2 rounded bg-hud-bg hover:bg-hud-error/20 hover:text-hud-error border border-hud-border text-hud-muted text-[11px] font-medium flex items-center justify-center gap-1 transition-colors"
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
                      assignMultipleLights(multiSelectedIds, g.id, undefined);
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
                      assignMultipleLights(multiSelectedIds, undefined, f.id);
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

      {/* ARBORESCENCE HIERARCHIQUE COMPLÈTE */}
      {nearbyLights.length === 0 ? (
        <div className="py-3 px-2 text-center text-[11px] text-hud-muted/70 bg-hud-surface/40 rounded border border-hud-border/50">
          Aucune lumière à portée (25m)
        </div>
      ) : (
        <div className="space-y-1 max-h-[340px] overflow-y-auto pr-0.5 scrollbar-thin">
          {/* 1. NIVEAU GROUPES (Dossiers d'organisation) */}
          {groups.map((group) => {
            const isGroupCollapsed = !!collapsedFolders[`grp_${group.id}`];
            const groupFamilies = families.filter((f) => f.groupId === group.id);
            const groupDirectLights = nearbyLights.filter(
              (l) => l.groupId === group.id && !getLightFamily(l)
            );
            const totalGroupLights = nearbyLights.filter((l) => {
              if (l.groupId === group.id) return true;
              const fam = getLightFamily(l);
              return fam && fam.groupId === group.id;
            });

            const isRenamingThisGroup = renamingTarget?.id === group.id;

            return (
              <div key={group.id} className="rounded border border-hud-border/60 bg-hud-bg/40 overflow-hidden">
                {/* Ligne d'en-tête du groupe */}
                <div className="h-7 px-1.5 bg-hud-surface/60 hover:bg-hud-surface flex items-center justify-between gap-1 transition-colors">
                  <div className="flex items-center gap-1 min-w-0 flex-1">
                    <button
                      onClick={() => toggleFolderCollapse(`grp_${group.id}`)}
                      className="w-4 h-4 flex items-center justify-center text-hud-muted hover:text-hud-text transition-colors"
                      title={isGroupCollapsed ? "Déplier le groupe" : "Replier le groupe"}
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
                      ({totalGroupLights.length})
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
                          className="h-6 px-2 rounded hover:bg-hud-surface text-left text-hud-text flex items-center gap-1.5"
                        >
                          <Edit2 className="w-3 h-3 text-hud-muted" />
                          <span>Renommer</span>
                        </button>
                        <button
                          onClick={() => {
                            deleteGroup(group.id);
                            setMenuOpenId(null);
                          }}
                          className="h-6 px-2 rounded hover:bg-hud-error/20 hover:text-hud-error text-left text-hud-muted flex items-center gap-1.5"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>Supprimer</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Contenu du groupe (Familles imbriquées & Spots libres) */}
                {!isGroupCollapsed && (
                  <div className="pl-3.5 pr-1 py-1 space-y-1 border-t border-hud-border/40">
                    {/* Familles à l'intérieur du groupe */}
                    {groupFamilies.map((fam) =>
                      renderFamilyItem(fam, true)
                    )}

                    {/* Spots libres directement dans le groupe */}
                    {groupDirectLights.map((light) =>
                      renderLightRow(light, 'group')
                    )}

                    {groupFamilies.length === 0 && groupDirectLights.length === 0 && (
                      <div className="py-1 text-[10px] text-hud-muted/60 italic pl-2">
                        Dossier vide
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {/* 2. NIVEAU FAMILLES A LA RACINE */}
          {rootFamilies.map((fam) => renderFamilyItem(fam, false))}

          {/* 3. NIVEAU LUMIÈRES LIBRES A LA RACINE */}
          {rootLooseLights.length > 0 && (
            <div className="pt-1">
              <div className="px-1.5 pb-1 text-[9px] font-bold uppercase tracking-wider text-hud-muted/80">
                Lumières non groupées ({rootLooseLights.length})
              </div>
              <div className="space-y-0.5">
                {rootLooseLights.map((light) => renderLightRow(light, 'root'))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );

  // Rendu réutilisable d'un bloc de Famille (à la racine ou imbriquée dans un groupe)
  function renderFamilyItem(fam: { id: string; name: string; groupId: string | null }, isNested: boolean) {
    const isFamCollapsed = !!collapsedFolders[`fam_${fam.id}`];
    const famLights = nearbyLights.filter((l) => isLightInFamily(l, fam.id, fam.name));
    const isFamActive = selectedFamilyId === fam.id;
    const isRenaming = renamingTarget?.id === fam.id;

    return (
      <div
        key={fam.id}
        className={`rounded border transition-colors ${
          isFamActive
            ? 'border-hud-accent/60 bg-hud-accent/10'
            : 'border-hud-border/50 bg-hud-surface/40 hover:bg-hud-surface/70'
        }`}
      >
        {/* Ligne d'en-tête de la famille */}
        <div className="h-6 px-1.5 flex items-center justify-between gap-1">
          <div className="flex items-center gap-1 min-w-0 flex-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFolderCollapse(`fam_${fam.id}`);
              }}
              className="w-3.5 h-3.5 flex items-center justify-center text-hud-muted hover:text-hud-text"
              title={isFamCollapsed ? "Déplier la famille" : "Replier la famille"}
            >
              {isFamCollapsed ? (
                <ChevronRight className="w-3 h-3" />
              ) : (
                <ChevronDown className="w-3 h-3" />
              )}
            </button>

            <Layers className="w-3.5 h-3.5 text-hud-accent shrink-0" />

            {isRenaming ? (
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
                onClick={() => setSelectedFamilyId(isFamActive ? null : fam.id)}
                onDoubleClick={() =>
                  setRenamingTarget({ id: fam.id, type: 'family', name: fam.name })
                }
                className="text-xs font-semibold text-hud-text hover:text-hud-accent truncate cursor-pointer"
                title="Cliquer pour inspecter et synchroniser cette famille (Double-clic pour renommer)"
              >
                {fam.name}
              </span>
            )}

            <span className="text-[9px] font-mono text-hud-accent shrink-0 ml-0.5">
              ({famLights.length})
            </span>
          </div>

          {/* Actions de la famille */}
          <div className="flex items-center gap-0.5 relative">
            <button
              onClick={() =>
                setMenuOpenId(menuOpenId === `fam_${fam.id}` ? null : `fam_${fam.id}`)
              }
              className="w-5 h-5 flex items-center justify-center rounded text-hud-muted hover:text-hud-text"
              title="Options de la famille"
            >
              <MoreVertical className="w-3 h-3" />
            </button>

            {menuOpenId === `fam_${fam.id}` && (
              <div
                className="absolute right-0 top-6 z-50 w-44 bg-hud-panel border border-hud-border rounded shadow-lg p-1 text-xs flex flex-col gap-0.5"
                onMouseLeave={() => setMenuOpenId(null)}
              >
                <button
                  onClick={() => {
                    setSelectedFamilyId(fam.id);
                    setMenuOpenId(null);
                  }}
                  className="h-6 px-2 rounded hover:bg-hud-surface text-left text-hud-accent flex items-center gap-1.5"
                >
                  <Layers className="w-3 h-3" />
                  <span>Inspecter / Déplacer</span>
                </button>
                <button
                  onClick={() => {
                    setRenamingTarget({ id: fam.id, type: 'family', name: fam.name });
                    setMenuOpenId(null);
                  }}
                  className="h-6 px-2 rounded hover:bg-hud-surface text-left text-hud-text flex items-center gap-1.5"
                >
                  <Edit2 className="w-3 h-3 text-hud-muted" />
                  <span>Renommer</span>
                </button>

                {/* Déplacer vers un groupe ou vers la racine */}
                <div className="border-t border-hud-border my-0.5" />
                <span className="text-[9px] uppercase font-bold text-hud-muted px-1.5 py-0.5">
                  Déplacer vers :
                </span>
                {isNested && (
                  <button
                    onClick={() => {
                      moveFamilyToGroup(fam.id, null);
                      setMenuOpenId(null);
                    }}
                    className="h-5 px-2 rounded hover:bg-hud-surface text-left text-hud-muted hover:text-hud-text flex items-center gap-1"
                  >
                    <MoveRight className="w-2.5 h-2.5" />
                    <span>Racine (sans groupe)</span>
                  </button>
                )}
                {groups
                  .filter((g) => g.id !== fam.groupId)
                  .map((g) => (
                    <button
                      key={g.id}
                      onClick={() => {
                        moveFamilyToGroup(fam.id, g.id);
                        setMenuOpenId(null);
                      }}
                      className="h-5 px-2 rounded hover:bg-hud-surface text-left text-hud-muted hover:text-hud-text flex items-center gap-1 truncate"
                    >
                      <Folder className="w-2.5 h-2.5 shrink-0" />
                      <span className="truncate">{g.name}</span>
                    </button>
                  ))}

                <div className="border-t border-hud-border my-0.5" />
                <button
                  onClick={() => {
                    deleteFamily(fam.id);
                    setMenuOpenId(null);
                  }}
                  className="h-6 px-2 rounded hover:bg-hud-error/20 hover:text-hud-error text-left text-hud-muted flex items-center gap-1.5"
                >
                  <FolderX className="w-3 h-3" />
                  <span>Dissoudre famille</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Membres de la famille */}
        {!isFamCollapsed && (
          <div className="pl-3.5 pr-1 py-1 space-y-0.5 border-t border-hud-border/30">
            {famLights.map((light) => renderLightRow(light, 'family'))}
            {famLights.length === 0 && (
              <div className="py-1 text-[10px] text-hud-muted/60 italic pl-1">
                Aucune lumière dans cette famille
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  // Rendu d'une ligne de lumière
  function renderLightRow(light: NearbyLightItem, context: 'group' | 'family' | 'root') {
    const isSelected = light.id === selectedLightId;
    const isMultiChecked = multiSelectedIds.includes(light.id);
    const hex = rgbToHex(light.rgb.r, light.rgb.g, light.rgb.b);

    return (
      <div
        key={light.id}
        onClick={() => selectExistingLight(light.id)}
        className={`group h-6 px-1.5 rounded flex items-center gap-1.5 cursor-pointer transition-colors ${
          isSelected
            ? 'bg-hud-surface text-hud-text border-l-2 border-l-hud-accent shadow-sm'
            : isMultiChecked
            ? 'bg-hud-surface/90 text-hud-text'
            : 'text-hud-muted hover:text-hud-text hover:bg-hud-surface/60'
        }`}
      >
        {/* Case à cocher multi-sélection */}
        <input
          type="checkbox"
          checked={isMultiChecked}
          onChange={(e) => {
            e.stopPropagation();
            toggleMultiSelectId(light.id);
          }}
          className="w-3 h-3 rounded bg-hud-bg border border-hud-border accent-hud-accent cursor-pointer shrink-0"
        />

        {/* Pastille de couleur */}
        <div
          className="w-2.5 h-2.5 rounded-sm border border-hud-border shrink-0 shadow-sm"
          style={{ backgroundColor: hex }}
        />

        {/* Nom du modèle */}
        <span className="text-[11px] truncate flex-1 font-medium text-hud-text">
          {light.label || light.model}
        </span>

        {/* Distance */}
        <span className="text-[9px] font-mono text-hud-muted shrink-0">
          {light.distance.toFixed(1)}m
        </span>

        {/* Action rapide : détacher de la famille */}
        {context === 'family' && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              assignLightToFamily(light.id, null);
            }}
            title="Retirer cette lumière de la famille"
            className="w-4 h-4 hidden group-hover:flex items-center justify-center rounded text-hud-muted hover:text-hud-accent hover:bg-hud-bg transition-colors shrink-0"
          >
            <FolderX className="w-2.5 h-2.5" />
          </button>
        )}

        {/* Action rapide : détacher du groupe */}
        {context === 'group' && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              assignLightToGroup(light.id, null);
            }}
            title="Retirer cette lumière du groupe"
            className="w-4 h-4 hidden group-hover:flex items-center justify-center rounded text-hud-muted hover:text-hud-error hover:bg-hud-bg transition-colors shrink-0"
          >
            <FolderX className="w-2.5 h-2.5" />
          </button>
        )}

        {/* Bouton de suppression rapide */}
        {isSelected && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteSelectedLight();
            }}
            title="Supprimer ce spot (Suppr)"
            className="w-4 h-4 flex items-center justify-center rounded text-hud-muted hover:text-hud-error hover:bg-hud-bg transition-colors shrink-0"
          >
            <Trash2 className="w-2.5 h-2.5" />
          </button>
        )}
      </div>
    );
  }
};
