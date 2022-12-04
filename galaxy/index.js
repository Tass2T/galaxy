import Camera from './Camera'
import Sizes from './Utils/Sizes'
import Time from './Utils/Time'
import * as THREE from 'three'
import Renderer from './Renderer'

let instance = null

export default class Galaxy {

    constructor(canvas) {

      if (instance) {
        return instance
      }

      instance = this

      this.canvas = canvas
      this.scene = new THREE.Scene();
      this.sizes = new Sizes(this.canvas)
      this.renderer = new Renderer()
      this.times = new Time()
      this.camera = new Camera()
      

    // EVENTS
      this.sizes.on('resize', () => {
        this.resize()
      })
      this.times.on('tick', () => {
        this.update()
      })

    }
  
    resize() {
      this.camera.resize()
      this.renderer.resize()
    }

    update() {
      this.renderer.render()
    }
  }