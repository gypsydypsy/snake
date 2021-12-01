import { getInputDirection } from "./input.js";

export const snakeSpeed = 5; 
export const snakeBody= [{x:11, y: 3}, {x:11, y: 2}, {x: 11, y:1}];


export const update = () => {

    const inputDirection = getInputDirection();

    /* Moving the snake +1 */
    for (let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i + 1] = {...snakeBody[i]}
    } 

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export const draw = (gameGrid) => {

    gameGrid.innerHTML = '';
    
    snakeBody.forEach(el => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = el.y;
        snakeElement.style.gridColumnStart = el.x;
        snakeElement.classList.add('snake');
        gameGrid.appendChild(snakeElement)
   })
}

export const expandSnake = () => {

    const lastSnakeElement = snakeBody[snakeBody.length - 1]

    snakeBody.push({lastSnakeElement})
}

export const snakeBitesItself = () => {

    const snakeHead = snakeBody[0];

    for (let i = 1; i < snakeBody.length; i++){
        if (snakeBody[i].x === snakeHead.x && snakeBody[i].y === snakeHead.y){
            return true;
        }
    }

    return false;
}

export const snakeOutOfGrid = () => {

    const snakeHead = snakeBody[0];

    if (snakeHead.x < 1 || snakeHead.x > 21 || snakeHead.y < 1 || snakeHead.y > 21) {
        return true;
    }

    return false;
}