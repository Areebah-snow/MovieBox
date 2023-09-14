import React, { useState, useEffect } from 'react';

function Search({ apiKey }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const API_SEARCH = 'https://api.themoviedb.org/3/search/movie';

  // Define the handleSearch function
  const handleSearch = async (e) => {
    try {
      const response = await fetch(`${API_SEARCH}?api_key=${apiKey}&query=${searchTerm}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Call the initial search when the component mounts
  useEffect(() => {
    handleSearch();
  }, [searchTerm, apiKey]);

  return (
    <div>
      <form action="" className="navMiddle" onSubmit={handleSearch}>
        <input onChange={(e) => setSearchTerm(e.target.value)} type="search" placeholder="What would you like to watch?" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </form>

      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
