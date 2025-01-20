type Headers = Record<string, string>;
type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export class HttpClient {
  constructor(private apiUrl: string, private headers: Headers = {}) {}

  async request(endpoint: string, method?: HttpMethod, body?: any) {
    const url = `${this.apiUrl}${endpoint}`;

    return fetch(url, {
      headers: this.headers,
      method,
      body: JSON.stringify(body),
    })
      .then((response) =>
        response.headers.get("Content-Type")?.includes("application/json")
          ? response.json()
          : response.text()
      )
      .catch(console.error);
  }

  async get(endpoint: string) {
    return this.request(endpoint);
  }

  async post<T>(endpoint: string, body: T) {
    return this.request(endpoint, "POST", body);
  }

  async patch<T>(endpoint: string, body: T) {
    return this.request(endpoint, "PATCH", body);
  }

  async delete(endpoint: string) {
    return this.request(endpoint, "DELETE");
  }
}
