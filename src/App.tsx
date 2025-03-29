import { Page, useNavigation } from "@/context/NavigationContext";

import { Layout } from "@/components/Layout/Layout";

import { Splashscreen } from "./pages/Splashscreen";
import { OnboardingPage } from "@/pages/Onboarding";
import { NotFoundPage } from "@/pages/NotFound";

import { DashboardPage } from "@/pages/Dashboard";
import { NotificationsPage } from "@/pages/Notifications";
import { UsersPage } from "@/pages/Users";
import { SettingsPage } from "@/pages/Settings";

// Poke Feature.
const Router = () => {
  const { page } = useNavigation();

  switch (page) {
    // Omit <Layout/> but keep single instance for other pages.?
    case Page.Splashscreen: {
      return <Splashscreen />;
    }
    case Page.Onboarding: {
      return <OnboardingPage />;
    }

    // Single instance <Layout/>.
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

export const App = () => {
  const { page } = useNavigation();
  const withoutLayout = [Page.Splashscreen, Page.Onboarding].includes(page);

  if (withoutLayout) return <Router />;

  return (
    <Layout>
      <Router />
    </Layout>
  );
};
