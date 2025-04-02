import { WebPush } from "@/lib/webpush/WebPush";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
  //   useCallback,
  //   useState,
} from "react";
// import { Api } from "@/api/Api";
// import { User } from "@/components/UsersList/types";

export type NotificationsContextValue = {
  isSupported: boolean;
  isUserPermissionGranted: boolean;
  isSubscribed: boolean;
};

const NotificationsContext = createContext<
  NotificationsContextValue | undefined
>(undefined);

export const useNotifications = () => {
  const context = useContext(NotificationsContext);

  if (context === undefined) {
    throw new Error("Notifications Context must be used within Provider.");
  }

  return context;
};

type WithChildren = {
  children: ReactNode;
};

export const NotificationsContextProvider = ({ children }: WithChildren) => {
  const [isSupported, setIsSupported] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isUserPermissionGranted, setIsUserPermissionGranted] = useState(false);

  useEffect(() => {
    setIsSupported(WebPush.isNotificationSupported());
    setIsUserPermissionGranted(WebPush.isUserPermissionGranted());

    WebPush.getSubscription().then((subscription) =>
      setIsSubscribed(Boolean(subscription))
    );
  }, []);

  // Todo: Subscribe / Unsubscribe, Enable Permissions

  //   const registerUser = useCallback(
  //     async (username: string) => Api.registerUser(username).then(setUser),
  //     [Api]
  //   );

  const value = useMemo(
    () => ({
      isSupported,
      isUserPermissionGranted,
      isSubscribed,
    }),
    [isSupported, isUserPermissionGranted, isSubscribed]
  );

  return (
    <NotificationsContext.Provider value={value}>
      {children}
    </NotificationsContext.Provider>
  );
};
