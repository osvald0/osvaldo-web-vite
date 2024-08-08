import CollapsibleArea from "./collapsible-area";
import type { JobItem } from "../types/job";
import BulletPoint from "./bullet-point";
import Chip from "./chip";

type Props = {
  data: JobItem;
};

export default function JobBox(props: Props) {
  const { data } = props;
  const time = `${data.dateFrom} - ${data.dateTo || "Present"}`;

  return (
    <CollapsibleArea
      title={data.companyName}
      description={time}
      className="mb-8"
    >
      <p className="text-md text-neutral-700 mb-1">{data.role}</p>
      <p className="text-xs text-neutral-500 mb-4">{time}</p>
      {data.description.map((descriptionItem, index) => (
        <BulletPoint
          key={`${data.companyName}-desc-${index}`}
          text={descriptionItem}
        />
      ))}
      <div className="flex flex-row mt-4 items-top">
        <p className="font-medium mr-2 text-lg">Technologies:</p>
        <div className="flex flex-row flex-wrap">
          {data.technologies.map((text) => (
            <Chip key={text} text={text} />
          ))}
        </div>
      </div>
    </CollapsibleArea>
  );
}
