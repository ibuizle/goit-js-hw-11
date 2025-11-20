import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export const gallery = document.querySelector(".gallery");
export const loader = document.querySelector(".loader");

// Create SimpleLightbox instance
export const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      (img) => `
      <li class="gallery-item">
        <a href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags}">
        </a>
        <ul class="img-info">
          <li><b>Likes:</b> ${img.likes}</li>
          <li><b>Views:</b> ${img.views}</li>
          <li><b>Comments:</b> ${img.comments}</li>
          <li><b>Downloads:</b> ${img.downloads}</li>
        </ul>
      </li>
    `
    )
    .join("");

  gallery.insertAdjacentHTML("beforeend", markup);
  lightbox.refresh(); // refresh SimpleLightbox
}

export function clearGallery() {
  gallery.innerHTML = "";
}

export function showLoader() {
  loader.style.display = "block";
}

export function hideLoader() {
  loader.style.display = "none";
}
