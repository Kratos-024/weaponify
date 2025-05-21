import { FilterBy } from "../components/ShopPage/FilterBy";
import { NavBar2 } from "../components/ShopPage/NavBar";
import { ShowingHeader } from "../components/ShopPage/ShowingHeader";
import { WeaponHeader } from "../components/ShopPage/WeaponHeader";

export const ShopPage = () => {
  return (
    <>
      <NavBar2 />
      <WeaponHeader />
      <ShowingHeader />
    </>
  );
};
