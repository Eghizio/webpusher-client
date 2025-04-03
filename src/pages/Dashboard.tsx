import { Home } from "lucide-react";
import { DebugPanel } from "@/components/DebugPanel/DebugPanel";
import { Title } from "@/components/Title/Title";
import { Broadcast } from "@/components/Broadcast/Broadcast";
import { Quiz } from "@/components/Quiz/Quiz";
import { useNotifications } from "@/context/NotificationsContext";
import {
  NotificationsDisabledBanner,
  NotificationsNotSupportedBanner,
  NotificationsSupportedBanner,
  StayInTouchBanner,
} from "@/components/banners";

export const DashboardPage = () => {
  return (
    <main>
      <Title left={<Home size={26} />} primary>
        Dashboard
      </Title>

      <section className="flex flex-col gap-6 py-2 mb-24">
        <DebugPanel />
        <Banners />

        <Broadcast />
        <StayInTouchBanner />

        <Quiz />
      </section>
    </main>
  );
};

const Banners = () => {
  const { isSupported, isUserPermissionGranted } = useNotifications();

  return (
    <>
      {isSupported ? (
        <NotificationsSupportedBanner />
      ) : (
        <NotificationsNotSupportedBanner />
      )}

      {!isUserPermissionGranted && <NotificationsDisabledBanner />}
    </>
  );
};
