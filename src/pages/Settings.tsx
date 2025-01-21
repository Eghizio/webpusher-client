import { Settings } from "lucide-react";

interface Props {}

export const SettingsPage = ({}: Props) => {
  return (
    <main>
      <Title />
    </main>
  );
};

const Title = () => (
  <h2 className="text-2xl flex items-center gap-2 font-bold">
    <div className="bg-gray-300 p-2 rounded-full">
      <Settings size={26} />
    </div>
    Settings
  </h2>
);
