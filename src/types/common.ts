export type Feature = {
  id: string;
  name: string;
  description: string;
};

export type Ability = {
  name: string;
  score: number;
};

export type Speed = {
  distance: number;
  type: string;
};

export type Damage = {
  id: string;
  dice: string;
  type: string;
};

export type Property = {
  id: string;
  name: string;
};

export type Money = {
  cp: number;
  sp: number;
  ep: number;
  gp: number;
  pp: number;
};

export type Proficiency = {
  name: string;
  modifier: number;
};

export type Language = {
  id: string;
  name: string;
};
