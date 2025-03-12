import MovieCard from "./MovieCard";

const MovieGrid = ({ movies }) => {
    if (!movies || movies.length === 0) {
        return <p>No movies found.</p>; // Display a message if no movies are found
    }
    return (
        <div className="movie-grid">
            {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </div>
    );
};


export default MovieGrid;