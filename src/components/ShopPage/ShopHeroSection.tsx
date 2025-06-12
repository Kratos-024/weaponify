export const WeaponCard = () => {
  return (
    <div
      className="flex relative z-20 flex-col items-center
     justify-center"
    >
      <div>
        <img
          className="rounded-full w-[196px]
           h-[196px] max-md:w-[148px]
           max-md:h-[148px]"
          src="../WeaponCircles/Tanks.avif"
        />
      </div>
      <h2>Tanks</h2>
      <span>7 tanks</span>
    </div>
  );
};

export const ShopHeroSection = () => {
  return (
    <section className="w-full mb-16 ">
      <div className="relative w-full">
        <div className="w-full">
          <img
            className="w-full lg:h-[400px]
             max-md:h-[200px] 
        md:object-cover md:object-center"
            src="https://gearnix.risingbamboo.com/wp-content/themes/gearnix/dist/images/breadcrumb.jpg"
            alt="Header background"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-white text-4xl md:text-5xl lg:text-6xl 
          font-bold drop-shadow-lg"
          >
            Shop
          </h1>
        </div>

        <div
          className="hidden lg:flex absolute -bottom-[148px]
        left-1/2 transform -translate-x-1/2 gap-9 "
        >
          <WeaponCard />
          <WeaponCard />
          <WeaponCard />
        </div>
      </div>

      <div
        className="lg:hidden flex px-6 py-4 gap-8
       items-center justify-center"
      >
        <WeaponCard />
        <WeaponCard />
      </div>
    </section>
  );
};
