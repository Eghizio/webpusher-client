import { Users } from "lucide-react";
import { UsersList } from "@/components/UsersList/UsersList";
import { Title } from "@/components/Title/Title";

export const UsersPage = () => {
  return (
    <main className="overflow-y-scroll">
      <Title left={<Users size={26} />} primary>
        Users
      </Title>
      <UsersList />
    </main>
  );
};
