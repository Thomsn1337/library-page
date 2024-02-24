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
const test2 = new Book("The Last Wish", "Andrzej Sapkowski", 288, true)
const test3 = new Book("The Last Wish", "Andrzej Sapkowski", 288, false)
const test4 = new Book("The Last Wish", "Andrzej Sapkowski", 288, true)
const test5 = new Book("The Last Wish", "Andrzej Sapkowski", 288, true)
const test6 = new Book("The Last Wish", "Andrzej Sapkowski", 288, false)

addBookToLibrary(test)
addBookToLibrary(test2)
addBookToLibrary(test3)
addBookToLibrary(test4)
addBookToLibrary(test5)
addBookToLibrary(test6)

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
    if(book.readStatus) {
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
    buttons.appendChild(statusButton)

    card.appendChild(buttons)

    main.appendChild(card)
}

function displayBooks() {
    main.innerHTML = ""
    myLibrary.forEach(book => createCard(book))
}

displayBooks()
