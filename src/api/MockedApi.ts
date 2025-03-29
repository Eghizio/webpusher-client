import { HttpClient } from "./HttpClient";

// const API_URL = "/api/v1"; // "http://localhost:3000/api/v1"
const API_URL = "http://localhost:3000/api/v1";
const headers = { "Content-Type": "application/json" };

export const Http = new HttpClient(API_URL, headers);

/* Mocked API */
const sleep = async (ms = 1_500) => new Promise((r) => setTimeout(r, ms));
const mockResponse = async <T>(response: T) => sleep().then(() => response);

export class MockedApi {
  static async subscribe(subscription: PushSubscription) {
    await sleep();
    return Http.post("/push/subscribe", { subscription });
  }

  static async unsubscribe(subscription: PushSubscription) {
    await sleep();
    return Http.post("/push/unsubscribe", { subscription });
  }

  static async broadcast(message: string) {
    await sleep();
    return Http.post("/push/broadcast", { message });
  }

  static async broadcastToUser(userId: string, message: string) {
    await sleep();
    return Http.post(`/push/broadcast/${userId}`, { message });
  }

  static async registerUser(username: string) {
    return mockResponse({ username });
  }

  static async getUsers() {
    await sleep();
    return Http.get("/users/all");
  }

  static async getCurrentUser() {
    await sleep();
    return Http.get("/users/me");
  }
}
