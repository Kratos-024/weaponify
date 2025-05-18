import HeroSection from "./HeroSection";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <section className="w-full bg-[#17171A]">
      <div className="max-w-[1960px]  mx-auto min-w-[480px]">
        {" "}
        <NavBar />
      </div>
      <div className="">
        <HeroSection />
      </div>
    </section>
  );
};
