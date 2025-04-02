import React from "react";
import { UserTile } from "./UserTile";

import { useUsers } from "@/hooks/useUsers";

// Todo: Filter Subscribed / Unsubscribed.
export const UsersList = () => {
  const { data: users, isLoading, error } = useUsers();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul className="py-4 mb-16">
      {users &&
        users.map((user) => (
          <React.Fragment key={user.id}>
            <UserTile user={user} />
            <hr className="border-t border-blue-500" />
          </React.Fragment>
        ))}
    </ul>
  );
};
