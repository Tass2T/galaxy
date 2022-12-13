import * as THREE from "three";
import Galaxy from ".";
import vertexShader from "./shaders/stars/vertex.glsl";
import fragmentShader from "./shaders/stars/fragment.glsl";

export default class Stars {
  constructor() {
    this.galaxy = new Galaxy();
    this.starCount = 200;
    this.geometry = new THREE.BufferGeometry();
    this.material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      depthTest: false,
      transparent: true,
    });
    this.stars = null;

    this.createStarList();
  }

  createStarList() {
    this.positions = [];
    this.colors = [];
    this.sizes = [];

    this.radius = 13;

    for (let i = 0; i < this.starCount; i++) {
      this.positions.push((Math.random() - 0.5) * this.radius);
      this.positions.push((Math.random() - 0.5) * this.radius);
      this.positions.push((Math.random() - 0.5) * this.radius);

      this.colors.push(Math.random(), Math.random(), Math.random());

      this.sizes.push(0.27);
    }

    this.geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(this.positions, 3)
    );
    this.geometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(this.colors, 3)
    );
    this.geometry.setAttribute(
      "size",
      new THREE.Float32BufferAttribute(this.sizes, 1).setUsage(
        THREE.DynamicDrawUsage
      )
    );

    this.stars = new THREE.Points(this.geometry, this.material);
    this.galaxy.scene.add(this.stars);
  }

  update() {
    this.stars.rotateOnAxis(new THREE.Vector3(1, 0, 3), 0.00004) *
      this.galaxy.times.delta;
  }
}
