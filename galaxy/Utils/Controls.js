import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Galaxy from "..";

export default class Controls {
  constructor() {
    this.galaxy = new Galaxy();
    this.instance = new OrbitControls(
      this.galaxy.camera.instance,
      this.galaxy.canvas
    );

    this.instance.enableDamping = true;
  }

  update() {
    this.instance.update();
  }
}
