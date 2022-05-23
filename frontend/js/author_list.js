// access the get all author api
fetch("api/authors")
    .then(response => response.json())
    .then(authors => {
        console.log()
        let author_list = document.getElementById("author-list")

        for (let author of authors) {
            author_list.innerHTML += `
            <article class="card m-3 text-center">
                <h1>First Name: ${author.name}</h1>
                <h2>Surname: ${author.surname}</h2>
                <h3>Nationality: ${author.nationality}</h3>
                <h3>Birth Year: ${author.birthYear}</h3>
                <h3>Death Year: ${author.deathYear}</h3>
                <h3>Author ID: ${author.authorID}</h3>
                <a class="btn btn-primary col-1 m-2" href="update_author.html?id=${author.authorID}">Edit</a>
                <a class="btn btn-primary col-1 m-2" href="delete_author.html?id=${author.authorID}">Delete</a>
            </article>
            `
        }
    })