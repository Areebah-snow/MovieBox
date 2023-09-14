import React from 'react';
import "./moviecard.css"
import imdb from "../../images/imdb.png"

const MovieCard = ({movies}) => {
    const API_IMG= "https://image.tmdb.org/t/p/w500/"
    return (
        
    
    <div data-testid="movie-card" className="movie-card">
       <div className="poster">
       <img
            data-testid="movie-poster"
            src={API_IMG + movies.poster_path}
            alt={movies.title}
            className="movie-poster"
        />
       </div>
      
        <div className="movie-details">
            <p data-testid="movie-release-date">Release Date: {movies.release_date}</p>
            <h2 data-testid="movie-title">{movies.title}</h2>
           
            <div className="rating">
                <div className="imdb">
                    <img src={imdb} alt="IMDB Rating" />
                    <span>{movies.imdb_rating}</span>
                </div>
            </div>
            
            <p data-testid="vote" className='vote'> {movies.voteAverage}</p>
            {/* <p data-testid="genre" className='genre'> {movies.genre_ids}</p> */}
        </div>
    </div>






    );
}





export default MovieCard;