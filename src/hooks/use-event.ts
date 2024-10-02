import EventApi from "../api/event";
import type { Event } from "../types/event";

export default function useEvent() {
  const eventApi = new EventApi();

  function trackEvent(event: Event) {
    eventApi.track(event);
  }

  return { trackEvent };
}
