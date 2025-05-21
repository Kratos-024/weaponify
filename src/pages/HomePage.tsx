import { Header } from "../components/Header";
import { Features } from "../components/Features";
import WeaponGallery from "../components/WeaponGallery";
import { Footer } from "../components/Footer";

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
