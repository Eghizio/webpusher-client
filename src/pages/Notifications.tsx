import { Bell } from "lucide-react";

export const NotificationsPage = () => (
  <main>
    <Title />
  </main>
);

const Title = () => (
  <h2 className="text-2xl flex items-center gap-2 font-bold">
    <div className="bg-gray-300 p-2 rounded-full">
      <Bell size={26} />
    </div>
    Notifications
  </h2>
);
