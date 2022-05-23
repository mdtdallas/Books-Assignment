// run api to create author
function postCreateAuthor() {
    let createAuthorForm = document.getElementById("create-author-form")

    let formDataJSON = JSON.stringify(Object.fromEntries(new FormData(createAuthorForm)))
    console.log(formDataJSON);
    // access the create author api
    fetch("api/author/create", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: formDataJSON
    })
    .then(res => res.json())
    .then(res => {
        console.log("create author request sent!");
        alert(res)
        //window.location.href = "authors_list.html"
    })
    .catch(error => {
        console.log("Create Author failed" + error);
    })
}