let Movie = function(pMovieTitle, pMovieRating) {
    this.movieTitle = pMovieTitle;
    this.movieRating = parseInt(pMovieRating);
};

Movie.prototype.isValid = function () {
    if (this.movieTitle == "" || 
        this.movieRating >= 1 || this.movieRating <=5 ) {
        return false;
    } else {
        return true;
    }
}
Movie,prototype.GetAll = function() {
    return this.movieTitle + "ratings";
}
