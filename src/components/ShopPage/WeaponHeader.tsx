import { WeaponCircle } from "./WeaponCard";

export const WeaponHeader = () => {
  return (
    <section className="py-[64px]">
      <div className="flex gap-[64px] items-center justify-center">
        <WeaponCircle />
        <WeaponCircle />
        <WeaponCircle />
      </div>
    </section>
  );
};
