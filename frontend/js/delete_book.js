// get the book if from the address bar
let urlParameters = new URLSearchParams(window.location.search)

let bookId = urlParameters.get("id")
// access the get book by id api
if (bookId) {
    fetch(`api/books/${bookId}`)
    .then(res => res.json())
    .then(book => {
        console.log(book)
        document.getElementById("bookTitle").value = book.bookTitle
        document.getElementById("yearofPublication").value = book.yearofPublication
        document.getElementById("genre").value = book.genre
    })
}
// access the delete book api
function postDeleteBook() {

    if (bookId)
    fetch("api/books/delete", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({bookId: bookId})
    })
    .then(res => res.json())
    .then(res => {
        alert(res)
        window.location.href = "book_list.html"
    })
}