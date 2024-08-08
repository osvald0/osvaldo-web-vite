import { useNavigate } from "react-router-dom";
import { isValidUrl } from "../helpers/url";

type OpenUrlProps = {
  newTab?: boolean;
};

export function useRoutes() {
  const rrdNavigate = useNavigate();

  function openUrl(url: string, props?: OpenUrlProps) {
    const target = props?.newTab ? '_blank' : '_self';
    window.open(url, target);
  }

  function navigate(target: string) {
    if (target.startsWith('/')) {
      rrdNavigate(target)
    } else if (isValidUrl(target)) {
      openUrl(target, { newTab: true })
    }
  }

  return {
    openUrl,
    navigate
  };
}
