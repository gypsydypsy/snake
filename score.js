const score = document.getElementById('score');

let numPoints = 0;

export const update = () => {
    numPoints ++;
    score.innerHTML = (numPoints < 10 ) ? `0${numPoints}`: numPoints;
    console.log(numPoints)
}
