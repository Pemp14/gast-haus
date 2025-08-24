import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showStartButton, setShowStartButton] = useState(false);
  const sceneRef = useRef<{
    scene?: THREE.Scene;
    camera?: THREE.PerspectiveCamera;
    renderer?: THREE.WebGLRenderer;
    particles?: THREE.Points;
    animationId?: number;
    time: number;
    shockwaves: Array<{
      t0: number;
      amplitude: number;
      speed: number;
      width: number;
      decay: number;
    }>;
  }>({ time: 0, shockwaves: [] });

  useEffect(() => {
    // Показать кнопку Start через 5 секунд
    const timer = setTimeout(() => {
      setShowStartButton(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const particleCount = 8000;

    // Инициализация Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1500);
    camera.position.z = 90;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    sceneRef.current.scene = scene;
    sceneRef.current.camera = camera;
    sceneRef.current.renderer = renderer;

    // Создание звездообразной формы
    const createStarPath = (particleIndex: number, totalParticles: number) => {
      const numStarPoints = 5;
      const outerRadius = 35;
      const innerRadius = 15;
      const scale = 1.0;
      const zDepth = 4;

      const starVertices: THREE.Vector2[] = [];
      for (let i = 0; i < numStarPoints; i++) {
        let angle = (i / numStarPoints) * Math.PI * 2 - Math.PI / 2;
        starVertices.push(new THREE.Vector2(outerRadius * Math.cos(angle), outerRadius * Math.sin(angle)));
        angle += Math.PI / numStarPoints;
        starVertices.push(new THREE.Vector2(innerRadius * Math.cos(angle), innerRadius * Math.sin(angle)));
      }

      const numSegments = starVertices.length;
      const t_path = (particleIndex / totalParticles) * numSegments;
      const segmentIndex = Math.floor(t_path) % numSegments;
      const segmentProgress = t_path - Math.floor(t_path);

      const startVertex = starVertices[segmentIndex];
      const endVertex = starVertices[(segmentIndex + 1) % numSegments];

      const x = THREE.MathUtils.lerp(startVertex.x, endVertex.x, segmentProgress);
      const y = THREE.MathUtils.lerp(startVertex.y, endVertex.y, segmentProgress);
      const z = Math.sin((particleIndex / totalParticles) * Math.PI * 4) * (zDepth / 2);

      const jitterStrength = 0.2;
      return new THREE.Vector3(
        x * scale + (Math.random() - 0.5) * jitterStrength,
        y * scale + (Math.random() - 0.5) * jitterStrength,
        z + (Math.random() - 0.5) * jitterStrength * 0.5
      );
    };

    // Создание системы частиц
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const targetPositions = new Float32Array(particleCount * 3);
    const disintegrationOffsets = new Float32Array(particleCount * 3);

    const emeraldColors = [
      new THREE.Color(0x00ff7f),
      new THREE.Color(0x3cb371),
      new THREE.Color(0x2e8b57),
      new THREE.Color(0x00fa9a),
      new THREE.Color(0x98fb98)
    ];

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const pos = createStarPath(i, particleCount);

      positions[i3] = pos.x;
      positions[i3 + 1] = pos.y;
      positions[i3 + 2] = pos.z;

      targetPositions[i3] = pos.x;
      targetPositions[i3 + 1] = pos.y;
      targetPositions[i3 + 2] = pos.z;

      // Цвета частиц
      const t = i / particleCount;
      const colorProgress = (t * emeraldColors.length * 1.5) % emeraldColors.length;
      const colorIndex1 = Math.floor(colorProgress);
      const colorIndex2 = (colorIndex1 + 1) % emeraldColors.length;
      const blendFactor = colorProgress - colorIndex1;

      const color1 = emeraldColors[colorIndex1];
      const color2 = emeraldColors[colorIndex2];
      const baseColor = new THREE.Color().lerpColors(color1, color2, blendFactor);
      const color = baseColor.clone().multiplyScalar(0.65 + Math.random() * 0.55);

      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      sizes[i] = 0.65 + Math.random() * 0.6;

      // Смещения для дезинтеграции
      const offsetStrength = 30 + Math.random() * 40;
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.acos(2 * Math.random() - 1);

      disintegrationOffsets[i3] = Math.sin(theta) * Math.cos(phi) * offsetStrength;
      disintegrationOffsets[i3 + 1] = Math.sin(theta) * Math.sin(phi) * offsetStrength;
      disintegrationOffsets[i3 + 2] = Math.cos(theta) * offsetStrength * 0.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('targetPosition', new THREE.BufferAttribute(targetPositions, 3));
    geometry.setAttribute('disintegrationOffset', new THREE.BufferAttribute(disintegrationOffsets, 3));

    // Создание текстуры частиц
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      const size = 64;
      canvas.width = size;
      canvas.height = size;
      const context = canvas.getContext('2d')!;

      const centerX = size / 2;
      const centerY = size / 2;
      const outerRadius = size * 0.45;
      const innerRadius = size * 0.20;
      const numPoints = 5;

      context.beginPath();
      context.moveTo(centerX, centerY - outerRadius);

      for (let i = 0; i < numPoints; i++) {
        const outerAngle = (i / numPoints) * Math.PI * 2 - Math.PI / 2;
        context.lineTo(
          centerX + outerRadius * Math.cos(outerAngle),
          centerY + outerRadius * Math.sin(outerAngle)
        );

        const innerAngle = outerAngle + (Math.PI / numPoints);
        context.lineTo(
          centerX + innerRadius * Math.cos(innerAngle),
          centerY + innerRadius * Math.sin(innerAngle)
        );
      }

      context.closePath();

      const gradient = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, outerRadius);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.3, 'rgba(255,255,220,0.9)');
      gradient.addColorStop(0.6, 'rgba(255,200,150,0.6)');
      gradient.addColorStop(1, 'rgba(255,150,0,0)');

      context.fillStyle = gradient;
      context.fill();

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const texture = createParticleTexture();
    const material = new THREE.PointsMaterial({
      size: 2.8,
      map: texture,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
      alphaTest: 0.01
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    sceneRef.current.particles = particles;

    // Функция анимации
    const animate = () => {
      sceneRef.current.time += 0.02;
      const time = sceneRef.current.time;

      if (particles) {
        const positions = particles.geometry.attributes.position.array as Float32Array;
        const targetPositions = particles.geometry.attributes.targetPosition.array as Float32Array;
        const particleColors = particles.geometry.attributes.color.array as Float32Array;
        const particleSizes = particles.geometry.attributes.size.array as Float32Array;
        const disintegrationOffsets = particles.geometry.attributes.disintegrationOffset.array as Float32Array;

        // Вращение
        const rotationSpeed = 0.0008;
        const cosRot = Math.cos(rotationSpeed);
        const sinRot = Math.sin(rotationSpeed);

        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          const tx = targetPositions[i3];
          const ty = targetPositions[i3 + 1];
          targetPositions[i3] = tx * cosRot - ty * sinRot;
          targetPositions[i3 + 1] = tx * sinRot + ty * cosRot;
        }

        // Анимация частиц
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          const homeX = targetPositions[i3];
          const homeY = targetPositions[i3 + 1];
          const homeZ = targetPositions[i3 + 2];

          // Эффект дезинтеграции
          const disintegrationCycleTime = 10.0;
          const particleCycleOffset = (i / particleCount) * disintegrationCycleTime * 0.5;
          const cycleProgress = ((time * 0.6 + particleCycleOffset) % disintegrationCycleTime) / disintegrationCycleTime;

          let disintegrationAmount = 0;
          const stablePhaseEnd = 0.5;
          const disintegrateFullPhase = stablePhaseEnd + 0.15;
          const holdPhaseEnd = disintegrateFullPhase + 0.1;

          if (cycleProgress < stablePhaseEnd) {
            disintegrationAmount = 0;
          } else if (cycleProgress < disintegrateFullPhase) {
            disintegrationAmount = (cycleProgress - stablePhaseEnd) / (disintegrateFullPhase - stablePhaseEnd);
          } else if (cycleProgress < holdPhaseEnd) {
            disintegrationAmount = 1.0;
          } else {
            disintegrationAmount = 1.0 - ((cycleProgress - holdPhaseEnd) / (1.0 - holdPhaseEnd));
          }

          disintegrationAmount = Math.sin(disintegrationAmount * Math.PI * 0.5);

          let currentTargetX = homeX;
          let currentTargetY = homeY;
          let currentTargetZ = homeZ;
          let currentLerpFactor = 0.085;

          if (disintegrationAmount > 0.001) {
            currentTargetX += disintegrationOffsets[i3] * disintegrationAmount;
            currentTargetY += disintegrationOffsets[i3 + 1] * disintegrationAmount;
            currentTargetZ += disintegrationOffsets[i3 + 2] * disintegrationAmount;
            currentLerpFactor = 0.045 + disintegrationAmount * 0.02;
          }

          positions[i3] += (currentTargetX - positions[i3]) * currentLerpFactor;
          positions[i3 + 1] += (currentTargetY - positions[i3 + 1]) * currentLerpFactor;
          positions[i3 + 2] += (currentTargetZ - positions[i3 + 2]) * currentLerpFactor;

          // Обновление цветов и размеров
          const t = i / particleCount;
          const colorProgress = (t * emeraldColors.length * 1.5 + time * 0.05) % emeraldColors.length;
          const colorIndex1 = Math.floor(colorProgress);
          const colorIndex2 = (colorIndex1 + 1) % emeraldColors.length;
          const blendFactor = colorProgress - colorIndex1;

          const color1 = emeraldColors[colorIndex1];
          const color2 = emeraldColors[colorIndex2];
          const baseColor = new THREE.Color().lerpColors(color1, color2, blendFactor);
          const color = baseColor.clone().multiplyScalar(0.65 + Math.random() * 0.55);

          let brightnessFactor = (0.65 + Math.sin((i / particleCount) * Math.PI * 7 + time * 1.3) * 0.35) * (1 - disintegrationAmount * 0.75);
          brightnessFactor *= (0.85 + Math.sin(time * 7 + i * 0.5) * 0.15);

          particleColors[i3] = color.r * brightnessFactor;
          particleColors[i3 + 1] = color.g * brightnessFactor;
          particleColors[i3 + 2] = color.b * brightnessFactor;

          let currentSize = (0.65 + Math.random() * 0.6) * (1 - disintegrationAmount * 0.9);
          currentSize *= (0.8 + Math.sin(time * 5 + i * 0.3) * 0.2);
          particleSizes[i] = Math.max(0.05, currentSize);
        }

        particles.geometry.attributes.position.needsUpdate = true;
        particles.geometry.attributes.color.needsUpdate = true;
        particles.geometry.attributes.size.needsUpdate = true;
      }

      renderer.render(scene, camera);
      sceneRef.current.animationId = requestAnimationFrame(animate);
    };

    // Обработка изменения размера окна
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (sceneRef.current.animationId) {
        cancelAnimationFrame(sceneRef.current.animationId);
      }
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div ref={containerRef} className="absolute inset-0" />
      
      {/* Градиентный оверлей */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent pointer-events-none mix-blend-screen opacity-75" />
      
      {/* Заголовок */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 pointer-events-none">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-shadow">
            Gast Haus
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-green-400 font-light tracking-wider">
            Авторская кухня в сердце Кишинёва
          </p>
        </div>
        
        {/* Кнопка Start */}
        {showStartButton && (
          <button
            onClick={onStart}
            className="pointer-events-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 
                     text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 
                     shadow-lg hover:shadow-xl transform hover:scale-105 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            Start
          </button>
        )}
      </div>
    </div>
  );
};

export default WelcomeScreen;