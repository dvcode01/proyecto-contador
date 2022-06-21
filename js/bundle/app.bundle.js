"use strict";

var increaseBtn = document.querySelector('.increase');
var decrementBtn = document.querySelector('.decrement');
var resetBtn = document.querySelector('.reset');
var numberElement = document.querySelector('.number');
var counter = 0;
eventListener();

function eventListener() {
  increaseBtn.addEventListener('click', increaseCounter);
  decrementBtn.addEventListener('click', decrementCounter);
  resetBtn.addEventListener('click', resetCounter);
}

numberElement.textContent = counter;

function increaseCounter() {
  counter++;
  numberElement.textContent = "".concat(counter);
}

function decrementCounter() {
  counter--;
  numberElement.textContent = "".concat(counter);
}

function resetCounter() {
  counter = 0;
  numberElement.textContent = "".concat(counter);
}