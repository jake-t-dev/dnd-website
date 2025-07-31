export type Armour = {
  id: string;
  name: string;
  description: string;
  isMagical: boolean;
  bonusValue: number;
  requiresProficiency: boolean;
  isProficient: boolean;
  category: string;
  requiredStrength: number;
  stealthDisadvantage: boolean;
  weight: number;
  cost: number;
  equipped: boolean;
};