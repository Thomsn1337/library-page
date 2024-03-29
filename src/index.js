const cards = document.querySelector(".cards")
const newBookButton = document.querySelector("#new-button")
const newBookDialog = document.querySelector("#new-dialog")
const closeDialogButton = document.querySelector("#close-dialog")
const newBookForm = document.querySelector("#new-book-form")

const inputTitle = document.querySelector("#title")
const inputAuthor = document.querySelector("#author")
const inputPages = document.querySelector("#pages")
const inputReadStatus = document.querySelector("#read")

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
    if (index > -1) {
        myLibrary.splice(index, 1);
    }

    displayBooks()
}

const book1 = new Book("A Game of Thrones", "George R. R. Martin", 694, false)
const book2 = new Book("The Last Wish", "Andrzej Sapkowski", 288, true)

addBookToLibrary(book1)
addBookToLibrary(book2)

function createCard(book) {
    const card = document.createElement("div");
    card.classList.add("card")

    const title = document.createElement("h2")
    title.innerText = book.title;
    card.appendChild(title)

    const author = document.createElement("p")
    author.innerText = book.author
    card.appendChild(author)

    const pages = document.createElement("p")
    pages.innerText = `${book.pages} pages`
    card.appendChild(pages)

    const status = document.createElement("p")
    if (book.readStatus) {
        status.innerText = "Finished reading"
    }
    else {
        status.innerText = "Not read yet"
    }
    card.appendChild(status)

    const buttons = document.createElement("div")
    buttons.classList.add("buttons")

    const removeButton = document.createElement("button")
    removeButton.innerText = "Remove"
    removeButton.addEventListener("click", () => {
        removeBookfromLibrary(book)
    })
    buttons.appendChild(removeButton)

    const statusButton = document.createElement("button")
    statusButton.innerText = "Toggle read status"
    statusButton.addEventListener("click", () => {
        book.readStatus = !book.readStatus
        displayBooks()
    })
    buttons.appendChild(statusButton)

    card.appendChild(buttons)

    cards.appendChild(card)
}

function openDialog() {
    inputTitle.value = ""
    inputAuthor.value = ""
    inputPages.value = ""
    inputReadStatus.checked = false

    newBookDialog.showModal()
}

newBookButton.addEventListener("click", openDialog)

closeDialogButton.addEventListener("click", () => {
    newBookDialog.close()
})

function displayBooks() {
    cards.innerHTML = ""
    myLibrary.forEach(book => createCard(book))
}

newBookForm.addEventListener("submit", () => {
    addBookToLibrary(new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputReadStatus.checked))
    displayBooks()
})

window.addEventListener("load", displayBooks)
