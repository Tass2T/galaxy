import * as THREE from "three";
import Galaxy from ".";
import vertexShader from "./shaders/stains/vertex.glsl";
import fragmentShader from "./shaders/stains/fragment.glsl";

export default class Stains {
  constructor() {
    this.galaxy = new Galaxy();
    this.geometry = new THREE.PlaneGeometry(20, 20);
    this.setColor();
    this.material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      alphaTest: true,
      transparent: true,
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(4, 3.5, -13);

    this.galaxy.scene.add(this.mesh);
  }

  setColor() {
    const color = [];

    for (let i = 0; i < this.geometry.attributes.uv.count; i++) {
      color.push(Math.random(), Math.random(), Math.random());
    }

    this.geometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(color, 3)
    );
  }
}
