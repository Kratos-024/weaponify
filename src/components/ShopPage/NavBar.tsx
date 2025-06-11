import { RiArrowDropDownLine } from "react-icons/ri";
import { LiaGlassWhiskeySolid } from "react-icons/lia";
import { CiSearch, CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import SlideMenu from "./MenuSection";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, type Auth } from "firebase/auth";
import { AccountCreation } from "../AccountCreation";
import { FaRegUserCircle } from "react-icons/fa";
import { logOut } from "../HomePage/NavBar";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [name, setName] = useState<string>("");
  const [showAccount, setShowAccount] = useState<boolean>(false);
  const showAccountHandler = () => {
    setShowAccount(!showAccount);
  };

  const auth = getAuth();
  const logOutHandler = async () => {
    await logOut(auth);
  };
  useEffect(() => {
    console.log("Auth state changed:");

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed:", user?.email);

      if (user) {
        setName(user.email || "");
      } else {
        setName("");
      }
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <nav className="relative z-10 px-3 bg-[#1C1C1C]">
      {showAccount && (
        <div className=" ">
          <AccountCreation showAccountHandler={showAccountHandler} />
        </div>
      )}
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
          <div className="flex gap-3 items-center">
            {name.length < 1 && (
              <div onClick={showAccountHandler} className="cursor-pointer ">
                <CiUser className="hover:text-[#ff69b4] text-[26px] text-white" />
              </div>
            )}
            {auth.currentUser && (
              <div className="relative  group flex items-center uppercase hover:opacity-90 cursor-pointer">
                <FaRegUserCircle className="hover:text-[#ff69b4] w-[32px] h-[32px] text-white cursor-pointer" />
                <ul
                  className={`absolute mt-2 whitespace-nowrap rounded-xl  group-hover:opacity-100 group-hover:translate-y-0 pointer-events-auto -translate-x-5 flex-col opacity-0
               transition-all  duration-500 ease-in-out top-full
                left-0  md:group-hover:translate-y-0 translate-y-7 group-hover:block bg-white text-black
                  shadow-md`}
                >
                  <li className="px-4 py-2 hover:bg-gray-100 rounded-xl ">
                    My Profile
                  </li>
                  <li
                    onClick={logOutHandler}
                    className="px-4 py-2 hover:bg-gray-100 rounded-xl "
                  >
                    LogOut
                  </li>{" "}
                </ul>
              </div>
            )}
          </div>
          <Link to={"/shop/whislist"}>
            {" "}
            <LiaGlassWhiskeySolid className="hover:text-[#ff69b4] max-md:w-[24px] max-md:h-[24px] w-[32px] h-[32px]  text-white cursor-pointer" />
          </Link>{" "}
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
