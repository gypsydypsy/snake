
let inputDirection = {x: 0, y: 1};
let lastInput;

const changeDirection = (e) => {
    switch(e.key) {
        case ('ArrowUp') : 
            if (lastInput == 'down') break;
            inputDirection = {x: 0, y: -1};
            lastInput = 'up'
            break;
        case ('ArrowDown') : 
        if (lastInput == 'up') break;
            inputDirection = {x: 0, y: 1};
            lastInput = 'down'
            break;
        case ('ArrowLeft') : 
            if (lastInput == 'right') break;
            inputDirection = {x: -1, y: 0};
            lastInput = 'left'
            break;
        case ('ArrowRight') : 
            if (lastInput == 'left') break;
            inputDirection = {x: 1, y: 0};
            lastInput = 'right'
            break;
    }
}

export const getInputDirection = () => {
    return inputDirection;
}

window.addEventListener('keydown', changeDirection)
