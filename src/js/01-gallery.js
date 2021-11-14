// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';




const addgallery = document.querySelector(".gallery");

const galleryString = galleryItems.map(({ preview, original, description }) =>
    `<a class="gallery__item" href="${original}">
  
  <img class="gallery__image" src="${preview}" alt="${description}" />

</a>`).join(" ");

addgallery.insertAdjacentHTML(`beforeend`, galleryString);




addgallery.addEventListener("click", (event) => {
event.preventDefault();
    if (event.target.tagName !== "IMG") return;
    
    const origImg = event.target;
    
    
    const lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt",captionDelay: 250 , captionPosition: ""});

    lightbox.show();
    
   });
