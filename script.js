// Starter data
const myLibrary = [
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    pages: 100,
    read: true,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 200,
    read: false,
  },
];

// Main function
myLibrary.push(new Book("The Hobbit", "J.R.R. Tolkien", 295, true));
console.table(myLibrary);

const content = document.querySelector(".content");
const openButton = document.querySelector("[add-book-btn]");
const closeButton = document.querySelector("[close-modal-btn]");
const modal = document.querySelector("[book-modal]");

displayBooks();

// Arrow functions
openButton.addEventListener("click", () => {
  modal.showModal();
});

closeButton.addEventListener("click", () => {
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
  for (const book of myLibrary) {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    const bookText = document.createTextNode(
      `${book.title} by ${book.author}, ${book.pages} pages`
    );

    bookDiv.appendChild(bookText);
    content.appendChild(bookDiv);
  }
}
