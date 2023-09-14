import React from 'react';
import MovieCard from '../components/movieCard/MovieCard'; // Import your MovieCard component

const MovieList = ({ movies }) => {
  return (
    <div className="featured">
      <h1>Featured Movie</h1>
      <div className="movie-list">
     
  
     {movies.map((movies) => (
       <MovieCard movies={movies}/>
     ))}
   </div>
    </div>
   
  );
};

export default MovieList;
