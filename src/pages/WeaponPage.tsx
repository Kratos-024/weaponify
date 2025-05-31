import { useParams } from "react-router-dom";
import { NavBar } from "../components/ShopPage/NavBar";
import WeaponInfoHeader from "../components/WeaponInfo/WeaponInfoHeader";

export const WeaponPage = () => {
  const weaponId = useParams()["id"];

  return (
    <section>
      <NavBar />
      <WeaponInfoHeader />
    </section>
  );
};
