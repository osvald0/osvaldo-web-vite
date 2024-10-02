import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { cn } from "../utils/styles";

type Props = {
  show: boolean;
  className?: string;
  onPress: () => void;
};

export default function ExpandCollapseButton(props: Props) {
  const { show, className, onPress } = props;

  return (
    <button
      type="button"
      onClick={onPress}
      className={cn(
        "flex flex-row items-center justify-center text-lg bg-gray-200 w-5 h-5 rounded-full hover:bg-neutral-700 hover:text-white",
        className,
      )}
    >
      {show ? <LuMinus /> : <GoPlus />}
    </button>
  );
}
