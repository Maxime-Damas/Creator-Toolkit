import React from 'react';
import { useLightStore } from '../store/useLightStore';
import { ColorPicker } from './ColorPicker';
import { NearbyLightsList } from './NearbyLightsList';
import {
  ArrowDownToLine,
  Check,
  X,
  ChevronDown,
  ChevronUp,
  Trash2,
  FolderOpen,
  Car,
  User,
  Crosshair,
  Unlink,
  Link2,
  Cone,
  Circle,
  Box,
  RotateCcw,
  Lightbulb,
  Layers,
  FolderX,
  Copy,
  Shield,
  Sun,
} from 'lucide-react';

export const ConfigPanel: React.FC = () => {
  const {
    hasSelectedProp,
    selectedLightId,
    nearbyLights,
    availableProps,
    propIndex,
    intensity,
    radius,
    renderDistance,
    textureVariation,
    collision,
    castShadow,
    shape,
    shapeParam,
    invertDirection,
    nativeLight,
    coords,
    heading,
    rotation,
    transformPanelOpen,
    setIntensity,
    setRadius,
    setRenderDistance,
    setTextureVariation,
    toggleCollision,
    toggleCastShadow,
    duplicateSelectedLight,
    setShape,
    setShapeParam,
    toggleInvertDirection,
    toggleNativeLight,
    updateTransform,
    setTransformPanelOpen,
    requestGroundSnap,
    requestSave,
    requestCancel,
    deleteSelectedLight,
    deselectProp,
    toggleCatalog,
    attachedInfo,
    requestAttachNearestVehicle,
    requestAttachPed,
    requestAttachRaycast,
    requestDetach,
    selectedGroupId,
    setSelectedGroupId,
    selectedFamilyId,
    setSelectedFamilyId,
    applyToFamily,
    setApplyToFamily,
    families,
    groups,
    getCurrentLightFamily,
    saveCurrentFamily,
    deleteFamily,
    getCurrentLightGroup,
  } = useLightStore();

  const currentProp = availableProps[propIndex] || {
    model: 'prop_worklight_02a',
    label: 'Spot Halogène Double',
    category: 'Chantier',
  };

  const getSliderTrack = (val: number, min: number, max: number, color: string) => {
    const pct = Math.max(0, Math.min(100, ((val - min) / (max - min)) * 100));
    return {
      background: `linear-gradient(to right, ${color} 0%, ${color} ${pct}%, #252A31 ${pct}%, #252A31 100%)`,
    };
  };

  const currentFamilyId = getCurrentLightFamily();
  const currentFamilyObj = currentFamilyId ? families.find((f) => f.id === currentFamilyId) : null;
  const currentFamilyName = currentFamilyObj ? currentFamilyObj.name : currentFamilyId;
  const familyMembersCount = currentFamilyId
    ? nearbyLights.filter((l) => l.familyId === currentFamilyId || (l.group === currentFamilyId && !l.familyId)).length
    : 0;

  const currentGroupId = getCurrentLightGroup();
  const currentGroupObj = currentGroupId ? groups.find((g) => g.id === currentGroupId) : null;
  const currentGroupName = currentGroupObj ? currentGroupObj.name : currentGroupId;

  const activeFamilyId = selectedFamilyId || selectedGroupId;
  const activeFamilyObj = activeFamilyId ? families.find((f) => f.id === activeFamilyId) : null;
  const activeFamilyName = activeFamilyObj ? activeFamilyObj.name : activeFamilyId;
  const activeFamilyLights = activeFamilyId
    ? nearbyLights.filter((l) => l.familyId === activeFamilyId || (l.group === activeFamilyId && !l.familyId))
    : [];

  return (
    <aside
      role="dialog"
      aria-label="Inspecteur de lumière"
      className="fixed right-4 top-3 z-40 w-80 bg-hud-panel border border-hud-border rounded shadow-md p-3 select-none pointer-events-auto flex flex-col gap-2.5 max-h-[94vh] overflow-y-auto"
    >
      {/* ÉTAT A : INSPECTEUR DE FAMILLE ACTIF */}
      {activeFamilyId ? (
        <div className="space-y-2.5">
          {/* En-tête de la famille */}
          <div className="flex items-center justify-between pb-2 border-b border-hud-border">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-hud-accent shrink-0" />
                <span className="text-xs font-bold text-hud-text truncate block">
                  Famille : {activeFamilyName}
                </span>
              </div>
              <span className="text-[10px] text-hud-muted font-mono block truncate mt-0.5">
                {activeFamilyLights.length} projecteurs synchronisés
              </span>
            </div>

            <button
              onClick={() => {
                setSelectedFamilyId(null);
                setSelectedGroupId(null);
              }}
              className="px-2 h-6 rounded bg-hud-surface hover:bg-hud-surfaceHover border border-hud-border text-hud-muted hover:text-hud-text text-[11px] transition-colors"
            >
              Quitter
            </button>
          </div>

          {/* Section 1 : Couleur du groupe */}
          <div>
            <div className="pb-1 mb-1.5 border-b border-hud-border flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-hud-muted">
                Couleur synchronisée
              </span>
              <span className="text-[9px] font-mono text-hud-accent">
                Tous les spots
              </span>
            </div>
            <ColorPicker />
          </div>

          {/* Section 2 : Paramètres Lumineux du groupe */}
          <div className="pt-1 border-t border-hud-border">
            <div className="pb-1 mb-2 border-b border-hud-border">
              <span className="text-[10px] font-bold uppercase tracking-wider text-hud-muted">
                Paramètres Lumineux du Groupe
              </span>
            </div>

            <div className="space-y-2.5">
              {/* Forme de la lumière */}
              <div>
                <span className="text-hud-muted text-[10px] uppercase font-bold tracking-wider block mb-1.5">
                  Forme de la Lumière
                </span>
                <div className="grid grid-cols-3 gap-1">
                  <button
                    onClick={() => setShape('cone')}
                    className={`h-7 px-1 rounded flex items-center justify-center gap-1 border text-[11px] font-medium transition-colors ${
                      shape === 'cone'
                        ? 'bg-hud-accent/20 border-hud-accent text-hud-accent'
                        : 'bg-hud-surface border-hud-border text-hud-muted hover:text-hud-text hover:bg-hud-surfaceHover'
                    }`}
                    title="Faisceau Conique (Spot directionnel avec angle réglable)"
                  >
                    <Cone className="w-3.5 h-3.5" />
                    <span>Conique</span>
                  </button>

                  <button
                    onClick={() => setShape('sphere')}
                    className={`h-7 px-1 rounded flex items-center justify-center gap-1 border text-[11px] font-medium transition-colors ${
                      shape === 'sphere'
                        ? 'bg-hud-accent/20 border-hud-accent text-hud-accent'
                        : 'bg-hud-surface border-hud-border text-hud-muted hover:text-hud-text hover:bg-hud-surfaceHover'
                    }`}
                    title="Sphérique (Omnidirectionnel 360°)"
                  >
                    <Circle className="w-3.5 h-3.5" />
                    <span>Sphérique</span>
                  </button>

                  <button
                    onClick={() => setShape('box')}
                    className={`h-7 px-1 rounded flex items-center justify-center gap-1 border text-[11px] font-medium transition-colors ${
                      shape === 'box'
                        ? 'bg-hud-accent/20 border-hud-accent text-hud-accent'
                        : 'bg-hud-surface border-hud-border text-hud-muted hover:text-hud-text hover:bg-hud-surfaceHover'
                    }`}
                    title="Volumétrique / Boîte (Éclairage de zone)"
                  >
                    <Box className="w-3.5 h-3.5" />
                    <span>Cubique</span>
                  </button>
                </div>
              </div>

              {/* Angle du cône ou paramètre de forme */}
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-hud-muted text-[11px]">
                    {shape === 'cone'
                      ? "Angle du Faisceau (Ouverture)"
                      : shape === 'sphere'
                      ? "Multiplicateur de Rayon Sphère"
                      : "Étirement Volumétrique"}
                  </span>
                  <span className="font-mono text-hud-text font-medium text-[11px]">
                    {shape === 'cone'
                      ? `${shapeParam.toFixed(0)}°`
                      : `${shapeParam.toFixed(1)}x`}
                  </span>
                </div>
                <input
                  type="range"
                  min={shape === 'cone' ? '15' : '0.2'}
                  max={shape === 'cone' ? '120' : '3.0'}
                  step={shape === 'cone' ? '1' : '0.1'}
                  value={shapeParam}
                  onChange={(e) => setShapeParam(parseFloat(e.target.value))}
                  style={getSliderTrack(
                    shapeParam,
                    shape === 'cone' ? 15 : 0.2,
                    shape === 'cone' ? 120 : 3.0,
                    '#E58A32'
                  )}
                  className="w-full h-1.5 rounded-sm appearance-none cursor-pointer"
                />
              </div>

              {/* Intensité */}
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-hud-muted text-[11px]">Puissance (Intensité)</span>
                  <span className="font-mono text-hud-text font-medium text-[11px]">
                    {intensity.toFixed(1)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="50.0"
                  step="0.5"
                  value={intensity}
                  onChange={(e) => setIntensity(parseFloat(e.target.value))}
                  style={getSliderTrack(intensity, 0.5, 50.0, '#E58A32')}
                  className="w-full h-1.5 rounded-sm appearance-none cursor-pointer"
                />
              </div>

              {/* Portée (Rayon) */}
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-hud-muted text-[11px]">Portée (Rayon)</span>
                  <span className="font-mono text-hud-text font-medium text-[11px]">
                    {radius.toFixed(1)}m
                  </span>
                </div>
                <input
                  type="range"
                  min="2.0"
                  max="60.0"
                  step="1.0"
                  value={radius}
                  onChange={(e) => setRadius(parseFloat(e.target.value))}
                  style={getSliderTrack(radius, 2.0, 60.0, '#E58A32')}
                  className="w-full h-1.5 rounded-sm appearance-none cursor-pointer"
                />
              </div>

              {/* Boutons Inverser faisceau & Lampe native GTA */}
              <div className="grid grid-cols-2 gap-1.5 pt-1">
                <button
                  onClick={toggleInvertDirection}
                  className={`h-7 px-2 rounded flex items-center justify-center gap-1.5 border text-[11px] font-medium transition-colors ${
                    invertDirection
                      ? 'bg-hud-accent/20 border-hud-accent text-hud-accent'
                      : 'bg-hud-surface border-hud-border text-hud-muted hover:text-hud-text hover:bg-hud-surfaceHover'
                  }`}
                  title="Inverser le sens du faisceau lumineux à 180° pour tout le groupe"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Inverser (180°)</span>
                </button>

                <button
                  onClick={toggleNativeLight}
                  className={`h-7 px-2 rounded flex items-center justify-center gap-1.5 border text-[11px] font-medium transition-colors ${
                    nativeLight
                      ? 'bg-hud-accent/20 border-hud-accent text-hud-accent'
                      : 'bg-hud-surface border-hud-border text-hud-muted hover:text-hud-text hover:bg-hud-surfaceHover'
                  }`}
                  title="Activer ou éteindre la lumière native par défaut des props du groupe"
                >
                  <Lightbulb className="w-3 h-3" />
                  <span>Lampe GTA : {nativeLight ? 'ON' : 'OFF'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Section 3 : Position & Alignement du Groupe */}
          <div className="pt-1 border-t border-hud-border">
            <button
              onClick={() => setTransformPanelOpen(!transformPanelOpen)}
              className="w-full flex items-center justify-between pb-1 text-left"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-hud-muted">
                Position & Alignement du Groupe
              </span>
              {transformPanelOpen ? (
                <ChevronUp className="w-3.5 h-3.5 text-hud-muted" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-hud-muted" />
              )}
            </button>

            {transformPanelOpen && (
              <div className="space-y-2 mt-2 pt-2 border-t border-hud-border/50">
                {/* Position XYZ */}
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-hud-muted block mb-1">
                    Position (m)
                  </span>
                  <div className="grid grid-cols-3 gap-1.5 text-center">
                    <div>
                      <span className="text-[9px] font-bold text-hud-axisX block mb-0.5">X</span>
                      <input
                        type="number"
                        step="0.05"
                        value={coords.x.toFixed(2)}
                        onChange={(e) =>
                          updateTransform({ x: parseFloat(e.target.value) || coords.x })
                        }
                        className="w-full h-6 text-center bg-hud-surface border border-hud-border rounded text-[10px] font-mono text-hud-text focus:border-hud-accent focus:outline-none"
                      />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-hud-axisY block mb-0.5">Y</span>
                      <input
                        type="number"
                        step="0.05"
                        value={coords.y.toFixed(2)}
                        onChange={(e) =>
                          updateTransform({ y: parseFloat(e.target.value) || coords.y })
                        }
                        className="w-full h-6 text-center bg-hud-surface border border-hud-border rounded text-[10px] font-mono text-hud-text focus:border-hud-accent focus:outline-none"
                      />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-hud-axisZ block mb-0.5">Z</span>
                      <input
                        type="number"
                        step="0.05"
                        value={coords.z.toFixed(2)}
                        onChange={(e) =>
                          updateTransform({ z: parseFloat(e.target.value) || coords.z })
                        }
                        className="w-full h-6 text-center bg-hud-surface border border-hud-border rounded text-[10px] font-mono text-hud-text focus:border-hud-accent focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Rotation XYZ */}
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-hud-muted block mb-1">
                    Rotation (°)
                  </span>
                  <div className="grid grid-cols-3 gap-1.5 text-center">
                    <div>
                      <span className="text-[9px] font-bold text-hud-axisX block mb-0.5">X</span>
                      <input
                        type="number"
                        step="1"
                        value={parseFloat((rotation?.x ?? 0).toFixed(1))}
                        onChange={(e) => {
                          const val = parseFloat(e.target.value);
                          if (!isNaN(val)) {
                            const cur = rotation || { x: 0, y: 0, z: heading };
                            updateTransform({}, undefined, { ...cur, x: val });
                          }
                        }}
                        className="w-full h-6 text-center bg-hud-surface border border-hud-border rounded text-[10px] font-mono text-hud-text focus:border-hud-accent focus:outline-none"
                      />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-hud-axisY block mb-0.5">Y</span>
                      <input
                        type="number"
                        step="1"
                        value={parseFloat((rotation?.y ?? 0).toFixed(1))}
                        onChange={(e) => {
                          const val = parseFloat(e.target.value);
                          if (!isNaN(val)) {
                            const cur = rotation || { x: 0, y: 0, z: heading };
                            updateTransform({}, undefined, { ...cur, y: val });
                          }
                        }}
                        className="w-full h-6 text-center bg-hud-surface border border-hud-border rounded text-[10px] font-mono text-hud-text focus:border-hud-accent focus:outline-none"
                      />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-hud-axisZ block mb-0.5">Z</span>
                      <input
                        type="number"
                        step="1"
                        value={parseFloat(((rotation?.z ?? heading) % 360).toFixed(1))}
                        onChange={(e) => {
                          const val = parseFloat(e.target.value);
                          if (!isNaN(val)) {
                            const cur = rotation || { x: 0, y: 0, z: heading };
                            updateTransform({}, val, { ...cur, z: val });
                          }
                        }}
                        className="w-full h-6 text-center bg-hud-surface border border-hud-border rounded text-[10px] font-mono text-hud-text focus:border-hud-accent focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={requestGroundSnap}
                  title="Plaquer tout le groupe au sol (G)"
                  className="w-full h-7 flex items-center justify-center gap-1.5 rounded bg-hud-surface hover:bg-hud-surfaceHover border border-hud-border text-xs text-hud-text transition-colors"
                >
                  <ArrowDownToLine className="w-3.5 h-3.5 text-hud-muted" />
                  <span>Plaquer le groupe au sol</span>
                  <kbd className="text-[9px] font-mono text-hud-muted ml-0.5 px-1 py-0.2 bg-hud-bg rounded border border-hud-border/70">
                    G
                  </kbd>
                </button>
              </div>
            )}
          </div>

          {/* Boutons d'action de la famille */}
          <footer className="grid grid-cols-2 gap-1.5 pt-2 border-t border-hud-border">
            <button
              onClick={() => deleteFamily(activeFamilyId)}
              className="h-7 flex items-center justify-center gap-1.5 rounded bg-hud-surface hover:bg-hud-error/20 hover:text-hud-error border border-hud-border text-hud-muted text-xs font-medium transition-colors"
            >
              <FolderX className="w-3.5 h-3.5" />
              <span>Dissoudre</span>
            </button>
            <button
              onClick={saveCurrentFamily}
              className="h-7 flex items-center justify-center gap-1.5 rounded bg-hud-accent hover:bg-hud-accentHover text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Sauvegarder</span>
            </button>
          </footer>

          {/* Liste des lumières */}
          <NearbyLightsList />
        </div>
      ) : !hasSelectedProp ? (
        /* ÉTAT B : AUCUN PROP SÉLECTIONNÉ (EXPLORATION) */
        <div className="space-y-2">
          {/* En-tête mode exploration */}
          <div className="pb-2 border-b border-hud-border">
            <span className="text-[10px] font-bold uppercase tracking-wider text-hud-muted block">
              Inspecteur
            </span>
            <p className="text-xs text-hud-text mt-0.5">
              Aucun spot sélectionné
            </p>
            <p className="text-[11px] text-hud-muted mt-1 leading-normal">
              Sélectionnez une lumière dans la liste ci-dessous, ouvrez le catalogue ou groupez plusieurs lumières pour les ajuster d'un coup.
            </p>
            <button
              onClick={toggleCatalog}
              className="w-full h-7 flex items-center justify-center gap-1.5 rounded bg-hud-surface hover:bg-hud-surfaceHover border border-hud-border text-xs font-medium text-hud-text transition-colors mt-2"
            >
              <FolderOpen className="w-3.5 h-3.5 text-hud-accent" />
              <span>Ouvrir Catalogue [C]</span>
            </button>
          </div>

          {/* Liste des lumières existantes dans la zone */}
          <NearbyLightsList />
        </div>
      ) : (
        /* ÉTAT C : PROP SÉLECTIONNÉ POUR CONFIGURATION */
        <div className="space-y-2.5">
          {/* En-tête du prop sélectionné */}
          <div className="flex items-center justify-between pb-2 border-b border-hud-border">
            <div className="min-w-0 flex-1">
              <span className="text-xs font-bold text-hud-text truncate block">
                {currentProp.label}
              </span>
              <span className="text-[10px] text-hud-muted font-mono block truncate">
                {selectedLightId
                  ? `ID: ${selectedLightId}`
                  : currentProp.model === 'none'
                  ? 'Source libre (sans prop)'
                  : 'Nouveau placement'}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={duplicateSelectedLight}
                title="Dupliquer instantanément (LShift)"
                className="w-6 h-6 flex items-center justify-center rounded text-hud-muted hover:text-hud-accent hover:bg-hud-surface transition-colors"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
              {selectedLightId && (
                <button
                  onClick={deleteSelectedLight}
                  title="Supprimer cette lumière (Touche Suppr)"
                  className="w-6 h-6 flex items-center justify-center rounded text-hud-muted hover:text-hud-error hover:bg-hud-surface transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}
              <button
                onClick={deselectProp}
                title="Désélectionner"
                className="px-2 h-6 rounded bg-hud-surface hover:bg-hud-surfaceHover border border-hud-border text-hud-muted hover:text-hud-text text-[11px] transition-colors"
              >
                Désélectionner
              </button>
            </div>
          </div>

          {/* Notification / Liaison de Famille & Groupe */}
          {(currentFamilyId || currentGroupId) && (
            <div className="p-2 rounded bg-hud-surface/70 border border-hud-border flex flex-col gap-1.5 text-xs">
              {currentFamilyId && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span
                      onClick={() => setSelectedFamilyId(currentFamilyId)}
                      className="text-[10px] font-bold text-hud-accent bg-hud-accent/15 px-1.5 py-0.5 rounded border border-hud-accent/30 shrink-0 cursor-pointer hover:bg-hud-accent/25 transition-colors flex items-center gap-1"
                      title="Ouvrir l'inspecteur de cette famille"
                    >
                      <Layers className="w-2.5 h-2.5" />
                      <span>{currentFamilyName}</span>
                    </span>
                    <span className="text-[10px] text-hud-muted truncate">
                      ({familyMembersCount} spot{familyMembersCount > 1 ? 's' : ''})
                    </span>
                  </div>
                  <label className="flex items-center gap-1.5 cursor-pointer text-[11px] text-hud-text hover:text-white shrink-0">
                    <input
                      type="checkbox"
                      checked={applyToFamily}
                      onChange={(e) => setApplyToFamily(e.target.checked)}
                      className="w-3.5 h-3.5 rounded bg-hud-bg border border-hud-border accent-hud-accent cursor-pointer"
                    />
                    <span>Synchroniser famille</span>
                  </label>
                </div>
              )}

              {currentGroupId && (
                <div className="flex items-center gap-1.5 text-[10px] text-hud-muted">
                  <FolderOpen className="w-3 h-3 text-hud-muted" />
                  <span>Dossier : <strong className="text-hud-text">{currentGroupName}</strong></span>
                </div>
              )}
            </div>
          )}

          {/* Section 1 : Couleur */}
          <div>
            <div className="pb-1 mb-1.5 border-b border-hud-border">
              <span className="text-[10px] font-bold uppercase tracking-wider text-hud-muted">
                Couleur de la lumière
              </span>
            </div>
            <ColorPicker />
          </div>

          {/* Section 2 : Paramètres Lumineux (Intensité & Portée) */}
          <div className="pt-1 border-t border-hud-border">
            <div className="pb-1 mb-2 border-b border-hud-border">
              <span className="text-[10px] font-bold uppercase tracking-wider text-hud-muted">
                Paramètres Lumineux
              </span>
            </div>

            <div className="space-y-2.5">
              {/* Forme de la lumière */}
              <div>
                <span className="text-hud-muted text-[10px] uppercase font-bold tracking-wider block mb-1.5">
                  Forme de la Lumière
                </span>
                <div className="grid grid-cols-3 gap-1">
                  <button
                    onClick={() => setShape('cone')}
                    className={`h-7 px-1 rounded flex items-center justify-center gap-1 border text-[11px] font-medium transition-colors ${
                      shape === 'cone'
                        ? 'bg-hud-accent/20 border-hud-accent text-hud-accent'
                        : 'bg-hud-surface border-hud-border text-hud-muted hover:text-hud-text hover:bg-hud-surfaceHover'
                    }`}
                    title="Faisceau Conique (Spot directionnel avec angle réglable)"
                  >
                    <Cone className="w-3.5 h-3.5" />
                    <span>Conique</span>
                  </button>

                  <button
                    onClick={() => setShape('sphere')}
                    className={`h-7 px-1 rounded flex items-center justify-center gap-1 border text-[11px] font-medium transition-colors ${
                      shape === 'sphere'
                        ? 'bg-hud-accent/20 border-hud-accent text-hud-accent'
                        : 'bg-hud-surface border-hud-border text-hud-muted hover:text-hud-text hover:bg-hud-surfaceHover'
                    }`}
                    title="Sphérique (Omnidirectionnel 360°)"
                  >
                    <Circle className="w-3.5 h-3.5" />
                    <span>Sphérique</span>
                  </button>

                  <button
                    onClick={() => setShape('box')}
                    className={`h-7 px-1 rounded flex items-center justify-center gap-1 border text-[11px] font-medium transition-colors ${
                      shape === 'box'
                        ? 'bg-hud-accent/20 border-hud-accent text-hud-accent'
                        : 'bg-hud-surface border-hud-border text-hud-muted hover:text-hud-text hover:bg-hud-surfaceHover'
                    }`}
                    title="Volumétrique / Boîte (Éclairage de zone)"
                  >
                    <Box className="w-3.5 h-3.5" />
                    <span>Cubique</span>
                  </button>
                </div>
              </div>

              {/* Angle du cône ou paramètre de forme */}
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-hud-muted text-[11px]">
                    {shape === 'cone'
                      ? "Angle du Faisceau (Ouverture)"
                      : shape === 'sphere'
                      ? "Multiplicateur de Rayon Sphère"
                      : "Étirement Volumétrique"}
                  </span>
                  <span className="font-mono text-hud-text font-medium text-[11px]">
                    {shape === 'cone'
                      ? `${shapeParam.toFixed(0)}°`
                      : `${shapeParam.toFixed(1)}x`}
                  </span>
                </div>
                <input
                  type="range"
                  min={shape === 'cone' ? '15' : '0.2'}
                  max={shape === 'cone' ? '120' : '3.0'}
                  step={shape === 'cone' ? '1' : '0.1'}
                  value={shapeParam}
                  onChange={(e) => setShapeParam(parseFloat(e.target.value))}
                  style={getSliderTrack(
                    shapeParam,
                    shape === 'cone' ? 15 : 0.2,
                    shape === 'cone' ? 120 : 3.0,
                    '#E58A32'
                  )}
                  className="w-full h-1.5 rounded-sm appearance-none cursor-pointer"
                />
              </div>

              {/* Intensité */}
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-hud-muted text-[11px]">Puissance (Intensité)</span>
                  <span className="font-mono text-hud-text font-medium text-[11px]">
                    {intensity.toFixed(1)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="50.0"
                  step="0.5"
                  value={intensity}
                  onChange={(e) => setIntensity(parseFloat(e.target.value))}
                  style={getSliderTrack(intensity, 0.5, 50.0, '#E58A32')}
                  className="w-full h-1.5 rounded-sm appearance-none cursor-pointer"
                />
              </div>

              {/* Portée (Rayon) */}
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-hud-muted text-[11px]">Portée (Rayon)</span>
                  <span className="font-mono text-hud-text font-medium text-[11px]">
                    {radius.toFixed(1)}m
                  </span>
                </div>
                <input
                  type="range"
                  min="2.0"
                  max="60.0"
                  step="1.0"
                  value={radius}
                  onChange={(e) => setRadius(parseFloat(e.target.value))}
                  style={getSliderTrack(radius, 2.0, 60.0, '#E58A32')}
                  className="w-full h-1.5 rounded-sm appearance-none cursor-pointer"
                />
              </div>

              {/* Bouton Inverser le faisceau (180°) & Lampe native GTA */}
              <div className="grid grid-cols-3 gap-1.5 pt-1">
                <button
                  onClick={toggleInvertDirection}
                  className={`h-7 px-1.5 rounded flex items-center justify-center gap-1 border text-[11px] font-medium transition-colors ${
                    invertDirection
                      ? 'bg-hud-accent/20 border-hud-accent text-hud-accent'
                      : 'bg-hud-surface border-hud-border text-hud-muted hover:text-hud-text hover:bg-hud-surfaceHover'
                  }`}
                  title="Inverser le sens du faisceau lumineux à 180°"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Inverser</span>
                </button>

                <button
                  onClick={toggleNativeLight}
                  className={`h-7 px-1.5 rounded flex items-center justify-center gap-1 border text-[11px] font-medium transition-colors ${
                    nativeLight
                      ? 'bg-hud-accent/20 border-hud-accent text-hud-accent'
                      : 'bg-hud-surface border-hud-border text-hud-muted hover:text-hud-text hover:bg-hud-surfaceHover'
                  }`}
                  title="Activer ou éteindre la lumière native par défaut du modèle 3D GTA"
                >
                  <Lightbulb className="w-3 h-3" />
                  <span>Lampe GTA</span>
                </button>

                <button
                  onClick={toggleCastShadow}
                  className={`h-7 px-1.5 rounded flex items-center justify-center gap-1 border text-[11px] font-medium transition-colors ${
                    castShadow
                      ? 'bg-hud-accent/20 border-hud-accent text-hud-accent'
                      : 'bg-hud-surface border-hud-border text-hud-muted hover:text-hud-text hover:bg-hud-surfaceHover'
                  }`}
                  title="Bloquer le faisceau par les obstacles et projeter des ombres dynamiques réelles (GTA V)"
                >
                  <Sun className="w-3 h-3" />
                  <span>Ombres</span>
                </button>
              </div>

              {/* Propriétés physiques : Collision, Texture & Distance d'affichage */}
              <div className="pt-2 mt-1 border-t border-hud-border/50 space-y-2">
                {/* Distance d'affichage (Render Distance) */}
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-hud-muted text-[11px]">Distance d'affichage (Render Distance)</span>
                    <span className="font-mono text-hud-accent text-xs">
                      {renderDistance.toFixed(0)}m
                    </span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="200"
                    step="5"
                    value={renderDistance}
                    onChange={(e) => setRenderDistance(parseFloat(e.target.value))}
                    style={getSliderTrack(renderDistance, 15, 200, '#E58A32')}
                    className="w-full h-1 rounded-sm appearance-none cursor-pointer"
                  />
                </div>

                {/* Variation Texture & Collision */}
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="flex items-center justify-between h-7 px-2 rounded bg-hud-surface border border-hud-border text-[11px]">
                    <span className="text-hud-muted">Texture :</span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setTextureVariation(Math.max(0, textureVariation - 1))}
                        className="w-4 h-4 flex items-center justify-center text-hud-muted hover:text-hud-text font-bold"
                      >
                        -
                      </button>
                      <span className="font-mono text-hud-accent text-xs w-4 text-center">
                        {textureVariation}
                      </span>
                      <button
                        onClick={() => setTextureVariation(textureVariation + 1)}
                        className="w-4 h-4 flex items-center justify-center text-hud-muted hover:text-hud-text font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={toggleCollision}
                    className={`h-7 px-2 rounded flex items-center justify-center gap-1.5 border text-[11px] font-medium transition-colors ${
                      collision
                        ? 'bg-hud-accent/20 border-hud-accent text-hud-accent'
                        : 'bg-hud-surface border-hud-border text-hud-muted hover:text-hud-text hover:bg-hud-surfaceHover'
                    }`}
                    title="Activer ou désactiver la collision physique avec le monde et les joueurs"
                  >
                    <Shield className="w-3 h-3" />
                    <span>Collision : {collision ? 'ON' : 'OFF'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 : Position & Rotation */}
          <div className="pt-1 border-t border-hud-border">
            <button
              onClick={() => setTransformPanelOpen(!transformPanelOpen)}
              className="w-full flex items-center justify-between pb-1 text-left"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-hud-muted">
                Position & Alignement
              </span>
              {transformPanelOpen ? (
                <ChevronUp className="w-3.5 h-3.5 text-hud-muted" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-hud-muted" />
              )}
            </button>

            {transformPanelOpen && (
              <div className="space-y-2 mt-2 pt-2 border-t border-hud-border/50">
                {/* Position XYZ */}
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-hud-muted block mb-1">
                    Position (m)
                  </span>
                  <div className="grid grid-cols-3 gap-1.5 text-center">
                    <div>
                      <span className="text-[9px] font-bold text-hud-axisX block mb-0.5">X</span>
                      <input
                        type="number"
                        step="0.05"
                        value={coords.x.toFixed(2)}
                        onChange={(e) =>
                          updateTransform({ x: parseFloat(e.target.value) || coords.x })
                        }
                        className="w-full h-6 text-center bg-hud-surface border border-hud-border rounded text-[10px] font-mono text-hud-text focus:border-hud-accent focus:outline-none"
                      />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-hud-axisY block mb-0.5">Y</span>
                      <input
                        type="number"
                        step="0.05"
                        value={coords.y.toFixed(2)}
                        onChange={(e) =>
                          updateTransform({ y: parseFloat(e.target.value) || coords.y })
                        }
                        className="w-full h-6 text-center bg-hud-surface border border-hud-border rounded text-[10px] font-mono text-hud-text focus:border-hud-accent focus:outline-none"
                      />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-hud-axisZ block mb-0.5">Z</span>
                      <input
                        type="number"
                        step="0.05"
                        value={coords.z.toFixed(2)}
                        onChange={(e) =>
                          updateTransform({ z: parseFloat(e.target.value) || coords.z })
                        }
                        className="w-full h-6 text-center bg-hud-surface border border-hud-border rounded text-[10px] font-mono text-hud-text focus:border-hud-accent focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Rotation XYZ */}
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-hud-muted block mb-1">
                    Rotation (°)
                  </span>
                  <div className="grid grid-cols-3 gap-1.5 text-center">
                    <div>
                      <span className="text-[9px] font-bold text-hud-axisX block mb-0.5">X</span>
                      <input
                        type="number"
                        step="1"
                        value={parseFloat((rotation?.x ?? 0).toFixed(1))}
                        onChange={(e) => {
                          const val = parseFloat(e.target.value);
                          if (!isNaN(val)) {
                            const cur = rotation || { x: 0, y: 0, z: heading };
                            updateTransform({}, undefined, { ...cur, x: val });
                          }
                        }}
                        className="w-full h-6 text-center bg-hud-surface border border-hud-border rounded text-[10px] font-mono text-hud-text focus:border-hud-accent focus:outline-none"
                      />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-hud-axisY block mb-0.5">Y</span>
                      <input
                        type="number"
                        step="1"
                        value={parseFloat((rotation?.y ?? 0).toFixed(1))}
                        onChange={(e) => {
                          const val = parseFloat(e.target.value);
                          if (!isNaN(val)) {
                            const cur = rotation || { x: 0, y: 0, z: heading };
                            updateTransform({}, undefined, { ...cur, y: val });
                          }
                        }}
                        className="w-full h-6 text-center bg-hud-surface border border-hud-border rounded text-[10px] font-mono text-hud-text focus:border-hud-accent focus:outline-none"
                      />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-hud-axisZ block mb-0.5">Z</span>
                      <input
                        type="number"
                        step="1"
                        value={parseFloat(((rotation?.z ?? heading) % 360).toFixed(1))}
                        onChange={(e) => {
                          const val = parseFloat(e.target.value);
                          if (!isNaN(val)) {
                            const cur = rotation || { x: 0, y: 0, z: heading };
                            updateTransform({}, val, { ...cur, z: val });
                          }
                        }}
                        className="w-full h-6 text-center bg-hud-surface border border-hud-border rounded text-[10px] font-mono text-hud-text focus:border-hud-accent focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={requestGroundSnap}
                  title="Plaquer au sol (G)"
                  className="w-full h-7 flex items-center justify-center gap-1.5 rounded bg-hud-surface hover:bg-hud-surfaceHover border border-hud-border text-xs text-hud-text transition-colors"
                >
                  <ArrowDownToLine className="w-3.5 h-3.5 text-hud-muted" />
                  <span>Plaquer au sol</span>
                  <kbd className="text-[9px] font-mono text-hud-muted ml-0.5 px-1 py-0.2 bg-hud-bg rounded border border-hud-border/70">
                    G
                  </kbd>
                </button>
              </div>
            )}
          </div>

          {/* Section 4 : Fixation / Attachement à une entité */}
          <div className="pt-1 border-t border-hud-border">
            <div className="pb-1 mb-1.5 border-b border-hud-border flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-hud-muted">
                Fixation / Attachement
              </span>
              {attachedInfo?.isAttached && (
                <span className="text-[9px] font-mono text-hud-success font-semibold px-1 py-0.2 bg-hud-surface rounded border border-hud-border">
                  Attaché
                </span>
              )}
            </div>

            {attachedInfo?.isAttached ? (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs px-2 py-1.5 bg-hud-surface border border-hud-border rounded">
                  <div className="flex items-center gap-1.5 min-w-0 flex-1">
                    {attachedInfo.type === 'vehicle' ? (
                      <Car className="w-3.5 h-3.5 text-hud-accent shrink-0" />
                    ) : attachedInfo.type === 'ped' ? (
                      <User className="w-3.5 h-3.5 text-hud-accent shrink-0" />
                    ) : (
                      <Link2 className="w-3.5 h-3.5 text-hud-accent shrink-0" />
                    )}
                    <span className="text-[11px] font-medium text-hud-text truncate">
                      {attachedInfo.name || 'Entité cible'}
                    </span>
                  </div>
                </div>
                <button
                  onClick={requestDetach}
                  className="w-full h-7 rounded bg-hud-surface hover:bg-hud-error/20 hover:text-hud-error hover:border-hud-error/50 border border-hud-border text-xs text-hud-muted transition-colors flex items-center justify-center gap-1.5"
                >
                  <Unlink className="w-3.5 h-3.5" />
                  <span>Détacher de l'entité</span>
                </button>
              </div>
            ) : (
              <div className="space-y-1">
                <div className="grid grid-cols-2 gap-1">
                  <button
                    onClick={requestAttachNearestVehicle}
                    title="Fixer au véhicule le plus proche"
                    className="h-7 px-2 rounded bg-hud-surface hover:bg-hud-surfaceHover border border-hud-border text-[11px] font-medium text-hud-text transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Car className="w-3.5 h-3.5 text-hud-muted" />
                    <span>Véhicule Proche</span>
                  </button>

                  <button
                    onClick={requestAttachPed}
                    title="Fixer à mon personnage (Ped)"
                    className="h-7 px-2 rounded bg-hud-surface hover:bg-hud-surfaceHover border border-hud-border text-[11px] font-medium text-hud-text transition-colors flex items-center justify-center gap-1.5"
                  >
                    <User className="w-3.5 h-3.5 text-hud-muted" />
                    <span>Mon Ped</span>
                  </button>
                </div>

                <button
                  onClick={requestAttachRaycast}
                  title="Viser une entité (véhicule, ped, prop) avec le centre de la caméra"
                  className="w-full h-7 px-2 rounded bg-hud-surface hover:bg-hud-surfaceHover border border-hud-border text-[11px] font-medium text-hud-text transition-colors flex items-center justify-center gap-1.5"
                >
                  <Crosshair className="w-3.5 h-3.5 text-hud-accent" />
                  <span>Viser une Entité (Raycast)</span>
                </button>
              </div>
            )}
          </div>

          {/* Boutons d'action : Sauvegarder & Annuler */}
          <footer className="grid grid-cols-2 gap-1.5 pt-2 border-t border-hud-border">
            <button
              onClick={requestCancel}
              className="h-7 flex items-center justify-center gap-1.5 rounded bg-hud-surface hover:bg-hud-surfaceHover border border-hud-border text-hud-text text-xs font-medium transition-colors"
            >
              <X className="w-3.5 h-3.5 text-hud-muted" />
              <span>Fermer</span>
            </button>
            <button
              onClick={requestSave}
              className="h-7 flex items-center justify-center gap-1.5 rounded bg-hud-accent hover:bg-hud-accentHover text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Sauvegarder</span>
            </button>
          </footer>

          {/* Liste des autres lumières de la zone */}
          <NearbyLightsList />
        </div>
      )}
    </aside>
  );
};
