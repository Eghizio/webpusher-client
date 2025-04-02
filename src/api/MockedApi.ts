import { User } from "@/components/UsersList/types";
import { HttpClient } from "./HttpClient";
import { sleep } from "@/lib/utils";

// const API_URL = "/api/v1"; // "http://localhost:3000/api/v1"
const API_URL = "http://localhost:3000/api/v1";
const headers = { "Content-Type": "application/json" };

export const Http = new HttpClient(API_URL, headers);

/* Mocked API */
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
    return mockResponse({ id: "42", username });
  }

  static async getUsers() {
    await sleep();
    return Http.get<User[]>("/users/all");
  }

  static async getCurrentUser() {
    await sleep();
    return Http.get("/users/me");
  }

  static async pokeUser(_userId: string) {
    await sleep();
  }
}
