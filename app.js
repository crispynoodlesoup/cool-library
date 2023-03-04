const addBook = document.querySelector(".add-book");
const submitBook = document.querySelector(".submit-book");
const cancel = document.querySelector(".cancel");
const modal = document.querySelector(".modal");

addBook.addEventListener("click", (e) => {
  modal.style.visibility = "visible";
  modal.style.display = "grid";
});

submitBook.addEventListener("click", (e) => {
  modal.style.visibility = "hidden";
  modal.style.display = "none";
});

cancel.addEventListener("click", (e) => {
  modal.style.visibility = "hidden";
  modal.style.display = "none";
});
