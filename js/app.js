const increaseBtn = document.querySelector('.increase');
const decrementBtn = document.querySelector('.decrement');
const resetBtn = document.querySelector('.reset');
const numberElement = document.querySelector('.number');
let counter = 0;

eventListener();
function eventListener(){
    increaseBtn.addEventListener('click', increaseCounter);
    decrementBtn.addEventListener('click', decrementCounter);
    resetBtn.addEventListener('click', resetCounter);
}

numberElement.textContent = counter;

function increaseCounter(){
    counter++;
    numberElement.textContent = `${counter}`;
}

function decrementCounter(){
    counter--;
    numberElement.textContent = `${counter}`;
}

function resetCounter(){
    counter = 0;
    numberElement.textContent = `${counter}`;
}

