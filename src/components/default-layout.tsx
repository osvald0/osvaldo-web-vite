import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import type { PropsWithChildren } from "react";
import { cn } from "../utils//styles";

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
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/");
    }
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
