import Camera from "./Camera";
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import Stars from "./Stars";
import * as THREE from "three";
import Renderer from "./Renderer";
import Controls from "./Utils/Controls";
import Light from "./Light";
import GUID from "./Utils/guid";

let instance = null;

export default class Galaxy {
  constructor(canvas) {
    if (instance) {
      return instance;
    }

    instance = this;

    this.canvas = canvas;
    this.starCount = 1000;
    this.scene = new THREE.Scene();
    this.sizes = new Sizes(this.canvas);
    this.times = new Time();
    this.camera = new Camera();
    this.stars = new Stars();
    this.renderer = new Renderer();
    this.light = new Light();
    this.control = new Controls(this.camera.instance, this.canvas);

    if (process.env.NODE_ENV === "development") {
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
    this.control.update();
    this.renderer.render();
  }
}
