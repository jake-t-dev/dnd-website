import { RacialAbility } from "./racial-ability";

export type Race = {
  id: string;
  name: string;
  racialAbilities: RacialAbility[];
};