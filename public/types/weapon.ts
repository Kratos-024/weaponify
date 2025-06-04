type SpecTech = {
  title?: string;
  points?: string[];
  dimensionsAndWeight?: {
    weight: string;
    length: string;
    width: string;
    height: string;
  };
  armament?: {
    mainGun?: string;
    secondary?: string;
    coaxial?: string;
    ammunitionCapacity?: string;
  };
  performance?: {
    engine?: string;
    maxSpeed?: string;
    range?: string;
    crew?: string;
  };
};

type Appearance = {
  title: string;
  points: string[];
};

type History = {
  title: string;
  points: string[];
};

type ThreeDModel = {
  uniqueCode: string;
  sketchFabUrl: string;
};

export type Weapon = [
  { name: string },
  { specsTech: SpecTech[] },
  { appearance: Appearance[] },
  { history: History[] },
  ThreeDModel
];
export type ResponseWeaponData = {
  name: string;
  id: string;
  specsTech: SpecTech[];
  appearance: Appearance[];
  history: History[];
  sketchFabUrl: string;
};
