import { RiArrowDropDownLine } from "react-icons/ri";
import { LiaGlassWhiskeySolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

export const NavBar2 = () => {
  return (
    <nav>
      <div className="flex items-center justify-between px-[12px] py-[16px]">
        <div className="flex items-center text-white text-[36px]">
          <img
            className=" w-[196px] "
            src="https://gearnix.risingbamboo.com/wp-content/themes/gearnix/dist/images/logo/light.png"
          />
        </div>
        <div>
          <ul className="flex items-center gap-3">
            <li className=" flex items-center uppercase hover:opacity-90 cursor-pointer">
              <span>Home</span>
              <RiArrowDropDownLine />
            </li>
            <li className=" flex items-center uppercase hover:opacity-90 cursor-pointer">
              <span>Home</span>
              <RiArrowDropDownLine />
            </li>
            <li className=" flex items-center uppercase hover:opacity-90 cursor-pointer">
              <span>Home</span>
              <RiArrowDropDownLine />
            </li>
            <li className=" flex items-center uppercase hover:opacity-90 cursor-pointer">
              <span>Home</span>
              <RiArrowDropDownLine />
            </li>
            <li className=" flex items-center uppercase hover:opacity-90 cursor-pointer">
              <span>Home</span>
              <RiArrowDropDownLine />
            </li>
          </ul>
        </div>
        <div className=" gap-4 flex items-center">
          <LiaGlassWhiskeySolid className="hover:text-[#ff69b4] w-[32px] h-[32px]  text-white cursor-pointer" />
          <CiSearch
            className="hover:text-[#ff69b4] w-[32px]
h-[32px] text-white cursor-pointer"
          />
          <CiShoppingCart
            className="hover:text-[#ff69b4]  w-[32px]
h-[32px] text-white cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};
