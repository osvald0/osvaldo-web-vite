import type { JobItem } from "../types/job";
import BulletPoint from "./bullet-point";
import ProjectItem from "./project-item";
import Chip from "./chip";

type Props = {
  data: JobItem;
  showProjects: boolean;
};

export default function JobBox(props: Props) {
  const { data, showProjects } = props;
  const time = `${data.dateFrom} - ${data.dateTo || "Present"}`;

  return (
    <div className="mb-8">
      <p className="text-xl font-bold mr-3 whitespace-nowrap">
        {data.companyName}
      </p>
      <p className="text-md text-neutral-700 mb-1">{data.role}</p>
      <p className="text-xs text-neutral-500 mb-4">{time}</p>
      {data.description.map((descriptionItem, index) => (
        <BulletPoint
          key={`${data.companyName}-desc-${index}`}
          text={descriptionItem}
        />
      ))}
      {showProjects && !!data.projects && (
        <div className="flex flex-col mt-4">
          <p className="font-medium text-lg mb-4">Top projects</p>
          {data.projects.map((project) => (
            <ProjectItem key={project.id} data={project} />
          ))}
        </div>
      )}
      <div className="flex flex-row mt-4 items-top">
        <p className="font-medium mr-2 text-lg">Technologies</p>
        <div className="flex flex-row flex-wrap">
          {data.technologies.map((text) => (
            <Chip key={text} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
}
