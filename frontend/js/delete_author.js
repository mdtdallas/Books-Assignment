// get the author id from the address bar
let urlParameters = new URLSearchParams(window.location.search)

let authorId = urlParameters.get("id")
// access the get author by id api
if (authorId) {
    fetch(`api/authors/${authorId}`)
    .then(res => res.json())
    .then(author => {
        console.log(author)
        document.getElementById('name').innerText = author.name
        document.getElementById('surname').innerText = author.surname
    })
}
// access the delete author api
function postDeleteAuthor() {
    if (authorId)
    fetch("/api/authors/delete", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({authorId: authorId})
    })
    .then(res => res.json())
    .then(res => {
        alert(res)
        window.location.href = "authors_list.html"
    })
}