let urlParameters = new URLSearchParams(window.location.search)

//Access the user ID from the query string
let userId = urlParameters.get("id")
// access the get user by id api
if (userId) {
    fetch(`api/users/${userId}`)
    .then(res => res.json())
    .then(user => {
        console.log(user)
        document.getElementById("userId").value = user.userID
        document.getElementById("firstName").value = user.firstName
        document.getElementById("lastName").value = user.lastName
        document.getElementById("email").value = user.email
        document.getElementById("username").value = user.username
        document.getElementById('password').value = user.password
        document.getElementById('accessRights').value = user.accessRights
    })
}

//post back updated data
function postUpdateUser() {

    let updateUserForm = document.getElementById("update-user-form")


    let formDataJSON = JSON.stringify(Object.fromEntries(new FormData(updateUserForm)))
        console.log(formDataJSON)
    fetch("api/users/update", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: formDataJSON
    })
    .then(res => res.json())
    .then(res => {
        alert(res)
        window.location.href = "user_list.html"
    })
    .catch(error => {
        console.log("Update failed " + error)
    })
}
