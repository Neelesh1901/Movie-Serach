import { useEffect, useState } from "react";


const API_KEY = "d8aaadf9";
const API_URL = "https://www.omdbapi.com/";


export const useMovies = (query, page = 1) => {
    const [movies, setMovies] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (!query) return;
    
        const fetchMovies = async () => {
            setLoading(true);
            setError(null);
    
            try {
                const response = await fetch(`${API_URL}?s=${query}&page=${page}&apikey=${API_KEY}`);
                const data = await response.json();
                console.log(data); // Check if API is returning the data
    
                if (data.Response === "True") {
                    setMovies(data.search || []); // Set the movies correctly
                } else {
                    setMovies([]);
                    setError(data.Error);
                }
            } catch (err) {
                console.error("Fetch Error:", err);
                setError("Failed to fetch movies");
            } finally {
                setLoading(false);
            }
        };
    
        fetchMovies();
    }, [query, page]);
    
    return { movies, loading, error };
    
};