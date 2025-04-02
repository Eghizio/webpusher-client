import { NotificationSettings } from "@/components/NotificationSettings/NotificationSettings";
import { Title } from "@/components/Title/Title";
import { Settings } from "lucide-react";

export const SettingsPage = () => (
  <main>
    <Title left={<Settings size={26} />} divider>
      Settings
    </Title>

    <section className="flex flex-col gap-4 py-2 mb-24">
      <NotificationSettings />
    </section>
  </main>
);
