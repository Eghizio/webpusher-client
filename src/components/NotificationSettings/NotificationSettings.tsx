import { useState } from "react";
import { classed } from "@tw-classed/react";
import { BellOff, BellRing, Settings2 } from "lucide-react";
// import { BellDot } from "lucide-react";
import { useNotifications } from "@/context/NotificationsContext";
import { Banner } from "@/components/Banner/Banner";
import { Toggle } from "./Toggle";

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

  const toggleSubscription = async (enabled: boolean) => {
    if (enabled) {
      await subscribe();
    } else {
      await unsubscribe();
    }
  };

  return (
    <article>
      {/* <Title left={<BellDot size={26} />}>Notification Settings</Title> */}

      <main className="flex flex-col gap-8 py-2">
        {isSupported ? (
          <Banner variant="success">
            <Title>
              Web Push notifications are supported on your device & browser ✨
            </Title>
          </Banner>
        ) : (
          <Banner variant="danger">
            <Title>
              Web Push notifications are not supported on your device & browser
              😭
            </Title>
          </Banner>
        )}

        <Section>
          <Title>
            {isSubscribed ? <BellRing /> : <BellOff size={22} />}
            {/* {isSubscribed ? <BellDot size={22} /> : <BellOff size={22} />} */}
            Web Push Subscription
          </Title>

          <Tile className="justify-between">
            <span>
              You are currently {isSubscribed ? "subscribed" : "not subscribed"}
            </span>

            <Toggle isEnabled={isSubscribed} onChange={toggleSubscription} />
          </Tile>
        </Section>

        <Section>
          <Title>
            <Settings2 size={22} /> Permissions
          </Title>

          {isUserPermissionGranted ? (
            <Banner variant="success">
              <Title>
                You have granted permission for Web Push notifications 👍
              </Title>
            </Banner>
          ) : (
            <>
              <Banner variant="warning">
                <Title>
                  You need to grant permission for Web Push notifications ⬇️
                </Title>
              </Banner>

              <Button
                type="button"
                onClick={acceptNotifications}
                disabled={isSubmitting}
              >
                Accept notifications
              </Button>
            </>
          )}

          <Banner variant="info">
            <Title>In case of denied notifications</Title>
            <p>
              Please go to your browser settings and revoke the denied
              permissions to the initial state.
            </p>
          </Banner>
        </Section>
      </main>
    </article>
  );
};

const Section = classed.section("space-y-4");
const Title = classed.h3("font-semibold text-lg flex items-center gap-1");
const Tile = classed.div("p-1 flex items-center");
const Button = classed.button(
  "w-full bg-blue-500 text-white p-2 rounded-md  disabled:bg-gray-500 disabled:brightness-50"
);
