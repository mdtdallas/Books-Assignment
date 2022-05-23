// run the create plot api
function postCreatePlot() {
    let createPlotForm = document.getElementById("create-plot-form")
    let formDataJSON = JSON.stringify(Object.fromEntries(new FormData(createPlotForm)))
    console.log(formDataJSON)
    fetch("api/plot/create", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: formDataJSON,
    })
    .then(res => res.json())
    .then(res => {
        alert(res)
        console.log("Book Plot sent")
        window.location.href = "plot_list.html"
    })
    .catch(error => {
        console.log("Create Book Plot failed" + error)
    })
}

// access the get all books api
fetch("/api/books")
    .then(res => res.json())
    .then((books) => {
        let bookSelect = document.getElementById('book')
        for (let book of books) {
            bookSelect.innerHTML += `<option value="${book.bookID}">${book.bookTitle + ""}</option>`
        }
    })