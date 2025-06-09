import { RiArrowDropDownLine } from "react-icons/ri";
import { LiaGlassWhiskeySolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

export const NavBar = () => {
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
          <ul className="flex items-center gap-7">
            <li className=" flex items-center uppercase hover:opacity-90 cursor-pointer">
              <span>Home</span>
              <RiArrowDropDownLine />
            </li>
            <li className=" flex items-center uppercase hover:opacity-90 cursor-pointer">
              <span>Shop</span>
              <RiArrowDropDownLine />
            </li>

            <li
              className="relative  group flex 
            items-center uppercase hover:opacity-90 cursor-pointer"
            >
              <span>Product</span>
              <RiArrowDropDownLine />
              <ul
                className="absolute mt-2 whitespace-nowrap
                 rounded-xl
             -translate-x-5 flex-col opacity-0
              transition-all  duration-500 ease-in-out top-full
               left-0  group-hover:opacity-100
                group-hover:translate-y-0 translate-y-7
                group-hover:block bg-white text-black
                 shadow-md"
              >
                <li className="px-9 py-2 hover:bg-gray-100 rounded-xl ">
                  Product 1
                </li>
                <li className="px-9 py-3 hover:bg-gray-100 rounded-xl ">
                  Product 2
                </li>{" "}
                <li className="px-9 py-3 hover:bg-gray-100 rounded-xl ">
                  Product 3
                </li>{" "}
                <li className="px-9 py-3 hover:bg-gray-100 rounded-xl ">
                  Product 4
                </li>
              </ul>
            </li>
            <li className="relative  group flex items-center uppercase hover:opacity-90 cursor-pointer">
              <span>Pages</span>
              <RiArrowDropDownLine />
              <ul
                className="absolute mt-2 whitespace-nowrap rounded-xl
             -translate-x-5 flex-col opacity-0
              transition-all  duration-500 ease-in-out top-full
               left-0  group-hover:opacity-100
                group-hover:translate-y-0 translate-y-7
                group-hover:block bg-white text-black
                 shadow-md"
              >
                <li className="px-4 py-2 hover:bg-gray-100 rounded-xl ">
                  Contact us
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 rounded-xl ">
                  My account
                </li>{" "}
                <li className="px-4 py-2 hover:bg-gray-100 rounded-xl ">
                  FAQs
                </li>
              </ul>
            </li>

            <li className=" flex items-center uppercase hover:opacity-90 cursor-pointer">
              <span>About us</span>
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
