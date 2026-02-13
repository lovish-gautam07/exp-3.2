class Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
}

let books = [];

function addBook() {
    let id = document.getElementById("bookId").value;
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;

    books.push(new Book(id, title, author));
    displayBooks();
}

function searchBook() {
    let id = document.getElementById("bookId").value;
    let book = books.find(b => b.id == id);

    if (book) {
        alert("Found: " + book.title + " by " + book.author);
    } else {
        alert("Book Not Found");
    }
}

function removeBook() {
    let id = document.getElementById("bookId").value;
    books = books.filter(b => b.id != id);
    displayBooks();
}

function displayBooks() {
    let list = document.getElementById("bookList");
    list.innerHTML = "";

    books.forEach(b => {
        let li = document.createElement("li");
        li.textContent = `${b.id} - ${b.title} - ${b.author}`;
        list.appendChild(li);
    });
}
