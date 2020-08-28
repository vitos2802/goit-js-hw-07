"use strict";
const inputRef = document.querySelector("#validation-input");

const hendleValidation = () => {
  if (inputRef.value.length !== +inputRef.dataset.length) {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
  if (inputRef.value.length === +inputRef.dataset.length) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  }
};

inputRef.addEventListener("blur", hendleValidation);
