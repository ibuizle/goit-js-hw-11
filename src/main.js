import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { createGallery, clearGallery } from "./js/render-functions.js";
import { getImagesByQuery } from "./js/pixabay-api.js";

const form = document.querySelector(".form");
const loader = document.querySelector(".loader");

function showLoader() {
  loader.classList.remove("is-hidden");
}

function hideLoader() {
  loader.classList.add("is-hidden");
}

form.addEventListener("submit", onSubmit);

async function onSubmit(e) {
  e.preventDefault();

  const query = e.target.elements["search-text"].value.trim();


  if (!query) {
    iziToast.error({
      message: "Enter search query!",
      position: "topRight",
    });
    return;
  }

  clearGallery();
  showLoader(); 

  try {
    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {
      iziToast.warning({
        message: "No images found. Try another query.",
        position: "topRight",
      });
      return;
    }

    createGallery(data.hits);


    form.reset();

  } catch (err) {
    iziToast.error({
      message: "Error fetching images",
      position: "topRight",
    });
    console.error(err);

  
  } finally {
    hideLoader();
  }
}
