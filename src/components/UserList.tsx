import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { GitHubUser } from "@/api/github";
import RepoList from "@/components/RepositoryList";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface UserListProps {
  users: GitHubUser[];
}

const UserList = ({ users }: UserListProps) => {
  return (
    <div className="mt-4 w-full">
      {users.map((user) => (
        <Disclosure key={user.login} as="div" className="mb-2">
          {({ open }) => (
            <>
              <DisclosureButton className="w-full flex justify-between items-center p-3 bg-gray-800 rounded-md shadow-md hover:bg-gray-700 transition">
                <div className="flex items-center gap-3">
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="text-white font-medium">{user.login}</span>
                </div>
                <ChevronDownIcon
                  className={`h-5 w-5 text-white transform ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </DisclosureButton>

              <DisclosurePanel className="p-3 bg-gray-900 rounded-md mt-1">
                <RepoList username={user.login} />
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default UserList;
