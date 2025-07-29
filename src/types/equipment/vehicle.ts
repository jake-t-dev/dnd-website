import { Speed } from "../common";

export type Vehicle = {
  id: string;
  name: string;
  description: string;
  capacity: number;
  type: string;
  cost: number;
  weight: number;
  speeds: Speed[];
};
