import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import {
  createGallery,
  clearGallery,
} from "./js/render-functions.js";

import { getImagesByQuery } from "./js/pixabay-api.js";

const form = document.querySelector(".form");

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

  try {
    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {
      iziToast.warning({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
      });
      return;
    }

    createGallery(data.hits);
  } catch (err) {
    iziToast.error({
      message: "Error fetching images",
      position: "topRight",
    });
    console.error(err);
  } finally {
    form.reset();
  }
}
