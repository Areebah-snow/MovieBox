import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LandingPage from './components/landingpage/LandingPage';
import MovieList from './components/MovieList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Router } from 'express';
import Layout from './components/Layout';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    // Fetch movie data from the API
    axios
      .get(API_URL)
      .then((response) => {
        // Update the movies state with the fetched data
        setMovies(response.data.results);

        // Log the fetched movie data
        console.log("Fetched movie data:", response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  return (
    <div className="App">

      <LandingPage apiKey={API_KEY} />
      <MovieList movies={movies} />

      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Layout/>}>
              <Route index element={<LandingPage/>}/>
              {/* <Route index element={<LandingPage/>}/> */}
              

           </Route>
        </Routes>
      </BrowserRouter>
      <LandingPage apiKey={API_KEY}/>
      
      <MovieList movies={movies}/>

    </div>
  );
}

export default App;
