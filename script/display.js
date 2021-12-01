import { initGame } from './game.js'

/* Dom Elements */

const introScreen = document.getElementById('intro-screen');
const gameScreen = document.getElementById('game-screen');
const endingScreen = document.getElementById('ending-screen');
const radioButtons = document.getElementsByName('level');
const retryButton = document.getElementById('retry');
const backButton = document.getElementById('back')

/* Funcs */

export const displayGameScreen = () => {
    introScreen.style.display = "none";
    gameScreen.style.display = "grid";
    endingScreen.style.display = "none";
}

export const displayEndingScreen = () => {
    introScreen.style.display = "none";
    gameScreen.style.display = "none";
    endingScreen.style.display = "block";
}


/* Events */

for (let radio of radioButtons){
    radio.addEventListener('click', initGame)
}

retryButton.addEventListener('click', () => {
    window.location = '/';
})

backButton.addEventListener('click', () => {
    window.location = '/';
})