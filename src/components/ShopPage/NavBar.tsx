import { RiArrowDropDownLine } from "react-icons/ri";
import { LiaGlassWhiskeySolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import SlideMenu from "./MenuSection";

export const NavBar = () => {
  return (
    <nav className="relative z-10 px-3 bg-[#1C1C1C]">
      <div className="max-lg:hidden gradient-bg-blur"></div>
      <div
        className="flex items-center 
       justify-between px-[12px] py-[26px]"
      >
        <div className="  gap-2 max-lg:flex hidden">
          <div className="max-lg:block hidden">
            <SlideMenu />
          </div>
          <CiSearch className=" w-[32px] h-[32px] max-md:w-[24px] max-md:h-[24px] text-white cursor-pointer" />
        </div>
        <div className="flex w-[196px] max-md:w-[134px] items-center  justify-center text-white text-[36px]">
          <img
            className="w-full "
            src="https://gearnix.risingbamboo.com/wp-content/themes/gearnix/dist/images/logo/light.png"
          />
        </div>
        <div className="max-lg:hidden">
          <ul className="flex items-center gap-5 text-white">
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
          <LiaGlassWhiskeySolid className="hover:text-[#ff69b4] max-md:w-[24px] max-md:h-[24px] w-[32px] h-[32px]  text-white cursor-pointer" />
          <CiSearch
            className="hover:text-[#ff69b4] w-[32px] max-lg:hidden max-md:w-[24px] max-md:h-[24px]
h-[32px] text-white cursor-pointer"
          />
          <CiShoppingCart
            className="hover:text-[#ff69b4]  w-[32px] max-md:w-[24px] max-md:h-[24px]
h-[32px] text-white cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};
