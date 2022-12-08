import * as THREE from 'three'
import Galaxy from ".";
import vertexShader from "./shaders/stains/vertex.glsl"
import fragmentShader from "./shaders/stains/fragment.glsl"

export default class Stains {
    constructor() {
        this.galaxy = new Galaxy()
        this.geometry = new THREE.PlaneGeometry(30,30)
        console.log(this.geometry);
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader
        })
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.set(0,0,-30)

        this.galaxy.scene.add(this.mesh)
    }
}