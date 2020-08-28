"use strict";
const controlsRef = document.querySelector("#controls");
const boxesRef = document.querySelector("#boxes");
const inputRef = controlsRef.querySelector("input");
const btnRenderRef = controlsRef.querySelector("button[data-action = render]");
const btnDestroyRef = controlsRef.querySelector(
  "button[data-action = destroy]"
);
const fragment = document.createDocumentFragment();

const randomColor = () => Math.round(Math.random() * 255);
const createBoxesInFragment = (amount) => {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = 30 + i * 10 + "px";
    box.style.height = 30 + i * 10 + "px";
    box.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    fragment.appendChild(box);
  }
};
const createBoxes = (amount) => {
  createBoxesInFragment(amount);
  boxesRef.appendChild(fragment);
};
const destroyBoxes = () => (boxesRef.innerHTML = "");

btnRenderRef.addEventListener("click", () => {
  createBoxes(+inputRef.value);
});

btnDestroyRef.addEventListener("click", destroyBoxes);
