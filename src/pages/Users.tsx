import { Users } from "lucide-react";
import { UsersList } from "@/components/UsersList/UsersList";

export const UsersPage = () => {
  return (
    <main className="overflow-y-scroll">
      <Title />
      <UsersList />
    </main>
  );
};

const Title = () => (
  <h2 className="text-2xl flex items-center gap-2 font-bold">
    <div className="bg-gray-300 p-2 rounded-full">
      <Users size={26} />
    </div>
    Users
  </h2>
);
