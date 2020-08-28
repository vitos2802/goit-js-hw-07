"use strict";
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsList = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();

const createIngredientsItem = (ingredient) => {
  const IngredientItem = document.createElement("li");
  IngredientItem.textContent = ingredient;
  return IngredientItem;
};

const IngredientItems = ingredients.forEach((ingredient) =>
  fragment.appendChild(createIngredientsItem(ingredient))
);
ingredientsList.appendChild(fragment);
