import * as THREE from "three";

export type ExplodedMap = Record<string, THREE.Vector3>;

export const explodedOffsets: ExplodedMap = {
  wheel_fl: new THREE.Vector3(-1.6, -0.2, 1.8),
  wheel_fr: new THREE.Vector3(1.6, -0.2, 1.8),
  wheel_rl: new THREE.Vector3(-1.8, -0.2, -1.8),
  wheel_rr: new THREE.Vector3(1.8, -0.2, -1.8),

  door_l: new THREE.Vector3(-2.0, 0.8, 0.2),
  door_r: new THREE.Vector3(2.0, 0.8, 0.2),

  mirror_l: new THREE.Vector3(-1.4, 0.8, 1.0),
  mirror_r: new THREE.Vector3(1.4, 0.8, 1.0),

  wing: new THREE.Vector3(0, 1.4, -2.6),
  exhaust: new THREE.Vector3(0, 0.5, -1.8),
  front_hood: new THREE.Vector3(0, 0.8, 2.2),

  body: new THREE.Vector3(0, 0, 0),
};
