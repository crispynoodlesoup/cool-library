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

let myLibrary = [];

//Book constructor
function Book(title, read, author = "", description = "") {
  this.title = title;
  this.read = read;
  this.author = author;
  this.description = description;
}

function addBookToLibrary(
  title = titleInput.value,
  read = readInput.checked,
  author = authorInput.value,
  description = descriptionInput.value
) {
  let myBook = new Book(title, read, author, description);

  //add to array
  myLibrary.push(myBook);

  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");

  //create sub-elements
  const cardTitle = document.createElement("h3");
  cardTitle.innerText = myBook.title;
  const cardAuthor = document.createElement("h5");
  cardAuthor.innerText = `By: ${myBook.author}`;
  const cardDescription = document.createElement("p");
  cardDescription.innerText = myBook.description;

  //card icon row
  const cardIconRow = document.createElement("div");
  cardIconRow.classList.add("card-icon-row");

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.innerText = "Delete";
  cardIconRow.appendChild(removeButton);

  const eyeIcon = document.createElement("img");
  eyeIcon.classList.add("eye-icon");
  if (read) {
    eyeIcon.src = "./eye.svg";
  } else {
    eyeIcon.src = "./eye-off.svg";
  }

  cardIconRow.appendChild(eyeIcon);

  bookCard.appendChild(cardTitle);
  bookCard.appendChild(cardAuthor);
  bookCard.appendChild(cardDescription);
  bookCard.appendChild(cardIconRow);

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

//add custom card to start
addBookToLibrary(
  "Things to make and do in the 4th dimension",
  true,
  "Matt Parker",
  "A book from the stand-up mathematician that makes math fun again! Math is boring, says the mathematician and comedian Matt Parker. Part of the problem may be the way the subject is taught, but it's also true that we all find math difficult and challenging"
);

/*    button animations    */
const eye = document.querySelector(".eye-icon");

eye.addEventListener("click", (e) => {});
