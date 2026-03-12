"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Loader } from "@react-three/drei";
import PaganiModel from "./PaganiModel";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export default function SceneCanvas() {
  const keyLight = useRef<THREE.SpotLight>(null);
  const fillLight = useRef<THREE.PointLight>(null);
  const rimLight = useRef<THREE.DirectionalLight>(null);

  useEffect(() => {
    const scrollTarget = document.querySelector(".scroll-space");
    if (!scrollTarget) return;

    let tl: gsap.core.Timeline | null = null;

    const id = requestAnimationFrame(() => {
      if (!keyLight.current || !fillLight.current || !rimLight.current) return;

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollTarget,
          start: "top top",
          end: "+=2400",
          scrub: 1.2,
          markers: true,
        },
      });

      tl.to(keyLight.current, { intensity: 120, ease: "none", duration: 1 }, 0);
      tl.to(
        keyLight.current.color,
        { r: 1, g: 0.45, b: 0.15, ease: "none", duration: 1 },
        0.3,
      );
      tl.to(
        keyLight.current.position,
        { x: -3, y: 7, z: 1.5, ease: "none", duration: 1 },
        0.3,
      );
      tl.to(
        rimLight.current,
        { intensity: 2.5, ease: "none", duration: 1 },
        0.6,
      );
      tl.to(
        rimLight.current.color,
        { r: 0.35, g: 0.55, b: 1, ease: "none", duration: 1 },
        0.6,
      );
    });

    return () => {
      cancelAnimationFrame(id);
      tl?.scrollTrigger?.kill();
      tl?.kill();
    };
  }, []);

  return (
    <>
      <div className="canvas-wrap">
        <Canvas
          shadows
          camera={{ position: [3.8, 1.35, 4.8], fov: 30 }}
          dpr={[1, 1.75]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.4} />

          <spotLight
            ref={keyLight}
            position={[2.5, 5.5, 3]}
            angle={0.34}
            penumbra={1}
            intensity={55}
            distance={30}
            color="#ff8a3d"
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />

          <directionalLight
            ref={rimLight}
            position={[-5, 2.5, -4]}
            intensity={1.5}
            color="#ff6a2b"
          />

          <pointLight
            ref={fillLight}
            position={[4, 1.8, 4]}
            intensity={22}
            distance={16}
            color="#ff7a33"
          />
          <Environment preset="city" />

          <PaganiModel />

          <group position={[0, -1, 0]}>
            {/* corpo principal */}
            <mesh position={[0, -0.03, 0]} castShadow receiveShadow>
              <cylinderGeometry args={[2.42, 2.48, 0.08, 96]} />
              <meshStandardMaterial
                color="#0d0d10"
                roughness={0.55}
                metalness={0.28}
              />
            </mesh>

            {/* topo mais refinado */}
            <mesh position={[0, 0.01, 0]} castShadow receiveShadow>
              <cylinderGeometry args={[2.34, 2.38, 0.025, 96]} />
              <meshStandardMaterial
                color="#15161a"
                roughness={0.32}
                metalness={0.42}
              />
            </mesh>

            {/* aro luminoso sutil */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.024, 0]}>
              <ringGeometry args={[2.26, 2.34, 128]} />
              <meshBasicMaterial color="#ff8a3d" transparent opacity={0.2} />
            </mesh>
          </group>

          {/* halo interno */}
          <mesh position={[0, 1.2, -3]}>
            <circleGeometry args={[3.5, 64]} />
            <meshBasicMaterial color="#ff7a33" transparent opacity={0.02} />
          </mesh>

          {/* halo externo */}
          <mesh position={[0, 1.2, -3.05]}>
            <circleGeometry args={[6.5, 64]} />
            <meshBasicMaterial color="#ff8a3d" transparent opacity={0.04} />
          </mesh>
        </Canvas>
      </div>

      <Loader />
    </>
  );
}
