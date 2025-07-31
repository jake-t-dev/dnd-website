import { Damage, Property } from "../common";

export type Weapon = {
  id: string;
  name: string;
  description: string;
  isMagical: boolean;
  bonusValue: number;
  requiresProficiency: boolean;
  isProficient: boolean;
  range: string;
  category: string;
  type: string;
  damages: Damage[];
  properties: Property[];
  weight: number;
  cost: number;
  equipped: boolean;
};