const { useState } = require("react");

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);  // Ensure this is properly triggering a re-fetch of the movies
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for Movies..."
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;