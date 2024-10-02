import { useRoutes } from "../hooks/use-routes";
import Icon from "./icon";

type Props = {
  id: string;
  target: string;
};

export default function IconButton(props: Props) {
  const { target, id } = props;
  const { navigate } = useRoutes();

  function handleNavigate() {
    navigate(target);
  }

  return (
    <button
      id={id}
      type="button"
      onClick={handleNavigate}
      className="flex flex-row items-center justify-center rounded-full h-14 w-14 bg-neutral-700 text-white cursor-pointer"
    >
      <Icon iconKey={id} />
    </button>
  );
}
