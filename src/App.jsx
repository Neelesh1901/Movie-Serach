import React, { useState } from "react";
import { FavoritesProvider } from "./context/FavoritesContext";
import { useMovies } from "./hooks/useMovies";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { movies, loading, error } = useMovies(query, page);

  return (
    <FavoritesProvider>
      <div>
        <h1>Movie Search App</h1>
        <SearchBar onSearch={(q) => { setQuery(q); setPage(1); }} />

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <MovieGrid movies={movies} />

        {movies.length > 0 && (
          <div>
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
            <button onClick={() => setPage(page + 1)}>Next</button>
          </div>
        )}
      </div>
    </FavoritesProvider>
  );
};

export default App;
