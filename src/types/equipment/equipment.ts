import { Money } from "../common";
import { Armour } from "./armour";
import { MiscItem } from "./misc-item";
import { Tool } from "./tool";
import { Vehicle } from "./vehicle";
import { Weapon } from "./weapon";

export type Equipment = {
  money: Money;
  weapons: Weapon[];
  armour: Armour[];
  tools: Tool[];
  vehicles: Vehicle[];
  misc: MiscItem[];
};
