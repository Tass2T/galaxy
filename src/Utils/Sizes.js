export default class Sizes {
    
    constructor (canvas) {

        const convasSize = canvas.getBoundingClientRect()

        this.width = convasSize.width
        this.heigth = convasSize.height
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        console.log(this);
    }
}