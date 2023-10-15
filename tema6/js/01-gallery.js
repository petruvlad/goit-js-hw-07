import { galleryItems } from './gallery-items.js';

import SimpleLightbox from "simplelightbox/dist/simple-lightbox.js";

const listEl = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const listItemEl = document.createElement("li");
  listItemEl.classList.add("gallery__item");
  listItemEl.innerHTML = `<a class="gallery__link" href="${item.original}">
    <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
    />
    </a>`;

  listEl.append(listItemEl);
});

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function openImageInLightbox(event) {
  const clickedOn = event.target;

  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();
  lightbox.open();
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.close();
  }
});

