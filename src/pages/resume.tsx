import {
  EDUCATIONS_LIST,
  JOBS_LIST_LONG,
  CONTACT_LIST,
  SKILLS_LIST,
} from "../constants/data";
import { ResumeTypes, type ResumeType } from "../types/resume";
import { useRoutes } from "../hooks/use-routes";

import DefaultLayout from "../components/default-layout";
import EducationBox from "../components/education-box";
import SectionBox from "../components/section-box";
import SkillRow from "../components/skill-row";
import JobBox from "../components/job-box";

export default function Resume() {
  const { getQueryParam } = useRoutes();

  const resumeType = getQueryParam("type") as ResumeType;

  return (
    <DefaultLayout style="flex flex-col md:max-w-3xl w-full h-full my-10 px-9 md:px-0 text-neutral-700">
      <div className="flex flex-col items-center">
        <p className="text-4xl font-medium">Osvaldo Colina</p>
        <p className="text-lg">Software Engineer</p>
        <div className="flex flex-row mt-1">
          {CONTACT_LIST.map(({ key, label, Icon }, index) => (
            <div key={key} className="flex flex-row items-center text-sm">
              <Icon />
              <p className="ml-1">{label}</p>
              {index !== CONTACT_LIST.length - 1 && (
                <p className="px-3 text-xs">|</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-10">
        <SectionBox title="Experience" />
        {JOBS_LIST_LONG.map((jobItem) => (
          <JobBox
            data={jobItem}
            key={jobItem.companyName}
            showProjects={resumeType === ResumeTypes.DETAILED}
          />
        ))}
      </div>
      <div className="flex flex-col mt-2">
        <SectionBox title="Skills" />
        {SKILLS_LIST.map((skillRow) => (
          <SkillRow key={skillRow.level} data={skillRow} maxItems={7} />
        ))}
      </div>
      <div className="flex flex-col mt-8">
        <SectionBox title="Education" />
        {EDUCATIONS_LIST.map((educationRow) => (
          <EducationBox key={educationRow.institution} data={educationRow} />
        ))}
      </div>
    </DefaultLayout>
  );
}
