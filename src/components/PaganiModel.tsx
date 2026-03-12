"use client";

import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PaganiModel() {
  const root = useRef<Group>(null);
  const modelWrap = useRef<Group>(null);
  const { scene } = useGLTF("/models/pagani-huayra-r.glb");

  useFrame((_, delta) => {
    if (!modelWrap.current) return;
    modelWrap.current.rotation.y += delta * 0.12;
  });

  useEffect(() => {
    if (!root.current) return;

    const scrollTarget = document.querySelector(".scroll-space");
    if (!scrollTarget) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollTarget,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.to(
      root.current.position,
      {
        y: -0.04,
        z: -0.28,
        ease: "none",
        duration: 1,
      },
      0,
    );

    tl.to(
      root.current.rotation,
      {
        x: -0.025,
        z: 0.018,
        ease: "none",
        duration: 1,
      },
      0,
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <group ref={root} position={[0, -0.9, 0]}>
      <group ref={modelWrap} scale={100} rotation={[0, -Math.PI / 5, 0]}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/pagani-huayra-r.glb");
