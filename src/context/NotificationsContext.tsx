import { Api } from "@/api/Api";
import { WebPush } from "@/lib/webpush/WebPush";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
// import { Api } from "@/api/Api";

export type NotificationsContextValue = {
  isSupported: boolean;
  isUserPermissionGranted: boolean;
  isSubscribed: boolean;

  requestUserPermission: () => Promise<void>;
  subscribe: () => Promise<void>;
  unsubscribe: () => Promise<void>;

  getCurrentSubscription: () => Promise<PushSubscription | null>;
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

  const requestUserPermission = useCallback(
    () =>
      WebPush.requestWebPushPermissionFromUser()
        .then(() => setIsUserPermissionGranted(true))
        .catch(() => setIsUserPermissionGranted(false)),
    []
  );

  const subscribe = useCallback(
    async () =>
      WebPush.subscribe().then((subscription) => {
        setIsSubscribed(Boolean(subscription));
        return Api.subscribe(subscription);
      }),
    []
  );

  const unsubscribe = useCallback(async () => {
    const subscription = await WebPush.getSubscription();
    return WebPush.unsubscribe().then(() => {
      setIsSubscribed(false);
      if (subscription) return Api.unsubscribe(subscription);
    });
  }, []);

  const getCurrentSubscription = useCallback(async () => {
    const result = WebPush.getSubscription();
    setIsSubscribed(Boolean(result));
    return result;
  }, []);

  const value = useMemo(
    () => ({
      isSupported,
      isUserPermissionGranted,
      isSubscribed,
      requestUserPermission,
      subscribe,
      unsubscribe,
      getCurrentSubscription,
    }),
    [
      isSupported,
      isUserPermissionGranted,
      isSubscribed,
      requestUserPermission,
      subscribe,
      unsubscribe,
      getCurrentSubscription,
    ]
  );

  return (
    <NotificationsContext.Provider value={value}>
      {children}
    </NotificationsContext.Provider>
  );
};
