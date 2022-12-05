import * as THREE from "three";
import Galaxy from ".";

export default class Stars {
  constructor(numberOfStar) {
    this.galaxy = new Galaxy();
    this.geometry = new THREE.BufferGeometry();
    this.material = new THREE.PointsMaterial({
      size: 0.01,
      color: 0xffffff,
    });
    this.numberOfStar = numberOfStar;

    this.createStarList();
  }

  createStarList() {
    this.positions = new Float32Array(this.numberOfStar * 3);
    this.colors = new Float32Array(this.numberOfStar * 3);

    for (let i = 0; i < this.positions.length; i += 3) {
      this.positions[i] = (Math.random() - 0.5) * 5;
      this.positions[i + 1] = (Math.random() - 0.5) * 5;
      this.positions[i + 2] = Math.random() + 1 * 4;
    }

    this.geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(this.positions, 3)
    );

    this.stars = new THREE.Points(this.geometry, this.material);
    this.galaxy.scene.add(this.stars);
  }
}
