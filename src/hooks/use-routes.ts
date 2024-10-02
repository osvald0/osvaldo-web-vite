import { useNavigate, useLocation } from "react-router-dom";
import { isValidUrl } from "../helpers/url";
import { Screens } from "../types/screeens";

type OpenUrlProps = {
  newTab?: boolean;
};

export function useRoutes() {
  const rrNavigate = useNavigate();
  const location = useLocation();

  function openUrl(url: string, props?: OpenUrlProps) {
    const target = props?.newTab ? "_blank" : "_self";
    window.open(url, target);
  }

  function navigate(target: string) {
    if (target.startsWith("/")) {
      rrNavigate(target);
    } else if (isValidUrl(target)) {
      openUrl(target, { newTab: true });
    }
  }

  function getCurrentLocation() {
    return location.pathname.replace("/", "") || Screens.HOME;
  }

  return {
    openUrl,
    navigate,
    getCurrentLocation,
  };
}
