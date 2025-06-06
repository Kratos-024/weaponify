import { useEffect, useState } from "react";
import { FilterBy } from "../components/ShopPage/FilterBy";
import { ShowingHeader } from "../components/ShopPage/ShowingHeader";
import { WeaponHeader } from "../components/ShopPage/WeaponHeader";
import { WeaponShowCaseBody } from "../components/ShopPage/WeaponShowCaseBody";
import {
  assualtRifles,
  tanks,
  semiAutoMatic,
  sniperRefiles,
  meleeWeapons,
  weaponAccessories,
  historicalWeapon,
  tnt,shotguns,handgun,machinegun,
  
} from "../../public/weapons";
export type Tank = {
  sNo: number;
  category: string;
  uniqueCode: string;
  sketchFabUrl: string;
};
import { NavBar } from "../components/ShopPage/NavBar";

export const ShopPage = () => {
  const [filterWeapon, setFilterWeapon] = useState<Tank[][]>([sniperRefiles]);
  const [filterName, setFilterName] = useState<string[]>(["all"]);
  useEffect(() => {
    const weaponGroups: Record<string, Tank[]> = {
      all: [...assualtRifles, ...tanks, ...semiAutoMatic, ...sniperRefiles,...meleeWeapons,...weaponAccessories,
        ...historicalWeapon,...tnt,...shotguns,...handgun,...machinegun],
      assaultrifles: assualtRifles,
      tanks:tanks,
      semiautomatic: semiAutoMatic,
      sniperrifles: sniperRefiles,
      meleeweapons:meleeWeapons,
      weaponaccessories:weaponAccessories,
      historicalweapons:historicalWeapon,
      shotguns:shotguns,
      handguns:handgun,
      machinegun:machinegun,
      tnt:tnt,
    };
    if (filterName[filterName.length - 1] == "all") {
      setFilterWeapon([weaponGroups["all"]]);
    } else {
      if (filterName.includes("all")) {

        setFilterName((prev) => prev.filter((name) => name !== "all"));
        return;
      }

      const filtered = filterName
        .filter((name) => weaponGroups[name])
        .map((name) => weaponGroups[name] as Tank[]);

      setFilterWeapon(filtered);
    }
    if (filterName.length == 0) {
      setFilterName(["all"]);
    }
  }, [filterName]);

  return (
    <section>
      {" "}
      <NavBar />
      <div
        className="2xl:w-[1480px] xl:w-[1300px] max-md:w-[680px]
       lg:mx-auto max-xl:w-[1180px] max-lg:px-[44px] 
          max-md:px-[18px] max-lg:w-full"
      >
        <WeaponHeader />
        <div className="flex gap-[48px] px-9 max-lg:justify-center ">
          <div className=" max-lg:hidden">
            <FilterBy filterName={filterName} setFilterName={setFilterName} />
          </div>
          <div className="w-full max-lg:w-[980px] ">
            <ShowingHeader />
            <WeaponShowCaseBody weaponData={filterWeapon} />
          </div>
        </div>
      </div>
    </section>
  );
};
