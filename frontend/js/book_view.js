// get book id from address bar
let urlParameters = new URLSearchParams(window.location.search)
let bookID = urlParameters.get("id")
// access the get book by id api
fetch(`api/books/${bookID}`)
    .then(res => res.json())
    .then(book => {
        console.log(book)
        let books_view = document.getElementById("book")
        books_view.innerHTML += `
            <article class="card">
                <h1 class="display-4 text-center bg-light border">ID: ${book.bookID}</h1>
                <a class="display-6 text-center nav-link" href="book_view.html?id=${book.bookID}">${book.bookTitle}</a>
                <h1 class="display-4 text-center bg-light border">Title: ${book.bookTitle}</h1>
                <img src="${book.coverImagePath}"/>
                <h2 class="h2 text-center">Millions Sold: ${book.millionsSold}</h2>
                <h2 class="h2 text-center">Genre: ${book.genre}</h2>
                <h2 class="h2 text-center">Author: ${book.name + "" + book.surname}</h2>
                <h2 class="h2 text-center">Author ID: ${book.authorID}</h2>
                <a class="display-6 text-center nav-link" href="plot_view.html?id=${book.bookPlotID}">Plot ID: ${book.bookPlotID}</a>
                <a class="btn btn-primary col-2 m-3" href="update_book.html?id=${book.bookID}">Edit</a>
                <a class="btn btn-primary col-2 m-3" href="delete_book.html?id=${book.bookID}">Delete</a>               
            </article>
            `
    })
    