let movies = [];

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("movieTitle").focus();

    document.getElementById("addMovie").addEventListener("click", newMovie);

    document.getElementById("showMovies").addEventListener("click", displayMovies);
});

let newMovie = function () {
    let movie = new Movie (
        document.getElementById("movieTitle").value,
        document.getElementById("movieRating").value
    );
    
    //validation required
    if (!movie.isValid()) {
        alert("Please complete all fields.");
    } else {
        movies.push(movie);  
        console.log(movies);
    }

//clear text fields
    document.getElementById("movieTitle").value= "",
    document.getElementById("movieRating").value= "blank";
    document.getElementById("movieTitle").focus();
};

let displayMovies = function () {
    document.getElementById("movieList").innerHTML = "";

    for (let i in movies) {
        displayString += movies[i].movieTitle + "\t" + movies[i].movieRating;
    }
    document.getElementById("showMovies").value = displayString;
    document.getElementById("movieTitle").select();
}
