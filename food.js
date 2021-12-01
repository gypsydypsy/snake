import { snakeBody, expandSnake } from './snake.js'
import { update as updateScore } from './score.js';

export let foodPosition = {x: 11, y: 15};

export const update = () => {
    if (foodOnSnake(foodPosition)){
        /* New food position */
        foodPosition = randomFoodPosition();
        
        /* Snake expansion */
        expandSnake();

        /* Updates score */
        updateScore();
    };

}

export const draw = (gameGrid) => {
    const food = document.createElement('div');
    food.style.gridRowStart = foodPosition.y;
    food.style.gridColumnStart = foodPosition.x;
    food.classList.add('food');
    gameGrid.appendChild(food);
}

export const foodOnSnake = (position) => {
    return snakeBody.some( el => {
        return el.x === position.x && el.y === position.y
    })
}

const randomFoodPosition = () => {
    let newFoodPosition;

    while (newFoodPosition == null || foodOnSnake(newFoodPosition)) {
        newFoodPosition = {
            x: Math.ceil(Math.random() * 21),
            y: Math.ceil(Math.random() * 21)
        }
    }

    return newFoodPosition
}