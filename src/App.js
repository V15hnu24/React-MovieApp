import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

// const temp = {
//   "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
//   "Title": "Italian Spiderman",
//   "Type": "movie",
//   "Year": "2007",
//   "imdbID": "tt2705436"
// }
const App = () => {
  const [movies, setMovies] = useState([]);
  const [movieSearch, setmovieSearch] = useState();

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies(movieSearch);
  },[]);
  return (
    <div className="app">
      <h1>Movieplace</h1>
      <div className="search">
        <input
        placeholder="Search for movies"
        value={movieSearch}
        onChange = {(e) => setmovieSearch(e.target.value)}
        />
        <img
        src={SearchIcon}
        alt = "Search"
        onClick={() => searchMovies(movieSearch)}
        />
      </div>
      {
        movies.length>0
        ?(
          <div className="container">
            {movies.map((movie) => (
              <MovieCard temp={movie}/>
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
    );
};
export default App;