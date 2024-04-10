const myLibrary = [];
const openButton = document.querySelector("[add-book-btn]");
const closeButton = document.querySelector("[close-modal-btn]");
const modal = document.querySelector("[book-modal]");
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    let str = `${this.title} by ${this.author}, ${this.pages} pages, `;
    if (this.read) {
      str += "read";
    } else {
      str += "not read yet";
    }
    return str;
  };
}

function addBookToLibrary() {}

function displayBooks() {}

openButton.addEventListener("click", () => {
  modal.showModal();
});

closeButton.addEventListener("click", () => {
  modal.close();
});
let newBook = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
console.log(newBook.info());
