import type { GenericObject, StringObject, Method } from "../types/api";
import { API_TOKEN, BASE_URL } from "../constants/api";
import { METHOD } from "../types/api";

export class HttpClient {
  private static instance: HttpClient;
  private readonly sessionToken?: string | null;
  private readonly baseUrl: string;

  constructor(url: string, sessionToken: string) {
    this.baseUrl = `${BASE_URL}/${url}`;
    this.sessionToken = sessionToken;
  }

  public static getInstance(url: string): HttpClient {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient(url, API_TOKEN);
    }
    return HttpClient.instance;
  }

  async get<T>(path?: string, params?: GenericObject): Promise<T> {
    let stringParams: string | URLSearchParams = "";
    if (params && Object.keys(params).length > 0) {
      const formattedParams: StringObject = {};
      for (const param of Object.keys(params)) {
        formattedParams[param] = String(params[param]);
      }
      const urlSearchParams = new URLSearchParams(formattedParams);
      stringParams = `?${urlSearchParams.toString()}`;
    }
    return this.request(METHOD.GET, path, undefined, stringParams);
  }

  async post<T, U = void>(data?: T, path?: string): Promise<U> {
    return this.request(METHOD.POST, path, data);
  }

  private async request<T, U>(
    method: Method,
    path: string | undefined,
    body: T | Record<string, unknown> = {},
    stringParams = "",
  ): Promise<U> {
    const currentPath = path ? `/${path}` : "";
    const requestUrl = `${this.baseUrl}${currentPath}${stringParams}`;
    const response = await fetch(requestUrl, {
      method,
      headers: this.getHeaders(),
      body: method !== METHOD.GET ? JSON.stringify(body) : undefined,
    });
    return response.json();
  }

  private getHeaders(): StringObject {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(this.sessionToken
        ? { Authorization: `Bearer ${this.sessionToken}` }
        : {}),
    };
  }
}
