export default class Rectangle {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }
    //method
    distance(rectangle) {
        const result = Math.sqrt(Math.pow(this.x - rectangle.x, 2)+
                        Math.pow(this.y - rectangle.y, 2))
        return Math.floor(result * 1000) / 1000
    }
}