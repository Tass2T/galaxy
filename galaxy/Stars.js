import * as THREE from "three";
import Galaxy from ".";
import vertexShader from "./shaders/stars/vertex.glsl";
import fragmentShader from "./shaders/stars/fragment.glsl";

export default class Stars {
  constructor() {
    this.galaxy = new Galaxy();
    this.material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      depthTest: false,
    });
    this.stars = null;

    this.createStarList();
  }

  createStarList() {
    this.positions = new Float32Array(this.galaxy.starCount * 3);
    this.sizes = [];

    this.radius = 20;

    for (let i = 0; i < this.positions.length; i += 3) {
      this.positions[i] = (Math.random() - 0.5) * this.radius;
      this.positions[i + 1] = (Math.random() - 0.5) * this.radius;
      this.positions[i + 2] = (Math.random() - 0.5) * this.radius;
    }

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(this.positions, 3)
    );

    this.stars = new THREE.Points(this.geometry, this.material);
    this.galaxy.scene.add(this.stars);
  }

  update() {
    this.stars.rotateOnAxis(new THREE.Vector3(1, 0, 3), 0.00008);
  }
}
