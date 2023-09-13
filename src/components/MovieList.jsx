import React from 'react';
import MovieCard from '../components/movieCard/MovieCard'; // Import your MovieCard component

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies?.map((movie) => (
        <MovieCard/>
      ))}
    </div>
  );
};

export default MovieList;
