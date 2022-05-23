// get the author id from address bar
let urlParameters = new URLSearchParams(window.location.search)

//Access the author ID from the query string
let authorID = urlParameters.get("id")
// access the get author by id api
if (authorID) {
    fetch(`api/authors/${authorID}`)
    .then(res => res.json())
    .then(author => {
        console.log(author)
        document.getElementById("authorID").value = author.authorID
        document.getElementById("name").value = author.name
        document.getElementById("surname").value = author.surname
        document.getElementById("nationality").value = author.nationality
        document.getElementById("birthYear").value = author.birthYear
        document.getElementById("deathYear").value = author.deathYear
    })
}

// Post back updated data
function postUpdateAuthor() {
    let updateAuthorForm = document.getElementById("update-author-form")

    let formDataJSON = JSON.stringify(Object.fromEntries(new FormData(updateAuthorForm)))
        console.log(formDataJSON)
    fetch("api/author/update", {
        method: "POST",
        headers: {'Content-Type': "application/json"},
        body: formDataJSON
    })
    .then(res => res.json())
    .then(res => {
        alert(res)
        //window.location.href = "authors_list.html"
    })
    .catch(error => {
        console.log("update failed" + error)
    })
}