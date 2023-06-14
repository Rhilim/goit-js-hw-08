// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const createDynamicGallery = document.querySelector(".gallery");
createDynamicGallery.style.listStyle = 'none';
const picturesMarkup = createDynamicGalleryMarkup(galleryItems);
createDynamicGallery.insertAdjacentHTML("beforeend", picturesMarkup);

createDynamicGallery.addEventListener("click", onGalleryClick);

function createDynamicGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>
`;
    })
    .join("");
}

function onGalleryClick(evt) {
  evt.preventDefault();

  let createDynamicGallery = new SimpleLightbox(".gallery a", {
    captions: true,
    // captionSelector: "alt",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
}






























console.log(galleryItems);
