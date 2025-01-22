import { Api } from "@/api/Api";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export enum Page {
  Splashscreen = "Splashscreen",
  Onboarding = "Onboarding",
  Dashboard = "Dashboard",
  Users = "Users",
  Notifications = "Notifications",
  Settings = "Settings",
}

export type NavigationContextValue = {
  page: Page;
  navigateTo: (page: Page) => void;
};

const NavigationContext = createContext<NavigationContextValue | undefined>(
  undefined
);

export const useNavigation = () => {
  const context = useContext(NavigationContext);

  if (context === undefined) {
    throw new Error("Navigation Context must be used within Provider.");
  }

  return context;
};

type WithChildren = {
  children: ReactNode;
};

export const NavigationContextProvider = ({ children }: WithChildren) => {
  // Todo: Check if already Registered.
  // Registered -> Home / NotRegistered -> Onboarding
  const [page, setPage] = useState(Page.Splashscreen);

  const navigateTo = useCallback((page: Page) => setPage(page), [setPage]);

  useEffect(() => {
    Api.getCurrentUser()
      // .then(() => navigateTo(Page.Dashboard))
      // .catch(() => navigateTo(Page.Onboarding));
      .then((data) => {
        console.log("Success -> Dashboard", data);
        navigateTo(Page.Dashboard);
      })
      .catch((error) => {
        console.log("Failure -> Onboarding", error);
        navigateTo(Page.Onboarding);
      });
  }, []);

  const value = useMemo(
    () => ({
      page,
      navigateTo,
    }),
    [page, navigateTo]
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
