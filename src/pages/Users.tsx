import { Users } from "lucide-react";
import { UsersList } from "@/components/UsersList/UsersList";

const names = [
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Ethan",
  "Fiona",
  "George",
  "Hannah",
  "Isaac",
  "Julia",
  "Kevin",
  "Luna",
  "Michael",
  "Nina",
  "Oscar",
  "Penelope",
  "VeryLongName".repeat(3),
];
const users = names.map((name, id) => ({ id, name }));

export const UsersPage = () => (
  <main className="overflow-y-scroll">
    <Title />
    <UsersList users={users} />
  </main>
);

const Title = () => (
  <h2 className="text-2xl flex items-center gap-2 font-bold">
    <div className="bg-gray-300 p-2 rounded-full">
      <Users size={26} />
    </div>
    Users
  </h2>
);
