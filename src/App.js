import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios'
import LandingPage from './components/landingpage/LandingPage';
import MovieList from './components/MovieList';


function App() {
  const API_KEY = "https://api.themoviedb.org/3/movie/550?api_key=1ef91e2e402f45a12493311c6d974d7c"
  const [movies, setMovies]=useState([])
  const [url_set,setUrl] = useState(API_KEY)

  useEffect(()=>{
  fetch(API_KEY)
    .then(res => res.json())
    //.then(data=> console.log(data.results))
    .then(data => setMovies(data=> console.log(data)))
    

  },[url_set])

 // console.log(movies)
  



  return (
    <div className="App">
      <LandingPage/>

      <MovieList/>
    </div>
  );
}

export default App;
