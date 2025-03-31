import React from "react";
import { UserTile } from "./UserTile";
import type { User } from "./types";

interface Props {
  users: User[];
}

// Todo: Filter Subscribed / Unsubscribed.
export const UsersList = ({ users }: Props) => (
  <ul className="py-4 mb-16">
    {users.map((user) => (
      <React.Fragment key={user.id}>
        <UserTile user={user} />
        <hr className="border-t border-blue-500" />
      </React.Fragment>
    ))}
  </ul>
);
