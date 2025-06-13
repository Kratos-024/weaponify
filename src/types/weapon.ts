type SpecTech = {
  title?: string;
  points?: string[];
  dimensionsAndWeight?: {
    barrelLength?: string;
    weight?: string;
    length?: string;
    width?: string;
    height?: string;
    gauge?: string;
    caliber?: string;
  };
  armament?: {
    capacity?: string;
    rateOfFire: string;
    effectiveRange: string;
    feedSystem: string;
    action?: string;
    mainGun?: string;
    secondary?: string;
    coaxial?: string;
    ammunitionCapacity?: string;
    compatibleAmmunition?: string;
  };
  performance?: {
    effectiveRange?: string;
    engine?: string;
    maxSpeed?: string;
    range?: string;
    crew?: string;
    rateOfFire?: string;
    sights?: string;
    recoil?: string;
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
export type AiGenratedWeaponData = [
  { name: string },
  { specsTech: SpecTech[] },
  { appearance: Appearance[] },
  { history: History[] },
  { uniqueCode: string; sketchFabUrl: string }
];

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
  stars: number;
  noOfPeopleReviewed: number;
  name: string;
  id: string;
  specsTech: SpecTech[];
  appearance: Appearance[];
  history: History[];
  sketchFabUrl: string;
};

const fakeSpecTech = [
  {
    title: "",
    points: ["", ""],
    dimensionsAndWeight: {
      weight: "",
      length: "",
      width: "",
      height: "",
    },
    armament: {
      mainGun: "",
      secondary: "",
      coaxial: "",
      ammunitionCapacity: "",
      capacity: "",
      rateOfFire: "",
      effectiveRange: "",
      feedSystem: "",
      action: "",
      compatibleAmmunition: "",
    },
    performance: {
      engine: "",
      maxSpeed: "",
      range: "",
      crew: "",
    },
  },
];

const fakeAppearance = [
  {
    title: "",
    points: ["", ""],
  },
];

const fakeHistory = [
  {
    title: "",
    points: ["", "", "", ""],
  },
];
export const fakeWeapon: ResponseWeaponData = {
  name: "",
  id: "",
  specsTech: fakeSpecTech,
  appearance: fakeAppearance,
  history: fakeHistory,
  sketchFabUrl: "",
  stars: 0,
  noOfPeopleReviewed: 0,
};
