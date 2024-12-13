import { useRoutes } from "../hooks/use-routes";
import { RxExternalLink } from "react-icons/rx";

type Props = {
  target: string;
};

export default function IconLink(props: Props) {
  const { target } = props;
  const { navigate } = useRoutes();

  function handleNavigate(
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    event?.stopPropagation();
    navigate(target);
  }

  return (
    <button
      type="button"
      onClick={handleNavigate}
      className="flex flex-row items-center justify-center rounded-full cursor-pointer text-sm"
    >
      <RxExternalLink />
    </button>
  );
}
