import Sizes from './src/Utils/Sizes'
import './style.css'

class Galaxy {

  constructor(canvas) {
    this.canvas = canvas
    this.sizes = new Sizes(canvas)
  }
}

const galaxy = new Galaxy(document.querySelector("#three"))
