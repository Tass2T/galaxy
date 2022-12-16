import Galaxy from ".";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";

export default class EffectRenderer {
  constructor() {
    this.galaxy = new Galaxy();
    this.composer = new EffectComposer(this.galaxy.renderer.instance);
    this.composer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.composer.setSize(this.galaxy.sizes.width, this.galaxy.sizes.heigth);
    this.renderPass = new RenderPass(
      this.galaxy.scene,
      this.galaxy.camera.instance
    );

    this.composer.addPass(this.renderPass);

    this.pass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    this.pass.threshold = 0.05;
    this.pass.strength = 0.7;
    this.pass.radius = 1;

    this.composer.addPass(this.pass);
  }

  render() {
    this.composer.render();
  }

  resize() {
    this.composer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.composer.setSize(this.galaxy.sizes.width, this.galaxy.sizes.heigth);
  }
}
