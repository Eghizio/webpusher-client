import { HttpClient } from "./HttpClient";
import type { PushSubscription } from "@/model";

// const API_URL = "/api/v1"; // "http://localhost:3000/api/v1"
const API_URL = "http://localhost:3000/api/v1";
const headers = { "Content-Type": "application/json" };

const Http = new HttpClient(API_URL, headers);

class Api {
  static async subscribe(subscription: PushSubscription) {
    return Http.post("/push/subscribe", { subscription });
  }

  static async unsubscribe(subscription: PushSubscription) {
    return Http.post("/push/unsubscribe", { subscription });
  }

  static async broadcast(message: string) {
    return Http.post("/push/broadcast", { message });
  }

  static async broadcastToUser(userId: string, message: string) {
    return Http.post(`/push/broadcast/${userId}`, { message });
  }

  static async registerUser(username: string) {
    return Http.post("/users/register", { username });
  }

  static async getUsers() {
    return Http.get("/users/all");
  }

  static async getCurrentUser() {
    return Http.get("/users/me");
  }
}

// export { Api };
export { MockedApi as Api } from "./MockedApi";
