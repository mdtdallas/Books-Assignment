// access the get all plots api
fetch("api/plots")
    .then(res => res.json())
    .then(plots => {
        console.log(plots)
        let plot_list = document.getElementById("plot-list")
        for(let bookplot of plots) {
            plot_list.innerHTML += `<div><article class="card row m-3">
            <h1 class="display-6 text-center bg-light border">${bookplot.plotTitle}</h1>
            <p>${bookplot.plot}</p>
            <h2>Book ID: ${bookplot.bookID}</h2>
            <a class="btn btn-primary col-2 m-3" href="update_plot.html?id=${bookplot.bookPlotID}">Edit</a>
                <a class="btn btn-primary col-2 m-3 ms-15" href="delete_plot.html?id=${bookplot.bookPlotID}">Delete</a>
        </article></div>`
        }
    })