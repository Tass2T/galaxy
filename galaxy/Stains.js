import * as THREE from "three";
import Galaxy from ".";
import vertexShader from "./shaders/stains/vertex.glsl";
import fragmentShader from "./shaders/stains/fragment.glsl";

export default class Stains {
  constructor() {
    this.galaxy = new Galaxy();
    this.material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
    this.stainGroup = new THREE.Group();

    this.setMeshes();
  }

  setColor(geometry, index) {
    const colorSet = [
      [0.9, 0.0, 1.0],
      [1.0, 1.0, 0.5],
      [1.0, 1.0, 1.0],
      [0.5, 0.0, 1.0],
      [1.0, 1.0, 0.5],
    ];

    const color = [];

    for (let i = 0; i < geometry.attributes.uv.count; i++) {
      color.push(...colorSet[index]);
    }

    geometry.setAttribute("color", new THREE.Float32BufferAttribute(color, 3));
  }

  setMeshes() {
    const position = [
      [-3, 1, -1],
      [0, 0, -2],
      [3, -1, -5.1],
      [-5, -3, -4],
      [-1, -4, -5],
    ];
    for (let i = 0; i < 5; i++) {
      const geometry = new THREE.PlaneGeometry(20, 20);
      this.setColor(geometry, i);
      this.stainGroup.add(new THREE.Mesh(geometry, this.material));
    }
    this.stainGroup.children.forEach((mesh, index) => {
      mesh.position.set(...position[index]);
    });
    this.galaxy.scene.add(this.stainGroup);
  }
}
