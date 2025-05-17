import { NavBar2 } from "./NavBar2";

export const HeroSection = () => {
  return (
    <section className="w-full relative">
      <div
        className="bg-[url('/cod-bg-gun.jpg')] bg-cover
       bg-center min-h-screen w-full  text-white text-xl font-bold"
      >
        <div className=" max-w-[1960px]  mx-auto min-w-[480px] pt-[14px]">
          <NavBar2 />
        </div>
        <div className=" absolute">
          <h2 className="text-4xl font-extrabold text-white text-center">
            Discover Insights from Reviews with AI
          </h2>
          <h3 className="text-lg text-gray-200 mt-4 text-center max-w-xl mx-auto">
            Analyze comments, tweets, and course feedback across platforms — all
            in one place. Let our custom AI models simplify your decisions.
          </h3>

          <button></button>
        </div>
      </div>
    </section>
  );
};
