import HeroSection from "./HeroSection";
import { TopBar } from "./TopBar";

export const Header = ({ showAccountHandler }: { showAccountHandler: any }) => {
  return (
    <section className="w-full relative bg-[#17171A]">
      <div className="max-w-[1960px] mx-auto min-w-[480px]">
        <TopBar showAccountHandler={showAccountHandler} />
      </div>
      <div className="max-sm:w-full">
        <HeroSection />
      </div>
    </section>
  );
};
