import { Home } from "lucide-react";
import { DebugPanel } from "@/components/DebugPanel/DebugPanel";
import { Title } from "@/components/Title/Title";
import { Broadcast } from "@/components/Broadcast/Broadcast";

export const DashboardPage = () => {
  return (
    <main>
      <Title left={<Home size={26} />} divider>
        Dashboard
      </Title>

      <section className="flex flex-col gap-4 py-2">
        <DebugPanel />

        <Broadcast />
      </section>
    </main>
  );
};
