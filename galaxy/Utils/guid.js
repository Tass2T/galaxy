import * as dat from "lil-gui";
import Galaxy from "..";

export default class GUID {
  constructor() {
    this.galaxy = new Galaxy();
    this.instance = new dat.GUI();

    console.log(this.galaxy.camera.instance);
    const cameraFolder = this.instance.addFolder("Camera");
    cameraFolder
      .add(this.galaxy.camera.instance.position, "x")
      .min(-50)
      .max(50)
      .step(5);

    cameraFolder
      .add(this.galaxy.camera.instance.position, "y")
      .min(-50)
      .max(50)
      .step(5);

    cameraFolder
      .add(this.galaxy.camera.instance.position, "z")
      .min(-50)
      .max(50)
      .step(5);

    console.log(this.galaxy.control.instance);
    const controlFolder = this.instance.addFolder("Control");
    controlFolder
      .add(this.galaxy.control.instance, "autoRotate")
      .name("auto rotation");
    controlFolder
      .add(this.galaxy.control.instance, "autoRotateSpeed")
      .min(0.0)
      .max(10)
      .step(0.5)
      .name("auto rotation speed");
    controlFolder
      .add(this.galaxy.control.instance, "enableZoom")
      .name("enable zoom");
    controlFolder
      .add(this.galaxy.control.instance, "enableRotate")
      .name("enable rotation");
  }
}
