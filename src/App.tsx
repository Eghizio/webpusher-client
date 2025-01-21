// import { Header } from "./components/Header/Header";
import { Page, useNavigation } from "./context/NavigationContext";

import { Layout } from "./components/Layout/Layout";

import { NotFoundPage } from "./pages/NotFound";
import { OnboardingPage } from "./pages/Onboarding";

import { DashboardPage } from "./pages/Dashboard";
import { NotificationsPage } from "./pages/Notifications";
import { UsersPage } from "./pages/Users";
import { SettingsPage } from "./pages/Settings";

const Router = () => {
  const { page } = useNavigation();

  switch (page) {
    case Page.Onboarding: {
      return <OnboardingPage />;
    }

    case Page.Dashboard: {
      return <DashboardPage />;
    }
    case Page.Users: {
      return <UsersPage />;
    }
    case Page.Notifications: {
      return <NotificationsPage />;
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
    {/* <Header /> */}
    <Layout>
      <Router />
    </Layout>
  </>
);
