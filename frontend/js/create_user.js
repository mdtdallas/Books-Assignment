// get all data and run the create user api
function postCreateUser() {

    let createUserForm = document.getElementById("create-user-form")

    let formDataJSON = JSON.stringify(Object.fromEntries(new FormData(createUserForm)));

    fetch("/api/users/create", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: formDataJSON,
    })
    .then(res => res.json())
    .then(res => {
        alert(res)
        console.log("user request sent")
        //window.location.href = "create_user.html"
    })
    .catch(error => {
        console.log("Create user failed" + error);
    })
}