const btn = document.querySelector(".modalbtnExample");
const dummybtncontainer = document.querySelector(".modal-dummy");

const modalv1 = document.querySelector(".modal-v1");
const closeModalV1 = document.querySelector(".closeModal-v1");

btn.addEventListener("click", () => {
  modalv1.style.display = "flex";
});
closeModalV1.addEventListener("click", () => {
  modalv1.style.display = "none";
});
