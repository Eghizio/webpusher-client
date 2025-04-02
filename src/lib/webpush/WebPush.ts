import { publicVapidKey } from "./WebPush.config";
import { getServiceWorkerRegistration } from "./WebPush.utils";

export class WebPush {
  static async getSubscription() {
    const registration = await getServiceWorkerRegistration();
    return registration.pushManager.getSubscription();
  }

  static async subscribe() {
    const registration = await getServiceWorkerRegistration();
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: publicVapidKey,
    });

    return subscription;
  }

  static async unsubscribe() {
    const subscription = await WebPush.getSubscription();
    return subscription ? subscription.unsubscribe() : false;
  }

  // Todo: Test and handle properly.
  static async requestWebPushPermissionFromUser() {
    return new Promise(function (resolve, reject) {
      const permissionResult = Notification.requestPermission((result) => {
        resolve(result);
      });

      if (permissionResult) {
        permissionResult.then(resolve, reject);
      }
    }).then((permissionResult) => {
      if (permissionResult !== "granted") {
        throw new Error("We weren't granted permission.");
      }
    });
  }

  static isNotificationSupported(): boolean {
    const isUnsupported =
      !("serviceWorker" in navigator) ||
      !("PushManager" in window) ||
      !("showNotification" in ServiceWorkerRegistration.prototype);

    return !isUnsupported;
  }

  static isUserPermissionGranted(): boolean {
    switch (Notification.permission) {
      case "granted":
        return true;

      case "default":
      case "denied":
      default:
        return false;
    }
  }
}
