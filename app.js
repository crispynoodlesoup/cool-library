// modal
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");

// buttons
const addBook = document.querySelector(".add-book");
const submitBook = document.querySelector(".submit-book");
const cancel = document.querySelector(".cancel");

// form inputs
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const descriptionInput = document.getElementById("description");
const readInput = document.getElementById("read");

// bookshelf
const bookshelf = document.querySelector(".bookshelf");

let myLibrary = [];

// Book constructor
function Book(index, title, read, author = "", description = "") {
  this.index = index;
  this.title = title;
  this.read = read;
  this.author = author;
  this.description = description;
}

function removeBookFromLibrary(book) {
  // remove book from library
  myLibrary.splice(book.index, 1);

  // remove bookCard from DOM
  document.querySelector(`[data-index="${book.index}"]`).remove();
}

function changeReadStatus(book) {
  // change status
  book.read = !book.read;

  // animate icon
  if (book.read) {
    if (this.classList.contains("unread")) this.classList.remove("unread");
    this.src = "./eye.svg";
  } else {
    this.classList.add("unread");
    this.src = "./eye-off.svg";
  }
}

function addBookToLibrary(
  title = titleInput.value,
  read = readInput.checked,
  author = authorInput.value,
  description = descriptionInput.value
) {
  // create a new book object with the input values
  let myBook = new Book(myLibrary.length, title, read, author, description);

  // reset form
  titleInput.value = "";
  readInput.checked = false;
  authorInput.value = "";
  descriptionInput.value = "";

  // create the book card element
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");

  // create book card sub-elements
  const cardTitle = document.createElement("h3");
  cardTitle.innerText = myBook.title;
  const cardAuthor = document.createElement("h5");
  cardAuthor.innerText = `By: ${myBook.author}`;
  const cardDescription = document.createElement("p");
  cardDescription.innerText = myBook.description;

  // create card icon row with respective classes and text
  const cardIconRow = document.createElement("div");
  cardIconRow.classList.add("card-icon-row");

  // create the remove button with respective classes and text
  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.innerText = "Delete";

  // handle clicking event
  removeButton.addEventListener("click", () => removeBookFromLibrary(myBook));

  cardIconRow.appendChild(removeButton);

  const eyeIcon = document.createElement("img");
  eyeIcon.classList.add("eye-icon");
  if (read) {
    eyeIcon.src = "./eye.svg";
  } else {
    eyeIcon.src = "./eye-off.svg";
  }

  // handle clicking event
  eyeIcon.addEventListener("click", () =>
    changeReadStatus.call(eyeIcon, myBook)
  );

  cardIconRow.appendChild(eyeIcon);

  // append sub-elements to book card
  bookCard.appendChild(cardTitle);
  bookCard.appendChild(cardAuthor);
  bookCard.appendChild(cardDescription);
  bookCard.appendChild(cardIconRow);

  // save index in DOM and display book card on bookshelf
  bookCard.dataset.index = myLibrary.length;
  bookshelf.append(bookCard);

  // save bookcard index and add to library
  myLibrary.push(myBook);
}

addBook.addEventListener("click", (e) => {
  modal.style.visibility = "visible";
  modal.style.display = "grid";
});

cancel.addEventListener("click", (e) => {
  modal.style.visibility = "hidden";
  modal.style.display = "none";
});

modalContent.addEventListener("submit", (e) => {
  // check title is not empty
  e.preventDefault();

  addBookToLibrary();

  // hide modal
  modal.style.visibility = "hidden";
  modal.style.display = "none";
});

// add custom card to start
addBookToLibrary(
  "Things to make and do in the 4th dimension",
  true,
  "Matt Parker",
  "A book from the stand-up mathematician that makes math fun again! Math is boring, says the mathematician and comedian Matt Parker. Part of the problem may be the way the subject is taught, but it's also true that we all find math difficult and challenging"
);
