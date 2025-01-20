import { getServiceWorkerRegistration } from "./WebPush.utils";

export class ServiceWorkerService {
  constructor() {
    // Todo: Add handling.
    if (!("serviceWorker" in navigator)) {
      throw new Error("Service Worker not supported.");
    }

    // https://stackoverflow.com/a/79059165
    if (!("PushManager" in window)) {
      throw new Error("Push not supported.");
    }
  }

  async register() {
    /* Service Worker file needs versioning for caching & invalidation. */
    await navigator.serviceWorker.register("/sw.js", {
      scope: "/",
    });
  }

  async update() {
    const registration = await getServiceWorkerRegistration();
    await registration.update();
  }
}
