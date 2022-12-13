import * as THREE from "three";
import Galaxy from ".";
import vertexShader from "./shaders/stains/vertex.glsl";
import fragmentShader from "./shaders/stains/fragment.glsl";

export default class Stains {
  constructor() {
    this.galaxy = new Galaxy();
    this.geometry = new THREE.PlaneGeometry(18, 18);
    this.setColor();
    this.material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      alphaTest: true,
      transparent: true,
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh2 = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(5, 4, -13.1);
    this.mesh2.position.set(-4, 0, -13);

    this.galaxy.scene.add(this.mesh, this.mesh2);
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
