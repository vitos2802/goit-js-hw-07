"use strict";
const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

const hendleFontSize = () => (textRef.style.fontSize = inputRef.value + "px");

inputRef.addEventListener("input", hendleFontSize);
