import { IoChevronBack } from "react-icons/io5";
import type { PropsWithChildren } from "react";
import { cn } from "../helpers/styles";
import { useNavigate } from "react-router-dom";

type Props = PropsWithChildren & {
  style: string;
};

export default function DefaultLayout(props: Props) {
  const { children, style } = props;
  const navigate = useNavigate();

  function handleClick(
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    event?.stopPropagation();
    navigate(-1);
  }

  return (
    <div className={cn(style)}>
      <button
        type="button"
        onClick={handleClick}
        className="fixed top-2 left-2 p-2 hover:bg-neutral-100 text-neutral-500 rounded-full"
      >
        <IoChevronBack size="28" />
      </button>
      {children}
    </div>
  );
}
