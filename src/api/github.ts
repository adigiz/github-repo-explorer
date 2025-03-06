export interface GitHubUser {
  login: string;
  avatar_url: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
}

export const fetchUsers = async (query: string): Promise<GitHubUser[]> => {
  const response = await fetch(`${import.meta.env.VITE_GITHUB_API_URL}/search/users?q=${query}&per_page=5`);
  if (!response.ok) throw new Error("Error fetching users");
  const data = await response.json();
  return data.items || [];
};

export const fetchUserRepos = async (username: string): Promise<GitHubRepo[]> => {
  const response = await fetch(`${import.meta.env.VITE_GITHUB_API_URL}/users/${username}/repos`);
  if (!response.ok) throw new Error("Error fetching repositories");
  return response.json();
};
