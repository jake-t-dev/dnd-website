import { Damage } from "../common";
import { AreaOfEffect } from "./aoe";
import { SpellComponent } from "./spell-component";

export type Spell = {
  id: string;
  name: string;
  description: string;
  higherLevelDescription: string;
  school: string;
  level: number;
  castingTime: string;
  range: string;
  components: SpellComponent;
  duration: string;
  concentration: boolean;
  ritual: boolean;
  prepared: boolean;
  spellcastingAbility: string;
  associatedClassId: string;
  areaOfEffect: AreaOfEffect;
  damage: Damage[];
  saveType: string;
};
