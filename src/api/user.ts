import type { UserInput } from "../types/user";
import { HttpClient } from "./http-client";

export default class UserApi {
  private url = "users";
  private user: HttpClient;

  constructor() {
    this.user = HttpClient.getInstance(this.url);
  }

  create(user: UserInput) {
    return this.user.post(user);
  }
}
