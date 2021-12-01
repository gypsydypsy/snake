import { snakeSpeed, update as updateSnake, draw as drawSnake, snakeBitesItself, snakeOutOfGrid } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { displayGameScreen, displayEndingScreen } from './display.js';

let lastRenderTime = 0
let gameOver = false;
const gameGrid = document.getElementById('game-grid')
let difficulty;

const play = (currentTime) => {
    if (gameOver){
        displayEndingScreen();
        return
    }

    window.requestAnimationFrame(play);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

    if (secondsSinceLastRender < 1 / difficulty) return;
    
    lastRenderTime = currentTime;
    update()
    draw()
}

const update = () => {
    checkDeath();
    updateSnake();
    updateFood();
}

const draw = () => {
    drawSnake(gameGrid);
    drawFood(gameGrid)
}

const checkDeath = () => {
    if (snakeBitesItself() || snakeOutOfGrid()){
        gameOver = true;
    }
}

const setDifficulty = (e) => {
    difficulty = e.target.value;
}

const resetGame = () => {
    gameGrid.innerHTML = '';
}

export const initGame = (e) => {
    setDifficulty(e);
    resetGame();
    displayGameScreen();
    window.requestAnimationFrame(play)
}

