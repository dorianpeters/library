// Main function
const myLibrary = [];
Book.prototype.toggleRead = function () {
  console.log(this);
  if (this.read === true) {
    this.read = false;
  } else {
    this.read = true;
  }
  return this.read;
};

myLibrary.push(new Book("The Hobbit", "J.R.R. Tolkien", 295, true));
myLibrary.push(new Book("The Hobbit2", "J.R.R. Tolkien", 395, true));

const content = document.querySelector(".content");
const openButton = document.querySelector("[add-book-btn]");
const closeButton = document.querySelector("[close-modal-btn]");
const submitButton = document.querySelector("[submit-modal-btn]");
const modal = document.querySelector("[book-modal]");
const form = document.querySelector("form");

displayBooks();

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
}

function addBookToLibrary() {}

function displayBooks() {
  for (const [i, book] of myLibrary.entries()) {
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
    removeBtn.classList.add("remove-btn");

    const readBtn = document.createElement("button");
    readBtn.innerHTML = "Read";
    readBtn.classList.add("read-btn");

    titleP.appendChild(titleText);
    authorP.appendChild(authorText);
    pagesP.appendChild(pagesText);

    bookDiv.appendChild(titleP);
    bookDiv.appendChild(authorP);
    bookDiv.appendChild(pagesP);
    bookDiv.appendChild(removeBtn);
    bookDiv.appendChild(readBtn);

    content.appendChild(bookDiv);
    bookDiv.setAttribute("data-index", i);

    removeBtn.addEventListener("click", (event) => {
      const currentBookDiv = event.target.parentElement;
      const index = parseInt(currentBookDiv.getAttribute("data-index"));
      myLibrary.splice(index, 1);
      currentBookDiv.remove();
    });

    readBtn.addEventListener("click", (event) => {
      const currentBookDiv = event.target.parentElement;
      const index = parseInt(currentBookDiv.getAttribute("data-index"));
      const read = myLibrary[index].toggleRead();
      if (read) {
        currentBookDiv.querySelector(".read-btn").classList.add("read");
      } else {
        currentBookDiv.querySelector(".read-btn").classList.remove("read");
      }
    });
  }
}
