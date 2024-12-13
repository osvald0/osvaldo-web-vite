import { useNavigate, useSearchParams } from "react-router-dom";
import { isValidUrl } from "../helpers/url";

type OpenUrlProps = {
  newTab?: boolean;
};

export function useRoutes() {
  const rrdNavigate = useNavigate();
  const [searchParams] = useSearchParams();

  function openUrl(url: string, props?: OpenUrlProps) {
    const target = props?.newTab ? "_blank" : "_self";
    window.open(url, target);
  }

  function navigate(target: string) {
    if (target.startsWith("/")) {
      rrdNavigate(target);
    } else if (isValidUrl(target)) {
      openUrl(target, { newTab: true });
    }
  }

  function getQueryParam(param: string) {
    return searchParams.get(param);
  }

  return {
    openUrl,
    navigate,
    getQueryParam,
  };
}
