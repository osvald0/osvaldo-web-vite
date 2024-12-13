import { JOBS_LIST, JOBS_LIST_LONG } from "../constants/data";
import { ResumeTypes, type ResumeType } from "../types/resume";

export function getJobsListByType(type: ResumeType | null) {
  return type === ResumeTypes.LONG || type === ResumeTypes.DETAILED
    ? JOBS_LIST_LONG
    : JOBS_LIST;
}
