"use strict";
const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (e) => {
  outputRef.textContent = e.target.value === "" ? "незнакомец" : e.target.value;
});
