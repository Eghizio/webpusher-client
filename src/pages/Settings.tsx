import { Title } from "@/components/Title/Title";
import { Settings } from "lucide-react";

export const SettingsPage = () => (
  <main>
    <Title left={<Settings size={26} />} divider>
      Settings
    </Title>
  </main>
);
