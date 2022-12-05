import EventEmitter from "./EventEmitter";

export default class Sizes extends EventEmitter {
  constructor() {
    super();

    this.handleResize();

    window.addEventListener("resize", () => {
      this.handleResize();
    });
  }

  handleResize() {
    this.width = window.innerWidth;
    this.heigth = window.innerHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    this.trigger("resize");
  }
}
