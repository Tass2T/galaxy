import * as THREE from "three";
import Galaxy from ".";

export default class Light {
  constructor() {
    this.galaxy = new Galaxy();
    this.instance = new THREE.PointLight(0xff00ff, 1, 1);
    this.instance.position.set(0, 0, 0);
    this.galaxy.scene.add(this.instance);
  }
}
