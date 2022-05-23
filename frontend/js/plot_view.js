// get the book id from the address bar
let urlParameters = new URLSearchParams(window.location.search)
let bookPlotID = urlParameters.get("id")
// access the get book by id api
fetch(`api/plot/${bookPlotID}`)
    .then(res => res.json())
    .then(bookplot => {
        console.log(bookplot)
        let plot_view = document.getElementById("plot_view")
        plot_view.innerHTML += `
            <article class="card m-3">
            <h1 class="display-6 text-center bg-light border">${bookplot.plotTitle}</h1>
            <p>${bookplot.plot}</p>
            <h2>Book ID: ${bookplot.bookID}</h2>
            <a class="btn btn-primary col-2 m-3" href="update_plot.html?id=${bookplot.bookPlotID}">Edit</a>
            <a class="btn btn-primary col-2 m-3" href="delete_plot.html?id=${bookplot.bookPlotID}">Delete</a>
                </article>`
    })