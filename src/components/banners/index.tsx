import { Banner } from "@/components/Banner/Banner";
import { Page, useNavigation } from "@/context/NavigationContext";
import { classed } from "@tw-classed/react";

const Title = classed.h3("font-semibold text-lg flex items-center gap-1");

export const NotificationsSupportedBanner = () => (
  <Banner variant="success">
    <Title>
      Web Push notifications are supported on your device & browser ✨
    </Title>
  </Banner>
);
export const NotificationsNotSupportedBanner = () => (
  <Banner variant="danger">
    <Title>
      Web Push notifications are not supported on your device & browser 😭
    </Title>
  </Banner>
);

export const NotificationsDisabledBanner = () => {
  const { navigateTo } = useNavigation();

  return (
    <Banner variant="warning">
      <h3 className="font-semibold mb-1">
        Seems like your Notifications are disabled.
      </h3>
      <p>
        Please enable them in{" "}
        <strong
          className="underline text-blue-400"
          onClick={() => navigateTo(Page.Settings)}
        >
          Settings
        </strong>{" "}
        for full demo experience 🎉
      </p>
    </Banner>
  );
};

export const StayInTouchBanner = () => {
  const { navigateTo } = useNavigation();

  return (
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
  );
};

export const PermissionGrantedBanner = () => (
  <Banner variant="success">
    <Title>You have granted permission for Web Push notifications 👍</Title>
  </Banner>
);

export const PermissionRequiredBanner = () => (
  <Banner variant="warning">
    <Title>You need to grant permission for Web Push notifications ⬇️</Title>
  </Banner>
);

export const PermissionDeniedBanner = () => (
  <Banner variant="info">
    <Title>In case of denied notifications</Title>
    <p>
      Please go to your browser settings and revoke the denied permissions to
      the initial state.
    </p>
  </Banner>
);
