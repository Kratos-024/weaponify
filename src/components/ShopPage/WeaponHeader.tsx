import { WeaponCircle } from "./WeaponCard";

export const WeaponHeader = () => {
  return (
    <section className="py-[48px] mb-[64px] ">
      <div className="mb-[120px]"></div>
      <div className="flex gap-[64px] items-center  justify-center">
        <div className="w-full z-30  absolute bg-red-100 h-[340px]">
          {" "}
          <img
            className=" w-full h-[340px]"
            src="https://gearnix.risingbamboo.com/wp-content/themes/gearnix/dist/images/breadcrumb.jpg"
          />
        </div>
        <div className=" flex z-30 gap-9  top-[296px] absolute">
          {" "}
          <WeaponCircle />
          <WeaponCircle />
          <WeaponCircle />
        </div>
      </div>
    </section>
  );
};
