import Galaxy from ".";
import * as THREE from "three";

export default class Camera {
  constructor() {
    // this.galaxy = new Galaxy();

    this.setInstance();
  }

  setInstance() {
    this.instance = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    this.instance.position.set(0, 0, 8);
    // this.galaxy.scene.add(this.instance);
  }

  resize() {
    this.instance.aspect = window.innerWidth / window.innerHeight;
    this.instance.updateProjectionMatrix();
  }
}
