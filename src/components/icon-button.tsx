import { useRoutes } from "../hooks/use-routes";
import Icon from "./icon";

type Props = {
  iconKey: string;
  target: string;
};

export default function IconButton(props: Props) {
  const { target, iconKey } = props;
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
      className="flex flex-row items-center justify-center rounded-full h-14 w-14 bg-neutral-700 text-white cursor-pointer"
    >
      <Icon iconKey={iconKey} />
    </button>
  );
}
