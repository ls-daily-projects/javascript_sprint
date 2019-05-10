// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
    constructor(length, width, height) {
        this.length = length
        this.width = width
        this.height = height
    }

    calcVolume() {
        return this.length * this.width * this.height
    }

    calcSurfaceArea() {
        return (
            2 *
            (this.length * this.width +
                this.length * this.height +
                this.width * this.height)
        )
    }
}

const cuboid = new CuboidMaker(4, 5, 5)

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.calcVolume()) // 100
console.log(cuboid.calcSurfaceArea()) // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker {
    constructor(sideLength) {
        super(sideLength, sideLength, sideLength)
        this.sideLength = sideLength
    }

    calcVolume() {
        return Math.pow(this.sideLength, 3)
    }

    calcSurfaceArea() {
        return 6 * Math.pow(this.sideLength, 2)
    }
}

const cube = new CubeMaker(5)
console.log(cube.calcVolume()) // 125
console.log(cube.calcSurfaceArea()) // 150
