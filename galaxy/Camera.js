import Galaxy from ".";
import * as THREE from 'three'

export default class Camera {
    constructor() {
        this.galaxy = new Galaxy();
        
        this.setInstance()
    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(35, this.galaxy.sizes.width / this.galaxy.sizes.height, 0.1, 100)
        this.instance.position.set(6,4,8)

        this.galaxy.scene.add(this.instance)
    }

    resize() {
        this.instance.aspect = this.galaxy.sizes.width / this.galaxy.sizes.height
        this.instance.updateProjectionMatrix()
    }
}