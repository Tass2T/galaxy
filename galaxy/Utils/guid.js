import * as dat from "lil-gui";
import Galaxy from "..";

export default class GUID {
  constructor() {
    this.galaxy = new Galaxy();
    this.instance = new dat.GUI();

    this.instance
      .add(this.galaxy, "starCount")
      .min(100)
      .max(10000000)
      .step(500)
      .onChange(this.galaxy.stars.createStarList);
  }
}
