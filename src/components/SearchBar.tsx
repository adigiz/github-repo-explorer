import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-120 flex flex-col gap-5 p-3 rounded-md shadow-md"
    >
      <input
        type="text"
        placeholder="Enter username"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 bg-gray-100 text-black"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-sky-500 text-white hover:bg-blue-500 w-full hover:cursor-pointer"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
