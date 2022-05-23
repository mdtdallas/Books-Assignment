// access  the get all books api
fetch("api/books")
    .then(response => response.json())
    .then(books => {
        console.log(books)
        let book_list = document.getElementById("book-list")

        for (let book of books) {
            book_list.innerHTML += `
            <article class="card">
                <a class="display-6 text-center nav-link" href="book_view.html?id=${book.bookID}">${book.bookTitle}</a>
                <h1 class="display-4 text-center bg-light border">Title: ${book.bookTitle}</h1>
                <img src="${book.coverImagePath}"/>
                <h2 class="h2 text-center">Millions Sold: ${book.millionsSold}</h2>
                <h2 class="h2 text-center">Genre: ${book.genre}</h2>
                <h2 class="h2 text-center">Author: ${book.name + "" + book.surname}</h2>
                <h2 class="h2 text-center">Author: ${book.authorID}</h2>
                <a class="h1 text-center nav-link" href="plot_view.html?id=${book.bookPlotID}">Plot ID: ${book.bookPlotID}</a>
                <a class="btn btn-primary col-2 m-2" href="update_book.html?id=${book.bookID}">Edit</a>
                <a class="btn btn-primary col-2 m-2 ms-15" href="delete_book.html?id=${book.bookID}">Delete</a>               
            </article>
            `
        }
    })
