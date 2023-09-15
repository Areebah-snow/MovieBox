import React from 'react';
import MovieCard from '../movieCard/MovieCard';
import "./search-results-container.css"

const SearchResults = ({ searchResults, onClose }) => { // Add an onClose prop
  return (
    <div className="search-results-container">
      <button onClick={onClose} className="close-button">X</button> {/* Add a close button */}
      {searchResults.map((movie) => (
        <MovieCard key={movie.id} movies={movie} />
      ))}
    </div>
  );
};

export default SearchResults;
