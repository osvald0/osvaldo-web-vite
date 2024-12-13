import { BsInfoCircle } from "react-icons/bs";
import type { Project } from "../types/job";
import IconLink from "./icon-link";
import { useState } from "react";

type Props = {
  data: Project;
};

export default function ProjectItem(props: Props) {
  const { data } = props;
  const [isInfoDisplayed, setIsInfoDisplayed] = useState(false);

  function handleShowInfo(
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    event?.stopPropagation();
    setIsInfoDisplayed(!isInfoDisplayed);
  }

  return (
    <div className="flex flex-col mb-4">
      <div className="flex flex-row items-center mb-2">
        <p className="font-medium mr-2">{data.name}</p>
        <button
          type="button"
          onClick={handleShowInfo}
          className="flex flex-row items-center justify-center cursor-pointer text-sm"
        >
          <BsInfoCircle className="mr-2" />
        </button>
        <IconLink target={data.url} />
      </div>
      {isInfoDisplayed && <p className="mb-3">{data.description}</p>}
      {data.tasks && (
        <div className="flex flex-col">
          <div className="flex flex-row">
            <p className="mr-3 text-neutral-500">Tasks:</p>
            <p className="">{data.tasks}</p>
          </div>
          <div className="flex flex-row mt-2">
            <p className="mr-3 text-neutral-500">Stack:</p>
            <p className="">{data.techStack}</p>
          </div>
        </div>
      )}
    </div>
  );
}
