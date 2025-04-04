self.addEventListener("install", (event) => {
  console.log("Service Worker installing.");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activating.");
});

self.addEventListener("push", (event) => {
  const data = event.data.json();

  console.log("Push Received...", data);

  const notificationPromise = self.registration.showNotification(data.title, {
    body: "Notified by Web Push Demo!",
    icon: "/assets/favicon.png",
    image: "https://cataas.com/cat",
    tag: Math.random().toString(),
    data: { url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  });

  /* https://web.dev/articles/push-notifications-handling-messages#wait_until
        const analyticsPromise = pushReceivedTracking(); */
  event.waitUntil(notificationPromise);
});

const starWarsThemeOption = {
  // This only affects devices that support vibration.
  // Star Wars shamelessly taken from the awesome Peter Beverloo
  // https://tests.peter.sh/notification-generator/
  vibrate: [
    500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170,
    40, 500,
  ],
};

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url =
    event?.notification?.data?.url ??
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  event.waitUntil(clients.openWindow(url));
});
