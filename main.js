let movies = [];

document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("addMovie").addEventListener("click", newMovie);

    document.getElementById("showMovies").addEventListener("click", function() {
        console.log(movies);
        // let message = " "
        // for ()
    });
});

let newMovie = function () {
    let movie = new Movie (
        document.getElementById("movieTitle").value = "",
        document.getElementById("movieRating").value = "",
    );
    if (!movie.isValid()) {
        alert("Please complete all fields.");
    } else {
        movies.push(movie);  
        console.log(movies);
        displayMovies();
    }
    document.getElementById("movieTitle").focus();
};

let displayMovies = function () {
    let displayString = " ";

    for (let i in movies) {
        displayString += movies[i].movieTitle + "\t" + movies[i].movieRating;
    }
    document.getElementById("showMovies").value = displayString;
    document.getElementById("movieTitle").select();
}
