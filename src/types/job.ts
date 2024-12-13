export type Project = {
  id: string;
  name: string;
  description: string;
  url: string;
  tasks: string;
  techStack: string;
};

export type JobItem = {
  role: string;
  companyName: string;
  dateFrom: string;
  dateTo: string | null;
  description: Array<string>;
  technologies: Array<string>;
  projects?: Array<Project>;
};
