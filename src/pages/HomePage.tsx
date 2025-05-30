import { Header } from "../components/HomePage/Header";
import { Features } from "../components/HomePage/Features";
import WeaponGallery from "../components/HomePage/WeaponGallery";
import { Footer } from "../components/HomePage/Footer";

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
