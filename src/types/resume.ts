export const ResumeVersions = {
  DEFAULT: "default",
  LONG: "long",
} as const;

export type ResumeVersion =
  (typeof ResumeVersions)[keyof typeof ResumeVersions];
