import { Header } from "../components/HomePage/Header";
import { Features } from "../components/HomePage/Features";
import WeaponGallery from "../components/HomePage/WeaponGallery";
import { Footer } from "../components/HomePage/Footer";
import { Categories } from "../components/HomePage/Categories";
import { ShopBy } from "../components/HomePage/ShopBy";

export const HomePage = () => {
  return (
    <>
      <div className=" overflow-x-hidden ">
        {" "}
        <Header />
        <Features />
        <Categories />
        <ShopBy />
        <WeaponGallery />
        <Footer />
      </div>
    </>
  );
};
