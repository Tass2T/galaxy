import * as THREE from "three";

export default class StarGenerator {
  constructor(numberOfStar) {
    this.geometry = new THREE.BufferGeometry();
    this.numberOfStar = numberOfStar;
    this.starList = [];
  }
}
