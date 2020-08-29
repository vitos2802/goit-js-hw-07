"use strict";
const decrementBtn = document.querySelector("button[data-action = decrement]");
const incrementBtn = document.querySelector("button[data-action = increment]");
const value = document.querySelector("#value");

let counterValue = 0;

const increment = () => (counterValue += 1);
const decrement = () => (counterValue -= 1);

incrementBtn.addEventListener("click", (e) => {
  increment();
  value.textContent = counterValue;
});

decrementBtn.addEventListener("click", (e) => {
  if (counterValue > 0) {
    decrement();
    value.textContent = counterValue;
  }
});
