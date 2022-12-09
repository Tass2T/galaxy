import * as THREE from "three";
import Galaxy from ".";
import vertexShader from "./shaders/stars/vertex.glsl";
import fragmentShader from "./shaders/stars/fragment.glsl";

let instance = null;

export default class Stars {
  constructor() {
    if (instance) {
      return instance;
    }

    this.galaxy = new Galaxy();
    this.material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });
    this.stars = null;

    this.createStarList();
  }

  createStarList() {
    if (!(this instanceof Stars)) {
      Object.assign(this, new Stars());
    }
    if (this.stars !== null) {
      this.galaxy.scene.remove(this.stars);
      this.stars = null;
    }

    this.positions = new Float32Array(this.galaxy.starCount * 3);

    for (let i = 0; i < this.positions.length; i += 3) {
      this.positions[i] = (Math.random() - 0.5) * 20;
      this.positions[i + 1] = (Math.random() - 0.5) * 20;
      this.positions[i + 2] = (Math.random() - 0.5) * 20;
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
