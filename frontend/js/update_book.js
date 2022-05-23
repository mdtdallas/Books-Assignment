// get the id from the address bar
let urlParameters = new URLSearchParams(window.location.search)

//Access the book ID from the query string
let bookID = urlParameters.get("id")
// access the get all plots api
fetch("api/plots")
    .then(res => res.json())
    .then(plots => {
        console.log(plots)
        let coverImages = document.getElementById("bookPlotID")
        for(let bookplot of plots) {
            coverImages.innerHTML += `<option value="${bookplot.bookPlotID}">
            ${bookplot.bookPlotID + " "}</option>`
        }
    })

// access the get all authors api
fetch("/api/authors")
    .then(res => res.json())
    .then((authors) => {
        let authorSelect = document.getElementById('authorID')

        for (let author of authors) {
            authorSelect.innerHTML += `<option value="${author.authorID}">
                ${author.name + " " + author.surname}</option>`
        }
    })
// access the get book by id
if (bookID) {
    fetch(`api/books/${bookID}`)
    .then(res => res.json())
    .then(book => {
        console.log(book)
        document.getElementById("bookID").value = book.bookID
        document.getElementById("bookTitle").value = book.bookTitle
        document.getElementById("originalTitle").value = book.originalTitle
        document.getElementById("yearofPublication").value = book.yearofPublication
        document.getElementById("genre").value = book.genre
        document.getElementById("millionsSold").value = book.millionsSold
        document.getElementById("languageWritten").value = book.languageWritten
        document.getElementById("coverImage").value = book.coverImagePath
        document.getElementById("authorID").value = book.authorID
        document.getElementById("bookPlotID").value = book.bookPlotID      
    })
}

// Post back updated data
function postUpdateBook() {
    let updateBookForm = document.getElementById("update-book-form")

    let formDataJSON = JSON.stringify(Object.fromEntries(new FormData(updateBookForm)))
        console.log(formDataJSON)
    fetch("api/book/update", {
        method: "POST",
        headers: {'Content-Type': "application/json"},
        body: formDataJSON
    })
    .then(res => res.json())
    .then(res => {
        alert(res)
        window.location.href = "book_list.html"
    })
    .catch(error => {
        console.log("update failed" + error)
    })
}

