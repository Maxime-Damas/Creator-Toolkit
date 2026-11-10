import { create } from 'zustand';
import { fetchNui } from '../utils/fetchNui';
import { rgbToHex } from '../utils/colorUtils';
import { StudioDef } from '../types/studios';
import { GroupItem, FamilyItem, HierarchyData } from '../types/hierarchy';

export interface LightPropItem {
  model: string;
  label: string;
  category?: string;
  description?: string;
  offsetZ?: number;
}

export interface RGBColor {
  r: number;
  g: number;
  b: number;
}

export interface TransformCoords {
  x: number;
  y: number;
  z: number;
}

export interface NearbyLightItem {
  id: string;
  model: string;
  label?: string;
  coords: TransformCoords;
  heading: number;
  rotation?: TransformCoords;
  rgb: RGBColor;
  intensity: number;
  radius: number;
  renderDistance?: number;
  textureVariation?: number;
  collision?: boolean;
  castShadow?: boolean;
  offsetZ?: number;
  distance: number;
  shape?: 'cone' | 'sphere' | 'box';
  shapeParam?: number;
  invertDirection?: boolean;
  nativeLight?: boolean;
  group?: string | null;
  groupId?: string | null;
  familyId?: string | null;
  attached?: {
    type: 'vehicle' | 'ped' | 'object';
    name?: string;
    plate?: string;
    netId?: number;
    offset: TransformCoords;
    rotation: TransformCoords;
  };
}

export interface AttachedInfo {
  isAttached: boolean;
  type?: 'vehicle' | 'ped' | 'object';
  name?: string;
}

export interface ToastData {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

export interface ScreenGizmoPoint {
  x: number;
  y: number;
}

export interface ScreenGizmoData {
  visible: boolean;
  center: ScreenGizmoPoint;
  axisX: ScreenGizmoPoint;
  axisY: ScreenGizmoPoint;
  axisZ: ScreenGizmoPoint;
}

export interface LightStudioState {
  visible: boolean;
  statusText: string;
  openedAt: number;

  // Creator Toolkit & Navigation Studios
  toolkitName: string;
  activeStudio: string;
  studios: StudioDef[];
  setActiveStudio: (id: string) => void;
  setStudios: (studios: StudioDef[]) => void;

  // Props & Sélection
  hasSelectedProp: boolean;
  selectedLightId: string | null;
  nearbyLights: NearbyLightItem[];
  availableProps: LightPropItem[];
  propIndex: number;
  selectedCategory: string;
  searchQuery: string;
  catalogOpen: boolean;

  // Lumière
  rgb: RGBColor;
  intensity: number;
  radius: number;
  shape: 'cone' | 'sphere' | 'box';
  shapeParam: number;
  invertDirection: boolean;
  nativeLight: boolean;
  renderDistance: number;
  textureVariation: number;
  collision: boolean;
  castShadow: boolean;
  recentColors: string[];
  addRecentColor: (hex: string) => void;

  // Transformation & Gizmo
  coords: TransformCoords;
  heading: number;
  rotation: TransformCoords;
  gizmoMode: 'translate' | 'rotate';
  snapEnabled: boolean;
  activeGizmoAxis: 'x' | 'y' | 'z' | null;
  hoveredGizmoAxis: 'x' | 'y' | 'z' | null;
  screenGizmo: ScreenGizmoData | null;

  // Caméra / Panneaux
  cameraMode: 'orbit' | 'freecam';
  isOrbiting: boolean;
  commandBarOpen: boolean;
  transformPanelOpen: boolean;
  toast: ToastData | null;
  attachedInfo: AttachedInfo | null;

  // Hiérarchie : Groupes (Organisation pure) et Familles (Liaison & Synchronisation)
  groups: GroupItem[];
  families: FamilyItem[];
  collapsedFolders: Record<string, boolean>;
  selectedFamilyId: string | null;
  applyToFamily: boolean;

  // Sélection multiple & Rétrocompatibilité
  selectedGroupId: string | null;
  multiSelectedIds: string[];
  applyToGroup: boolean;

  // Actions Hiérarchie
  setHierarchy: (hierarchy: HierarchyData) => void;
  createGroup: (name: string) => Promise<string>;
  renameGroup: (groupId: string, newName: string) => Promise<void>;
  deleteGroup: (groupId: string) => Promise<void>;

  createFamily: (name: string, parentGroupId?: string | null, initialLightIds?: string[]) => Promise<string>;
  renameFamily: (familyId: string, newName: string) => Promise<void>;
  deleteFamily: (familyId: string) => Promise<void>;
  moveFamilyToGroup: (familyId: string, targetGroupId: string | null) => Promise<void>;

  assignLightToGroup: (lightId: string, groupId: string | null) => Promise<void>;
  assignLightToFamily: (lightId: string, familyId: string | null) => Promise<void>;
  assignMultipleLights: (lightIds: string[], groupId?: string | null, familyId?: string | null) => Promise<void>;

  toggleFolderCollapse: (folderKey: string) => void;
  setSelectedFamilyId: (familyId: string | null) => void;
  setApplyToFamily: (apply: boolean) => void;
  getCurrentLightFamily: () => string | null;
  saveCurrentFamily: () => Promise<void>;
  propagateFamilyPreview: (updates: Partial<{
    rgb: RGBColor;
    intensity: number;
    radius: number;
    shape: 'cone' | 'sphere' | 'box';
    shapeParam: number;
    invertDirection: boolean;
    nativeLight: boolean;
  }>, familyId: string) => void;

  // Actions de base & Rétrocompatibilité
  setVisible: (visible: boolean) => void;
  setCameraMode: (mode: 'orbit' | 'freecam') => void;
  toggleCameraMode: () => void;
  setNearbyLights: (lights: NearbyLightItem[]) => void;
  setAttachedInfo: (info: AttachedInfo | null) => void;
  requestAttachNearestVehicle: () => Promise<void>;
  requestAttachPed: () => Promise<void>;
  requestAttachRaycast: () => Promise<void>;
  requestDetach: () => Promise<void>;
  selectExistingLight: (id: string) => void;
  deleteSelectedLight: () => void;
  deselectProp: () => void;
  spawnNewProp: (index: number) => void;
  setProps: (props: LightPropItem[]) => void;
  selectPropIndex: (index: number) => void;
  selectPropModel: (model: string) => void;
  nextProp: () => void;
  prevProp: () => void;
  setCatalogOpen: (open: boolean) => void;
  toggleCatalog: () => void;
  setSelectedCategory: (cat: string) => void;
  setSearchQuery: (query: string) => void;

  setSelectedGroupId: (groupId: string | null) => void;
  setApplyToGroup: (apply: boolean) => void;
  toggleMultiSelectId: (id: string) => void;
  selectAllNearby: () => void;
  clearMultiSelect: () => void;
  groupSelectedLights: (groupName: string) => Promise<void>;
  ungroupSelectedLights: () => Promise<void>;
  ungroupGroup: (groupName: string) => Promise<void>;
  saveCurrentGroup: () => Promise<void>;
  getCurrentLightGroup: () => string | null;
  propagateGroupPreview: (updates: Partial<{
    rgb: RGBColor;
    intensity: number;
    radius: number;
    shape: 'cone' | 'sphere' | 'box';
    shapeParam: number;
    invertDirection: boolean;
    nativeLight: boolean;
  }>, groupName: string) => void;

  setRgb: (color: Partial<RGBColor>) => void;
  setIntensity: (intensity: number) => void;
  setRadius: (radius: number) => void;
  setShape: (shape: 'cone' | 'sphere' | 'box') => void;
  setShapeParam: (shapeParam: number) => void;
  setInvertDirection: (invert: boolean) => void;
  toggleInvertDirection: () => void;
  setNativeLight: (enable: boolean) => void;
  toggleNativeLight: () => void;
  setRenderDistance: (renderDistance: number) => void;
  setTextureVariation: (textureVariation: number) => void;
  setCollision: (collision: boolean) => void;
  toggleCollision: () => void;
  setCastShadow: (castShadow: boolean) => void;
  toggleCastShadow: () => void;
  duplicateSelectedLight: () => Promise<void>;
  handleLightDuplicated: (newLight: NearbyLightItem) => void;

  setGizmoMode: (mode: 'translate' | 'rotate') => void;
  toggleSnap: () => void;
  setActiveGizmoAxis: (axis: 'x' | 'y' | 'z' | null) => void;
  setHoveredGizmoAxis: (axis: 'x' | 'y' | 'z' | null) => void;
  updateTransform: (
    coords: Partial<TransformCoords>,
    heading?: number,
    rotation?: TransformCoords
  ) => void;
  setScreenGizmo: (data: ScreenGizmoData | null) => void;

  setIsOrbiting: (isOrbiting: boolean) => void;
  setCommandBarOpen: (open: boolean) => void;
  setTransformPanelOpen: (open: boolean) => void;
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;

  // Actions métier NUI
  requestSave: () => Promise<void>;
  requestCancel: () => Promise<void>;
  requestGroundSnap: () => Promise<void>;
  sendGizmoDrag: (axis: 'x' | 'y' | 'z', delta: number) => void;
  initialize: (payload: {
    props?: LightPropItem[];
    defaults?: { rgb?: RGBColor; intensity?: number; radius?: number; shape?: 'cone' | 'sphere' | 'box'; shapeParam?: number; castShadow?: boolean };
    coords?: TransformCoords;
    heading?: number;
    rotation?: TransformCoords;
    hierarchy?: HierarchyData;
    toolkitName?: string;
    studios?: StudioDef[];
    defaultStudio?: string;
  }) => void;
}

const DEFAULT_STUDIOS: StudioDef[] = [
  { id: 'light', name: 'Light Studio', icon: 'light', enabled: true },
  { id: 'prop', name: 'Prop Studio', icon: 'prop', enabled: true },
  { id: 'fx', name: 'FX Studio', icon: 'fx', enabled: true },
];

const DEFAULT_RECENT_COLORS: string[] = [
  '#000000',
  '#FFFFFF',
  '#EF4352',
  '#F28B24',
  '#EBD534',
  '#35B879',
  '#2B79D9',
  '#8E3CD9',
];

const loadSavedRecentColors = (): string[] => {
  try {
    const raw = localStorage.getItem('lightstudio_recent_colors');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.slice(0, 8);
      }
    }
  } catch {
    // fallback
  }
  return DEFAULT_RECENT_COLORS;
};

const DEFAULT_PROPS: LightPropItem[] = [
  {
    model: 'none',
    label: 'Lumière Pure (Sans Prop)',
    category: 'Ambiance',
    description: 'Source de lumière libre sans objet 3D physique',
    offsetZ: 0.0,
  },
  {
    model: 'prop_worklight_02a',
    label: 'Spot Halogène Double',
    category: 'Chantier',
    description: 'Double projecteur halogène sur trépied',
    offsetZ: 1.65,
  },
  {
    model: 'prop_worklight_03b',
    label: 'Projecteur Chantier Simple',
    category: 'Chantier',
    description: 'Projecteur jaune simple sur pied métallique',
    offsetZ: 1.45,
  },
  {
    model: 'prop_studio_light_01',
    label: 'Spot Studio Pro',
    category: 'Studio',
    description: 'Lampe de studio photo/cinéma avec réflecteur',
    offsetZ: 1.80,
  },
  {
    model: 'prop_flood_light',
    label: 'Projecteur Flood Large',
    category: 'Projecteur',
    description: 'Projecteur flood haute puissance pour grands espaces',
    offsetZ: 2.10,
  },
  {
    model: 'prop_spot_clamp',
    label: 'Spot à Pince Compact',
    category: 'Compact',
    description: 'Spot directionnel compact à fixer sur support',
    offsetZ: 0.30,
  },
  {
    model: 'prop_construc_light_01',
    label: 'Mât Luminaire Chantier',
    category: 'Chantier',
    description: 'Mât robuste d\'éclairage de travaux nocturnes',
    offsetZ: 2.40,
  },
];

let previewDebounceTimer: ReturnType<typeof setTimeout> | null = null;
let familyPreviewDebounceTimer: ReturnType<typeof setTimeout> | null = null;

const sendPreviewDebounced = (get: () => LightStudioState) => {
  if (previewDebounceTimer) {
    clearTimeout(previewDebounceTimer);
  }

  previewDebounceTimer = setTimeout(() => {
    const s = get();
    const currentProp = s.availableProps[s.propIndex] || DEFAULT_PROPS[0];

    fetchNui('updatePreview', {
      model: currentProp.model,
      offsetZ: currentProp.offsetZ ?? 1.5,
      rgb: s.rgb,
      intensity: s.intensity,
      radius: s.radius,
      renderDistance: s.renderDistance,
      textureVariation: s.textureVariation,
      collision: s.collision,
      castShadow: s.castShadow,
      shape: s.shape,
      shapeParam: s.shapeParam,
      invertDirection: s.invertDirection,
      nativeLight: s.nativeLight,
      coords: s.coords,
      heading: s.heading,
      rotation: s.rotation,
      groupId: s.getCurrentLightGroup(),
      familyId: s.getCurrentLightFamily(),
      group: s.getCurrentLightFamily() || s.getCurrentLightGroup(),
      gizmoMode: s.gizmoMode,
      snapEnabled: s.snapEnabled,
    }).catch(() => {});
  }, 12);
};

const sendFamilyPreviewDebounced = (ids: string[], familyId: string, updates: any) => {
  if (familyPreviewDebounceTimer) {
    clearTimeout(familyPreviewDebounceTimer);
  }

  familyPreviewDebounceTimer = setTimeout(() => {
    fetchNui('updateFamilyPreview', {
      ids,
      familyId,
      group: familyId,
      updates,
    }).catch(() => {});
  }, 12);
};

const getTargetFamily = (s: LightStudioState): string | null => {
  if (s.selectedFamilyId) return s.selectedFamilyId;
  if (s.applyToFamily && s.hasSelectedProp && s.selectedLightId) {
    const item = s.nearbyLights.find((l) => l.id === s.selectedLightId);
    return item?.familyId || item?.group || null;
  }
  return null;
};

export const useLightStore = create<LightStudioState>((set, get) => ({
  visible: false,
  statusText: 'Prêt',
  openedAt: 0,

  toolkitName: 'Creator Toolkit',
  activeStudio: 'light',
  studios: DEFAULT_STUDIOS,
  setActiveStudio: (id: string) => {
    set({ activeStudio: id });
    fetchNui('setActiveStudio', { studio: id }).catch(() => {});
  },
  setStudios: (studios: StudioDef[]) => set({ studios }),

  hasSelectedProp: false,
  selectedLightId: null,
  nearbyLights: [],
  availableProps: DEFAULT_PROPS,
  propIndex: 0,
  selectedCategory: 'Tous',
  searchQuery: '',
  catalogOpen: false,

  rgb: { r: 255, g: 180, b: 60 },
  intensity: 8.5,
  radius: 14.0,
  shape: 'cone',
  shapeParam: 55.0,
  invertDirection: true,
  nativeLight: false,
  renderDistance: 80.0,
  textureVariation: 0,
  collision: false,
  castShadow: true,
  recentColors: loadSavedRecentColors(),

  coords: { x: 0.0, y: 0.0, z: 0.0 },
  heading: 0.0,
  rotation: { x: 0.0, y: 0.0, z: 0.0 },
  gizmoMode: 'translate',
  snapEnabled: false,
  activeGizmoAxis: null,
  hoveredGizmoAxis: null,
  screenGizmo: null,

  cameraMode: 'orbit',
  isOrbiting: false,
  commandBarOpen: true,
  transformPanelOpen: false,
  toast: null,
  attachedInfo: null,

  // Hiérarchie
  groups: [],
  families: [],
  collapsedFolders: {},
  selectedFamilyId: null,
  applyToFamily: true,

  // Rétrocompatibilité
  selectedGroupId: null,
  multiSelectedIds: [],
  applyToGroup: true,

  setHierarchy: (hierarchy: HierarchyData) => {
    set({
      groups: hierarchy.groups || [],
      families: hierarchy.families || [],
    });
  },

  createGroup: async (name: string) => {
    const s = get();
    const cleanName = name.trim() || `Groupe ${s.groups.length + 1}`;
    const newGroup: GroupItem = {
      id: `grp_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      name: cleanName,
    };
    const updatedGroups = [...s.groups, newGroup];
    set({ groups: updatedGroups });

    try {
      await fetchNui('saveHierarchy', {
        hierarchy: { groups: updatedGroups, families: s.families },
      });
      s.showToast(`Groupe « ${cleanName} » créé`, 'success');
    } catch {
      s.showToast('Erreur lors de la création du groupe', 'error');
    }
    return newGroup.id;
  },

  renameGroup: async (groupId: string, newName: string) => {
    const s = get();
    const clean = newName.trim();
    if (!clean) return;

    const updatedGroups = s.groups.map((g) => (g.id === groupId ? { ...g, name: clean } : g));
    set({ groups: updatedGroups });

    try {
      await fetchNui('saveHierarchy', {
        hierarchy: { groups: updatedGroups, families: s.families },
      });
      s.showToast(`Groupe renommé en « ${clean} »`, 'info');
    } catch {
      s.showToast('Erreur lors du renommage', 'error');
    }
  },

  deleteGroup: async (groupId: string) => {
    const s = get();
    const targetGroup = s.groups.find((g) => g.id === groupId);
    const updatedGroups = s.groups.filter((g) => g.id !== groupId);
    // Les familles contenues dans ce groupe reviennent à la racine (groupId = null)
    const updatedFamilies = s.families.map((f) => (f.groupId === groupId ? { ...f, groupId: null } : f));

    // Les lumières associées à ce groupe reviennent à la racine
    const affectedLights = s.nearbyLights.filter((l) => l.groupId === groupId);
    const affectedIds = affectedLights.map((l) => l.id);

    const updatedNearby = s.nearbyLights.map((l) => (l.groupId === groupId ? { ...l, groupId: null } : l));

    set({
      groups: updatedGroups,
      families: updatedFamilies,
      nearbyLights: updatedNearby,
      selectedGroupId: s.selectedGroupId === groupId ? null : s.selectedGroupId,
    });

    try {
      await fetchNui('saveHierarchy', {
        hierarchy: { groups: updatedGroups, families: updatedFamilies },
      });
      if (affectedIds.length > 0) {
        await fetchNui('assignLightsHierarchy', {
          ids: affectedIds,
          groupId: null,
        });
      }
      s.showToast(`Groupe « ${targetGroup?.name || groupId} » supprimé (contenu déplacé à la racine)`, 'info');
    } catch {
      s.showToast('Erreur lors de la suppression du groupe', 'error');
    }
  },

  createFamily: async (name: string, parentGroupId: string | null = null, initialLightIds: string[] = []) => {
    const s = get();
    const cleanName = name.trim() || `Famille ${s.families.length + 1}`;
    const newFamily: FamilyItem = {
      id: `fam_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      name: cleanName,
      groupId: parentGroupId || null,
    };
    const updatedFamilies = [...s.families, newFamily];
    set({ families: updatedFamilies });

    const idsToAssign = initialLightIds.length > 0
      ? initialLightIds
      : (s.multiSelectedIds.length > 0 ? s.multiSelectedIds : (s.selectedLightId ? [s.selectedLightId] : []));

    if (idsToAssign.length > 0) {
      const updatedNearby = s.nearbyLights.map((l) =>
        idsToAssign.includes(l.id)
          ? { ...l, familyId: newFamily.id, group: newFamily.id, ...(parentGroupId ? { groupId: parentGroupId } : {}) }
          : l
      );
      set({
        nearbyLights: updatedNearby,
        multiSelectedIds: [],
        selectedFamilyId: newFamily.id,
        applyToFamily: true,
      });

      try {
        await fetchNui('assignLightsHierarchy', {
          ids: idsToAssign,
          familyId: newFamily.id,
          groupId: parentGroupId || undefined,
        });
      } catch {}
    }

    try {
      await fetchNui('saveHierarchy', {
        hierarchy: { groups: s.groups, families: updatedFamilies },
      });
      s.showToast(`Famille « ${cleanName} » créée`, 'success');
    } catch {
      s.showToast('Erreur lors de la création de la famille', 'error');
    }

    return newFamily.id;
  },

  renameFamily: async (familyId: string, newName: string) => {
    const s = get();
    const clean = newName.trim();
    if (!clean) return;

    const updatedFamilies = s.families.map((f) => (f.id === familyId ? { ...f, name: clean } : f));
    set({ families: updatedFamilies });

    try {
      await fetchNui('saveHierarchy', {
        hierarchy: { groups: s.groups, families: updatedFamilies },
      });
      s.showToast(`Famille renommée en « ${clean} »`, 'info');
    } catch {
      s.showToast('Erreur lors du renommage', 'error');
    }
  },

  deleteFamily: async (familyId: string) => {
    const s = get();
    const targetFamily = s.families.find((f) => f.id === familyId);
    const updatedFamilies = s.families.filter((f) => f.id !== familyId);

    const affectedLights = s.nearbyLights.filter((l) => l.familyId === familyId || l.group === familyId);
    const affectedIds = affectedLights.map((l) => l.id);

    const updatedNearby = s.nearbyLights.map((l) =>
      l.familyId === familyId || l.group === familyId ? { ...l, familyId: null, group: null } : l
    );

    set({
      families: updatedFamilies,
      nearbyLights: updatedNearby,
      selectedFamilyId: s.selectedFamilyId === familyId ? null : s.selectedFamilyId,
    });

    try {
      await fetchNui('saveHierarchy', {
        hierarchy: { groups: s.groups, families: updatedFamilies },
      });
      if (affectedIds.length > 0) {
        await fetchNui('assignLightsHierarchy', {
          ids: affectedIds,
          familyId: null,
        });
      }
      s.showToast(`Famille « ${targetFamily?.name || familyId} » dissoute`, 'info');
    } catch {
      s.showToast('Erreur lors de la dissolution de la famille', 'error');
    }
  },

  moveFamilyToGroup: async (familyId: string, targetGroupId: string | null) => {
    const s = get();
    const updatedFamilies = s.families.map((f) =>
      f.id === familyId ? { ...f, groupId: targetGroupId || null } : f
    );

    // Mettre à jour le groupId des lumières appartenant à cette famille
    const updatedNearby = s.nearbyLights.map((l) =>
      l.familyId === familyId || l.group === familyId
        ? { ...l, groupId: targetGroupId || null }
        : l
    );

    const famLights = s.nearbyLights.filter((l) => l.familyId === familyId || l.group === familyId);
    const famIds = famLights.map((l) => l.id);

    set({
      families: updatedFamilies,
      nearbyLights: updatedNearby,
    });

    try {
      await fetchNui('saveHierarchy', {
        hierarchy: { groups: s.groups, families: updatedFamilies },
      });
      if (famIds.length > 0) {
        await fetchNui('assignLightsHierarchy', {
          ids: famIds,
          groupId: targetGroupId || null,
        });
      }
      s.showToast(targetGroupId ? 'Famille déplacée dans le groupe' : 'Famille déplacée à la racine', 'info');
    } catch {
      s.showToast('Erreur lors du déplacement de la famille', 'error');
    }
  },

  assignLightToGroup: async (lightId: string, groupId: string | null) => {
    const s = get();
    const updatedNearby = s.nearbyLights.map((l) =>
      l.id === lightId ? { ...l, groupId: groupId || null } : l
    );
    set({ nearbyLights: updatedNearby });

    try {
      await fetchNui('assignLightsHierarchy', {
        ids: [lightId],
        groupId: groupId || null,
      });
      s.showToast(groupId ? 'Lumière classée dans le groupe' : 'Lumière déplacée à la racine', 'info');
    } catch {
      s.showToast('Erreur lors du classement', 'error');
    }
  },

  assignLightToFamily: async (lightId: string, familyId: string | null) => {
    const s = get();
    let targetGroupId: string | null | undefined = undefined;
    if (familyId) {
      const fam = s.families.find((f) => f.id === familyId);
      if (fam && fam.groupId) targetGroupId = fam.groupId;
    }

    const updatedNearby = s.nearbyLights.map((l) => {
      if (l.id === lightId) {
        return {
          ...l,
          familyId: familyId || null,
          group: familyId || null,
          ...(targetGroupId !== undefined ? { groupId: targetGroupId } : {}),
        };
      }
      return l;
    });

    set({ nearbyLights: updatedNearby });

    try {
      await fetchNui('assignLightsHierarchy', {
        ids: [lightId],
        familyId: familyId || null,
        ...(targetGroupId !== undefined ? { groupId: targetGroupId } : {}),
      });
      s.showToast(familyId ? 'Lumière liée à la famille' : 'Lumière retirée de la famille', 'info');
    } catch {
      s.showToast('Erreur lors de la liaison', 'error');
    }
  },

  assignMultipleLights: async (lightIds: string[], groupId?: string | null, familyId?: string | null) => {
    const s = get();
    if (lightIds.length === 0) return;

    let targetGroupId = groupId;
    if (familyId && targetGroupId === undefined) {
      const fam = s.families.find((f) => f.id === familyId);
      if (fam && fam.groupId) targetGroupId = fam.groupId;
    }

    const updatedNearby = s.nearbyLights.map((l) => {
      if (lightIds.includes(l.id)) {
        return {
          ...l,
          ...(groupId !== undefined ? { groupId } : {}),
          ...(familyId !== undefined ? { familyId, group: familyId } : {}),
        };
      }
      return l;
    });

    set({ nearbyLights: updatedNearby, multiSelectedIds: [] });

    try {
      await fetchNui('assignLightsHierarchy', {
        ids: lightIds,
        groupId: groupId !== undefined ? groupId : undefined,
        familyId: familyId !== undefined ? familyId : undefined,
      });
      s.showToast(`${lightIds.length} spots organisés avec succès`, 'success');
    } catch {
      s.showToast("Erreur lors de l'organisation", 'error');
    }
  },

  toggleFolderCollapse: (folderKey: string) => {
    set((s) => ({
      collapsedFolders: {
        ...s.collapsedFolders,
        [folderKey]: !s.collapsedFolders[folderKey],
      },
    }));
  },

  setSelectedFamilyId: (familyId: string | null) => {
    set({ selectedFamilyId: familyId, selectedGroupId: familyId });
    if (familyId) {
      const famLights = get().nearbyLights.filter(
        (l) => l.familyId === familyId || (l.group === familyId && !l.familyId)
      );
      if (famLights.length > 0) {
        let sumX = 0, sumY = 0, sumZ = 0;
        for (const fl of famLights) {
          sumX += fl.coords.x;
          sumY += fl.coords.y;
          sumZ += fl.coords.z;
        }
        const centerCoords = {
          x: sumX / famLights.length,
          y: sumY / famLights.length,
          z: sumZ / famLights.length,
        };

        const first = famLights[0];
        set({
          coords: centerCoords,
          heading: first.heading,
          rotation: { x: 0, y: 0, z: first.heading },
          rgb: first.rgb,
          intensity: first.intensity,
          radius: first.radius,
          shape: first.shape || 'cone',
          shapeParam: first.shapeParam ?? (first.shape === 'cone' ? 55.0 : 1.0),
          invertDirection: first.invertDirection ?? true,
          nativeLight: first.nativeLight ?? false,
          hasSelectedProp: false,
          selectedLightId: null,
          applyToFamily: true,
          applyToGroup: true,
        });

        fetchNui('setFamilyCenter', {
          familyId,
          coords: centerCoords,
          heading: first.heading,
        }).catch(() => {});
      }
    }
  },

  setApplyToFamily: (applyToFamily: boolean) => {
    set({ applyToFamily, applyToGroup: applyToFamily });
  },

  getCurrentLightFamily: () => {
    const { selectedLightId, nearbyLights } = get();
    if (!selectedLightId) return null;
    const item = nearbyLights.find((l) => l.id === selectedLightId);
    return item?.familyId || item?.group || null;
  },

  getCurrentLightGroup: () => {
    const { selectedLightId, nearbyLights } = get();
    if (!selectedLightId) return null;
    const item = nearbyLights.find((l) => l.id === selectedLightId);
    return item?.groupId || null;
  },

  saveCurrentFamily: async () => {
    const s = get();
    const activeFamily = s.selectedFamilyId || (s.applyToFamily ? s.getCurrentLightFamily() : null);
    if (!activeFamily) return;

    const famLights = s.nearbyLights.filter(
      (l) => l.familyId === activeFamily || (l.group === activeFamily && !l.familyId)
    );
    const ids = famLights.map((l) => l.id);
    if (ids.length === 0) return;

    const positions: Record<string, { coords: TransformCoords; heading: number; rotation?: TransformCoords }> = {};
    for (const fl of famLights) {
      positions[fl.id] = {
        coords: fl.coords,
        heading: fl.heading,
        rotation: fl.rotation,
      };
    }

    const famObj = s.families.find((f) => f.id === activeFamily);
    const famName = famObj?.name || activeFamily;

    try {
      await fetchNui('saveFamily', {
        ids,
        familyId: activeFamily,
        groupId: famObj?.groupId || null,
        group: activeFamily,
        positions,
        updates: {
          rgb: s.rgb,
          intensity: s.intensity,
          radius: s.radius,
          shape: s.shape,
          shapeParam: s.shapeParam,
          invertDirection: s.invertDirection,
          nativeLight: s.nativeLight,
        },
      });

      s.showToast(`Famille « ${famName} » (${ids.length} spots) sauvegardée !`, 'success');
    } catch {
      s.showToast('Erreur lors de la sauvegarde de la famille', 'error');
    }
  },

  propagateFamilyPreview: (updates, familyId) => {
    const s = get();
    const famLights = s.nearbyLights.filter(
      (l) => l.familyId === familyId || (l.group === familyId && !l.familyId)
    );
    const ids = famLights.map((l) => l.id);

    if (s.hasSelectedProp) {
      sendPreviewDebounced(get);
    }

    const updatedNearby = s.nearbyLights.map((l) => {
      if (l.familyId === familyId || (l.group === familyId && !l.familyId)) {
        return {
          ...l,
          ...updates,
          rgb: updates.rgb ? { ...l.rgb, ...updates.rgb } : l.rgb,
        };
      }
      return l;
    });
    set({ nearbyLights: updatedNearby });

    if (ids.length > 0) {
      sendFamilyPreviewDebounced(ids, familyId, updates);
    }
  },

  setVisible: (visible) => set({ visible }),

  setCameraMode: (cameraMode) => {
    set({ cameraMode });
    fetchNui('setCameraMode', { mode: cameraMode }).catch(() => {});
    get().showToast(
      cameraMode === 'freecam'
        ? 'Mode Caméra : Vol Libre (Z/Q/S/D pour voler)'
        : 'Mode Caméra : Orbite autour du Prop',
      'info'
    );
  },

  toggleCameraMode: () => {
    const next = get().cameraMode === 'orbit' ? 'freecam' : 'orbit';
    get().setCameraMode(next);
  },

  setNearbyLights: (nearbyLights) => set({ nearbyLights }),
  setAttachedInfo: (attachedInfo) => set({ attachedInfo }),

  requestAttachNearestVehicle: async () => {
    try {
      const res = await fetchNui<{ success: boolean; name?: string; type?: 'vehicle' | 'ped' | 'object'; message?: string }>('attachNearestVehicle');
      if (res && res.success) {
        set({ attachedInfo: { isAttached: true, type: res.type, name: res.name } });
        get().showToast(`Fixé sur : ${res.name}`, 'success');
      } else {
        get().showToast(res?.message || 'Aucun véhicule à proximité', 'error');
      }
    } catch {}
  },

  requestAttachPed: async () => {
    try {
      const res = await fetchNui<{ success: boolean; name?: string; type?: 'vehicle' | 'ped' | 'object'; message?: string }>('attachPlayerPed');
      if (res && res.success) {
        set({ attachedInfo: { isAttached: true, type: res.type, name: res.name } });
        get().showToast('Fixé sur votre personnage', 'success');
      } else {
        get().showToast(res?.message || "Impossible d'attacher au ped", 'error');
      }
    } catch {}
  },

  requestAttachRaycast: async () => {
    try {
      const res = await fetchNui<{ success: boolean; name?: string; type?: 'vehicle' | 'ped' | 'object'; message?: string }>('attachRaycast');
      if (res && res.success) {
        set({ attachedInfo: { isAttached: true, type: res.type, name: res.name } });
        get().showToast(`Fixé sur : ${res.name}`, 'success');
      } else {
        get().showToast(res?.message || 'Aucune entité sous le viseur', 'error');
      }
    } catch {}
  },

  requestDetach: async () => {
    try {
      await fetchNui('detachEntity');
      set({ attachedInfo: null });
      get().showToast('Détaché de l\'entité (monde libre)', 'info');
    } catch {
      set({ attachedInfo: null });
    }
  },

  selectExistingLight: (id) => {
    const { nearbyLights, availableProps } = get();
    const target = nearbyLights.find((l) => l.id === id);
    if (!target) return;

    let pIdx = availableProps.findIndex((p) => p.model === target.model);
    if (pIdx === -1) pIdx = 0;

    const targetHex = rgbToHex(target.rgb.r, target.rgb.g, target.rgb.b);
    get().addRecentColor(targetHex);

    const hasFamily = Boolean(target.familyId || target.group);
    const rot = target.rotation || { x: 0.0, y: 0.0, z: target.heading || 0.0 };
    set({
      hasSelectedProp: true,
      selectedLightId: id,
      selectedFamilyId: null,
      selectedGroupId: null,
      applyToFamily: hasFamily,
      applyToGroup: hasFamily,
      propIndex: pIdx,
      coords: target.coords,
      heading: target.heading,
      rotation: { x: rot.x || 0.0, y: rot.y || 0.0, z: rot.z || target.heading || 0.0 },
      rgb: target.rgb,
      intensity: target.intensity,
      radius: target.radius,
      renderDistance: target.renderDistance ?? 80.0,
      textureVariation: target.textureVariation ?? 0,
      collision: target.collision ?? false,
      castShadow: target.castShadow ?? true,
      shape: target.shape || 'cone',
      shapeParam: target.shapeParam ?? (target.shape === 'cone' ? 55.0 : 1.0),
      invertDirection: target.invertDirection ?? (target.model !== 'none'),
      nativeLight: target.nativeLight ?? false,
      attachedInfo: target.attached
        ? { isAttached: true, type: target.attached.type, name: target.attached.name || target.attached.plate }
        : null,
    });

    fetchNui('selectExistingLight', { id }).catch(() => {});
    get().showToast(`Lumière sélectionnée (${target.distance.toFixed(1)}m)`, 'info');
  },

  deleteSelectedLight: async () => {
    const { selectedLightId } = get();
    if (!selectedLightId) return;

    try {
      await fetchNui('deleteLight', { id: selectedLightId });
      set({
        hasSelectedProp: false,
        selectedLightId: null,
        attachedInfo: null,
      });
      get().showToast('Lumière supprimée avec succès', 'success');
    } catch {
      get().showToast('Erreur lors de la suppression', 'error');
    }
  },

  deselectProp: () => {
    set({
      hasSelectedProp: false,
      selectedLightId: null,
      selectedFamilyId: null,
      selectedGroupId: null,
    });
    fetchNui('deselectProp').catch(() => {});
    get().showToast('Désélectionné (Mode Exploration)', 'info');
  },

  spawnNewProp: (index) => {
    const { availableProps } = get();
    const safeIdx = (index + availableProps.length) % availableProps.length;
    const prop = availableProps[safeIdx];

    set({
      hasSelectedProp: true,
      selectedLightId: null,
      selectedFamilyId: null,
      selectedGroupId: null,
      attachedInfo: null,
      propIndex: safeIdx,
      invertDirection: prop.model !== 'none',
      nativeLight: false,
      renderDistance: 80.0,
      textureVariation: 0,
      collision: false,
      castShadow: true,
    });

    fetchNui('spawnNewProp', {
      model: prop.model,
      offsetZ: prop.offsetZ ?? 1.5,
    }).catch(() => {});

    get().showToast(`Nouveau prop placé : ${prop.label}`, 'success');
  },

  setProps: (availableProps) => set({ availableProps }),

  selectPropIndex: (index) => {
    const { availableProps } = get();
    if (availableProps.length === 0) return;
    const safeIdx = (index + availableProps.length) % availableProps.length;
    set({ propIndex: safeIdx });
    sendPreviewDebounced(get);
  },

  selectPropModel: (model) => {
    const { availableProps } = get();
    const idx = availableProps.findIndex((p) => p.model === model);
    if (idx !== -1) {
      set({ propIndex: idx });
      sendPreviewDebounced(get);
    }
  },

  nextProp: () => {
    const { propIndex, availableProps } = get();
    if (availableProps.length === 0) return;
    const nextIdx = (propIndex + 1) % availableProps.length;
    get().selectPropIndex(nextIdx);
  },

  prevProp: () => {
    const { propIndex, availableProps } = get();
    if (availableProps.length === 0) return;
    const prevIdx = (propIndex - 1 + availableProps.length) % availableProps.length;
    get().selectPropIndex(prevIdx);
  },

  setCatalogOpen: (catalogOpen) => set({ catalogOpen }),
  toggleCatalog: () => set((s) => ({ catalogOpen: !s.catalogOpen })),
  setSelectedCategory: (selectedCategory) => set({ selectedCategory }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),

  // Rétrocompatibilité méthodes groupe
  setSelectedGroupId: (id) => get().setSelectedFamilyId(id),
  setApplyToGroup: (apply) => get().setApplyToFamily(apply),
  groupSelectedLights: async (name) => {
    await get().createFamily(name);
  },
  ungroupSelectedLights: async () => {
    const ids = get().multiSelectedIds;
    await get().assignMultipleLights(ids, null, null);
  },
  ungroupGroup: async (id) => {
    await get().deleteFamily(id);
  },
  saveCurrentGroup: async () => {
    await get().saveCurrentFamily();
  },
  propagateGroupPreview: (updates, groupName) => {
    get().propagateFamilyPreview(updates, groupName);
  },

  setRgb: (color) => {
    set((s) => ({ rgb: { ...s.rgb, ...color } }));
    const s = get();
    const fam = getTargetFamily(s);
    if (fam) {
      s.propagateFamilyPreview({ rgb: s.rgb }, fam);
    } else {
      sendPreviewDebounced(get);
    }
  },

  addRecentColor: (hex: string) => {
    if (!hex || typeof hex !== 'string') return;
    const cleanHex = hex.trim().toUpperCase();
    if (!cleanHex.startsWith('#')) return;

    set((s) => {
      const filtered = s.recentColors.filter((c) => c.toUpperCase() !== cleanHex);
      const updated = [cleanHex, ...filtered].slice(0, 8);
      try {
        localStorage.setItem('lightstudio_recent_colors', JSON.stringify(updated));
      } catch {}
      return { recentColors: updated };
    });
  },

  setIntensity: (intensity) => {
    set({ intensity });
    const s = get();
    const fam = getTargetFamily(s);
    if (fam) {
      s.propagateFamilyPreview({ intensity }, fam);
    } else {
      sendPreviewDebounced(get);
    }
  },

  setRadius: (radius) => {
    set({ radius });
    const s = get();
    const fam = getTargetFamily(s);
    if (fam) {
      s.propagateFamilyPreview({ radius }, fam);
    } else {
      sendPreviewDebounced(get);
    }
  },

  setShape: (shape) => {
    const curParam = get().shapeParam;
    let newParam = curParam;
    if (shape === 'cone' && (curParam < 10 || curParam > 130)) {
      newParam = 55.0;
    } else if ((shape === 'sphere' || shape === 'box') && curParam > 5.0) {
      newParam = 1.0;
    }
    set({ shape, shapeParam: newParam });
    const s = get();
    const fam = getTargetFamily(s);
    if (fam) {
      s.propagateFamilyPreview({ shape, shapeParam: newParam }, fam);
    } else {
      sendPreviewDebounced(get);
    }
  },

  setShapeParam: (shapeParam) => {
    set({ shapeParam });
    const s = get();
    const fam = getTargetFamily(s);
    if (fam) {
      s.propagateFamilyPreview({ shapeParam }, fam);
    } else {
      sendPreviewDebounced(get);
    }
  },

  setInvertDirection: (invertDirection) => {
    set({ invertDirection });
    const s = get();
    const fam = getTargetFamily(s);
    if (fam) {
      s.propagateFamilyPreview({ invertDirection }, fam);
    } else {
      sendPreviewDebounced(get);
    }
  },

  toggleInvertDirection: () => {
    const next = !get().invertDirection;
    set({ invertDirection: next });
    const s = get();
    const fam = getTargetFamily(s);
    if (fam) {
      s.propagateFamilyPreview({ invertDirection: next }, fam);
    } else {
      sendPreviewDebounced(get);
    }
    get().showToast(next ? "Faisceau orienté vers l'avant (180°)" : "Faisceau orienté vers l'arrière", 'info');
  },

  setNativeLight: (nativeLight) => {
    set({ nativeLight });
    const s = get();
    const fam = getTargetFamily(s);
    if (fam) {
      s.propagateFamilyPreview({ nativeLight }, fam);
    } else {
      sendPreviewDebounced(get);
    }
  },

  toggleNativeLight: () => {
    const next = !get().nativeLight;
    set({ nativeLight: next });
    const s = get();
    const fam = getTargetFamily(s);
    if (fam) {
      s.propagateFamilyPreview({ nativeLight: next }, fam);
    } else {
      sendPreviewDebounced(get);
    }
    get().showToast(next ? "Lumière native du prop activée" : "Lumière native du prop désactivée", 'info');
  },

  setRenderDistance: (renderDistance) => {
    set({ renderDistance });
    sendPreviewDebounced(get);
  },

  setTextureVariation: (textureVariation) => {
    set({ textureVariation });
    sendPreviewDebounced(get);
  },

  setCollision: (collision) => {
    set({ collision });
    sendPreviewDebounced(get);
  },

  toggleCollision: () => {
    const next = !get().collision;
    set({ collision: next });
    sendPreviewDebounced(get);
    get().showToast(next ? "Collision activée sur le prop" : "Collision désactivée sur le prop", 'info');
  },

  setCastShadow: (castShadow) => {
    set({ castShadow });
    sendPreviewDebounced(get);
  },

  toggleCastShadow: () => {
    const next = !get().castShadow;
    set({ castShadow: next });
    sendPreviewDebounced(get);
    get().showToast(next ? "Ombres dynamiques activées (bloqué par les obstacles)" : "Ombres dynamiques désactivées", 'info');
  },

  duplicateSelectedLight: async () => {
    const s = get();
    if (!s.hasSelectedProp && !s.selectedLightId) {
      s.showToast('Aucun prop sélectionné à dupliquer', 'info');
      return;
    }

    const currentProp = s.availableProps[s.propIndex] || DEFAULT_PROPS[0];
    const target = s.selectedLightId ? s.nearbyLights.find((l) => l.id === s.selectedLightId) : null;
    const model = target?.model || currentProp?.model || 'none';

    try {
      await fetchNui('duplicateLight', {
        id: s.selectedLightId,
        model: model,
        coords: s.coords,
        heading: s.heading,
        rotation: s.rotation,
        renderDistance: s.renderDistance ?? target?.renderDistance ?? 80.0,
        textureVariation: s.textureVariation ?? target?.textureVariation ?? 0,
        collision: s.collision ?? target?.collision ?? false,
        castShadow: s.castShadow ?? target?.castShadow ?? true,
        rgb: s.rgb,
        intensity: s.intensity,
        radius: s.radius,
        offsetZ: target?.offsetZ ?? currentProp?.offsetZ ?? 0.0,
        shape: s.shape,
        shapeParam: s.shapeParam,
        invertDirection: s.invertDirection,
        nativeLight: s.nativeLight,
        groupId: target?.groupId ?? s.getCurrentLightGroup(),
        familyId: target?.familyId ?? s.getCurrentLightFamily(),
        group: target?.familyId ?? target?.groupId ?? (s.getCurrentLightFamily() || s.getCurrentLightGroup()),
        attached: target?.attached,
      });

      s.showToast('Duplication instantanée (LShift)...', 'info');
    } catch {
      s.showToast('Erreur lors de la duplication', 'error');
    }
  },

  handleLightDuplicated: (newLight: NearbyLightItem) => {
    const { availableProps, nearbyLights } = get();
    let pIdx = availableProps.findIndex((p) => p.model === newLight.model);
    if (pIdx === -1) pIdx = 0;

    const rot = newLight.rotation || { x: 0.0, y: 0.0, z: newLight.heading || 0.0 };
    const hasFamily = Boolean(newLight.familyId || newLight.group);

    const existing = nearbyLights.some((l) => l.id === newLight.id);
    const updatedNearby = existing
      ? nearbyLights.map((l) => (l.id === newLight.id ? newLight : l))
      : [newLight, ...nearbyLights];

    set({
      nearbyLights: updatedNearby,
      hasSelectedProp: true,
      selectedLightId: newLight.id,
      selectedFamilyId: null,
      selectedGroupId: null,
      applyToFamily: hasFamily,
      applyToGroup: hasFamily,
      propIndex: pIdx,
      coords: newLight.coords,
      heading: newLight.heading,
      rotation: { x: rot.x || 0.0, y: rot.y || 0.0, z: rot.z || newLight.heading || 0.0 },
      rgb: newLight.rgb,
      intensity: newLight.intensity,
      radius: newLight.radius,
      renderDistance: newLight.renderDistance ?? 80.0,
      textureVariation: newLight.textureVariation ?? 0,
      collision: newLight.collision ?? false,
      castShadow: newLight.castShadow ?? true,
      shape: newLight.shape || 'cone',
      shapeParam: newLight.shapeParam ?? (newLight.shape === 'cone' ? 55.0 : 1.0),
      invertDirection: newLight.invertDirection ?? (newLight.model !== 'none'),
      nativeLight: newLight.nativeLight ?? false,
      attachedInfo: newLight.attached
        ? { isAttached: true, type: newLight.attached.type, name: newLight.attached.name || newLight.attached.plate }
        : null,
    });

    get().showToast(`Prop dupliqué ! (${newLight.id})`, 'success');
  },

  toggleMultiSelectId: (id) => {
    set((s) => {
      const exists = s.multiSelectedIds.includes(id);
      const next = exists ? s.multiSelectedIds.filter((x) => x !== id) : [...s.multiSelectedIds, id];
      return { multiSelectedIds: next };
    });
  },

  selectAllNearby: () => {
    const ids = get().nearbyLights.map((l) => l.id);
    set({ multiSelectedIds: ids });
  },

  clearMultiSelect: () => set({ multiSelectedIds: [] }),

  setGizmoMode: (gizmoMode) => {
    set({ gizmoMode });
    fetchNui('setGizmoMode', { mode: gizmoMode }).catch(() => {});
    get().showToast(
      gizmoMode === 'translate' ? 'Mode Déplacer actif (E)' : 'Mode Rotation actif (R)',
      'info'
    );
  },

  toggleSnap: () => {
    set((s) => {
      const next = !s.snapEnabled;
      fetchNui('setSnap', { enabled: next }).catch(() => {});
      return { snapEnabled: next };
    });
    const now = get().snapEnabled;
    get().showToast(now ? 'Aimantation (Snap) activée' : 'Aimantation (Snap) désactivée', 'info');
  },

  setActiveGizmoAxis: (activeGizmoAxis) => {
    set({ activeGizmoAxis });
    fetchNui('setHoveredAxis', { axis: activeGizmoAxis }).catch(() => {});
  },

  setHoveredGizmoAxis: (hoveredGizmoAxis) => {
    set({ hoveredGizmoAxis });
    fetchNui('setHoveredAxis', { axis: hoveredGizmoAxis }).catch(() => {});
  },

  updateTransform: (newCoords, newHeading, newRotation) => {
    const s = get();
    const prevCoords = s.coords;
    const prevHeading = s.heading;

    const deltaX = newCoords.x !== undefined ? newCoords.x - prevCoords.x : 0;
    const deltaY = newCoords.y !== undefined ? newCoords.y - prevCoords.y : 0;
    const deltaZ = newCoords.z !== undefined ? newCoords.z - prevCoords.z : 0;
    const deltaHeading = newHeading !== undefined ? newHeading - prevHeading : 0;

    const updatedCoords = { ...s.coords, ...newCoords };
    const updatedHeading = newHeading !== undefined ? newHeading : s.heading;
    const updatedRotation = newRotation
      ? { ...newRotation }
      : (newHeading !== undefined
          ? { ...s.rotation, z: newHeading }
          : s.rotation);

    // Seules les FAMILLES déplacent leurs membres ensemble (les groupes ne bougent JAMAIS ensemble)
    const activeFamily = s.selectedFamilyId || (s.applyToFamily ? s.getCurrentLightFamily() : null);

    if (activeFamily && (deltaX !== 0 || deltaY !== 0 || deltaZ !== 0 || deltaHeading !== 0)) {
      const rad = (deltaHeading * Math.PI) / 180;
      const cosA = Math.cos(rad);
      const sinA = Math.sin(rad);
      const px = prevCoords.x;
      const py = prevCoords.y;

      const updatedNearby = s.nearbyLights.map((l) => {
        const isMember = l.familyId === activeFamily || (l.group === activeFamily && !l.familyId);
        if (isMember && (!s.hasSelectedProp || l.id !== s.selectedLightId)) {
          let cx = l.coords.x + deltaX;
          let cy = l.coords.y + deltaY;
          let cz = l.coords.z + deltaZ;

          if (deltaHeading !== 0) {
            const dx = cx - px;
            const dy = cy - py;
            const rx = dx * cosA - dy * sinA;
            const ry = dx * sinA + dy * cosA;
            cx = px + rx;
            cy = py + ry;
          }

          const h = deltaHeading !== 0 ? ((l.heading || 0) + deltaHeading) % 360 : l.heading;
          const r = l.rotation ? { ...l.rotation, z: h } : { x: 0, y: 0, z: h };

          return {
            ...l,
            coords: { x: cx, y: cy, z: cz },
            heading: h,
            rotation: r,
          };
        }
        return l;
      });

      set({
        coords: updatedCoords,
        heading: updatedHeading,
        rotation: updatedRotation,
        nearbyLights: updatedNearby,
      });
    } else {
      set({
        coords: updatedCoords,
        heading: updatedHeading,
        rotation: updatedRotation,
      });
    }

    sendPreviewDebounced(get);
  },

  setScreenGizmo: (screenGizmo) => set({ screenGizmo }),

  setIsOrbiting: (isOrbiting) => set({ isOrbiting }),
  setCommandBarOpen: (commandBarOpen) => set({ commandBarOpen }),
  setTransformPanelOpen: (transformPanelOpen) => set({ transformPanelOpen }),

  showToast: (message, type = 'info') => {
    const id = Date.now();
    set({ toast: { id, message, type } });
    setTimeout(() => {
      if (get().toast?.id === id) {
        set({ toast: null });
      }
    }, 2800);
  },

  requestSave: async () => {
    const s = get();
    if (!s.hasSelectedProp) {
      get().showToast('Aucun prop à sauvegarder', 'info');
      return;
    }

    const currentProp = s.availableProps[s.propIndex] || DEFAULT_PROPS[0];
    const currentHex = rgbToHex(s.rgb.r, s.rgb.g, s.rgb.b);
    get().addRecentColor(currentHex);
    const lightFamily = s.getCurrentLightFamily();
    const lightGroup = s.getCurrentLightGroup();

    try {
      await fetchNui('save', {
        id: s.selectedLightId,
        model: currentProp.model,
        offsetZ: currentProp.offsetZ ?? 0.0,
        coords: s.coords,
        heading: s.heading,
        rotation: s.rotation,
        rgb: s.rgb,
        intensity: s.intensity,
        radius: s.radius,
        renderDistance: s.renderDistance,
        textureVariation: s.textureVariation,
        collision: s.collision,
        castShadow: s.castShadow,
        shape: s.shape,
        shapeParam: s.shapeParam,
        invertDirection: s.invertDirection,
        nativeLight: s.nativeLight,
        groupId: lightGroup,
        familyId: lightFamily,
        group: lightFamily || lightGroup,
      });

      if (s.applyToFamily && lightFamily) {
        await s.saveCurrentFamily();
      }

      get().showToast(
        s.selectedLightId ? 'Lumière mise à jour !' : 'Nouvelle lumière enregistrée !',
        'success'
      );
      set({
        hasSelectedProp: false,
        selectedLightId: null,
        selectedFamilyId: null,
        selectedGroupId: null,
        attachedInfo: null,
      });
    } catch {
      get().showToast('Erreur lors de la sauvegarde.', 'error');
    }
  },

  requestCancel: async () => {
    try {
      await fetchNui('cancel');
      set({ visible: false });
    } catch {
      set({ visible: false });
    }
  },

  requestGroundSnap: async () => {
    const s = get();
    const activeFamily = s.selectedFamilyId || (s.applyToFamily ? s.getCurrentLightFamily() : null);

    try {
      const res = await fetchNui<{ success: boolean; coords?: TransformCoords; deltaZ?: number }>('snapGround', {
        familyId: activeFamily,
        group: activeFamily,
      });
      if (res && res.coords) {
        const deltaZ = res.deltaZ ?? (res.coords.z - s.coords.z);
        if (activeFamily && deltaZ !== 0) {
          const updatedNearby = s.nearbyLights.map((l) => {
            const isMember = l.familyId === activeFamily || (l.group === activeFamily && !l.familyId);
            if (isMember && (!s.hasSelectedProp || l.id !== s.selectedLightId)) {
              return {
                ...l,
                coords: { ...l.coords, z: l.coords.z + deltaZ },
              };
            }
            return l;
          });
          set({
            coords: { ...s.coords, z: res.coords.z },
            nearbyLights: updatedNearby,
          });
        } else {
          set((state) => ({ coords: { ...state.coords, z: res.coords!.z } }));
        }
        get().showToast('Plaqué au sol avec succès', 'success');
      }
    } catch {
      // Ignoré hors jeu
    }
  },

  sendGizmoDrag: (axis, delta) => {
    const s = get();
    fetchNui('gizmoDrag', {
      axis,
      mode: s.gizmoMode,
      delta,
      snap: s.snapEnabled,
    }).catch(() => {});
  },

  initialize: (payload) => {
    const availableProps = payload.props && payload.props.length > 0 ? payload.props : DEFAULT_PROPS;
    const rgb = payload.defaults?.rgb ?? { r: 255, g: 180, b: 60 };
    const intensity = payload.defaults?.intensity ?? 8.5;
    const radius = payload.defaults?.radius ?? 14.0;
    const shape = payload.defaults?.shape ?? 'cone';
    const shapeParam = payload.defaults?.shapeParam ?? (shape === 'cone' ? 55.0 : 1.0);
    const coords = payload.coords ?? { x: 0.0, y: 0.0, z: 0.0 };
    const heading = payload.heading ?? 0.0;
    const rotation = payload.rotation ?? { x: 0.0, y: 0.0, z: heading };
    const toolkitName = payload.toolkitName || 'Creator Toolkit';
    const studios = payload.studios && payload.studios.length > 0 ? payload.studios : DEFAULT_STUDIOS;
    const activeStudio = payload.defaultStudio || 'light';
    const groups = payload.hierarchy?.groups || [];
    const families = payload.hierarchy?.families || [];

    set({
      visible: true,
      statusText: 'Freecam Active',
      openedAt: Date.now(),
      toolkitName,
      studios,
      activeStudio,
      availableProps,
      groups,
      families,
      propIndex: 0,
      hasSelectedProp: false,
      selectedLightId: null,
      selectedFamilyId: null,
      selectedGroupId: null,
      multiSelectedIds: [],
      applyToFamily: true,
      applyToGroup: true,
      attachedInfo: null,
      rgb,
      intensity,
      radius,
      shape,
      shapeParam,
      invertDirection: true,
      nativeLight: false,
      renderDistance: 80.0,
      textureVariation: 0,
      collision: false,
      castShadow: payload.defaults?.castShadow ?? true,
      coords,
      heading,
      rotation,
      catalogOpen: false,
      cameraMode: 'freecam',
      isOrbiting: false,
    });

    sendPreviewDebounced(get);
  },
}));
