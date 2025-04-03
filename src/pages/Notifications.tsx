import { Title } from "@/components/Title/Title";
import { Bell } from "lucide-react";

export const NotificationsPage = () => (
  <main>
    <Title left={<Bell size={26} />} primary>
      Notifications
    </Title>
  </main>
);
