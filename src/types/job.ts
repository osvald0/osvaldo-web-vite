export type JobItem = {
  role: string;
  companyName: string;
  dateFrom: string;
  dateTo: string | null;
  description: Array<string>;
  technologies: Array<string>;
}
