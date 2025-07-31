import { ClassAbility } from "./class-ability";

export type Subclass = {
  id: string;
  name: string;
  subclassAbilities: ClassAbility[];
};