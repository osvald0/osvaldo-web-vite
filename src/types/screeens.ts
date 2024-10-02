export const Screens = {
  HOME: "home",
  ABOUT: "about",
  RESUME: "resume",
};

export type Screen = (typeof Screens)[keyof typeof Screens];
