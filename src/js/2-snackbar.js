import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const delay = Number(event.target.elements.delay.value);
  const state = event.target.elements.state.value;

  createPromise(delay, state)
    .then((delay) => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: "topCenter",
      });
    })
    .catch((delay) => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
        position: "topCenter",
      });
    });

  event.target.reset();
}

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
