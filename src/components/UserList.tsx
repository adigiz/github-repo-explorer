import { GitHubUser } from "@/api/github";

interface UserListProps {
  users: GitHubUser[];
  onSelectUser: (username: string) => void;
}

const UserList = ({ users, onSelectUser }: UserListProps) => {
  return (
    <ul className="mt-4 space-y-2">
      {users.map((user) => (
        <li
          key={user.login}
          className="flex items-center gap-3 p-3 bg-gray-800 rounded-md shadow-md cursor-pointer hover:bg-gray-700 transition"
          onClick={() => onSelectUser(user.login)}
        >
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-10 h-10 rounded-full"
          />
          <span className="text-white font-medium">{user.login}</span>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
