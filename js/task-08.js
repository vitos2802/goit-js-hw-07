"use strict";
const controlsRef = document.querySelector("#controls");
const boxesRef = document.querySelector("#boxes");
const inputRef = controlsRef.querySelector("input");
const btnRenderRef = controlsRef.querySelector("button[data-action = render]");
const btnDestroyRef = controlsRef.querySelector(
  "button[data-action = destroy]"
);
const fragment = document.createDocumentFragment();

const randomColor = () => {
  const value = () => Math.round(Math.random() * 255);
  return `rgb(${value()}, ${value()}, ${value()})`;
};
const createBox = (size) => {
  const box = document.createElement("div");
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.backgroundColor = randomColor();
  return box;
};
const createBoxesInFragment = (amount) => {
  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;
    const box = createBox(size);
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
