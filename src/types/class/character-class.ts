import { ClassAbility } from "./class-ability";
import { Subclass } from "./subclass";

export type CharacterClass = {
  id: string;
  name: string;
  level: number;
  classAbilities: ClassAbility[];
  subclass: Subclass;
};