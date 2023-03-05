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
const descriptionInput = document.getElementById("description");
const readInput = document.getElementById("read");

//bookshelf
const bookshelf = document.querySelector(".bookshelf");
const cardIconRow = document.querySelector(".card-icon-row");

let myLibrary = [];

//Book constructor
function Book(title, read, author = "", description = "") {
  this.title = title;
  this.read = read;
  this.author = author;
  this.description = description;
}

//assumes inputs are filled
function addBookToLibrary() {
  let myBook = new Book(
    titleInput.value,
    readInput.checked,
    authorInput.value,
    descriptionInput.value
  );

  //add to array
  myLibrary.push(myBook);

  let bookCard = document.createElement("div");
  bookCard.classList.add("book-card");

  //create sub-elements
  const cardTitle = document.createElement("h3");
  cardTitle.innerText = myBook.title;
  const cardAuthor = document.createElement("h5");
  cardAuthor.innerText = myBook.author;
  const cardDescription = document.createElement("p");
  cardDescription.innerText = myBook.description;

  bookCard.appendChild(cardTitle);
  bookCard.appendChild(cardAuthor);
  bookCard.appendChild(cardDescription);
  bookCard.appendChild(cardIconRow.cloneNode(true));

  bookshelf.append(bookCard);
}

function removeBookFromLibrary() {}

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

  addBookToLibrary();

  //hide modal
  modal.style.visibility = "hidden";
  modal.style.display = "none";
});

/*    button animations    */
const eye = document.querySelector(".eye-icon");

eye.addEventListener("click", (e) => {});
