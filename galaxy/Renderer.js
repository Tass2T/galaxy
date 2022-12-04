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
      antialias: true,
    });

    this.resize();
    this.instance.setClearColor("#211d20");
  }

  render() {
    this.instance.render(this.galaxy.scene, this.galaxy.camera.instance);
  }

  resize() {
    this.instance.setSize(this.galaxy.sizes.width, this.galaxy.sizes.heigth);
    this.instance.setPixelRatio(this.galaxy.sizes.pixelRatio);
  }
}
