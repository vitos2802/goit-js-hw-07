"use strict";

/* Task-01 */

console.group("Task-01");
const categories = document.querySelector("#categories");
const items = document.querySelectorAll(".item");
const categoriesQuantity = categories.children.length;
console.log(`В списке ${categoriesQuantity} категории.`);

items.forEach((item) => {
  const categorie = item.firstElementChild.textContent;
  const element = item.querySelector("ul");
  const elementQuantity = element.children.length;
  console.log(`Категория: ${categorie}`);
  console.log(`Количество элементов: ${elementQuantity}`);
});
console.groupEnd;
