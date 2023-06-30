
// const mainDiv = document.getElementById("board")



// function chessBoard() {
//     for (let i = 0; i < 8; i++) {
//         for (let j = 0; j < 8; j++) {
//             const chess = document.createElement("div")
//             if (i % 2 == 0) {
//                 if (j % 2 == 0) {
//                     mainDiv.appendChild(chess)
//                     chess.classList.add("odd")
//                 } else {
//                     mainDiv.appendChild(chess)
//                     chess.classList.add("even")
//                 }
//             } else {
//                 if (j % 2 == 0) {
//                     mainDiv.appendChild(chess)
//                     chess.classList.add("even")

//                 } else {
//                     mainDiv.appendChild(chess)
//                     chess.classList.add("odd")
//                 }
//             }
//         }
//     }
// }

// chessBoard()
const array = []
let direction;
const mainDiv = document.getElementById("board")

for (let i = 0; i < 20; i++) {
    array.push([])
    for (let j = 0; j < 20; j++) {
        array[i].push(j)
        array[i][j] = document.createElement("div")
        mainDiv.appendChild(array[i][j])
        array[i][j].classList.add("section")

    }

}






let food = foodGenerator()
const foodBody = document.createElement("div")
foodBody.classList.add("food")
mainDiv.appendChild(foodBody)



function foodGenerator() {
    let x = Math.floor(Math.random() * array.length)
    let y = Math.floor(Math.random() * array[x].length)
    return { x, y }
}



document.addEventListener("keydown", (event) => {

    switch (event.key) {
        case "ArrowUp":
            direction = "Up"
            break;
        case "ArrowDown":
            direction = "Down"
            break;
        case "ArrowLeft":
            direction = "Left"
            break;
        case "ArrowRight":
            direction = "Right"
            break;
    }
})



let snake = [
    { x: 10, y: 10 },
]

let snakeBody = document.createElement("div")
snakeBody.classList.add("snake")



function drawSnake() {
    snake.forEach(() => {
        snakeBody = document.createElement("div")
        snakeBody.classList.add("snake")
        mainDiv.appendChild(snakeBody)
    })

}


function move() {
    snakeBody.style.left = snake[0].x * 20 + "px"
    snakeBody.style.top = snake[0].y * 20 + "px"
    switch (direction) {
        case "Up":
            snake[0].y--
            break;
        case "Down":
            snake[0].y++
            break;
        case "Left":
            snake[0].x--
            break;
        case "Right":
            snake[0].x++
            break;
        default:
            snake[0].x++
    }

    foodBody.style.left = food.x * 20 + "px"
    foodBody.style.top = food.y * 20 + "px"
}

drawSnake()


setInterval(() => {
    move()

    if (snake[0].x < -1 || snake[0].x > 20 || snake[0].y > 20 || snake[0].y < -1) {
        alert("Game over")
        snake[0].x = 10
        snake[0].y = 10
        food = foodGenerator()
    }

    if(snake[0].x == food.x && snake[0].y==food.y) {
        food = foodGenerator()
    }
}, 200)





