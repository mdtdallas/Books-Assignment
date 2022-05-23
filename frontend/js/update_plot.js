let urlParameters = new URLSearchParams(window.location.search)

//Access the book ID from the query string
let bookPlotID = urlParameters.get("id")
// access the get all books api
fetch("api/books")
    .then(res => res.json())
    .then(books => {
        console.log(books)
        let book_list = document.getElementById("book")
        for(let book of books) {
            book_list.innerHTML += `<option value="${book.bookID}">
            ${book.bookTitle + " "}</option>`
        }
    })

// access the get plot by id api
if (bookPlotID) {
    fetch(`api/plot/${bookPlotID}`)
    .then(res => res.json())
    .then(bookplot => {
        console.log(bookplot)
        document.getElementById("bookPlotID").value = bookplot.bookPlotID
        document.getElementById("plotTitle").value = bookplot.plotTitle
        document.getElementById("plot").value = bookplot.plot
        document.getElementById("book").value = bookplot.bookID
    })
}
// access the update plot api
function postUpdatePlot() {
    let updatePlotForm = document.getElementById("update-plot-form")
    let formDataJSON = JSON.stringify(Object.fromEntries(new FormData(updatePlotForm)))
    console.log(formDataJSON)
    fetch("api/plot/update", {
        method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: formDataJSON
    })
    .then(res => res.json())
    .then(res => {
        alert(res)
        window.location.href = "plot_list.html"
    })
    .catch(error => {
        console.log("Update failed " + error)
    })
}