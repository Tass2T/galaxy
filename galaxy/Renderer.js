import Galaxy from ".";
import * as THREE from "three";

export default class Renderer {
  constructor() {
    this.galaxy = new Galaxy();

    this.setInstance();
  }

  setInstance() {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.galaxy.canvas,
    });
    this.instance.setClearColor("#020F1D");
    this.instance.outputEncoding = THREE.sRGBEncoding;

    this.resize();
  }

  render() {
    this.instance.render(this.galaxy.scene, this.galaxy.camera.instance);
  }

  resize() {
    this.instance.setSize(this.galaxy.sizes.width, this.galaxy.sizes.heigth);
    this.instance.setPixelRatio(this.galaxy.sizes.pixelRatio);
  }
}
