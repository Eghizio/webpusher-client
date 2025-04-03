import { useState } from "react";
import { classed } from "@tw-classed/react";
import { BellOff, BellRing, Settings2 } from "lucide-react";
// import { BellDot } from "lucide-react";
import { useNotifications } from "@/context/NotificationsContext";
import { Toggle } from "./Toggle";
import {
  NotificationsNotSupportedBanner,
  NotificationsSupportedBanner,
  PermissionDeniedBanner,
  PermissionGrantedBanner,
  PermissionRequiredBanner,
} from "../banners";

export const NotificationSettings = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    isSupported,
    isUserPermissionGranted,
    isSubscribed,
    requestUserPermission,
    subscribe,
    unsubscribe,
  } = useNotifications();

  const acceptNotifications = () => {
    setIsSubmitting(true);
    requestUserPermission().finally(() => setIsSubmitting(false));
  };

  const toggleSubscription = async (checked: boolean) => {
    if (checked) {
      await subscribe();
    } else {
      await unsubscribe();
    }
  };

  return (
    <article>
      <main className="flex flex-col gap-8 py-2">
        {isSupported ? (
          <NotificationsSupportedBanner />
        ) : (
          <NotificationsNotSupportedBanner />
        )}

        <Section>
          <Title>
            {isSubscribed ? <BellRing size={22} /> : <BellOff size={22} />}
            {/* {isSubscribed ? <BellDot size={22} /> : <BellOff size={22} />} */}
            Web Push Subscription
          </Title>

          <div className="p-1 flex items-center justify-between">
            <span>
              You are currently {isSubscribed ? "subscribed" : "not subscribed"}
            </span>

            <Toggle isChecked={isSubscribed} onChange={toggleSubscription} />
          </div>
        </Section>

        <Section>
          <Title>
            <Settings2 size={22} /> Permissions
          </Title>

          {isUserPermissionGranted ? (
            <PermissionGrantedBanner />
          ) : (
            <>
              <PermissionRequiredBanner />

              <Button
                type="button"
                onClick={acceptNotifications}
                disabled={isSubmitting}
              >
                Accept notifications
              </Button>
            </>
          )}

          <PermissionDeniedBanner />
        </Section>
      </main>
    </article>
  );
};

const Section = classed.section("space-y-4");
const Title = classed.h3("font-semibold text-lg flex items-center gap-1");
const Button = classed.button(
  "w-full bg-blue-500 text-white p-2 rounded-md  disabled:bg-gray-500 disabled:brightness-50"
);
