import Galaxy from ".";
import * as THREE from "three";

export default class Camera {
  constructor() {
    this.setInstance();
  }

  setInstance() {
    this.galaxy = new Galaxy();
    this.instance = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    this.instance.position.set(0, 0, 4);

    if (this.galaxy.control) this.galaxy.control.instance.update();
  }

  resize() {
    this.instance.aspect = window.innerWidth / window.innerHeight;
    this.instance.updateProjectionMatrix();
  }
}
