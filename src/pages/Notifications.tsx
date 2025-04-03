import { Banner } from "@/components/Banner/Banner";
import { Title } from "@/components/Title/Title";
import { Bell } from "lucide-react";

export const NotificationsPage = () => (
  <main>
    <Title left={<Bell size={26} />} primary>
      Notifications
    </Title>

    <Banner variant="info">
      <h3 className="font-bold">
        Here was supposed to be a history of your notifications.
      </h3>
      <p>But deadlines you know 🤷</p>
    </Banner>
  </main>
);
