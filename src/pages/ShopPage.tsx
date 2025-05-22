import { FilterBy } from "../components/ShopPage/FilterBy";
import { NavBar2 } from "../components/ShopPage/NavBar";
import { ShowingHeader } from "../components/ShopPage/ShowingHeader";
import { WeaponHeader } from "../components/ShopPage/WeaponHeader";
import { WeaponShowCaseBody } from "../components/ShopPage/WeaponShowCaseBody";

export const ShopPage = () => {
  return (
    <section>
      {" "}
      <NavBar2 />
      <div
        className="xl:max-w-[1480px] 
         mx-auto max-xl:w-[900px] max-lg:px-[44px] 
          max-md:px-[18px] max-lg:w-full"
      >
        <WeaponHeader />
        <div className="flex gap-[48px]  justify-center ">
          <div className=" max-lg:hidden">
            <FilterBy />
          </div>
          <div>
            <ShowingHeader />
            <WeaponShowCaseBody />
          </div>
        </div>
      </div>
    </section>
  );
};
