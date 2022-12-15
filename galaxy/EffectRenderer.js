import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import Galaxy from ".";
import vertexShader from "./shaders/postProcessing/vertex.glsl";
import fragmentShader from "./shaders/postProcessing/fragment.glsl";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";

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

    this.pass = new ShaderPass({
      uniforms: {
        tDiffuse: { value: null },
      },
      vertexShader,
      fragmentShader,
    });
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
