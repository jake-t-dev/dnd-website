import { Background } from "./background/background";
import { CharacterClass } from "./class/character-class";
import { Ability, Language, Proficiency, Speed } from "./common";
import { Equipment } from "./equipment/equipment";
import { Race } from "./race/race";
import { Spell } from "./spell/spell";
import { SpellSlot } from "./spell/spell-slot";

export type Character = {
  uuid: string;
  name: string;
  alignment: string;
  xp: number;
  playerName: string;
  race: Race;
  classes: CharacterClass[];
  background: Background;
  abilities: Ability[];
  primarySpellcastingAbility: string;
  armourClass: number;
  maximumHealth: number;
  initiativeBonus: number;
  speeds: Speed[];
  proficiencies: Proficiency[];
  languages: Language[];
  equipment: Equipment;
  spellSlots: SpellSlot[];
  spells: Spell[];
};
