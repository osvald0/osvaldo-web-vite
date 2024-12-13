export const ResumeTypes = {
  DETAILED: "detailed",
  DEFAULT: "default",
  LONG: "long",
} as const;

export type ResumeType = (typeof ResumeTypes)[keyof typeof ResumeTypes];
