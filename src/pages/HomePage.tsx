import { Header } from "../components/Header";
import { Features } from "../components/Features";
import WeaponGallery from "../components/WeaponGallery";
import { Footer } from "../components/Footer";
import addWeapon from "../apis/app";
import assualtRefile from "../../public/weapons";
var _id = 0;

export const HomePage = () => {
  return (
    <>
      <Header />
      <Features />
      <WeaponGallery />
      <Footer />
    </>
  );
};
