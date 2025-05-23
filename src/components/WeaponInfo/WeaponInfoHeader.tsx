import SketchfabModelViewer from "../ModelViewer";
import { WeaponDescFull, WeaponDescLeft } from "./WeaponDesc";

export const WeaponInfoHeader = () => {
  return (
    <section>
      <div className="xl:max-w-[1480px] mx-auto mt-9">
        {/* <div className="grid grid-cols-2 items-start gap-[64px]">
          <SketchfabModelViewer />
          <WeaponDescLeft />
        </div>
        <div>
          <WeaponDescFull />
        </div> */}
        <div className="space-y-2">
          {" "}
          <ul className="flex justify-between w-full text-[28px]">
            <li className="flex-1 text-left">Description</li>
            <li className="flex-1 text-center">Additional information</li>
            <li className="flex-1 text-right">Reviews (1)</li>
          </ul>
          <h2 className=" font-semibold text-[28px]">RPG T-90 Tank</h2>
          <p className="text-[16px]">
            Donec dapibus tellus sem, quis aliquam libero pharetra non. Nam
            vitae fermentum leo. Pellentesque bibendum dui eu mi tempor sodales.
            Integer gravida odio in sem laoreet tempus. Nunc vehicula nibh
            mauris, id bibendum metus facilisis iaculis. Phasellus suscipit
            dictum lacus eu auctor. Duis commodo faucibus lectus, et accumsan
            quam egestas at. Praesent eros mi, condimentum sit amet felis quis,
            hendrerit ullamcorper turpis. Etiam vel cursus elit, ut semper
            velit. Aenean sagittis leo massa, fermentum sollicitudin sem
            facilisis vel. Suspendisse potenti. Fusce porta tincidunt interdum.
            Praesent nec diam eleifend, vestibulum justo aliquet, aliquam ipsum.
            Curabitur egestas, augue a pellentesque ornare, tellus velit
            pulvinar nisl, sit amet placerat enim sem vel elit. Duis a mi metus.
            Suspendisse vulputate velit tempus efficitur lacus sit amet nunc
            ultricies ac gravida ante tempor
          </p>
          <div className="grid grid-cols-2 items-start xl:gap-[148px]">
            <SketchfabModelViewer />
            <WeaponDescLeft />
          </div>
        </div>
      </div>
    </section>
  );
};
