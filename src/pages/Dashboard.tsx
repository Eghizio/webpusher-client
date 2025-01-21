import { Home } from "lucide-react";

interface Props {}

export const DashboardPage = ({}: Props) => {
  return (
    <main>
      <Title />
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
