import { Header } from "./components/Header/Header";
import { Page, useNavigation } from "./context/NavigationContext";

import { HomePage } from "./pages/Home";
import { NotFoundPage } from "./pages/NotFound";
import { OnboardingPage } from "./pages/Onboarding";

const Router = () => {
  const { page } = useNavigation();

  switch (page) {
    case Page.Home: {
      return <HomePage />;
    }
    case Page.Onboarding: {
      return <OnboardingPage />;
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
