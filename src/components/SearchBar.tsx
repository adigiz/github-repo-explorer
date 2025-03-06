import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [searchedQuery, setSearchedQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setSearchedQuery(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input
        type="text"
        placeholder="Enter username"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 bg-gray-100 text-black outline outline-gray-400"
      />
      <button
        type="submit"
        className="px-4 py-3 bg-sky-500 text-white hover:bg-blue-500 w-full hover:cursor-pointer"
      >
        Search
      </button>

      {searchedQuery && (
        <p className="text-black">{`Showing users for "${searchedQuery}"`}</p>
      )}
    </form>
  );
};

export default SearchBar;
