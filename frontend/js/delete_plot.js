// get the plot id from the address bar
let urlParameters = new URLSearchParams(window.location.search)

let plotId = urlParameters.get("id")
// access  the get plot by id api
if (plotId) {
    fetch(`api/plot/${plotId}`)
    .then(res => res.json())
    .then(bookplot => {
        console.log(bookplot)
        document.getElementById('plotTitle').innerText = bookplot.plotTitle
        document.getElementById('plot').innerText = bookplot.plot
    })
}
// access the delete plot api
function postDeletePlot() {
    if (plotId)
    fetch("/api/plot/delete", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({plotId: plotId})
    })
    .then(res => res.json())
    .then(res => {
        alert(res)
        window.location.href = "plot_list.html"
    })
}