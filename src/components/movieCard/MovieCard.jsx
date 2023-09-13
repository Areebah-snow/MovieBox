import React from 'react';
import "./moviecard.css"

const MovieCard = ({movie}) => {
    const API_IMG= "https://image.tmdb.org/t/p/w500/"
    return (
        

    <div data-testid="movie-card" className="movie-card">
        <img
            data-testid="movie-poster"
            src={API_IMG + movie.poster_path}
            alt={movie.title}
            className="movie-poster"
        />
        <div className="movie-details">
            <h2 data-testid="movie-title">{movie.title}</h2>
            <p data-testid="movie-release-date">Release Date: {movie.releaseDate}</p>
            <p data-testid="vote" className='vote'> {movie.voteAverage}</p>
        </div>
        </div>






    );
}


// API_KEY=https://api.themoviedb.org/3/movie/550?api_key=74d2b4801ab61c8dedffb02a29cabcf4


export default MovieCard;