import { useUserRepos } from "@/hooks/useRepositories";

const RepoList = ({ username }: { username: string }) => {
  const { data: repos, isLoading, error } = useUserRepos(username);

  if (isLoading)
    return <p className="text-gray-400">Loading repositories...</p>;
  if (error)
    return <p className="text-red-500">Failed to load repositories.</p>;
  if (!repos || repos.length === 0)
    return <p className="text-gray-400">No repositories found.</p>;

  return (
    <ul className="space-y-1">
      {repos.map((repo) => (
        <li key={repo.id} className="text-blue-400 hover:underline">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default RepoList;
