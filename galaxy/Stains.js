import * as THREE from "three";
import Galaxy from ".";
import vertexShader from "./shaders/stains/vertex.glsl";
import fragmentShader from "./shaders/stains/fragment.glsl";

export default class Stains {
  constructor() {
    this.galaxy = new Galaxy();
    this.geometry = new THREE.PlaneGeometry(7, 7);
    this.setColor();
    this.material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
    this.stainGroup = new THREE.Group();

    this.setMeshes();
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

  setMeshes() {
    const position = [
      [-4, 1, -1],
      [0, 0, -2],
      [3, -1, -5],
      [-5, -3, -4],
      [-1, -4, -5],
    ];
    for (let i = 0; i < 5; i++) {
      this.stainGroup.add(new THREE.Mesh(this.geometry, this.material));
    }
    this.stainGroup.children.forEach((mesh, index) => {
      mesh.position.set(...position[index]);
    });
    this.galaxy.scene.add(this.stainGroup);
  }
}
