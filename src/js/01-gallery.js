import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line

// Change code below this line

const createDynamicGallery = document.querySelector('.gallery');

createDynamicGalleryMarkup();

let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

function createDynamicGalleryMarkup() {
  const galleryItemsEl = galleryItems
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
    .join('');

  createDynamicGallery.insertAdjacentHTML('beforeend', galleryItemsEl);
}

createDynamicGallery.style.listStyle = 'none';

console.log(galleryItems);
