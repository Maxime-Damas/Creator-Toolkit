import { create } from 'zustand';
import { fetchNui } from '../utils/fetchNui';
import { CatalogProp, PropCoords, PropItem, PropRotation, LockInfo, AssemblageItem, AssemblagePropData } from '../types/props';
import { GroupItem, FamilyItem, HierarchyData } from '../types/hierarchy';

export interface PropStoreState {
  // Catalogue & Catégories
  catalogOpen: boolean;
  categories: string[];
  catalog: CatalogProp[];
  selectedCategory: string;
  searchQuery: string;
  filterLoadedOnly: boolean;
  customModelInput: string;
  loadedPropsCount: number;

  // Miniatures & Générateur
  existingThumbnails: Record<string, boolean>;
  thumbVersions: Record<string, number>;
  isGeneratingThumbs: boolean;
  thumbProgress: { current: number; total: number; model: string; label: string } | null;
  setExistingThumbnails: (models: string[]) => void;
  addExistingThumbnail: (model: string) => void;
  setThumbProgress: (progress: { current: number; total: number; model: string; label: string } | null) => void;
  setIsGeneratingThumbs: (isGenerating: boolean) => void;
  generateThumbs: (mode?: 'missing' | 'all') => Promise<void>;
  generateSingleThumb: (model: string) => Promise<void>;
  cancelThumbs: () => Promise<void>;

  // Données de props persistants
  props: Record<string, PropItem>;
  nearbyProps: (PropItem & { distance?: number })[];
  locks: Record<string, LockInfo>;

  // Assemblages (Prefabs de familles d'objets)
  assemblages: AssemblageItem[];
  assemblageModalOpen: boolean;
  assemblageModalFamilyId: string | null;
  editingAssemblage: AssemblageItem | null;

  // Hiérarchie : Groupes (Organisation pure) et Familles (Liaison & Synchronisation)
  groups: GroupItem[];
  families: FamilyItem[];
  collapsedFolders: Record<string, boolean>;
  selectedFamilyId: string | null;
  selectedGroupId: string | null;
  multiSelectedIds: string[];
  applyToFamily: boolean;

  // Sélection active
  selectedPropId: string | null;
  selectedProp: PropItem | null;
  isLockedByOther: boolean;
  lockOwnerName: string | null;

  // Feedback & Toasts
  toastMessage: string | null;
  toastType: 'info' | 'success' | 'warning' | 'error';

  // Actions Hiérarchie
  setHierarchy: (hierarchy: HierarchyData) => void;
  toggleFolderCollapse: (folderKey: string) => void;
  createGroup: (name: string) => Promise<string>;
  renameGroup: (groupId: string, newName: string) => Promise<void>;
  deleteGroup: (groupId: string) => Promise<void>;
  createFamily: (name: string, parentGroupId?: string | null, initialPropIds?: string[]) => Promise<string>;
  renameFamily: (familyId: string, newName: string) => Promise<void>;
  deleteFamily: (familyId: string) => Promise<void>;
  moveFamilyToGroup: (familyId: string, targetGroupId: string | null) => Promise<void>;
  assignPropToGroup: (propId: string, groupId: string | null) => Promise<void>;
  assignPropToFamily: (propId: string, familyId: string | null) => Promise<void>;
  assignMultipleProps: (propIds: string[], groupId?: string | null, familyId?: string | null) => Promise<void>;
  setSelectedFamilyId: (familyId: string | null) => void;
  setSelectedGroupId: (groupId: string | null) => void;
  toggleMultiSelectId: (id: string) => void;
  selectAllNearby: () => void;
  clearMultiSelect: () => void;
  getCurrentPropFamily: () => string | null;
  getCurrentPropGroup: () => string | null;
  saveCurrentFamily: () => Promise<void>;
  updateFamilyTransform: (deltaCoords: Partial<PropCoords>, deltaHeading?: number, deltaRotation?: Partial<PropRotation>) => void;

  // Actions de base
  setCatalogOpen: (open: boolean) => void;
  toggleCatalog: () => void;
  initializeCatalog: (categories: string[], catalog: CatalogProp[]) => void;
  setProps: (propsList: PropItem[], locks?: Record<string, LockInfo>, hierarchy?: HierarchyData, assemblages?: AssemblageItem[]) => void;
  setNearbyProps: (propsList: (PropItem & { distance?: number })[]) => void;
  syncSingleProp: (prop: PropItem) => void;
  syncLock: (propId: string, lockInfo: LockInfo | null) => void;
  onPropDeleted: (propId: string) => void;
  setLoadedPropsCount: (count: number) => void;

  // Actions Assemblages (Prefabs)
  setAssemblages: (assemblages: AssemblageItem[]) => void;
  openSaveAssemblageModal: (familyId: string, editing?: AssemblageItem | null) => void;
  closeSaveAssemblageModal: () => void;
  saveFamilyAsAssemblage: (params: { familyId: string; name: string; category: string; description?: string; id?: string }) => Promise<void>;
  deleteAssemblage: (id: string) => Promise<void>;
  duplicateAssemblage: (id: string) => Promise<void>;
  spawnAssemblage: (assemblageId: string, familyName?: string) => Promise<void>;
  updateAssemblageMetadata: (id: string, updates: { name: string; category: string; description?: string }) => Promise<void>;

  setSelectedCategory: (cat: string) => void;
  setSearchQuery: (query: string) => void;
  setFilterLoadedOnly: (enabled: boolean) => void;
  setCustomModelInput: (val: string) => void;

  selectProp: (propId: string) => Promise<void>;
  deselectProp: () => Promise<void>;
  setSelectedPropDirect: (prop: PropItem | null) => void;

  spawnProp: (model: string) => Promise<void>;
  placeCustomModel: () => Promise<void>;

  updatePropPosition: (coords: Partial<PropCoords>, commit?: boolean) => void;
  updatePropRotation: (rotation: Partial<PropRotation>, commit?: boolean) => void;
  updatePropProperties: (fields: Partial<Pick<PropItem, 'renderDistance' | 'textureVariation' | 'collision'>>, commit?: boolean) => void;

  duplicateSelectedProp: () => Promise<void>;
  deleteSelectedProp: () => Promise<void>;
  snapGround: () => Promise<void>;
  applyPhysics: () => Promise<void>;
  exitEditor: () => Promise<void>;

  showToast: (msg: string, type?: 'info' | 'success' | 'warning' | 'error') => void;
  hideToast: () => void;
}

let saveDebounceTimer: any = null;

export const usePropStore = create<PropStoreState>((set, get) => ({
  catalogOpen: true,
  categories: ['Everything', 'Assemblages'],
  catalog: [],
  selectedCategory: 'Everything',
  searchQuery: '',
  filterLoadedOnly: false,
  customModelInput: '',
  loadedPropsCount: 0,

  // Miniatures
  existingThumbnails: {},
  thumbVersions: {},
  isGeneratingThumbs: false,
  thumbProgress: null,

  props: {},
  nearbyProps: [],
  locks: {},

  // Assemblages
  assemblages: [],
  assemblageModalOpen: false,
  assemblageModalFamilyId: null,
  editingAssemblage: null,

  // Hiérarchie
  groups: [],
  families: [],
  collapsedFolders: {},
  selectedFamilyId: null,
  selectedGroupId: null,
  multiSelectedIds: [],
  applyToFamily: false,

  selectedPropId: null,
  selectedProp: null,
  isLockedByOther: false,
  lockOwnerName: null,

  toastMessage: null,
  toastType: 'info',

  // Actions Hiérarchie
  setHierarchy: (hierarchy) => {
    if (!hierarchy) return;
    set({
      groups: hierarchy.groups || [],
      families: hierarchy.families || [],
    });
  },

  toggleFolderCollapse: (folderKey) => {
    set((s) => ({
      collapsedFolders: {
        ...s.collapsedFolders,
        [folderKey]: !s.collapsedFolders[folderKey],
      },
    }));
  },

  createGroup: async (name: string) => {
    const s = get();
    const clean = name.trim() || `Groupe ${s.groups.length + 1}`;
    const newGroup: GroupItem = {
      id: `prop_grp_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      name: clean,
    };
    const updatedGroups = [...s.groups, newGroup];
    set({ groups: updatedGroups });

    if (s.multiSelectedIds.length > 0) {
      await s.assignMultipleProps(s.multiSelectedIds, newGroup.id, null);
      set({ multiSelectedIds: [] });
    }

    try {
      await fetchNui('propStudio:saveHierarchy', {
        hierarchy: { groups: updatedGroups, families: s.families },
      });
      s.showToast(`Groupe « ${clean} » créé`, 'success');
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
      await fetchNui('propStudio:saveHierarchy', {
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
    const updatedFamilies = s.families.map((f) => (f.groupId === groupId ? { ...f, groupId: null } : f));

    const affectedIds = Object.values(s.props)
      .filter((p) => p.groupId === groupId)
      .map((p) => p.id);

    const updatedProps = { ...s.props };
    affectedIds.forEach((id) => {
      if (updatedProps[id]) {
        updatedProps[id] = { ...updatedProps[id], groupId: null, group: updatedProps[id].familyId || null };
      }
    });

    set({
      groups: updatedGroups,
      families: updatedFamilies,
      props: updatedProps,
      nearbyProps: s.nearbyProps.map((p) =>
        p.groupId === groupId ? { ...p, groupId: null, group: p.familyId || null } : p
      ),
      selectedGroupId: s.selectedGroupId === groupId ? null : s.selectedGroupId,
    });

    try {
      await fetchNui('propStudio:saveHierarchy', {
        hierarchy: { groups: updatedGroups, families: updatedFamilies },
      });
      if (affectedIds.length > 0) {
        await fetchNui('propStudio:assignPropsHierarchy', {
          ids: affectedIds,
          groupId: false,
        });
      }
      s.showToast(`Groupe « ${targetGroup?.name || groupId} » supprimé`, 'info');
    } catch {
      s.showToast('Erreur lors de la suppression du groupe', 'error');
    }
  },

  createFamily: async (name: string, parentGroupId: string | null = null, initialPropIds: string[] = []) => {
    const s = get();
    const cleanName = name.trim() || `Famille ${s.families.length + 1}`;
    const newFamily: FamilyItem = {
      id: `prop_fam_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      name: cleanName,
      groupId: parentGroupId || null,
    };
    const updatedFamilies = [...s.families, newFamily];
    set({ families: updatedFamilies });

    const idsToAssign = initialPropIds.length > 0
      ? initialPropIds
      : (s.multiSelectedIds.length > 0 ? s.multiSelectedIds : (s.selectedPropId ? [s.selectedPropId] : []));

    if (idsToAssign.length > 0) {
      const updatedProps = { ...s.props };
      idsToAssign.forEach((id) => {
        if (updatedProps[id]) {
          updatedProps[id] = {
            ...updatedProps[id],
            familyId: newFamily.id,
            group: newFamily.id,
            ...(parentGroupId ? { groupId: parentGroupId } : {}),
          };
        }
      });

      set({
        props: updatedProps,
        nearbyProps: s.nearbyProps.map((p) =>
          idsToAssign.includes(p.id)
            ? { ...p, familyId: newFamily.id, group: newFamily.id, ...(parentGroupId ? { groupId: parentGroupId } : {}) }
            : p
        ),
        multiSelectedIds: [],
        selectedFamilyId: newFamily.id,
        applyToFamily: true,
      });

      try {
        await fetchNui('propStudio:assignPropsHierarchy', {
          ids: idsToAssign,
          familyId: newFamily.id,
          groupId: parentGroupId || undefined,
        });
      } catch {}
    }

    try {
      await fetchNui('propStudio:saveHierarchy', {
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
      await fetchNui('propStudio:saveHierarchy', {
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

    const affectedIds = Object.values(s.props)
      .filter((p) => p.familyId === familyId || (p.group === familyId && !p.familyId))
      .map((p) => p.id);

    const updatedProps = { ...s.props };
    affectedIds.forEach((id) => {
      if (updatedProps[id]) {
        updatedProps[id] = { ...updatedProps[id], familyId: null, group: updatedProps[id].groupId || null };
      }
    });

    set({
      families: updatedFamilies,
      props: updatedProps,
      nearbyProps: s.nearbyProps.map((p) =>
        p.familyId === familyId || (p.group === familyId && !p.familyId)
          ? { ...p, familyId: null, group: p.groupId || null }
          : p
      ),
      selectedFamilyId: s.selectedFamilyId === familyId ? null : s.selectedFamilyId,
    });

    try {
      await fetchNui('propStudio:saveHierarchy', {
        hierarchy: { groups: s.groups, families: updatedFamilies },
      });
      if (affectedIds.length > 0) {
        await fetchNui('propStudio:assignPropsHierarchy', {
          ids: affectedIds,
          familyId: false,
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
    set({ families: updatedFamilies });

    const memberIds = Object.values(s.props)
      .filter((p) => p.familyId === familyId || (p.group === familyId && !p.familyId))
      .map((p) => p.id);

    if (memberIds.length > 0) {
      const updatedProps = { ...s.props };
      memberIds.forEach((id) => {
        if (updatedProps[id]) {
          updatedProps[id] = { ...updatedProps[id], groupId: targetGroupId || null };
        }
      });
      set({
        props: updatedProps,
        nearbyProps: s.nearbyProps.map((p) =>
          memberIds.includes(p.id) ? { ...p, groupId: targetGroupId || null } : p
        ),
      });

      try {
        await fetchNui('propStudio:assignPropsHierarchy', {
          ids: memberIds,
          groupId: targetGroupId || false,
        });
      } catch {}
    }

    try {
      await fetchNui('propStudio:saveHierarchy', {
        hierarchy: { groups: s.groups, families: updatedFamilies },
      });
      const groupName = targetGroupId ? s.groups.find((g) => g.id === targetGroupId)?.name : 'Racine';
      s.showToast(`Famille déplacée vers « ${groupName} »`, 'info');
    } catch {
      s.showToast('Erreur lors du déplacement de la famille', 'error');
    }
  },

  assignPropToGroup: async (propId: string, groupId: string | null) => {
    const s = get();
    const currentProp = s.props[propId];
    if (!currentProp) return;

    const nextGroupId = groupId || null;
    const updatedProp = { ...currentProp, groupId: nextGroupId, group: currentProp.familyId || nextGroupId };

    set({
      props: { ...s.props, [propId]: updatedProp },
      nearbyProps: s.nearbyProps.map((p) => (p.id === propId ? { ...p, groupId: nextGroupId, group: updatedProp.group } : p)),
      selectedProp: s.selectedPropId === propId ? updatedProp : s.selectedProp,
    });

    try {
      await fetchNui('propStudio:assignPropsHierarchy', {
        ids: [propId],
        groupId: nextGroupId || false,
      });
      const grp = groupId ? s.groups.find((g) => g.id === groupId)?.name : 'Racine';
      s.showToast(`Prop assigné à « ${grp} »`, 'info');
    } catch {
      s.showToast("Erreur lors de l'assignation du prop au groupe", 'error');
    }
  },

  assignPropToFamily: async (propId: string, familyId: string | null) => {
    const s = get();
    const currentProp = s.props[propId];
    if (!currentProp) return;

    const nextFamilyId = familyId || null;
    let nextGroupId = currentProp.groupId;
    if (nextFamilyId) {
      const famObj = s.families.find((f) => f.id === nextFamilyId);
      if (famObj && famObj.groupId) {
        nextGroupId = famObj.groupId;
      }
    }

    const updatedProp = {
      ...currentProp,
      familyId: nextFamilyId,
      groupId: nextGroupId,
      group: nextFamilyId || nextGroupId,
    };

    set({
      props: { ...s.props, [propId]: updatedProp },
      nearbyProps: s.nearbyProps.map((p) => (p.id === propId ? { ...p, ...updatedProp } : p)),
      selectedProp: s.selectedPropId === propId ? updatedProp : s.selectedProp,
    });

    try {
      await fetchNui('propStudio:assignPropsHierarchy', {
        ids: [propId],
        familyId: nextFamilyId || false,
        groupId: nextGroupId || undefined,
      });
      const fam = familyId ? s.families.find((f) => f.id === familyId)?.name : 'Aucune';
      s.showToast(`Prop lié à la famille « ${fam} »`, 'info');
    } catch {
      s.showToast("Erreur lors de l'assignation du prop à la famille", 'error');
    }
  },

  assignMultipleProps: async (propIds: string[], groupId?: string | null, familyId?: string | null) => {
    const s = get();
    if (propIds.length === 0) return;

    let targetGroupId = groupId;
    if (familyId) {
      const famObj = s.families.find((f) => f.id === familyId);
      if (famObj && famObj.groupId) {
        targetGroupId = famObj.groupId;
      }
    }

    const updatedProps = { ...s.props };
    propIds.forEach((id) => {
      if (updatedProps[id]) {
        updatedProps[id] = {
          ...updatedProps[id],
          ...(groupId !== undefined ? { groupId: targetGroupId || null } : {}),
          ...(familyId !== undefined ? { familyId: familyId || null } : {}),
          group: familyId || targetGroupId || updatedProps[id].groupId || null,
        };
      }
    });

    set({
      props: updatedProps,
      nearbyProps: s.nearbyProps.map((p) => (updatedProps[p.id] ? { ...p, ...updatedProps[p.id] } : p)),
      multiSelectedIds: [],
    });

    try {
      await fetchNui('propStudio:assignPropsHierarchy', {
        ids: propIds,
        groupId: groupId !== undefined ? (targetGroupId || false) : undefined,
        familyId: familyId !== undefined ? (familyId || false) : undefined,
      });
      s.showToast(`${propIds.length} props mis à jour`, 'success');
    } catch {
      s.showToast('Erreur lors de la mise à jour des props', 'error');
    }
  },

  setSelectedFamilyId: (familyId: string | null) => {
    set({ selectedFamilyId: familyId, selectedGroupId: familyId });
    if (familyId) {
      const allP = Object.values(get().props);
      const famProps = allP.filter(
        (p) => p.familyId === familyId || (p.group === familyId && !p.familyId)
      );
      if (famProps.length > 0) {
        let sumX = 0, sumY = 0, sumZ = 0;
        for (const fp of famProps) {
          sumX += fp.coords.x;
          sumY += fp.coords.y;
          sumZ += fp.coords.z;
        }
        const centerCoords = {
          x: sumX / famProps.length,
          y: sumY / famProps.length,
          z: sumZ / famProps.length,
        };

        const first = famProps[0];
        set({
          selectedPropId: null,
          selectedProp: null,
          applyToFamily: true,
        });

        fetchNui('propStudio:setFamilyCenter', {
          familyId,
          coords: centerCoords,
          heading: first.heading || 0,
        }).catch(() => {});
      }
    }
  },

  setSelectedGroupId: (groupId: string | null) => {
    set({ selectedGroupId: groupId, selectedFamilyId: groupId });
  },

  toggleMultiSelectId: (id: string) => {
    set((s) => ({
      multiSelectedIds: s.multiSelectedIds.includes(id)
        ? s.multiSelectedIds.filter((item) => item !== id)
        : [...s.multiSelectedIds, id],
    }));
  },

  selectAllNearby: () => {
    const ids = get().nearbyProps.map((p) => p.id);
    set({ multiSelectedIds: ids });
  },

  clearMultiSelect: () => set({ multiSelectedIds: [] }),

  getCurrentPropFamily: () => {
    const { selectedPropId, props } = get();
    if (!selectedPropId) return null;
    const item = props[selectedPropId];
    return item?.familyId || item?.group || null;
  },

  getCurrentPropGroup: () => {
    const { selectedPropId, props } = get();
    if (!selectedPropId) return null;
    const item = props[selectedPropId];
    return item?.groupId || null;
  },

  updateFamilyTransform: (deltaCoords, deltaHeading = 0) => {
    const s = get();
    const activeFamily = s.selectedFamilyId;
    if (!activeFamily) return;

    const allP = Object.values(s.props);
    const famProps = allP.filter(
      (p) => p.familyId === activeFamily || (p.group === activeFamily && !p.familyId)
    );
    if (famProps.length === 0) return;

    let sumX = 0, sumY = 0, sumZ = 0;
    for (const fp of famProps) {
      sumX += fp.coords.x;
      sumY += fp.coords.y;
      sumZ += fp.coords.z;
    }
    const px = sumX / famProps.length;
    const py = sumY / famProps.length;

    const rad = (deltaHeading * Math.PI) / 180;
    const cosA = Math.cos(rad);
    const sinA = Math.sin(rad);

    const dX = deltaCoords.x || 0;
    const dY = deltaCoords.y || 0;
    const dZ = deltaCoords.z || 0;

    const updatedProps = { ...s.props };

    for (const fp of famProps) {
      let cx = fp.coords.x + dX;
      let cy = fp.coords.y + dY;
      let cz = fp.coords.z + dZ;

      if (deltaHeading !== 0) {
        const dx = cx - px;
        const dy = cy - py;
        const rx = dx * cosA - dy * sinA;
        const ry = dx * sinA + dy * cosA;
        cx = px + rx;
        cy = py + ry;
      }

      const h = deltaHeading !== 0 ? (((fp.heading || fp.rotation?.z || 0) + deltaHeading) % 360) : (fp.heading || 0);
      const r = fp.rotation ? { ...fp.rotation, z: h } : { x: 0, y: 0, z: h };

      const updated = {
        ...fp,
        coords: { x: cx, y: cy, z: cz },
        heading: h,
        rotation: r,
      };

      updatedProps[fp.id] = updated;

      // Déplacement visuel direct en local
      fetchNui('propStudio:moveEntity', {
        id: fp.id,
        position: updated.coords,
        rotation: r,
      }).catch(() => {});
    }

    set({
      props: updatedProps,
      nearbyProps: s.nearbyProps.map((p) => (updatedProps[p.id] ? { ...p, ...updatedProps[p.id] } : p)),
    });
  },

  saveCurrentFamily: async () => {
    const s = get();
    const activeFamily = s.selectedFamilyId;
    if (!activeFamily) return;

    const famProps = Object.values(s.props).filter(
      (p) => p.familyId === activeFamily || (p.group === activeFamily && !p.familyId)
    );
    const ids = famProps.map((p) => p.id);
    if (ids.length === 0) return;

    const positions: Record<string, { coords: PropCoords; heading: number; rotation: PropRotation }> = {};
    for (const p of famProps) {
      positions[p.id] = {
        coords: p.coords,
        heading: p.heading || 0,
        rotation: p.rotation,
      };
    }

    try {
      await fetchNui('propStudio:saveFamily', {
        ids,
        familyId: activeFamily,
        positions,
      });
      s.showToast(`Famille sauvegardée (${ids.length} props)`, 'success');
    } catch {
      s.showToast('Erreur lors de la sauvegarde de la famille', 'error');
    }
  },

  // Actions de base
  setCatalogOpen: (open) => set({ catalogOpen: open }),
  toggleCatalog: () => set((s) => ({ catalogOpen: !s.catalogOpen })),

  initializeCatalog: (categories, catalog) => {
    const rawCats = (categories || []).filter((c) => c !== 'Everything' && c !== 'Assemblages');
    const allCats = ['Everything', 'Assemblages', ...rawCats];
    set({
      categories: allCats,
      catalog: catalog || [],
    });
  },

  setProps: (propsList, locks, hierarchy, assemblages) => {
    const map: Record<string, PropItem> = {};
    (propsList || []).forEach((p) => {
      if (p && p.id) {
        map[p.id] = p;
      }
    });

    const currentSelectedId = get().selectedPropId;
    let newSelected = currentSelectedId ? map[currentSelectedId] || null : null;

    set({
      props: map,
      locks: locks || get().locks,
      selectedProp: newSelected,
      ...(hierarchy ? { groups: hierarchy.groups || [], families: hierarchy.families || [] } : {}),
      ...(assemblages ? { assemblages } : {}),
    });
  },

  setAssemblages: (assemblages) => {
    set({ assemblages: assemblages || [] });
  },

  openSaveAssemblageModal: (familyId, editing = null) => {
    set({
      assemblageModalOpen: true,
      assemblageModalFamilyId: familyId,
      editingAssemblage: editing || null,
    });
  },

  closeSaveAssemblageModal: () => {
    set({
      assemblageModalOpen: false,
      assemblageModalFamilyId: null,
      editingAssemblage: null,
    });
  },

  saveFamilyAsAssemblage: async ({ familyId, name, category, description, id }) => {
    const s = get();
    const famProps = Object.values(s.props).filter(
      (p) => p.familyId === familyId || (p.group === familyId && !p.familyId)
    );
    if (famProps.length === 0) {
      s.showToast('Aucun prop trouvé dans cette famille', 'error');
      return;
    }

    // 1. Calcul du point d'ancrage (pivot au centre X/Y et au niveau du sol minZ)
    let sumX = 0, sumY = 0, minZ = Infinity;
    for (const p of famProps) {
      sumX += p.coords.x;
      sumY += p.coords.y;
      if (p.coords.z < minZ) minZ = p.coords.z;
    }
    const centerX = sumX / famProps.length;
    const centerY = sumY / famProps.length;
    const centerZ = minZ;

    // 2. Calcul des coordonnées et rotations relatives
    const propsData: AssemblagePropData[] = famProps.map((p) => {
      const relX = Number((p.coords.x - centerX).toFixed(3));
      const relY = Number((p.coords.y - centerY).toFixed(3));
      const relZ = Number((p.coords.z - centerZ).toFixed(3));

      const rot = p.rotation || { x: 0, y: 0, z: p.heading || 0 };
      const heading = p.heading ?? rot.z ?? 0;

      return {
        model: p.model,
        label: p.label,
        relCoords: { x: relX, y: relY, z: relZ },
        rotation: { x: rot.x, y: rot.y, z: rot.z },
        heading,
        renderDistance: p.renderDistance,
        textureVariation: p.textureVariation,
        collision: p.collision,
        opacity: p.opacity,
        scale: p.scale,
        physics: p.physics,
      };
    });

    const payload = {
      id: id || undefined,
      name,
      category: category || 'Général',
      description: description || '',
      thumbnail: `thumbnails/${famProps[0].model}.webp`,
      propsData,
    };

    try {
      await fetchNui('propStudio:saveAssemblage', payload);
      // Tentative de capture d'aperçu 3D studio pour l'assemblage complet
      if (id) {
        fetchNui('propStudio:captureAssemblageThumb', {
          assemblageId: id,
          propsData,
        }).catch(() => {});
      }
      s.closeSaveAssemblageModal();
      s.showToast(`Assemblage '${name}' sauvegardé (${propsData.length} props)`, 'success');
    } catch {
      s.showToast("Erreur lors de l'enregistrement de l'assemblage", 'error');
    }
  },

  deleteAssemblage: async (id: string) => {
    const s = get();
    try {
      await fetchNui('propStudio:deleteAssemblage', { id });
      set((state) => ({
        assemblages: state.assemblages.filter((a) => a.id !== id),
      }));
      s.showToast('Assemblage supprimé du catalogue', 'info');
    } catch {
      s.showToast("Erreur lors de la suppression de l'assemblage", 'error');
    }
  },

  duplicateAssemblage: async (id: string) => {
    const s = get();
    try {
      await fetchNui('propStudio:duplicateAssemblage', { id });
      s.showToast("Duplication de l'assemblage...", 'info');
    } catch {
      s.showToast("Erreur lors de la duplication de l'assemblage", 'error');
    }
  },

  spawnAssemblage: async (assemblageId: string, familyName?: string) => {
    const s = get();
    try {
      await fetchNui('propStudio:spawnAssemblage', { assemblageId, familyName });
      s.showToast('Assemblage en cours de placement...', 'info');
    } catch {
      s.showToast("Erreur lors du placement de l'assemblage", 'error');
    }
  },

  updateAssemblageMetadata: async (id: string, updates: { name: string; category: string; description?: string }) => {
    const s = get();
    const existing = s.assemblages.find((a) => a.id === id);
    if (!existing) return;
    const updated = { ...existing, ...updates };
    try {
      await fetchNui('propStudio:saveAssemblage', updated);
      set((state) => ({
        assemblages: state.assemblages.map((a) => (a.id === id ? updated : a)),
      }));
      s.showToast('Assemblage mis à jour', 'success');
    } catch {
      s.showToast('Erreur mise à jour assemblage', 'error');
    }
  },

  setNearbyProps: (propsList) => {
    const next = propsList || [];
    const prev = get().nearbyProps;
    if (prev.length === next.length) {
      let identical = true;
      for (let i = 0; i < prev.length; i++) {
        const pA = prev[i];
        const pB = next[i];
        if (pA.id !== pB.id || Math.abs((pA.distance || 0) - (pB.distance || 0)) > 0.4) {
          identical = false;
          break;
        }
      }
      if (identical) return;
    }
    set({ nearbyProps: next });
  },

  syncSingleProp: (prop) => {
    if (!prop || !prop.id) return;

    set((state) => {
      const nextProps = { ...state.props, [prop.id]: prop };
      const isSelected = state.selectedPropId === prop.id;
      return {
        props: nextProps,
        selectedProp: isSelected ? prop : state.selectedProp,
      };
    });
  },

  syncLock: (propId, lockInfo) => {
    set((state) => {
      const nextLocks = { ...state.locks };
      if (!lockInfo) {
        delete nextLocks[propId];
      } else {
        nextLocks[propId] = lockInfo;
      }
      return {
        locks: nextLocks,
        isLockedByOther: false,
        lockOwnerName: null,
      };
    });
  },

  onPropDeleted: (propId) => {
    set((state) => {
      const nextProps = { ...state.props };
      delete nextProps[propId];

      const nextLocks = { ...state.locks };
      delete nextLocks[propId];

      const wasSelected = state.selectedPropId === propId;
      return {
        props: nextProps,
        nearbyProps: state.nearbyProps.filter((p) => p.id !== propId),
        locks: nextLocks,
        selectedPropId: wasSelected ? null : state.selectedPropId,
        selectedProp: wasSelected ? null : state.selectedProp,
        isLockedByOther: wasSelected ? false : state.isLockedByOther,
        lockOwnerName: wasSelected ? null : state.lockOwnerName,
        multiSelectedIds: state.multiSelectedIds.filter((id) => id !== propId),
      };
    });
    get().showToast('Prop supprimé avec succès', 'info');
  },

  setLoadedPropsCount: (count) => {
    set({ loadedPropsCount: count });
  },

  setSelectedCategory: (cat) => set({ selectedCategory: cat }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setFilterLoadedOnly: (enabled) => set({ filterLoadedOnly: enabled }),
  setCustomModelInput: (val) => set({ customModelInput: val }),

  selectProp: async (propId) => {
    const prop = get().props[propId];
    if (!prop) return;

    set({
      selectedPropId: propId,
      selectedProp: prop,
      selectedFamilyId: null,
      selectedGroupId: null,
      isLockedByOther: false,
      lockOwnerName: null,
    });

    try {
      await fetchNui('propStudio:selectProp', { id: propId });
    } catch {
      // Ignoré hors FiveM
    }
  },

  deselectProp: async () => {
    set({
      selectedPropId: null,
      selectedProp: null,
      selectedFamilyId: null,
      selectedGroupId: null,
      isLockedByOther: false,
      lockOwnerName: null,
    });

    try {
      await fetchNui('propStudio:deselectProp');
    } catch {}
  },

  setSelectedPropDirect: (prop) => {
    if (!prop) {
      set({ selectedPropId: null, selectedProp: null });
    } else {
      set({
        selectedPropId: prop.id,
        selectedProp: prop,
        props: { ...get().props, [prop.id]: prop },
      });
    }
  },

  spawnProp: async (model) => {
    if (!model) return;
    try {
      await fetchNui('propStudio:spawnProp', { model });
      get().showToast(`Prop placé : ${model}`, 'success');
    } catch (e) {
      get().showToast(`Erreur lors du placement de ${model}`, 'error');
    }
  },

  placeCustomModel: async () => {
    const model = get().customModelInput.trim();
    if (!model) {
      get().showToast('Veuillez saisir un nom de modèle GTA V', 'warning');
      return;
    }

    try {
      const res: any = await fetchNui('propStudio:validateCustomModel', { model });
      if (res && res.valid) {
        await fetchNui('propStudio:spawnProp', { model });
        set({ customModelInput: '' });
        get().showToast(`Modèle personnalisé placé : ${model}`, 'success');
      } else {
        get().showToast(res?.error || 'Modèle invalide ou introuvable dans GTA V', 'error');
      }
    } catch {
      get().showToast('Erreur lors du test du modèle personnalisé', 'error');
    }
  },

  updatePropPosition: (coords, commit = false) => {
    const prop = get().selectedProp;
    if (!prop) return;

    const nextCoords: PropCoords = {
      x: coords.x !== undefined ? coords.x : prop.coords.x,
      y: coords.y !== undefined ? coords.y : prop.coords.y,
      z: coords.z !== undefined ? coords.z : prop.coords.z,
    };

    const updatedProp: PropItem = { ...prop, coords: nextCoords };
    set({
      selectedProp: updatedProp,
      props: { ...get().props, [prop.id]: updatedProp },
    });

    // Envoi en direct au client Lua
    fetchNui('propStudio:moveEntity', {
      position: nextCoords,
      rotation: prop.rotation,
    }).catch(() => {});

    if (commit) {
      clearTimeout(saveDebounceTimer);
      fetchNui('propStudio:saveEntity', {
        position: nextCoords,
        rotation: prop.rotation,
      }).catch(() => {});
    } else {
      clearTimeout(saveDebounceTimer);
      saveDebounceTimer = setTimeout(() => {
        fetchNui('propStudio:saveEntity', {
          position: nextCoords,
          rotation: prop.rotation,
        }).catch(() => {});
      }, 350);
    }
  },

  updatePropRotation: (rotation, commit = false) => {
    const prop = get().selectedProp;
    if (!prop) return;

    const nextRot: PropRotation = {
      x: rotation.x !== undefined ? rotation.x : prop.rotation.x,
      y: rotation.y !== undefined ? rotation.y : prop.rotation.y,
      z: rotation.z !== undefined ? rotation.z : prop.rotation.z,
    };

    const updatedProp: PropItem = { ...prop, rotation: nextRot, heading: nextRot.z };
    set({
      selectedProp: updatedProp,
      props: { ...get().props, [prop.id]: updatedProp },
    });

    fetchNui('propStudio:moveEntity', {
      position: prop.coords,
      rotation: nextRot,
    }).catch(() => {});

    if (commit) {
      clearTimeout(saveDebounceTimer);
      fetchNui('propStudio:saveEntity', {
        position: prop.coords,
        rotation: nextRot,
      }).catch(() => {});
    } else {
      clearTimeout(saveDebounceTimer);
      saveDebounceTimer = setTimeout(() => {
        fetchNui('propStudio:saveEntity', {
          position: prop.coords,
          rotation: nextRot,
        }).catch(() => {});
      }, 350);
    }
  },

  updatePropProperties: (fields, commit = false) => {
    const prop = get().selectedProp;
    if (!prop) return;

    const updatedProp: PropItem = { ...prop, ...fields };
    set({
      selectedProp: updatedProp,
      props: { ...get().props, [prop.id]: updatedProp },
    });

    const payload = {
      renderDistance: updatedProp.renderDistance,
      textureVariation: updatedProp.textureVariation,
      collision: updatedProp.collision,
    };

    if (commit) {
      fetchNui('propStudio:updateProperties', payload).catch(() => {});
    } else {
      clearTimeout(saveDebounceTimer);
      saveDebounceTimer = setTimeout(() => {
        fetchNui('propStudio:updateProperties', payload).catch(() => {});
      }, 300);
    }
  },

  duplicateSelectedProp: async () => {
    const id = get().selectedPropId;
    if (!id) return;
    try {
      await fetchNui('propStudio:duplicateProp');
      get().showToast('Prop dupliqué avec succès (LShift)', 'success');
    } catch {
      get().showToast('Erreur lors de la duplication', 'error');
    }
  },

  deleteSelectedProp: async () => {
    const id = get().selectedPropId;
    if (!id) return;
    try {
      await fetchNui('propStudio:deleteProp', { id });
      get().showToast('Prop supprimé avec succès', 'info');
    } catch {
      get().showToast('Erreur lors de la suppression', 'error');
    }
  },

  snapGround: async () => {
    try {
      const res: any = await fetchNui('propStudio:snapGround');
      if (res && res.success) {
        get().showToast('Prop plaqué au sol avec succès (G)', 'success');
      } else {
        get().showToast('Aucun sol détecté en dessous', 'warning');
      }
    } catch {
      get().showToast('Erreur lors du snap au sol', 'error');
    }
  },

  applyPhysics: async () => {
    try {
      get().showToast('Simulation physique en cours... (I)', 'info');
      await fetchNui('propStudio:applyPhysics');
    } catch {
      get().showToast('Erreur lors de la simulation physique', 'error');
    }
  },

  exitEditor: async () => {
    try {
      await fetchNui('propStudio:exit');
      await fetchNui('cancel');
    } catch {}
  },

  setExistingThumbnails: (models) => {
    const map: Record<string, boolean> = {};
    (models || []).forEach((m) => {
      if (m) map[m] = true;
    });
    set({ existingThumbnails: map });
  },

  addExistingThumbnail: (model) => {
    if (!model) return;
    set((s) => ({
      existingThumbnails: { ...s.existingThumbnails, [model]: true },
      thumbVersions: { ...s.thumbVersions, [model]: Date.now() },
    }));
  },

  setThumbProgress: (progress) => set({ thumbProgress: progress }),
  setIsGeneratingThumbs: (isGenerating) => set({ isGeneratingThumbs: isGenerating }),

  generateThumbs: async (mode = 'missing') => {
    try {
      await fetchNui('propStudio:generateThumbs', { mode });
    } catch {}
  },

  generateSingleThumb: async (model: string) => {
    try {
      await fetchNui('propStudio:generateSingleThumb', { model });
    } catch {}
  },

  cancelThumbs: async () => {
    try {
      await fetchNui('propStudio:cancelThumbs');
    } catch {}
  },

  showToast: (msg, type = 'info') => {
    set({ toastMessage: msg, toastType: type });
    setTimeout(() => {
      if (get().toastMessage === msg) {
        set({ toastMessage: null });
      }
    }, 3000);
  },

  hideToast: () => set({ toastMessage: null }),
}));
