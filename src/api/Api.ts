import { HttpClient } from "./HttpClient";
// import type { PushSubscription } from "@/model";
import { MockedApi } from "./MockedApi";
import { User } from "@/components/UsersList/types";

// const API_URL = "/api/v1"; // "http://localhost:3000/api/v1"
const API_URL = `${import.meta.env.VITE_API_HOST}/api/v1`;
const headers = { "Content-Type": "application/json" };

const Http = new HttpClient(API_URL, headers);

class Api {
  static async subscribe(subscription: PushSubscription) {
    return Http.post<void, { subscription: PushSubscription }>(
      "/push/subscribe",
      { subscription }
    );
  }

  static async unsubscribe(subscription: PushSubscription) {
    return Http.post<void, { subscription: PushSubscription }>(
      "/push/unsubscribe",
      { subscription }
    );
  }

  static async broadcast(message: string) {
    return Http.post<void, { message: string }>("/push/broadcast", { message });
  }

  static async broadcastToUser(userId: string, message: string) {
    return Http.post<void, { message: string }>(`/push/broadcast/${userId}`, {
      message,
    });
  }

  static async registerUser(username: string) {
    return Http.post<User, { username: string }>("/users/register", {
      username,
    });
  }

  static async getUsers() {
    return Http.get<User[]>("/users/all");
  }

  static async getCurrentUser() {
    return Http.get("/users/me");
  }

  static async pokeUser(userId: string) {
    return Http.post(`/pokes/${userId}`, undefined);
  }
}

const mocksEnabled = false;
const ApiClass = mocksEnabled ? MockedApi : Api;
export { ApiClass as Api };

// // Move to some module.
// Register
// interface UserDto {
//   id: string;
//   username: string;
//   tag: string;
// }

// UserList
// interface UserDto {
//   id: string;
//   username: string;
//   subscribed: boolean;
//   createdAt: Date;
// }
