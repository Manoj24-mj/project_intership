import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Compass, RotateCw, Eye, Sun, Moon, Sliders, Box, Layers, X, Maximize, Minimize } from 'lucide-react';

interface ThreeDViewerProps {
  onClose?: () => void;
}

export const ThreeDViewer: React.FC<ThreeDViewerProps> = ({ onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [monumentStyle, setMonumentStyle] = useState<'temple' | 'stupa' | 'palace'>('temple');
  const [isRotating, setIsRotating] = useState(true);
  const [lightingMode, setLightingMode] = useState<'sunset' | 'daylight' | 'night'>('sunset');
  const [wireframeMode, setWireframeMode] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const dirLightRef = useRef<THREE.DirectionalLight | null>(null);
  const hemiLightRef = useRef<THREE.HemisphereLight | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(12, 10, 16);
    camera.lookAt(0, 2, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 2. Studio PBR Lighting
    const hemiLight = new THREE.HemisphereLight(0xfffaed, 0x444455, 0.8);
    scene.add(hemiLight);
    hemiLightRef.current = hemiLight;

    const dirLight = new THREE.DirectionalLight(0xffeedd, 1.8);
    dirLight.position.set(15, 20, 10);
    dirLight.castShadow = true;
    scene.add(dirLight);
    dirLightRef.current = dirLight;

    // Environment floor / platform
    const floorGeo = new THREE.CylinderGeometry(12, 13, 0.6, 64);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0xd4c5a9,
      roughness: 0.85,
      metalness: 0.05,
      wireframe: wireframeMode
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.position.y = -0.3;
    scene.add(floor);

    // 3. Composite 3-12 Part Procedural Monument Group
    const monumentGroup = new THREE.Group();
    scene.add(monumentGroup);
    groupRef.current = monumentGroup;

    buildMonument(monumentGroup, monumentStyle, wireframeMode);

    // 4. Animation loop & damping
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const dt = clock.getDelta();

      if (isRotating && groupRef.current) {
        groupRef.current.rotation.y += dt * 0.35;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!container || !renderer) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [monumentStyle, wireframeMode, isFullScreen]);

  // Update lighting on mode change
  useEffect(() => {
    if (!sceneRef.current || !dirLightRef.current || !hemiLightRef.current) return;
    const scene = sceneRef.current;
    const dirLight = dirLightRef.current;
    const hemiLight = hemiLightRef.current;

    if (lightingMode === 'sunset') {
      scene.background = new THREE.Color(0xfbf7f0);
      dirLight.color.setHex(0xffaa55);
      dirLight.intensity = 2.0;
      dirLight.position.set(20, 12, 15);
      hemiLight.color.setHex(0xffeedd);
      hemiLight.groundColor.setHex(0x553322);
    } else if (lightingMode === 'daylight') {
      scene.background = new THREE.Color(0xedf5fc);
      dirLight.color.setHex(0xffffff);
      dirLight.intensity = 1.6;
      dirLight.position.set(10, 25, 10);
      hemiLight.color.setHex(0xddeeff);
      hemiLight.groundColor.setHex(0x445566);
    } else {
      // Night
      scene.background = new THREE.Color(0x0c1017);
      dirLight.color.setHex(0x88bbff);
      dirLight.intensity = 1.2;
      dirLight.position.set(-10, 15, -10);
      hemiLight.color.setHex(0x334466);
      hemiLight.groundColor.setHex(0x111122);
    }
  }, [lightingMode]);

  function buildMonument(group: THREE.Group, style: 'temple' | 'stupa' | 'palace', wireframe: boolean) {
    while (group.children.length > 0) {
      group.remove(group.children[0]);
    }

    const sandstoneMat = new THREE.MeshStandardMaterial({
      color: style === 'temple' ? 0xd9822b : style === 'stupa' ? 0xebd8b7 : 0xc25e38,
      roughness: 0.65,
      metalness: 0.1,
      wireframe
    });

    const marbleMat = new THREE.MeshStandardMaterial({
      color: 0xf5f2eb,
      roughness: 0.4,
      metalness: 0.05,
      wireframe
    });

    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      roughness: 0.3,
      metalness: 0.85,
      wireframe
    });

    const darkStoneMat = new THREE.MeshStandardMaterial({
      color: 0x544e47,
      roughness: 0.8,
      metalness: 0.1,
      wireframe
    });

    if (style === 'temple') {
      const base1 = new THREE.Mesh(new THREE.BoxGeometry(6, 0.6, 6), sandstoneMat);
      base1.position.y = 0.3;
      group.add(base1);

      const base2 = new THREE.Mesh(new THREE.BoxGeometry(5, 0.6, 5), sandstoneMat);
      base2.position.y = 0.9;
      group.add(base2);

      const hall = new THREE.Mesh(new THREE.BoxGeometry(3.6, 2.2, 3.6), marbleMat);
      hall.position.y = 2.0;
      group.add(hall);

      const shikara1 = new THREE.Mesh(new THREE.ConeGeometry(2.4, 3.0, 4), sandstoneMat);
      shikara1.position.y = 4.5;
      shikara1.rotation.y = Math.PI / 4;
      group.add(shikara1);

      const amalaka = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 0.4, 16), darkStoneMat);
      amalaka.position.y = 6.2;
      group.add(amalaka);

      const kalasha = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 16), goldMat);
      kalasha.position.y = 6.7;
      group.add(kalasha);

      for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI) / 2 + Math.PI / 4;
        const x = Math.cos(angle) * 2.1;
        const z = Math.sin(angle) * 2.1;

        const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 2.2, 12), sandstoneMat);
        pillar.position.set(x, 1.8, z);
        group.add(pillar);
      }
    } else if (style === 'stupa') {
      const base = new THREE.Mesh(new THREE.CylinderGeometry(4.2, 4.5, 0.8, 32), sandstoneMat);
      base.position.y = 0.4;
      group.add(base);

      const dome = new THREE.Mesh(new THREE.SphereGeometry(3.2, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), marbleMat);
      dome.position.y = 0.8;
      group.add(dome);

      const harmika = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.8, 1.6), darkStoneMat);
      harmika.position.y = 3.8;
      group.add(harmika);

      const yasti = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 2.5, 12), goldMat);
      yasti.position.y = 5.4;
      group.add(yasti);

      for (let i = 0; i < 3; i++) {
        const chatra = new THREE.Mesh(new THREE.CylinderGeometry(1.2 - i * 0.3, 1.2 - i * 0.3, 0.15, 24), goldMat);
        chatra.position.y = 4.6 + i * 0.6;
        group.add(chatra);
      }
    } else {
      const base = new THREE.Mesh(new THREE.BoxGeometry(7, 1.2, 5), sandstoneMat);
      base.position.y = 0.6;
      group.add(base);

      const palace = new THREE.Mesh(new THREE.BoxGeometry(4.5, 2.8, 3.5), marbleMat);
      palace.position.y = 2.6;
      group.add(palace);

      for (let i = 0; i < 4; i++) {
        const x = (i % 2 === 0 ? 1 : -1) * 2.2;
        const z = (i < 2 ? 1 : -1) * 1.7;

        const tower = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 3.5, 12), sandstoneMat);
        tower.position.set(x, 2.2, z);
        group.add(tower);

        const dome = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2), goldMat);
        dome.position.set(x, 4.1, z);
        group.add(dome);
      }
    }
  }

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div
      ref={wrapperRef}
      className={`relative bg-slate-950 overflow-hidden transition-all duration-300 ${
        isFullScreen
          ? 'fixed inset-0 z-50 w-screen h-screen rounded-none'
          : 'w-full h-[450px] sm:h-[550px] rounded-2xl shadow-xl border border-amber-900/20'
      }`}
    >
      {/* Three.js Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Title Overlay */}
      <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-sm flex items-center gap-2">
        <Compass className="w-4 h-4 text-amber-700 animate-pulse" />
        <div>
          <span className="text-xs font-bold text-slate-900 block font-serif-heading">
            Interactive 3D Monument Studio
          </span>
          <span className="text-[10px] text-slate-500 block">Procedural PBR Architecture</span>
        </div>
      </div>

      {/* Fullscreen & Close Buttons */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
        <button
          onClick={toggleFullScreen}
          className="p-2 bg-white/90 hover:bg-white text-slate-700 rounded-xl shadow-sm border border-slate-200 transition-colors"
          title={isFullScreen ? 'Exit Immersive Fullscreen' : 'Enter Immersive Fullscreen'}
        >
          {isFullScreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
        </button>

        {onClose && !isFullScreen && (
          <button
            onClick={onClose}
            className="p-2 bg-white/90 hover:bg-white text-slate-700 rounded-xl shadow-sm border border-slate-200 transition-colors"
            title="Close Viewer"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Floating Control Dock */}
      <div className={`absolute bottom-4 left-4 right-4 z-10 bg-white/92 backdrop-blur p-3 sm:p-4 rounded-xl border border-slate-200/80 shadow-lg flex flex-wrap items-center justify-between gap-3 text-xs ${isFullScreen ? 'max-w-4xl mx-auto' : ''}`}>
        {/* Style Selector */}
        <div className="flex items-center gap-1">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mr-1 hidden sm:inline">
            Style:
          </span>
          {(['temple', 'stupa', 'palace'] as const).map((style) => (
            <button
              key={style}
              onClick={() => setMonumentStyle(style)}
              className={`px-2.5 py-1.5 rounded-lg font-medium transition-colors capitalize ${
                monumentStyle === style
                  ? 'bg-amber-800 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {style}
            </button>
          ))}
        </div>

        {/* Lighting & Animation Toggles */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLightingMode(lightingMode === 'sunset' ? 'daylight' : lightingMode === 'daylight' ? 'night' : 'sunset')}
            className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg flex items-center gap-1 transition-colors"
            title="Toggle Studio Lighting"
          >
            {lightingMode === 'sunset' && <Sun className="w-3.5 h-3.5 text-amber-600" />}
            {lightingMode === 'daylight' && <Sun className="w-3.5 h-3.5 text-sky-600" />}
            {lightingMode === 'night' && <Moon className="w-3.5 h-3.5 text-indigo-600" />}
            <span className="capitalize">{lightingMode}</span>
          </button>

          <button
            onClick={() => setIsRotating(!isRotating)}
            className={`px-2.5 py-1.5 rounded-lg font-medium flex items-center gap-1 transition-colors ${
              isRotating ? 'bg-amber-100 text-amber-900 font-semibold' : 'bg-slate-100 text-slate-700'
            }`}
          >
            <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} />
            <span>{isRotating ? 'Rotating' : 'Paused'}</span>
          </button>

          <button
            onClick={() => setWireframeMode(!wireframeMode)}
            className={`px-2.5 py-1.5 rounded-lg font-medium flex items-center gap-1 transition-colors ${
              wireframeMode ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            <span>Wireframe</span>
          </button>
        </div>
      </div>
    </div>
  );
};
