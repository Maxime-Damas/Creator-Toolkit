import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
import { useLightStore } from '../store/useLightStore';
import { usePropStore } from '../store/usePropStore';
import { fetchNui } from '../utils/fetchNui';
import {
  EULER_ORDER,
  eulerToGtaRotation,
  gtaRotationToEuler,
  gtaToThree,
  threeToGta,
  type Vec3,
} from '../utils/space';

export const ThreeGizmoViewport: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  const {
    visible,
    openedAt,
    activeStudio,
    hasSelectedProp,
    gizmoMode,
    snapEnabled,
    coords,
    heading,
    rotation,
    cameraMode,
    updateTransform,
    selectedGroupId,
    selectedFamilyId,
  } = useLightStore();

  const selectedProp = usePropStore((s) => s.selectedProp);
  const selectedPropFamilyId = usePropStore((s) => s.selectedFamilyId);

  const controlsRef = useRef<TransformControls | null>(null);
  const meshRef = useRef<THREE.Object3D>(new THREE.Object3D());
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  const camWorldRef = useRef<THREE.Vector3>(new THREE.Vector3());
  const worldPosRef = useRef<THREE.Vector3>(new THREE.Vector3());
  const worldQuatRef = useRef<THREE.Quaternion>(new THREE.Quaternion());
  const prevGtaPosRef = useRef<Vec3 | null>(null);
  const prevGtaRotRef = useRef<Vec3 | null>(null);
  const isPointerDownRef = useRef(false);
  const pointerStartPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const isDraggingGizmoRef = useRef(false);
  const isApplyingRef = useRef(false);
  const activeKeysRef = useRef<Set<string>>(new Set());

  // Boucle de déplacement continu en mode Freecam (Vol libre)
  useEffect(() => {
    if (!visible || cameraMode !== 'freecam') return;

    let animId: number;
    let lastTime = performance.now();

    const loop = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      const keys = activeKeysRef.current;
      if (keys.size > 0) {
        let fwd = 0;
        let right = 0;
        let up = 0;

        // Z / W pour avancer
        if (keys.has('keyw') || keys.has('keyz')) fwd += 1;
        // S pour reculer
        if (keys.has('keys')) fwd -= 1;
        // Q / A pour gauche
        if (keys.has('keya') || keys.has('keyq')) right -= 1;
        // D pour droite
        if (keys.has('keyd')) right += 1;
        // Espace pour monter
        if (keys.has('space')) up += 1;
        // Ctrl ou C pour descendre
        if (keys.has('controlleft') || keys.has('controlright')) up -= 1;

        const isFast = keys.has('shiftleft') || keys.has('shiftright');

        if (fwd !== 0 || right !== 0 || up !== 0) {
          fetchNui('freecamMove', {
            forward: fwd,
            right: right,
            up: up,
            fast: isFast,
            dt,
          }).catch(() => {});
        }
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [visible, cameraMode]);

  // Initialisation Three.js & TransformControls
  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, width / height, 0.01, 2000);
    cameraRef.current = camera;

    const mesh = meshRef.current;
    scene.add(mesh);

    const controls = new TransformControls(camera, renderer.domElement);
    controls.size = 0.85;
    controls.space = 'world';
    controls.attach(mesh);
    // In Three.js >= 0.160, controls.getHelper() provides the Object3D
    const gizmoObject = typeof (controls as any).getHelper === 'function'
      ? (controls as any).getHelper()
      : (controls as unknown as THREE.Object3D);
    scene.add(gizmoObject);
    controlsRef.current = controls;

    // Écoute des changements de transformation par le Gizmo
    controls.addEventListener('dragging-changed', (event: any) => {
      const isDragging = Boolean(event.value);
      isDraggingGizmoRef.current = isDragging;

      if (isDragging) {
        const euler = new THREE.Euler().setFromQuaternion(mesh.quaternion, EULER_ORDER);
        prevGtaPosRef.current = threeToGta({
          x: mesh.position.x + camWorldRef.current.x,
          y: mesh.position.y + camWorldRef.current.y,
          z: mesh.position.z + camWorldRef.current.z,
        });
        prevGtaRotRef.current = eulerToGtaRotation(euler.x, euler.y, euler.z);
      } else {
        worldPosRef.current.copy(mesh.position).add(camWorldRef.current);
        worldQuatRef.current.copy(mesh.quaternion);
        prevGtaPosRef.current = null;
        prevGtaRotRef.current = null;

        // Sauvegarde définitive à la fin du déplacement pour Prop Studio
        if (useLightStore.getState().activeStudio === 'prop') {
          const activePropFamily = usePropStore.getState().selectedFamilyId;
          if (activePropFamily) {
            usePropStore.getState().saveCurrentFamily();
          } else {
            const euler = new THREE.Euler().setFromQuaternion(worldQuatRef.current, EULER_ORDER);
            const gtaPos = threeToGta({
              x: worldPosRef.current.x,
              y: worldPosRef.current.y,
              z: worldPosRef.current.z,
            });
            const gtaRot = eulerToGtaRotation(euler.x, euler.y, euler.z);
            fetchNui('propStudio:saveEntity', {
              position: gtaPos,
              rotation: gtaRot,
            }).catch(() => {});
          }
        }
      }
      fetchNui('setDragging', { dragging: isDragging }).catch(() => {});
    });

    controls.addEventListener('objectChange', () => {
      if (isApplyingRef.current) return;

      worldPosRef.current.copy(mesh.position).add(camWorldRef.current);
      worldQuatRef.current.copy(mesh.quaternion);

      const euler = new THREE.Euler().setFromQuaternion(worldQuatRef.current, EULER_ORDER);
      const gtaPos = threeToGta({
        x: worldPosRef.current.x,
        y: worldPosRef.current.y,
        z: worldPosRef.current.z,
      });
      const gtaRot = eulerToGtaRotation(euler.x, euler.y, euler.z);

      // Si le Studio actif est le Prop Studio
      if (useLightStore.getState().activeStudio === 'prop') {
        const activePropFamily = usePropStore.getState().selectedFamilyId;
        if (activePropFamily) {
          const prevPos = prevGtaPosRef.current || gtaPos;
          const prevRot = prevGtaRotRef.current || gtaRot;
          const deltaX = gtaPos.x - prevPos.x;
          const deltaY = gtaPos.y - prevPos.y;
          const deltaZ = gtaPos.z - prevPos.z;
          const deltaHeading = gtaRot.z - prevRot.z;

          prevGtaPosRef.current = gtaPos;
          prevGtaRotRef.current = gtaRot;

          usePropStore.getState().updateFamilyTransform({ x: deltaX, y: deltaY, z: deltaZ }, deltaHeading, gtaRot);
          return;
        }

        fetchNui('propStudio:moveEntity', {
          position: gtaPos,
          rotation: gtaRot,
        }).catch(() => {});
        usePropStore.getState().updatePropPosition(gtaPos, false);
        usePropStore.getState().updatePropRotation(gtaRot, false);
        return;
      }

      // Détection de la famille active pour déplacement synchronisé rigide (Light Studio)
      const { selectedFamilyId: curFam, applyToFamily, getCurrentLightFamily, selectedGroupId: curGroup } = useLightStore.getState();
      const activeFamily = curFam || (applyToFamily ? (getCurrentLightFamily ? getCurrentLightFamily() : null) : null);

      // Notification en temps réel à Lua
      fetchNui('moveEntity', {
        position: gtaPos,
        rotation: gtaRot,
        familyId: activeFamily,
        applyToFamily: Boolean(activeFamily),
        group: activeFamily || curGroup,
        applyToGroup: Boolean(activeFamily),
      }).catch(() => {});

      // Mise à jour de l'affichage dans le store Zustand avec rotation 3D complète
      updateTransform(gtaPos, gtaRot.z, gtaRot);
    });

    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!renderer || !camera) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / Math.max(1, h);
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [updateTransform]);

  // Synchronisation de l'attachement du Gizmo (prop sélectionné ou famille/groupe actif)
  useEffect(() => {
    const controls = controlsRef.current;
    const mesh = meshRef.current;
    if (!controls) return;

    if (activeStudio === 'prop') {
      if (selectedProp || selectedPropFamilyId) {
        controls.attach(mesh);
        controls.enabled = true;
      } else {
        controls.detach();
        controls.enabled = false;
      }
    } else {
      if (hasSelectedProp || selectedFamilyId || selectedGroupId) {
        controls.attach(mesh);
        controls.enabled = true;
      } else {
        controls.detach();
        controls.enabled = false;
      }
    }
  }, [activeStudio, selectedProp, selectedPropFamilyId, hasSelectedProp, selectedFamilyId, selectedGroupId]);

  // Synchronisation du mode et du snap
  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    controls.setMode(gizmoMode);
    if (snapEnabled) {
      controls.setTranslationSnap(0.25);
      controls.setRotationSnap(THREE.MathUtils.degToRad(15));
    } else {
      controls.setTranslationSnap(null);
      controls.setRotationSnap(null);
    }
  }, [gizmoMode, snapEnabled]);

  // Synchronisation de la position et de l'orientation de l'objet depuis le store
  useEffect(() => {
    // Si l'utilisateur est en train de manipuler le gizmo, ne pas écraser la transformation en cours
    if (isDraggingGizmoRef.current) return;

    const mesh = meshRef.current;
    if (!mesh) return;

    let pos: Vec3;
    let rotToUse: Vec3;

    if (activeStudio === 'prop') {
      if (selectedProp) {
        pos = gtaToThree(selectedProp.coords);
        rotToUse = selectedProp.rotation || { x: 0, y: 0, z: selectedProp.heading || 0 };
      } else if (selectedPropFamilyId) {
        const famProps = Object.values(usePropStore.getState().props).filter(
          (p) => p.familyId === selectedPropFamilyId || (p.group === selectedPropFamilyId && !p.familyId)
        );
        if (famProps.length === 0) return;
        let sumX = 0, sumY = 0, sumZ = 0;
        for (const fp of famProps) {
          sumX += fp.coords.x;
          sumY += fp.coords.y;
          sumZ += fp.coords.z;
        }
        pos = gtaToThree({ x: sumX / famProps.length, y: sumY / famProps.length, z: sumZ / famProps.length });
        rotToUse = { x: 0, y: 0, z: famProps[0].heading || famProps[0].rotation?.z || 0 };
      } else {
        return;
      }
    } else {
      pos = gtaToThree(coords);
      rotToUse = rotation || { x: 0, y: 0, z: heading };
    }

    const euler = gtaRotationToEuler(rotToUse);

    worldPosRef.current.set(pos.x, pos.y, pos.z);
    worldQuatRef.current.setFromEuler(new THREE.Euler(euler[0], euler[1], euler[2], EULER_ORDER));

    mesh.position.copy(worldPosRef.current).sub(camWorldRef.current);
    mesh.quaternion.copy(worldQuatRef.current);
  }, [activeStudio, selectedProp, selectedPropFamilyId, coords, heading, rotation]);

  // Écoute des messages caméra et synchronisation depuis Lua
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;
      if (!data) return;

      if (data.action === 'camera' && cameraRef.current) {
        const cam = cameraRef.current;
        const nextCam = gtaToThree(data.position as Vec3);
        const next = new THREE.Vector3(nextCam.x, nextCam.y, nextCam.z);
        const forward = gtaToThree(data.forward as Vec3);

        const mesh = meshRef.current;
        const controls = controlsRef.current;

        if (controls && controls.dragging) {
          worldPosRef.current.copy(mesh.position).add(camWorldRef.current);
          worldQuatRef.current.copy(mesh.quaternion);
          const moved = camWorldRef.current.distanceToSquared(next) > 0.000001;
          camWorldRef.current.copy(next);
          if (moved) mesh.position.copy(worldPosRef.current).sub(camWorldRef.current);
        } else {
          camWorldRef.current.copy(next);
          mesh.position.copy(worldPosRef.current).sub(camWorldRef.current);
          mesh.quaternion.copy(worldQuatRef.current);
        }

        cam.position.set(0, 0, 0);
        cam.up.set(0, 1, 0);
        const target = new THREE.Vector3(forward.x, forward.y, forward.z);
        if (target.lengthSq() < 0.0001) target.set(0, 0, -1);
        cam.lookAt(target);

        cam.fov = data.fov || 48;
        cam.aspect = window.innerWidth / Math.max(1, window.innerHeight);
        cam.updateProjectionMatrix();
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // Gestion des événements souris pour l'orbite caméra, le zoom et le clic raycast
  const handlePointerDown = (e: React.PointerEvent) => {
    isPointerDownRef.current = true;
    pointerStartPosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isPointerDownRef.current = false;

    const dx = Math.abs(e.clientX - pointerStartPosRef.current.x);
    const dy = Math.abs(e.clientY - pointerStartPosRef.current.y);

    // Clic gauche simple dans le monde 3D sans glissement ni manipulation du gizmo
    if (dx < 6 && dy < 6 && !isDraggingGizmoRef.current && e.button === 0) {
      if (useLightStore.getState().activeStudio === 'prop') {
        fetchNui('propStudio:worldClick', {
          screenX: e.clientX,
          screenY: e.clientY,
          screenWidth: window.innerWidth,
          screenHeight: window.innerHeight,
        }).catch(() => {});
      }
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    // Si l'utilisateur clique en dehors des poignées du Gizmo et bouge la souris -> orbite de la caméra
    if (isPointerDownRef.current && !isDraggingGizmoRef.current) {
      fetchNui('rotateCamera', {
        x: e.movementX,
        y: e.movementY,
      }).catch(() => {});
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    // Zoom / dézoom caméra dans NUI (évite 100% tout changement d'arme GTA)
    if (e.cancelable) {
      e.preventDefault();
    }
    fetchNui('zoomCamera', { delta: e.deltaY }).catch(() => {});
  };

  // Raccourcis clavier globaux
  useEffect(() => {
    if (!visible) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

      activeKeysRef.current.add(e.code.toLowerCase());

      // 8.6 Duplicate — LShift : Duplique instantanément le prop sélectionné
      const isLShift = e.code === 'ShiftLeft' || (e.key === 'Shift' && e.location !== 2) || (e.which === 16 && e.location !== 2);
      if (isLShift && !e.repeat) {
        const state = useLightStore.getState();
        const isFreecamMoving = state.cameraMode === 'freecam' && (
          activeKeysRef.current.has('keyw') ||
          activeKeysRef.current.has('keyz') ||
          activeKeysRef.current.has('keys') ||
          activeKeysRef.current.has('keya') ||
          activeKeysRef.current.has('keyq') ||
          activeKeysRef.current.has('keyd') ||
          activeKeysRef.current.has('space')
        );

        if (!isFreecamMoving) {
          if (state.activeStudio === 'prop') {
            e.preventDefault();
            usePropStore.getState().duplicateSelectedProp();
            return;
          }

          if (state.hasSelectedProp || state.selectedLightId) {
            e.preventDefault();
            state.duplicateSelectedLight();
            return;
          } else {
            state.showToast("Sélectionnez d'abord un prop pour le dupliquer (LShift)", 'info');
          }
        }
      }

      if (e.key === 'Delete' || e.key === 'Backspace') {
        const state = useLightStore.getState();
        if (state.activeStudio === 'prop') {
          e.preventDefault();
          usePropStore.getState().deleteSelectedProp();
          return;
        }

        if (state.hasSelectedProp && state.selectedLightId) {
          e.preventDefault();
          state.deleteSelectedLight();
          return;
        }
      }

      const key = e.key.toLowerCase();
      if (key === 'e' || key === '1') {
        e.preventDefault();
        useLightStore.getState().setGizmoMode('translate');
      } else if (key === 'r' || key === '2') {
        e.preventDefault();
        useLightStore.getState().setGizmoMode('rotate');
      } else if (key === 'x') {
        e.preventDefault();
        useLightStore.getState().toggleSnap();
      } else if (key === 'f') {
        e.preventDefault();
        useLightStore.getState().toggleCameraMode();
      } else if (key === 'g') {
        e.preventDefault();
        if (useLightStore.getState().activeStudio === 'prop') {
          usePropStore.getState().snapGround();
        } else {
          useLightStore.getState().requestGroundSnap();
        }
      } else if (key === 'i') {
        if (useLightStore.getState().activeStudio === 'prop') {
          e.preventDefault();
          usePropStore.getState().applyPhysics();
        }
      } else if (key === 'c') {
        e.preventDefault();
        useLightStore.getState().toggleCatalog();
      } else if (e.key === 'F5' || key === 'escape') {
        e.preventDefault();
        // Protection contre le rebond de touche à l'ouverture via F5
        if (e.key === 'F5' && (Date.now() - openedAt) < 600) {
          return;
        }
        useLightStore.getState().requestCancel();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      activeKeysRef.current.delete(e.code.toLowerCase());
    };

    const handleBlur = () => {
      activeKeysRef.current.clear();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('blur', handleBlur);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('blur', handleBlur);
    };
  }, [visible, openedAt]);

  return (
    <div
      ref={mountRef}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      onWheel={handleWheel}
      onContextMenu={(e) => e.preventDefault()}
      className="absolute inset-0 w-full h-full pointer-events-auto z-10 overflow-hidden"
    />
  );
};
