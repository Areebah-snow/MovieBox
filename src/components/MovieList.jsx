import React from "react";
import MovieCard from "../components/movieCard/MovieCard"; // Import your MovieCard component

const MovieList = ({ movies }) => {
  return (
    <div className="featured">
      <h1>Featured Movies</h1>
      <div className="movie-list">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movies={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
