import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({ query, setQuery }) {
  return (
    <div className="search-container">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      <input
        className="searchBar"
        type="text"
        placeholder="Search notes"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
