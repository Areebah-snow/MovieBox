import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios'
import LandingPage from './components/landingpage/LandingPage';
import MovieList from './components/MovieList';




function App() {

  const API_KEY = process.env.REACT_API_KEY
  const [movies, setMovies] = useState([]);

  useEffect(() => {
   
    const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    // Fetch movie data from the API
    fetch(API_URL)
      .then((res) => res.json()) 
      .then((data) => {
        // Update the movies state with the fetched data
        setMovies(data.results);

        // Log the fetched movie data
        console.log('Fetched movie data:', data.results);
      })
      .catch((error) => {
   
        console.error('Error fetching movies:', error);
      });
  }, []);


   
  



  return (
    <div className="App">
      <LandingPage/>

      <MovieList/>
    </div>
  );
}

export default App;
