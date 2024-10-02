import type { Event } from "../types/event";
import { HttpClient } from "./http-client";

export default class EventApi {
  private url = "events";
  private client: HttpClient;

  constructor() {
    this.client = HttpClient.getInstance(this.url);
  }

  track(event: Event) {
    return this.client.post(event);
  }
}
