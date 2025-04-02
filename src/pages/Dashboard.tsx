import { Home } from "lucide-react";
import { DebugPanel } from "@/components/DebugPanel/DebugPanel";

export const DashboardPage = () => {
  return (
    <main>
      <Title />
      <DebugPanel />
    </main>
  );
};

const Title = () => (
  <h2 className="text-2xl flex items-center gap-2 font-bold">
    <div className="bg-gray-300 p-2 rounded-full">
      <Home size={26} />
    </div>
    Dashboard
  </h2>
);
