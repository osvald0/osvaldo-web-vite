import EducationBox from "../components/education-box";
import SectionBox from "../components/section-box";
import SkillRow from "../components/skill-row";
import JobBox from "../components/job-box";
import {
  EDUCATIONS_LIST,
  CONTACT_LIST,
  SKILLS_LIST,
  JOBS_LIST,
} from "../constants/data";
import DefaultLayout from "../components/default-layout";

export default function Resume() {
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
        {JOBS_LIST.map((jobItem) => (
          <JobBox key={jobItem.companyName} data={jobItem} />
        ))}
      </div>
      <div className="flex flex-col mt-2">
        <SectionBox title="Skills" />
        {SKILLS_LIST.map((skillRow) => (
          <SkillRow key={skillRow.level} maxItems={7} data={skillRow} />
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
