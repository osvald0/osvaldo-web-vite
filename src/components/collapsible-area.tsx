import { useState, useRef, useEffect, type PropsWithChildren } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

type Props = PropsWithChildren & {
  title: string;
  description: string;
  className?: string;
};

export default function CollapsibleArea(props: Props) {
  const { children, title, description, className } = props;

  const [isOpen, setIsOpen] = useState(true);
  const [height, setHeight] = useState("0px");

  const contentRef = useRef<HTMLDivElement>(null);

  function handleToggleCollapsible(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    event?.stopPropagation();
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef?.current?.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className={className}>
      <div className="flex flex-row items-center">
        <p className="text-xl font-bold mr-3 whitespace-nowrap">{title}</p>
        {!isOpen && (
          <p className="text-xs text-neutral-500 mr-3 mt-1 whitespace-nowrap">
            {description}
          </p>
        )}
        <button
          type="button"
          onClick={handleToggleCollapsible}
          className="flex flex-row items-center justify-center text-xl w-6 h-6 text-neutral-500 rounded-full hover:bg-neutral-100 mt-1"
        >
          {isOpen ? <GoChevronUp /> : <GoChevronDown />}
        </button>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-max-height duration-500 ease-in-out"
      >
        {children}
      </div>
    </div>
  );
}
