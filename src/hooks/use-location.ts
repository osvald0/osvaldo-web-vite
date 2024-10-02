import LocationApi from "../api/location";

export default function useLocation() {
  const locationApi = new LocationApi();

  function getLocation() {
    return locationApi.get();
  }

  return { getLocation };
}
