fetch("api/plots")
    .then(res => res.json())
    .then(plots => {
        console.log(plots)
        let coverImages = document.getElementById("plot")
        for(let bookplot of plots) {
            coverImages.innerHTML += `<option value="${bookplot.bookPlotID}">
            ${bookplot.plotTitle + " "}</option>`
        }
    })
    // create a table of existing authors
fetch("/api/authors")
    .then(res => res.json())
    .then((authors) => {
    let authorSelect = document.getElementById('author')

    for (let author of authors) {
        authorSelect.innerHTML += `<option value="${author.authorID}">
            ${author.name + " " + author.surname}</option>`
    }
})

function postCreateBook() {
    // Get access to the create book form
    let createBookForm = document.getElementById("create-book-form")

    //convert the form fields into JSON
    let formDataJSON = JSON.stringify(Object.fromEntries(new FormData(createBookForm)))
    console.log(formDataJSON)

    //Post the form JSON to the backend
    fetch("/api/book/create", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: formDataJSON
    })
    .then(res => res.json())
    .then(res => {
        //handel the response from the server
        console.log("Create book request sent!")
        alert(res)
        // Redirect back to user list
        window.location.href = "create_book.html"
    })
    .catch(error => {
        //handle the error from the server
        console.log("Create book request failed! " + error);
    })
}