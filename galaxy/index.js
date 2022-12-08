import Camera from "./Camera";
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import Stars from "./Stars";
import * as THREE from "three";
import Renderer from "./Renderer";
import Controls from "./Utils/Controls";
import GUID from "./Utils/guid";
import Stains from "./Stains";

let instance = null;

export default class Galaxy {
  constructor(canvas) {
    if (instance) {
      return instance;
    }

    instance = this;

    this.canvas = canvas;
    this.starCount = 4000;
    this.scene = new THREE.Scene();
    this.sizes = new Sizes(this.canvas);
    this.times = new Time();
    this.camera = new Camera();
    this.stars = new Stars();
    this.stains = new Stains();
    this.renderer = new Renderer();

    if (process.env.NODE_ENV === "development") {
      this.control = new Controls(this.camera.instance, this.canvas);
      this.guid = new GUID();
    }

    // EVENTS
    this.sizes.on("resize", () => {
      this.resize();
    });
    this.times.on("tick", () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  update() {
    if (process.env.NODE_ENV === "development") {
      this.control.update();
    }
    this.stars.update();
    this.renderer.render();
  }
}
