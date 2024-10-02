import { useRoutes } from "../hooks/use-routes";

export default function useEventsTracker() {
  const { getCurrentLocation } = useRoutes();

  function trackClick(event: MouseEvent) {
    const target = event?.target as HTMLElement;
    // const eventName = `Click on ${target?.tagName}`;
    // const eventData = {
    //   id: target?.id || null,
    //   className: target?.className || null,
    //   textContent: target?.textContent || null,
    // };

    // // Send event to backend
    // fetch("/api/events", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: eventName,
    //     data: eventData,
    //     timestamp: new Date().toISOString(),
    //   }),
    // }).catch((error) => console.error("Error tracking event:", error));
  }

  const trackPageView = () => {
    const currentScreen = getCurrentLocation();
    // const eventName = "Page View";
    // const eventData = {
    //   url: window.location.href,
    // };
    // // Send event to backend
    // fetch("/api/events", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: eventName,
    //     data: eventData,
    //     timestamp: new Date().toISOString(),
    //   }),
    // }).catch((error) => console.error("Error tracking event:", error));
  };

  return { trackClick, trackPageView };
}
