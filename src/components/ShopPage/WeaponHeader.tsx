import { WeaponCircle } from "./WeaponCard";

export const WeaponHeader = () => {
  return (
    <section className="w-full mb-16 ">
      <div className="relative w-full">
        <div className="w-full">
          <img
            className="w-full   lg:h-[400px]
             max-md:h-[200px] 
        md:object-cover md:object-center"
            src="https://gearnix.risingbamboo.com/wp-content/themes/gearnix/dist/images/breadcrumb.jpg"
            alt="Header background"
          />
        </div>

        <div
          className="hidden lg:flex absolute -bottom-[148px]
        left-1/2 transform -translate-x-1/2 gap-9 z-30"
        >
          <WeaponCircle />
          <WeaponCircle />
          <WeaponCircle />
        </div>

        <h3
          className="md:hidden absolute bottom-[86px]
        left-[112px] text-black text-2xl font-semibold z-20"
        >
          Shop
        </h3>
      </div>

      <div
        className="lg:hidden flex px-6 py-4 gap-8
       items-center justify-center"
      >
        <WeaponCircle />
        <WeaponCircle />
      </div>
    </section>
  );
};
