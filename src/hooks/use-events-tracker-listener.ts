import { useEffect } from "react";
import useEventsTracker from "./use-events-tracker";

export default function useEventsTrackerListener() {
  const { trackClick, trackPageView } = useEventsTracker();

  useEffect(() => {
    document.addEventListener("click", trackClick);
    window.addEventListener("popstate", trackPageView);
    trackPageView();

    return () => {
      document.removeEventListener("click", trackClick);
      window.removeEventListener("popstate", trackPageView);
    };
  }, [trackClick, trackPageView]);
}
