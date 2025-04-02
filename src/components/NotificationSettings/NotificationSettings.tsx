import { BellDot } from "lucide-react";
import { Title } from "../Title/Title";
import { WebPush } from "@/lib/webpush/WebPush";
import { useEffect, useState } from "react";

interface Props {}

export const NotificationSettings = ({}: Props) => {
  // TODO: Notification Context & Hooks for keeping the state.
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    WebPush.getSubscription().then((subscription) =>
      setIsSubscribed(Boolean(subscription))
    );
  }, []);

  return (
    <article>
      <Title left={<BellDot size={26} />}>Notification Settings</Title>

      <section className="flex flex-col gap-2 py-2">
        <div className="space-y-2">
          <h4 className="font-bold text-xl">Permissions section</h4>
          <div>
            Current Notification permission status:
            {WebPush.isUserPermissionGranted() ? " ✅" : " ❌"}
          </div>
          <div>
            Enable permissions btn + instructions how to fix denied permissions
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-bold text-xl">Subscription section</h4>
          <div>Current subscription status: {isSubscribed ? " ✅" : " ❌"}</div>
          <div>Subscribe / Unsubscribe toggle</div>
        </div>
      </section>
    </article>
  );
};
