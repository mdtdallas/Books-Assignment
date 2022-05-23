// get the nav bar
fetch('nav.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('nav').innerHTML = html
    })
// access the logout api
function postLogoutUser() {
    fetch("/api/users/logout", {
        method: "POST"
    })
        .then(res => res.json())
        .then(res => {
            alert(res)
            window.location.href = "login.html"
        })
        .catch(error => {
            console.log("logout failed = " + error)
        })
}
// get the footer 
fetch("footer.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("footer").innerHTML = html
    })