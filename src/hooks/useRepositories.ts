import { fetchUserRepos } from "@/api/github";
import { useQuery } from "@tanstack/react-query";

export const useUserRepos = (username: string) =>
    useQuery({
      queryKey: ["repos", username],
      queryFn: () => fetchUserRepos(username),
      staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    });