const myLibrary = [];

function newBook(title,author,pages,status){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.status = status,
    this.info = function(){
        return `The ${title} by ${author}, ${pages} pages, ${status}`
    }
};
const book1 = new newBook("Redim","Ada l Lae",367,"Read");
console.log(book1.info());

function addBookToLibrary(book) {
  // do stuff here
  myLibrary += book;
}
// Function to display books in the array
function displayBooks() {
    const booksContainer = document.getElementById("books-container");

    // Clear the container before adding new books
    booksContainer.innerHTML = "";

    // Loop through the bookArray and create a card for each book
    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Status: ${book.status}</p>
            <button class="remove-button" data-index="${index}">Remove</button>
            <button class="toggle-status-button" data-index="${index}">Toggle Status</button>

        `;
        booksContainer.appendChild(bookCard);
    });

    // Add event listeners to the "Remove" buttons
    const removeButtons = document.querySelectorAll(".remove-button");
    removeButtons.forEach((button) => {
        button.addEventListener("click", removeBook);
    });
    const toggleStatusButtons = document.querySelectorAll(".toggle-status-button");
    toggleStatusButtons.forEach((button) => {
        button.addEventListener("click", toggleBookStatus);
    });
}
// Function to toggle a book's read status
function toggleBookStatus(event) {
    const indexToToggle = event.target.getAttribute("data-index");
    if (indexToToggle !== null) {
        bookArray[indexToToggle].toggleStatus();
        displayBooks();
    }
}


// Manually add some books to the array for testing
myLibrary.push(new newBook("Book 1", "Author 1", 200, "Read"));
myLibrary.push(new newBook("Book 2", "Author 2", 150, "Unread"));
myLibrary.push(new newBook("Book 3", "Author 3", 300, "Read"));

// Call the displayBooks function to display the books on the page
displayBooks();
// Function to toggle the visibility of the new book form
function toggleFormVisibility() {
    const form = document.getElementById("new-book-form");
    form.style.display = form.style.display === "none" ? "block" : "none";
}

// Function to handle form submission
function addBook(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = parseInt(document.getElementById("pages").value);
    const status = document.getElementById("status").value;

    const newBookObject = new newBook(title, author, pages, status);
    myLibrary.push(newBookObject);

    displayBooks();
    toggleFormVisibility();
}

// Add event listeners
document.getElementById("new-book-button").addEventListener("click", toggleFormVisibility);
document.getElementById("book-form").addEventListener("submit", addBook);

// Updated function to display books in the array

// Function to remove a book from the library
function removeBook(event) {
    const indexToRemove = event.target.getAttribute("data-index");
    if (indexToRemove !== null) {
        myLibrary.splice(indexToRemove, 1);
        displayBooks();
    }
}

// Rest of the code remains the same...
