import { Header } from "./components/Header/Header";
import { Page, useNavigation } from "./context/NavigationContext";

import { NotFoundPage } from "./pages/NotFound";
import { HomePage } from "./pages/Home";
import { OnboardingPage } from "./pages/Onboarding";
import { SettingsPage } from "./pages/Settings";

const Router = () => {
  const { page } = useNavigation();

  switch (page) {
    case Page.Home: {
      return <HomePage />;
    }
    case Page.Onboarding: {
      return <OnboardingPage />;
    }
    case Page.Settings: {
      return <SettingsPage />;
    }
    default: {
      return <NotFoundPage />;
    }
  }
};

export const App = () => (
  <>
    <Header />
    <Router />
  </>
);
