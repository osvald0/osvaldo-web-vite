import { HttpClient } from "./http-client";
import type { User } from "../types/user";

export default class UserApi {
  private url = "users";
  private user: HttpClient;

  constructor() {
    this.user = HttpClient.getInstance(this.url);
  }

  create(user: User) {
    return this.user.post(user);
  }
}
