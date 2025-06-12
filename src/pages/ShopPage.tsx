import { useEffect, useState } from "react";
import { FilterBy } from "../components/ShopPage/FilterBy";
import { SortingHeader } from "../components/ShopPage/SortingHeader";
import { ShopHeroSection } from "../components/ShopPage/ShopHeroSection";
import { WeaponShopBody } from "../components/ShopPage/WeaponShopBody";
import {
  assualtRifles,
  tanks,
  semiAutoMatic,
  sniperRefiles,
  meleeWeapons,
  weaponAccessories,
  historicalWeapon,
  tnt,
  shotguns,
  handgun,
  machinegun,
} from "../../public/weapons";
export type weaponType = {
  name: string;
  stars: number;
  noOfPeopleReviewed: number;
  sNo: number;
  category: string;
  uniqueCode: string;
  sketchFabUrl: string;
};
import { NavBar } from "../components/ShopPage/NavBar";

export const ShopPage = () => {
  const [filterWeapon, setFilterWeapon] = useState<weaponType[][]>([
    sniperRefiles,
  ]);
  const [filterName, setFilterName] = useState<string[]>(["all"]);
  useEffect(() => {
    const weaponGroups: Record<string, weaponType[]> = {
      all: [
        ...assualtRifles,
        ...tanks,
        ...semiAutoMatic,
        ...sniperRefiles,
        ...meleeWeapons,
        ...weaponAccessories,
        ...historicalWeapon,
        ...tnt,
        ...shotguns,
        ...handgun,
        ...machinegun,
      ],
      assaultrifles: assualtRifles,
      tanks: tanks,
      semiautomatic: semiAutoMatic,
      sniperrifles: sniperRefiles,
      meleeweapons: meleeWeapons,
      weaponaccessories: weaponAccessories,
      historicalweapons: historicalWeapon,
      shotguns: shotguns,
      handguns: handgun,
      machinegun: machinegun,
      tnt: tnt,
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
        .map((name) => weaponGroups[name] as weaponType[]);

      setFilterWeapon(filtered);
    }
    if (filterName.length == 0) {
      setFilterName(["all"]);
    }
  }, [filterName]);

  return (
    <section>
      <NavBar />
      <div className="w-full max-xl:hidden ">
        <ShopHeroSection />
      </div>
      <div
        className="2xl:w-[1480px] xl:w-[1300px]
        max-md:w-full w-full mx-auto
         max-xl:w-[1180px] "
      >
        <div
          className="xl:hidden max-lg:w-full 
        max-xl:w-[1280px]"
        >
          <ShopHeroSection />
        </div>

        <div
          className="flex gap-[48px] 
          lg:mt-[296px]
         z-40 px-2 max-lg:justify-center "
        >
          <div className=" max-lg:hidden">
            <FilterBy filterName={filterName} setFilterName={setFilterName} />
          </div>
          <div
            className="w-full max-md:w-full
           max-lg:w-[980px] "
          >
            <SortingHeader />
            <WeaponShopBody weaponData={filterWeapon} />
          </div>
        </div>
      </div>
    </section>
  );
};
