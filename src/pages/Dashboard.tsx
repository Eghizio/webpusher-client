import { classed } from "@tw-classed/react";
import { Home } from "lucide-react";
import { Api } from "@/api/Api";
import { Page, useNavigation } from "@/context/NavigationContext";
import { WebPush } from "@/lib/webpush/WebPush";

export const DashboardPage = () => {
  const { navigateTo } = useNavigation();

  const subscribe = async () => {
    WebPush.subscribe().then((subscription) => {
      console.log("Subscribed:", subscription);
      return Api.subscribe(subscription);
    });
  };

  const unsubscribe = async () => {
    const subscription = await WebPush.getSubscription();
    console.log("Unsubscribing subscription:", { subscription });

    await WebPush.unsubscribe().then(() => {
      if (subscription) return Api.unsubscribe(subscription);
    });
  };

  return (
    <main>
      <Title />

      <section className="border-red-500 border">
        <br />
        <br />
        <h2>Debug</h2>

        <br />
        <Button onClick={getCurrentUser}>Get current user</Button>
        <Button onClick={() => navigateTo(Page.Onboarding)}>
          To Onboarding
        </Button>

        <br />
        <br />
        <Button onClick={WebPush.requestWebPushPermissionFromUser}>
          Enable Notifications ⚙️
        </Button>
        <Button
          onClick={() =>
            WebPush.getSubscription().then((subscription) => {
              console.log(subscription);
              console.log(JSON.stringify(subscription, null, 2));
            })
          }
        >
          Get current Subscription ⭐
        </Button>
        <Button onClick={subscribe}>Subscribe 🔔</Button>
        <Button onClick={unsubscribe}>Unsubscribe 🔕</Button>
      </section>
    </main>
  );
};

const getCurrentUser = () => Api.getCurrentUser().then(console.log);

const Title = () => (
  <h2 className="text-2xl flex items-center gap-2 font-bold">
    <div className="bg-gray-300 p-2 rounded-full">
      <Home size={26} />
    </div>
    Dashboard
  </h2>
);

const Button = classed.button(
  "border-2 p-2 border-gray-300 bg-gray-400 hover:bg-gray-600"
);
