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
}
