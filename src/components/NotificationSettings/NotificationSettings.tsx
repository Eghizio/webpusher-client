import { BellDot } from "lucide-react";
import { Title } from "@/components/Title/Title";
import { useNotifications } from "@/context/NotificationsContext";
import { classed } from "@tw-classed/react";

interface Props {}

export const NotificationSettings = ({}: Props) => {
  const { isSupported, isUserPermissionGranted, isSubscribed } =
    useNotifications();

  return (
    <article>
      <Title left={<BellDot size={26} />}>Notification Settings</Title>

      <main className="flex flex-col gap-2 py-2">
        <Section>
          <h4 className="font-bold text-xl">Supported section</h4>

          <Tile>
            Are Web Push Notification supported:
            {isSupported ? " ✅" : " ❌"}
          </Tile>
        </Section>

        <Section>
          <h4 className="font-bold text-xl">Permissions section</h4>

          <Tile>
            Current Notification permission status:
            {isUserPermissionGranted ? " ✅" : " ❌"}
          </Tile>
          <Tile>
            Enable permissions btn + instructions how to fix denied permissions
          </Tile>
        </Section>

        <Section>
          <h4 className="font-bold text-xl">Subscription section</h4>

          <Tile>
            Current subscription status: {isSubscribed ? " ✅" : " ❌"}
          </Tile>
          <Tile>Subscribe / Unsubscribe toggle</Tile>
        </Section>
      </main>
    </article>
  );
};

const Section = classed.section("space-y-2");
const Tile = classed.div("p-1 bg-gray-200");
