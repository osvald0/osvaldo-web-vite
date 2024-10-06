import EventApi from "../api/event";
import { useUserContext } from "../context/user-context";
import type { Event } from "../types/event";

export default function useEvent() {
  const eventApi = new EventApi();

  const {
    state: { user },
  } = useUserContext();

  function trackEvent(event: Event) {
    eventApi.track(event);
  }

  return { trackEvent };
}
