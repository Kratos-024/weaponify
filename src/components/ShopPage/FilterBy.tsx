import { IoIosOptions } from "react-icons/io";

const weaponCategories = [
  { gunName: "Assault Rifles", quantity: 8 },
  { gunName: "Handguns", quantity: 7 },
  { gunName: "Sniper Rifles", quantity: 5 },
  { gunName: "Shotguns", quantity: 4 },
  { gunName: "Submachine Guns", quantity: 6 },
  { gunName: "Machine Guns", quantity: 3 },
  { gunName: "Tanks", quantity: 4 },
  { gunName: "Explosives & Grenades", quantity: 5 },
  { gunName: "Melee Weapons", quantity: 6 },
  { gunName: "Weapon Accessories", quantity: 10 },
  { gunName: "Historical Weapons", quantity: 7 },
  { gunName: "Military Gear", quantity: 6 },
];
const weaponFamilies = [
  {
    family: "AK Series",
    models: ["AK-47", "AKM", "AK-74", "AK-74U", "AK-103", "AK-12"],
  },
  {
    family: "M4/AR-15 Series",
    models: ["M4", "M4A1", "MK18", "CAR-15"],
  },
  {
    family: "Glock Pistols",
    models: ["Glock 17", "Glock 19", "Glock 26", "Glock 21"],
  },
  {
    family: "Desert Eagle",
    models: ["Desert Eagle .50 AE", "Desert Eagle .44 Magnum"],
  },
  {
    family: "MP Series",
    models: ["MP5", "MP7", "MP9"],
  },
  {
    family: "Sniper Rifles",
    models: ["AWM", "Barrett M82", "Dragunov SVD"],
  },
  {
    family: "SAW / LMG",
    models: ["M249 SAW", "PKM", "RPK"],
  },
  {
    family: "Shotguns",
    models: ["Remington 870", "Mossberg 500", "Benelli M4"],
  },
  {
    family: "Tanks (Soviet/Russian)",
    models: ["T-34", "T-55", "T-72", "T-90"],
  },
  {
    family: "Tanks (Western)",
    models: ["M1 Abrams", "Leopard 2", "Challenger 2"],
  },
  {
    family: "Melee Weapons",
    models: ["Katana", "Tactical Knife", "Bowie Knife"],
  },
  {
    family: "Accessories",
    models: [
      "SilencerCo Osprey 45",
      "Aimpoint PRO Red Dot",
      "AN/PVS-14 Night Vision",
    ],
  },
];

const Category = ({ name, quantity }: { name?: string; quantity?: number }) => {
  return (
    <li className="flex items-center gap-2">
      <input type="checkbox" className="w-4 h-4 accent-[#FFADA9] rounded-sm" />
      <p>{name}</p>
      <span className="text-gray-500">({quantity})</span>
    </li>
  );
};

export const FilterBy = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3 ">
        {" "}
        <IoIosOptions className="w-[21px] h-[21px]" />
        <p className="text-xl font-bold ">Filter by</p>
      </div>
      <hr className="mb-4" />
      <div className="space-y-[64px]">
        {" "}
        <div>
          {" "}
          <h2 className="text-lg font-semibold">Categories</h2>
          <ul className="space-y-2 mt-2 whitespace-nowrap">
            {weaponCategories.map((cat) => (
              <Category
                key={cat.gunName}
                name={cat.gunName}
                quantity={cat.quantity}
              />
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Models</h2>
          <ul className="space-y-2 mt-2">
            {weaponFamilies.map((cat) => (
              <Category
                key={cat.family}
                name={cat.family}
                quantity={cat.models.length}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
