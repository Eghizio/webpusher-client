import { classed } from "@tw-classed/react";
import { Page, useNavigation } from "@/context/NavigationContext";
import { WebPush } from "@/lib/webpush/WebPush";
import { Api } from "@/api/Api";

const Button = classed.button(
  "border-2 p-2 border-gray-300 bg-gray-400 hover:bg-gray-600"
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
    <section className="border-red-500 border">
      <br />
      <br />
      <h2>Debug</h2>

      <br />
      <Button onClick={getCurrentUser}>Get current user</Button>
      <Button onClick={goToOnboarding}>To Onboarding</Button>

      <br />
      <br />
      <Button onClick={enableNotifications}>Enable Notifications ⚙️</Button>
      <Button onClick={getCurrentSubscription}>
        Get current Subscription ⭐
      </Button>
      <Button onClick={subscribe}>Subscribe 🔔</Button>
      <Button onClick={unsubscribe}>Unsubscribe 🔕</Button>
    </section>
  );
};
