import { GitHubRepo } from "@/api/github";

interface RepoListProps {
  repos: GitHubRepo[];
}

const RepoList = ({ repos }: RepoListProps) => {
  return (
    <ul className="mt-4 space-y-2">
      {repos.map((repo) => (
        <li
          key={repo.id}
          className="p-3 bg-gray-800 rounded-md shadow-md hover:bg-gray-700 transition"
        >
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            {repo.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default RepoList;
