export const EventTypes = {
  CLICK: "click",
  PAGE_VIEW: "pageView",
} as const;

export type EventType = (typeof EventTypes)[keyof typeof EventTypes];

export type Event = {
  userId: string;
  type: EventType;
};
