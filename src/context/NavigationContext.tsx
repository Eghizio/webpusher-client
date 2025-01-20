import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export enum Page {
  Home = "Home",
  Onboarding = "Onboarding",
  Settings = "Settings",
}

export type NavigationContextValue = {
  page: Page;
  navigateToHome: () => void;
  navigateToOnboarding: () => void;
  navigateToPage: (page: Page) => void;
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
  const [page, setPage] = useState(Page.Home);

  const navigateToPage = useCallback((page: Page) => setPage(page), [setPage]);

  const navigateToHome = useCallback(
    () => navigateToPage(Page.Home),
    [navigateToPage]
  );

  const navigateToOnboarding = useCallback(
    () => navigateToPage(Page.Onboarding),
    [navigateToPage]
  );

  const value = useMemo(
    () => ({
      page,
      navigateToPage,
      navigateToHome,
      navigateToOnboarding,
    }),
    [page, navigateToPage, navigateToHome, navigateToOnboarding]
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
