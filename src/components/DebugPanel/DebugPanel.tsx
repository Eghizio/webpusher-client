import { classed } from "@tw-classed/react";
import { Page, useNavigation } from "@/context/NavigationContext";
import { WebPush } from "@/lib/webpush/WebPush";
import { Api } from "@/api/Api";
import { Title } from "../Title/Title";
import { Bot } from "lucide-react";

const Button = classed.button(
  "flex gap-3 border-2 p-2 border-gray-300 bg-gray-400 hover:bg-gray-600"
);

export const DebugPanel = () => {
  const { navigateTo } = useNavigation();

  const getCurrentUser = () => Api.getCurrentUser().then(console.log);

  const goToOnboarding = () => navigateTo(Page.Onboarding);

  const enableNotifications = () => WebPush.requestWebPushPermissionFromUser();

  const getCurrentSubscription = () =>
    WebPush.getSubscription().then((subscription) => {
      console.log(subscription);
      console.log(JSON.stringify(subscription, null, 2));
    });

  const subscribe = async () =>
    WebPush.subscribe().then((subscription) => {
      console.log("Subscribed:", subscription);
      return Api.subscribe(subscription);
    });

  const unsubscribe = async () => {
    const subscription = await WebPush.getSubscription();
    console.log("Unsubscribing subscription:", { subscription });

    await WebPush.unsubscribe().then(() => {
      if (subscription) return Api.unsubscribe(subscription);
    });
  };

  return (
    <section className="bg-red-400 flex flex-col gap-2 p-1">
      <Title left={<Bot size={26} />}>Debug</Title>

      <Button onClick={getCurrentUser}>
        <span>🙋</span> Get current user
      </Button>
      <Button onClick={goToOnboarding}>
        <span>🚀</span> To Onboarding
      </Button>

      <Button onClick={enableNotifications}>
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
