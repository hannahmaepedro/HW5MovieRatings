let moviesArray = [];

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
    if (!movie.isValid())  {
        alert("Please complete all fields.");
    } else {
        moviesArray.push(movie);  
        console.log(moviesArray);
    }

//clear text fields
    document.getElementById("movieTitle").value= "",
    document.getElementById("movieRating").value= "blank";

    document.getElementById("movieTitle").focus();
};

let displayMovies = function () {
    document.getElementById("movieList").innerHTML = "";

    //sort moviesArray
    moviesArray.sort(function(a,b) {
        return b.rating - a.rating
    });
    
    for (let i in moviesArray) {
       let li = document.createElement("li");
       ul.appendChild(li);
       li.innerHTML = moviesArray[i].GetAll();
    }
    // document.getElementById("showMovies").value = displayString;
    // document.getElementById("movieTitle").select();
}
