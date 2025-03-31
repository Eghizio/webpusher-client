import React from "react";
import { UserTile } from "./UserTile";

import { useAllUsers } from "./useAllUsers";

// Todo: Filter Subscribed / Unsubscribed.
export const UsersList = () => {
  const [users, isLoading, error] = useAllUsers();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul className="py-4 mb-16">
      {users.map((user) => (
        <React.Fragment key={user.id}>
          <UserTile user={user} />
          <hr className="border-t border-blue-500" />
        </React.Fragment>
      ))}
    </ul>
  );
};
