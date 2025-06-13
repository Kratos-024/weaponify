import { useEffect, useState } from "react";
import { FilterBy } from "../components/ShopPage/FilterBy";
import { SortingHeader } from "../components/ShopPage/SortingHeader";
import { ShopHeroSection } from "../components/ShopPage/ShopHeroSection";
import { WeaponShopBody } from "../components/ShopPage/WeaponShopBody";
import { NavBar } from "../components/ShopPage/NavBar";
import { getAllWeapons } from "../apis/app";
import Loader from "../Loader";

export type weaponType = {
  name: string;
  stars: number;
  noOfPeopleReviewed: number;
  sNo: number;
  category: string;
  uniqueCode: string;
  sketchFabUrl: string;
};

export const ShopPage = () => {
  const [filterWeapon, setFilterWeapon] = useState<weaponType[][]>([]);
  const [filterName, setFilterName] = useState<string[]>(["all"]);
  const [weaponsData, setWeaponsData] = useState<weaponType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllWeaponHandler = async () => {
      try {
        setIsLoading(true);
        const response = await getAllWeapons();
        setWeaponsData(response);
        setIsLoading(false);
      } catch (error) {
        console.error("Error occurred while fetching weapons", error);
        setIsLoading(false);
      }
    };

    getAllWeaponHandler();
  }, []);

  useEffect(() => {
    if (weaponsData.length === 0) return;

    const categorized: Record<string, weaponType[]> = {};
    weaponsData.forEach((weapon: weaponType) => {
      const key = weapon.category.toLowerCase().replace(/\s+/g, "");
      if (!categorized[key]) categorized[key] = [];
      categorized[key].push(weapon);
    });

    categorized["all"] = weaponsData;

    console.log("Available categories:", Object.keys(categorized));

    if (filterName.length === 0) {
      setFilterName(["all"]);
      setFilterWeapon([categorized["all"]]);
      return;
    }

    if (filterName.includes("all")) {
      setFilterWeapon([categorized["all"]]);
      return;
    }
    const filtered = filterName
      .filter((name) => {
        const exists = !!categorized[name];
        console.log(`Category '${name}' exists:`, exists);
        return exists;
      })
      .map((name) => categorized[name]);

    console.log("Filtered results:", filtered.length, "categories");
    setFilterWeapon(filtered);
  }, [weaponsData, filterName]);

  if (isLoading) {
    return (
      <section>
        <NavBar />
        <div className="flex justify-center items-center min-h-screen">
          <Loader />{" "}
        </div>
      </section>
    );
  }

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
            <FilterBy
              filterName={filterName}
              setFilterName={setFilterName}
              weaponsData={weaponsData}
            />
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
