import * as THREE from "three";
import Galaxy from ".";

let instance = null;

export default class Stars {
  constructor() {
    if (instance) {
      return instance;
    }

    this.galaxy = new Galaxy();
    this.texture = this.getStarTexture();
    this.material = new THREE.PointsMaterial({
      size: 0.01,
      transparent: true,
      map: this.texture,
      alphaMap: this.texture,
      depthWrite: false,
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

  getStarTexture() {
    const textureLoader = new THREE.TextureLoader();
    const particleTexture = textureLoader.load("galaxy/assets/star.png");
    return particleTexture;
  }

  update() {
    this.stars.rotateOnAxis(new THREE.Vector3(1, 0, 3), 0.00005);
  }
}
