"use strict";
const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector("#gallery");
const createPictureSrc = (img, src) => img.setAttribute("src", src);
const createPictureAlt = (img, alt) => img.setAttribute("alt", alt);

const createGalleryItems = (image) => {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");
  const picture = document.createElement("img");
  picture.classList.add("gallery__img");
  createPictureSrc(picture, image.url);
  createPictureAlt(picture, image.alt);

  listItem.appendChild(picture);
  return listItem;
};

const galleryImages = images.map((image) => {
  return createGalleryItems(image);
});
galleryRef.append(...galleryImages);
