import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import UserList from "@/components/UserList";
import { fetchUsers, GitHubUser } from "@/api/github";

const Home = () => {
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError("");

    try {
      const data = await fetchUsers(query);
      setUsers(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to fetch users.");
      }
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4 text-black">GitHub Repositories Explorer</h1>
      <div className="w-full max-w-120 flex flex-col p-3 rounded-md shadow-md">
        <SearchBar onSearch={handleSearch} />

        {error && <p className="text-red-500 mt-2">{error}</p>}
        {loading && <p className="text-gray-400 mt-2">Loading...</p>}

        <div className="w-full max-w-lg">
          <UserList users={users} />
        </div>
      </div>
    </div>
  );
};

export default Home;
