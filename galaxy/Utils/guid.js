import * as dat from "lil-gui";
import Galaxy from "..";

export default class GUID {
  constructor() {
    this.galaxy = new Galaxy();
    this.instance = new dat.GUI();

    this.makeFolders();
  }

  makeFolders() {
    // CAMERA FOLDER
    this.cameraFolder = this.instance.addFolder("Camera");
    this.cameraFolder
      .add(this.galaxy.camera.instance.position, "x")
      .min(-50)
      .max(50)
      .step(5);
    this.cameraFolder
      .add(this.galaxy.camera.instance.position, "y")
      .min(-50)
      .max(50)
      .step(5);
    this.cameraFolder
      .add(this.galaxy.camera.instance.position, "z")
      .min(-50)
      .max(50)
      .step(5);

    // CONTROL FOLDER
    this.controlFolder = this.instance.addFolder("Control");
    this.controlFolder
      .add(this.galaxy.control.instance, "autoRotate")
      .name("auto rotation");
    this.controlFolder
      .add(this.galaxy.control.instance, "autoRotateSpeed")
      .min(0.0)
      .max(10)
      .step(0.5)
      .name("auto rotation speed");
    this.controlFolder
      .add(this.galaxy.control.instance, "enableZoom")
      .name("enable zoom");
    this.controlFolder
      .add(this.galaxy.control.instance, "enableRotate")
      .name("enable rotation");
  }
}
