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
      credentials: "include", // Todo: Configure.
    })
      .then((response) => {
        if (response.ok) return response;
        throw new Error(response.statusText);
      })
      .then((response) =>
        response.headers.get("Content-Type")?.includes("application/json")
          ? response.json()
          : response.text()
      );
  }

  async get<Response>(endpoint: string): Promise<Response> {
    return this.request(endpoint);
  }

  async post<Response, Body>(endpoint: string, body: Body): Promise<Response> {
    return this.request(endpoint, "POST", body);
  }

  async patch<Response, Body>(endpoint: string, body: Body): Promise<Response> {
    return this.request(endpoint, "PATCH", body);
  }

  async delete<Response>(endpoint: string): Promise<Response> {
    return this.request(endpoint, "DELETE");
  }
}
