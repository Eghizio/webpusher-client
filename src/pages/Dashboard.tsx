import { classed } from "@tw-classed/react";
import { Home } from "lucide-react";
import { Api } from "@/api/Api";
import { Page, useNavigation } from "@/context/NavigationContext";

export const DashboardPage = () => {
  const { navigateTo } = useNavigation();

  return (
    <main>
      <Title />

      <br />
      <Button onClick={getCurrentUser}>Get current user</Button>
      <Button onClick={() => navigateTo(Page.Onboarding)}>To Onboarding</Button>
    </main>
  );
};

const getCurrentUser = () => Api.getCurrentUser().then(console.log);

const Title = () => (
  <h2 className="text-2xl flex items-center gap-2 font-bold">
    <div className="bg-gray-300 p-2 rounded-full">
      <Home size={26} />
    </div>
    Dashboard
  </h2>
);

const Button = classed.button(
  "border-2 p-2 border-gray-300 bg-gray-400 hover:bg-gray-600"
);
