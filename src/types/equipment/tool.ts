export type Tool = {
  id: string;
  name: string;
  description: string;
  isMagical: boolean;
  requiresProficiency: boolean;
  isProficient: boolean;
  category: string;
  weight: number;
  cost: number;
  quantity: number;
};