import { Home } from "lucide-react";
import { DebugPanel } from "@/components/DebugPanel/DebugPanel";
import { Title } from "@/components/Title/Title";
import { Broadcast } from "@/components/Broadcast/Broadcast";
import { Quiz } from "@/components/Quiz/Quiz";
import { Banner } from "@/components/Banner/Banner";
import { Page, useNavigation } from "@/context/NavigationContext";

export const DashboardPage = () => {
  const { navigateTo } = useNavigation();

  return (
    <main>
      <Title left={<Home size={26} />} divider>
        Dashboard
      </Title>

      <section className="flex flex-col gap-4 py-2">
        {/* <DebugPanel /> */}

        <Banner variant="warning">
          <h3 className="font-semibold mb-1">
            Seems like your Notifications are disabled.
          </h3>
          <p>
            Please enable them <strong>bellow</strong> or in{" "}
            <strong>Settings</strong> for full demo experience 🎉
          </p>
        </Banner>

        <Broadcast />

        <Banner variant="info">
          <h3 className="font-semibold mb-1">Stay in touch with everybody!</h3>
          <p>Literally. It is just one tap away 😃</p>
          <span
            className="underline text-blue-400"
            onClick={() => navigateTo(Page.Users)}
          >
            Take me there!
          </span>
        </Banner>

        <Quiz />
      </section>
    </main>
  );
};
