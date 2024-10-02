import { IPINFO_API_TOKEN } from "../constants/api";

const API_URL = `https://ipinfo.io/json?token=${IPINFO_API_TOKEN}`;

export default class LocationApi {
  async get() {
    const response = await fetch(API_URL);
    return response.json();
  }
}
