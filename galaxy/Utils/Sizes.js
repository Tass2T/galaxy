import EventEmitter from "./EventEmitter"

export default class Sizes extends EventEmitter {
    
    constructor (canvas) {

        super()

        this.handleResize(canvas)

        window.addEventListener("resize", () => {
            this.handleResize(canvas)
        })
    }

    handleResize (canvas) {
        const convasSize = canvas.getBoundingClientRect()
        this.width = convasSize.width
        this.heigth = convasSize.height
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        this.trigger('resize')
    }
}