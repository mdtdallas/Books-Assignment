// access the get all logs api
fetch("api/changelog")
    .then(res => res.json())
    .then(logs => {
        console.log(logs)
        let changelog_list = document.getElementById("changelog")
        for (let changelog of logs) {
            changelog_list.innerHTML += `<article class="card m-3 text-center">
            <h2>changelog ID: ${changelog.changeLogID}</h2>
            <h2>Date Created: ${changelog.dateCreated}</h2>
            <h2>Date Changed: ${changelog.dateChanged}</h2>
            <!-- <h2>Book ID: ${changelog.bookID}</h2> --> 
            <h2>Book Title: ${changelog.bookTitle}</h2>
            <h2>Username: ${changelog.username}</h2>
            <!-- <h2>User ID: ${changelog.userID}</h2> -->
        </article>`
        }
    })