"use strict";
const decrementBtn = document.querySelector("button[data-action = decrement]");
const incrementBtn = document.querySelector("button[data-action = increment]");
const value = document.querySelector("#value");

let counterValue = 0;

const increment = () => (counterValue += 1);
const decrement = () => (counterValue -= 1);
const valueContent = () => (value.textContent = counterValue);

incrementBtn.addEventListener("click", (e) => {
  increment();
  valueContent();
});

decrementBtn.addEventListener("click", (e) => {
  if (counterValue > 0) {
    decrement();
    valueContent();
  }
});
