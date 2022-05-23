// get the user id from the address bar
let urlParameters = new URLSearchParams(window.location.search)

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
// acccess the delete user api
function postDeleteUser() {

    if (userId) {
        fetch("api/users/delete", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({userId: userId})
        })
        .then(res => res.json())
        .then(response => {
            alert(response)
            window.location.href = "user_list.html"
        })
    }
}