import { Feature } from "../common";

export type Background = {
  id: string;
  name: string;
  backgroundFeatures: Feature[];
  personalityTraits: Feature[];
  ideals: Feature[];
  bonds: Feature[];
  flaws: Feature[];
};