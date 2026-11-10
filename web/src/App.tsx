import React, { useEffect } from 'react';
import { useLightStore } from './store/useLightStore';
import { usePropStore } from './store/usePropStore';
import { Header } from './components/Header';
import { CommandBar } from './components/CommandBar';
import { ThreeGizmoViewport } from './components/ThreeGizmoViewport';
import { ToastNotification } from './components/ToastNotification';
import { LightStudioView } from './studios/LightStudio/LightStudioView';
import { PropStudioView } from './studios/PropStudio/PropStudioView';
import { FXStudioView } from './studios/FXStudio/FXStudioView';

export const App: React.FC = () => {
  const {
    visible,
    activeStudio,
    initialize,
    setVisible,
    updateTransform,
    setNearbyLights,
    setHierarchy,
    handleLightDuplicated,
    setAttachedInfo,
    setProps,
  } = useLightStore();

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;
      if (!data || !data.action) return;

      if (data.action === 'open') {
        initialize({
          props: data.props,
          defaults: data.defaults,
          coords: data.coords,
          heading: data.heading,
          rotation: data.rotation,
          hierarchy: data.hierarchy,
          toolkitName: data.toolkitName,
          studios: data.studios,
          defaultStudio: data.defaultStudio,
        });

        // Initialisation du catalogue du Prop Studio
        usePropStore
          .getState()
          .initializeCatalog(data.propCategories || [], data.propCatalog || []);
      } else if (data.action === 'close') {
        setVisible(false);
      } else if (data.action === 'syncHierarchy') {
        if (data.hierarchy) {
          setHierarchy(data.hierarchy);
        }
      } else if (data.action === 'updateTransform') {
        updateTransform(data.coords, data.heading, data.rotation);
      } else if (data.action === 'onLightDuplicated' && data.light) {
        handleLightDuplicated(data.light);
      } else if (data.action === 'updateNearbyLights') {
        setNearbyLights(data.lights || []);
        if (data.hierarchy) {
          setHierarchy(data.hierarchy);
        }
      } else if (data.action === 'updateProps') {
        if (data.props) {
          setProps(data.props);
        }
      } else if (data.action === 'updateAttachment') {
        setAttachedInfo(
          data.attached
            ? { isAttached: true, type: data.targetType, name: data.targetName }
            : null
        );
      }
      // Messages spécifiques au Prop Studio
      else if (data.action === 'propStudio:syncProps') {
        usePropStore.getState().setProps(data.props, data.locks, data.hierarchy, data.assemblages);
      } else if (data.action === 'propStudio:syncAssemblages') {
        usePropStore.getState().setAssemblages(data.assemblages || []);
      } else if (data.action === 'propStudio:assemblageSaved') {
        const a = data.assemblage;
        if (a) {
          usePropStore.setState((s) => ({
            assemblages: s.assemblages.some((x) => x.id === a.id)
              ? s.assemblages.map((x) => (x.id === a.id ? a : x))
              : [a, ...s.assemblages],
          }));
        }
      } else if (data.action === 'propStudio:assemblageDeleted') {
        const id = data.id;
        if (id) {
          usePropStore.setState((s) => ({
            assemblages: s.assemblages.filter((x) => x.id !== id),
          }));
        }
      } else if (data.action === 'propStudio:assemblagePlaced') {
        const res = data.data;
        if (res && res.familyId) {
          usePropStore.getState().setSelectedFamilyId(res.familyId);
        }
      } else if (data.action === 'propStudio:syncHierarchy') {
        if (data.hierarchy) {
          usePropStore.getState().setHierarchy(data.hierarchy);
        }
      } else if (data.action === 'propStudio:updateNearbyProps') {
        usePropStore.getState().setNearbyProps(data.props || []);
        if (data.count !== undefined) {
          usePropStore.getState().setLoadedPropsCount(data.count);
        }
      } else if (data.action === 'propStudio:syncSingleProp') {
        usePropStore.getState().syncSingleProp(data.prop);
      } else if (data.action === 'propStudio:syncLock') {
        usePropStore.getState().syncLock(data.propId, data.lock);
      } else if (data.action === 'propStudio:onPropSelected') {
        usePropStore.getState().setSelectedPropDirect(data.prop);
      } else if (data.action === 'propStudio:propDeleted') {
        usePropStore.getState().onPropDeleted(data.propId);
      } else if (data.action === 'propStudio:updateLoadedCount') {
        usePropStore.getState().setLoadedPropsCount(data.count);
      } else if (data.action === 'propStudio:updateTransform') {
        usePropStore.getState().updatePropPosition(data.coords, false);
        if (data.rotation) {
          usePropStore.getState().updatePropRotation(data.rotation, false);
        }
      } else if (data.action === 'propStudio:syncThumbnails') {
        usePropStore.getState().setExistingThumbnails(data.thumbnails || []);
      } else if (data.action === 'propStudio:thumbnailAdded') {
        usePropStore.getState().addExistingThumbnail(data.model);
      } else if (data.action === 'propStudio:thumbBatchStart') {
        usePropStore.getState().setIsGeneratingThumbs(true);
      } else if (data.action === 'propStudio:thumbProgress') {
        usePropStore.getState().setThumbProgress(data);
      } else if (data.action === 'propStudio:thumbBatchEnd') {
        usePropStore.getState().setIsGeneratingThumbs(false);
        usePropStore.getState().setThumbProgress(null);
        usePropStore
          .getState()
          .showToast(
            `Génération terminée : ${data.success || 0}/${data.total || 0} miniatures créées.`,
            data.errors > 0 ? 'warning' : 'success'
          );
      } else if (data.action === 'propStudio:notify') {
        usePropStore.getState().showToast(data.message, data.type || 'info');
      }
    };

    window.addEventListener('message', handleMessage);

    // Prévisualisation hors FiveM (navigateur web classique)
    const isEnvBrowser = !(window as any).invokeNative;
    if (isEnvBrowser && !visible) {
      initialize({
        coords: { x: 120.45, y: -450.8, z: 35.2 },
        heading: 90.0,
      });
      usePropStore.getState().initializeCatalog(
        ['Bar', 'Construction', 'Interior', 'Kitchen', 'Living room', 'Office'],
        [
          { model: 'prop_sofa_01', label: 'Canapé 3 places cuir', category: 'Living room' },
          { model: 'prop_table_03', label: 'Table à manger rectangulaire', category: 'Tables' },
          { model: 'prop_barrier_work05', label: 'Barrière de chantier', category: 'Construction' },
        ]
      );
    }

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [visible, initialize, setVisible, updateTransform]);

  if (!visible) return null;

  return (
    <div className="w-screen h-screen relative overflow-hidden select-none font-sans">
      {/* 1. Véritable Gizmo 3D Three.js TransformControls & Viewport commun */}
      <ThreeGizmoViewport />

      {/* 2. Bandeau supérieur avec navigation entre Studios */}
      <Header />

      {/* 3. Panneau de commandes contextuelles à gauche */}
      <CommandBar />

      {/* 4. Vue spécifique au Studio actif */}
      {activeStudio === 'light' && <LightStudioView />}
      {activeStudio === 'prop' && <PropStudioView />}
      {activeStudio === 'fx' && <FXStudioView />}

      {/* 5. Notifications toasts de feedback */}
      <ToastNotification />
    </div>
  );
};
