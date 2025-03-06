import { useUserRepos } from "@/hooks/useRepositories";
import { StarIcon } from "@heroicons/react/20/solid";

const RepoList = ({ username }: { username: string }) => {
  const { data: repos, isLoading, error } = useUserRepos(username);

  if (isLoading)
    return <p className="text-gray-400">Loading repositories...</p>;
  if (error)
    return <p className="text-red-500">Failed to load repositories.</p>;
  if (!repos || repos.length === 0)
    return <p className="text-gray-400">No repositories found.</p>;

  return (
    <ul className="space-y-2">
      {repos.map((repo) => (
        <li
          key={repo.id}
          className="flex w-full justify-between items-start p-3 bg-gray-100 shadow-md hover:bg-gray-200 transition"
        >
          <div>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-semibold hover:underline"
            >
              {repo.name}
            </a>
            {repo.description && (
              <p className="text-black text-sm mt-1">{repo.description}</p>
            )}
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-sm mt-1">
            <StarIcon className="h-4 w-4 text-black" />
            <span className="text-black">{repo.stargazers_count}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RepoList;
