import * as THREE from "three";
import Galaxy from ".";

export default class Stars {
  constructor() {
    this.galaxy = new Galaxy();
    this.geometry = new THREE.BufferGeometry();
    this.material = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xffffff,
    });
    this.stars = null;

    this.createStarList.bind(this);
    this.createStarList();
  }

  createStarList() {
    if (this.stars != null) {
      this.galaxy.scene.remove(this.stars);
    }

    this.positions = new Float32Array(this.galaxy.starCount * 3);
    this.colors = new Float32Array(this.galaxy.starCount * 3);

    for (let i = 0; i < this.positions.length; i += 3) {
      this.positions[i] = (Math.random() - 0.5) * 20;
      this.positions[i + 1] = (Math.random() - 0.5) * 20;
      this.positions[i + 2] = (Math.random() - 0.5) * 20;
    }

    this.geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(this.positions, 3)
    );

    this.stars = new THREE.Points(this.geometry, this.material);
    this.galaxy.scene.add(this.stars);
  }
}
