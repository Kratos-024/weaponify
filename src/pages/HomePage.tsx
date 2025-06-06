import { Header } from "../components/HomePage/Header";
import { Features } from "../components/HomePage/Features";
import WeaponGallery from "../components/HomePage/WeaponGallery";
import { Footer } from "../components/HomePage/Footer";
import { Categories } from "../components/HomePage/Categories";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Features />
      <Categories />
      <WeaponGallery />
      <Footer />
    </>
  );
};
