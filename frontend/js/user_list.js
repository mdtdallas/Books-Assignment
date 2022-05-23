// access the get all users api
fetch("api/users")
    .then(response => response.json())
    .then(users => {
        console.log(users)
        let userList = document.getElementById("user-list")

        for (let user of users) {
            userList.innerHTML += `
            <article class="card">
                <div>
                <span>${user.userID}</span>
                <span><h4>Name: </h4> ${user.firstName}</span>
                <span>${user.lastName}</span>
                <span><h4>Username: </h4> ${user.username}</span>
                <span><h4>Email: </h4> ${user.email}</span>
                <span><h4>Rights: </h4> ${user.accessRights}</span>
                <div class="d-flex justify-content-center">
                <a class="btn btn-primary text-light my-2" href="update_user.html?id=${user.userID}">Edit</a>
                <a class="btn btn-primary  m-0 mx-3 my-2 text-light" href="delete_user.html?id=${user.userID}">Delete</a>
                </div>
                </div>
                
            </article>
            `
        }
    })