import HeroSection from "./HeroSection";
import { TopBar } from "./TopBar";

export const Header = () => {
  return (
    <section className="w-full bg-[#17171A]">
      <div className="max-w-[1960px]  mx-auto min-w-[480px]">
        <TopBar />
      </div>
      <div className="">
        <HeroSection />
      </div>
    </section>
  );
};
