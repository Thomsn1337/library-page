const main = document.querySelector("main")

const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function removeBookfromLibrary(book) {
    const index = myLibrary.indexOf(book);
    if(index > -1) {
        myLibrary.splice(index, 1);
    }

    displayBooks()
}

const test = new Book("A Game of Thrones", "George R. R. Martin", 694, false)
const test2 = new Book("The Last Wish", "Andrzej Sapkowski", 288, false)

addBookToLibrary(test)
addBookToLibrary(test2)

function createCard(book) {
    const card = document.createElement("div");
    card.classList.add("card")

    const title = document.createElement("p")
    title.innerText = book.title;
    card.appendChild(title)

    const author = document.createElement("p")
    author.innerText = book.author
    card.appendChild(author)

    const pages = document.createElement("p")
    pages.innerText = book.pages
    card.appendChild(pages)

    const removeButton = document.createElement("button")
    removeButton.innerText = "Remove"
    removeButton.addEventListener("click", () => {
        removeBookfromLibrary(book)
    })
    card.appendChild(removeButton)

    main.appendChild(card)
}

function displayBooks() {
    main.innerHTML = ""
    myLibrary.forEach(book => createCard(book))
}

displayBooks()
