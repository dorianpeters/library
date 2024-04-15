// // Starter data
// const myLibrary = [
//   {
//     title: "One Hundred Years of Solitude",
//     author: "Gabriel Garcia Marquez",
//     pages: 100,
//     read: true,
//   },
//   {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     pages: 200,
//     read: false,
//   },
// ];

// Main function
const myLibrary = [];
myLibrary.push(new Book("The Hobbit", "J.R.R. Tolkien", 295, true));
console.table(myLibrary);

const content = document.querySelector(".content");
const openButton = document.querySelector("[add-book-btn]");
const closeButton = document.querySelector("[close-modal-btn]");
const submitButton = document.querySelector("[submit-modal-btn]");
const modal = document.querySelector("[book-modal]");
const form = document.querySelector("form");

displayBooks();
let removeButtons = document.querySelectorAll(".books button");

// Arrow functions
openButton.addEventListener("click", () => {
  modal.showModal();
});

closeButton.addEventListener("click", () => {
  modal.close();
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const title = form.elements["title"].value;
  const author = form.elements["author"].value;
  const pages = parseInt(form.elements["pages"].value);
  let strRead = form.elements["read"].value;
  const read = strRead.toLowerCase() == "true" ? true : false;
  myLibrary.push(new Book(title, author, pages, read));
  content.replaceChildren();
  displayBooks();
  modal.close();
});

// Function declarations
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.index = myLibrary.length;
}

function addBookToLibrary() {}

function displayBooks() {
  for (const book of myLibrary) {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    const titleP = document.createElement("p");
    const titleText = document.createTextNode(`${book.title}`);
    const authorP = document.createElement("p");
    const authorText = document.createTextNode(`${book.author}`);
    const pagesP = document.createElement("p");
    const pagesText = document.createTextNode(`${book.pages} pages`);
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";

    titleP.appendChild(titleText);
    authorP.appendChild(authorText);
    pagesP.appendChild(pagesText);

    bookDiv.appendChild(titleP);
    bookDiv.appendChild(authorP);
    bookDiv.appendChild(pagesP);
    bookDiv.appendChild(removeBtn);

    content.appendChild(bookDiv);
    removeBtn.addEventListener("click", (event) => {
      event.target.parentElement.remove();
    });
  }
}
