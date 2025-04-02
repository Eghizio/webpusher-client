import { classed } from "@tw-classed/react";
import { Bot } from "lucide-react";
import { Title } from "@/components/Title/Title";
import { Page, useNavigation } from "@/context/NavigationContext";
import { useNotifications } from "@/context/NotificationsContext";
import { useUser } from "@/context/UserContext";

const Button = classed.button(
  "flex gap-3 border-2 p-2 border-gray-300 bg-gray-400 hover:bg-gray-600"
);

export const DebugPanel = () => {
  const { user } = useUser();

  const { navigateTo } = useNavigation();

  const {
    requestUserPermission,
    subscribe,
    unsubscribe,
    getCurrentSubscription,
  } = useNotifications();

  const getCurrentUser = () => console.log(user);

  const goToOnboarding = () => navigateTo(Page.Onboarding);

  return (
    <section className="bg-red-400 flex flex-col gap-2 p-1">
      <Title left={<Bot size={26} />}>Debug</Title>

      <Button onClick={getCurrentUser}>
        <span>🙋</span> Get current user
      </Button>
      <Button onClick={goToOnboarding}>
        <span>🚀</span> To Onboarding
      </Button>

      <Button onClick={requestUserPermission}>
        <span>⚙️</span> Enable Notifications
      </Button>
      <Button onClick={getCurrentSubscription}>
        <span>⭐</span> Get current Subscription
      </Button>

      <Button onClick={subscribe}>
        <span>🔔</span> Subscribe
      </Button>
      <Button onClick={unsubscribe}>
        <span>🔕</span> Unsubscribe
      </Button>
    </section>
  );
};
