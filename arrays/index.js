let radius = 1
let x = 1
let y = 1

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('drawing')
        }
    }
}

const circle = createCircle(3)
console.log(circle)

const circle2 = createCircle(2)
console.log(circle.draw())