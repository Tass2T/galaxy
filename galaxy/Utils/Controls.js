import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as THREE from "three";
import Galaxy from "..";

export default class Controls {
  constructor() {
    this.galaxy = new Galaxy();
    this.instance = new OrbitControls(
      this.galaxy.camera.instance,
      this.galaxy.canvas
    );

    this.instance.enableDamping = true;
    this.instance.target = new THREE.Vector3(0, 0, 0);
    this.instance.update();
  }

  update() {
    this.instance.update();
  }
}
