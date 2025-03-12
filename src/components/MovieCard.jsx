import { useFavorites } from "../context/FavoritesContext";
const MovieCard = ({ movie }) => {
    const { addFavorite, removeFavorite, favorites } = useFavorites();

    const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);
    return(
        <div className="movie-card">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"}
          alt={movie.Title}
        />
        <h3>{movie.Title}</h3>
        {isFavorite ? (
          <button onClick={() => removeFavorite(movie.imdbID)}>Remove</button>
        ) : (
          <button onClick={() => addFavorite(movie)}>Add to Favorites</button>
        )}
      </div>
    );
};

export default MovieCard;