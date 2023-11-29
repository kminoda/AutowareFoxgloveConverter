import { Time } from "@foxglove/schemas/schemas/typescript/Time";

export type Header = {
  stamp: Time;
  frame_id: string;
};
