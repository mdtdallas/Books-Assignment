// access the login api
function postLoginUser() {
    let loginUserForm = document.getElementById("login-user-form")
    let formDataJSON = JSON.stringify(Object.fromEntries(new FormData(loginUserForm)))
    fetch('/api/users/login', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: formDataJSON
    })
    .then(res => res.json())
    .then(res => {
        alert(res)
        window.location.href = "user_list.html"
    })
    .catch(error => {
        console.log(error);
    })
}