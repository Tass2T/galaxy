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
      .add(this.galaxy.control.instance, "enableZoom")
      .name("enable zoom");
    this.controlFolder
      .add(this.galaxy.control.instance, "enableRotate")
      .name("enable rotation");

    // POST PROCESS FOLDER
    this.bloomFolder = this.instance.addFolder("Bloom");
    this.bloomFolder
      .add(this.galaxy.effectComposer.pass, "strength")
      .min(0.0)
      .max(3)
      .step(0.1);

    this.bloomFolder
      .add(this.galaxy.effectComposer.pass, "radius")
      .min(0.0)
      .max(1)
      .step(0.1);

    this.bloomFolder
      .add(this.galaxy.effectComposer.pass, "threshold")
      .min(0.0)
      .max(0.1)
      .step(0.01);

    console.log(this.galaxy.renderer.instance);
    this.bloomFolder
      .add(this.galaxy.renderer.instance, "toneMappingExposure")
      .min(0.0)
      .max(2)
      .step(0.1)
      .name("exposure");
  }
}
