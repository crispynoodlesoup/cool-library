//modal
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");

//buttons
const addBook = document.querySelector(".add-book");
const submitBook = document.querySelector(".submit-book");
const cancel = document.querySelector(".cancel");

//form inputs
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pageCountInput = document.getElementById("page-count");
const descriptionInput = document.getElementById("description");
const readInput = document.getElementById("read");

addBook.addEventListener("click", (e) => {
  modal.style.visibility = "visible";
  modal.style.display = "grid";
});

cancel.addEventListener("click", (e) => {
  modal.style.visibility = "hidden";
  modal.style.display = "none";
});

modalContent.addEventListener("submit", (e) => {
  //check title is not empty
  e.preventDefault();

  modal.style.visibility = "hidden";
  modal.style.display = "none";
});
