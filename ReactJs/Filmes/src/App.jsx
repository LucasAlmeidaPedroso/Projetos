import { useState, useEffect } from "react";

import './App.css'
import MovieCard from "./MovieCard";
import SearchIcon from "./assets/search.png";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=54a94bdf";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Spider");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <div className="name">
        <h1>IMDb Movie Search</h1>
      </div>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Procure por filmes"
        />
        <img
          src={SearchIcon}
          alt="Pesquisa"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            // eslint-disable-next-line react/jsx-key
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Não foi encontrado nenhum filme</h2>
        </div>
      )}
    </div>
  );
};

export default App;