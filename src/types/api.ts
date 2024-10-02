export const METHOD = {
  GET: "GET",
  POST: "POST",
  PATCH: "PATCH",
  DELETE: "DELETE",
} as const;

export type Method = (typeof METHOD)[keyof typeof METHOD];

export type StringObject = Record<string, string>;

export type GenericObject = Record<string, unknown>;
