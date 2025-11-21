import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "53339323-41a78725396da037424652e11";

const loader = document.querySelector(".loader");

export function showLoader() {
  loader.classList.remove("is-hidden");
}

export function hideLoader() {
  loader.classList.add("is-hidden");
}

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    page,
    per_page: 15,
  };

  showLoader();

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    console.error("Pixabay API error:", error);
    throw error;
  } finally {
    hideLoader();
  }
}
