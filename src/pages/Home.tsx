import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import UserList from "@/components/UserList";
import RepoList from "@/components/RepositoryList";
import {
  fetchUsers,
  fetchUserRepos,
  GitHubUser,
  GitHubRepo,
} from "@/api/github";

const Home = () => {
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
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

  const handleUserSelect = async (username: string) => {
    setLoading(true);
    setError("");

    try {
      const data = await fetchUserRepos(username);
      setRepos(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to fetch repositories.");
      }
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">GitHub Repositories Explorer</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {loading && <p className="text-gray-400 mt-2">Loading...</p>}
      <div className="w-full max-w-lg">
        <UserList users={users} onSelectUser={handleUserSelect} />
        <RepoList repos={repos} />
      </div>
    </div>
  );
};

export default Home;
