import { fetchUsers } from "@/api/github";
import { useQuery } from "@tanstack/react-query";

export const useUsers = (query: string) =>
    useQuery({
      queryKey: ["users", query],
      queryFn: () => fetchUsers(query),
      enabled: !!query,
    });
  