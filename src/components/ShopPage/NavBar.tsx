import { RiArrowDropDownLine } from "react-icons/ri";
import { LiaGlassWhiskeySolid } from "react-icons/lia";
import { CiSearch, CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import SlideMenu from "../MenuSection";
import { useEffect, useState } from "react";
import { onAuthStateChanged, type Auth } from "firebase/auth";
import { AccountCreation } from "../AccountCreation";
import { FaRegUserCircle } from "react-icons/fa";
import { logOut } from "../HomePage/NavBar";
import { Link } from "react-router-dom";
import { auth, getCartItemCount } from "../../apis/app";
import { SearchOverlay } from "../SearchComponent";
import { IoOptionsSharp } from "react-icons/io5";
export const logOutHandler = async (auth: Auth) => {
  await logOut(auth);
};
export const NavBar = () => {
  const [name, setName] = useState<string>("");
  const [showAccount, setShowAccount] = useState<boolean>(false);
  const [showProduct, setShowProduct] = useState(false);
  const [ShowPage, setShowPage] = useState(false);
  const [totalQuant, setTotalQuantity] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [sideMenu, setSideMenu] = useState<boolean>(false);

  const showAccountHandler = () => {
    setShowAccount(!showAccount);
  };

  const showMenu = () => {
    setSideMenu(!sideMenu);
  };
  const showProdut = () => {
    setShowProduct(!showProduct);
  };
  const showPage = () => {
    setShowPage(!ShowPage);
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
    const getCartItemCountHandler = async () => {
      const response = await getCartItemCount();
      setTotalQuantity(response.totalQuantity);
    };
    getCartItemCountHandler();
    return () => unsubscribe();
  }, [auth]);

  return (
    <nav className="relative z-10 px-2 bg-[#1C1C1C] max-md:w-full md:w-[1280px] lg:w-[1280px] xl:w-full">
      {showAccount && (
        <div>
          <AccountCreation showAccountHandler={showAccountHandler} />
        </div>
      )}
      <SearchOverlay
        onClose={() => setIsSearchOpen(false)}
        isOpen={isSearchOpen}
      />
      <div className="max-lg:hidden gradient-bg-blur"></div>
      <div
        className="flex items-center 
       justify-between px-[12px] py-[26px]"
      >
        <div className="  gap-2 max-lg:flex hidden">
          <div className=" max-lg:block hidden">
            {sideMenu && (
              <SlideMenu isOpen={sideMenu} setIsOpen={setSideMenu} />
            )}
          </div>
        </div>
        <div className="max-sm:flex -ml-[64px] hidden">
          <IoOptionsSharp
            onClick={showMenu}
            className="hover:text-[#ff69b4] text-[26px] text-white cursor-pointer"
          />{" "}
        </div>
        <div className="flex items-center text-white text-[36px]">
          <img className=" w-[48px] " src="/hydra.png" />
          <h1 className=" custom-orbitron text-[21px] text-white font-bold">
            Weaponify
          </h1>
        </div>
        <div className=" max-lg:hidden">
          <ul className="flex items-center gap-7">
            <Link to={"/"}>
              <li className=" flex items-center uppercase hover:opacity-90 cursor-pointer">
                <span>Home</span>
              </li>
            </Link>
            <Link to={"/shop"}>
              <li className=" flex items-center uppercase hover:opacity-90 cursor-pointer">
                <span>Shop</span>
              </li>
            </Link>
            <li
              onClick={showProdut}
              className="relative  group flex 
            items-center uppercase hover:opacity-90 cursor-pointer"
            >
              <span>Product</span>
              <RiArrowDropDownLine />
              <ul
                className={`absolute mt-2 whitespace-nowrap
                   rounded-xl ${
                     showProduct
                       ? "opacity-100  translate-y-0"
                       : "opacity-0 pointer-events-none translate-y-2"
                   }
            -translate-x-5 flex-col opacity-0
            transition-all  duration-500 ease-in-out top-full
            left-0  group-hover:opacity-100
            md:group-hover:translate-y-0 translate-y-7
            group-hover:block bg-white text-black
            shadow-md`}
              >
                <Link
                  to={
                    "/shop/weapon/6bfb892e-61c6-4c8c-bf7d-ebe23f61960e/M60 Patton Tank (3D Scan)"
                  }
                >
                  <li className="px-9 py-2 hover:bg-gray-100 rounded-xl ">
                    M60 Patton Tank
                  </li>
                </Link>
                <Link
                  to={
                    "/shop/weapon/a0219ea9-0c2f-44f4-a431-f38a22d3e725/Mossberg 500 - Model"
                  }
                >
                  <li className="px-9 py-3 hover:bg-gray-100 rounded-xl ">
                    Mossberg 500- Model
                  </li>
                </Link>
                <li className="px-9 py-3 hover:bg-gray-100 rounded-xl ">
                  Product 3
                </li>
                <li className="px-9 py-3 hover:bg-gray-100 rounded-xl ">
                  Product 4
                </li>
              </ul>
            </li>
            <li
              onClick={showPage}
              className="relative  group flex items-center uppercase hover:opacity-90 cursor-pointer"
            >
              <span>Pages</span>
              <RiArrowDropDownLine />
              <ul
                className={`absolute mt-2 whitespace-nowrap
                  rounded-xl ${
                    ShowPage
                      ? "opacity-100  visible translate-y-0"
                      : "opacity-0  pointer-events-none translate-y-2"
                  }
                group-hover:opacity-100 
                pointer-events-auto
              -translate-x-5 flex-col opacity-0
               transition-all  duration-500 ease-in-out top-full
                left-0  md:group-hover:translate-y-0 translate-y-7 group-hover:block bg-white text-black
                  shadow-md`}
              >
                <Link to={"/shop/contactUs"}>
                  <li className="px-4 py-2 hover:bg-gray-100 rounded-xl ">
                    Contact us
                  </li>
                </Link>
                <li className="px-4 py-2 hover:bg-gray-100 rounded-xl ">
                  My account
                </li>
                <Link to={"/shop/FAQs"}>
                  <li className="px-4 py-2 hover:bg-gray-100 rounded-xl ">
                    FAQs
                  </li>
                </Link>
              </ul>
            </li>

            <Link to={"/shop/aboutUs"}>
              <li className=" flex items-center uppercase hover:opacity-90 cursor-pointer">
                <span>About us</span>
              </li>
            </Link>
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
                <FaRegUserCircle
                  className="hover:text-[#ff69b4]
                 w-[26px] h-[26px] text-white cursor-pointer"
                />
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
                    onClick={() => logOutHandler(auth)}
                    className="px-4 py-2 hover:bg-gray-100 rounded-xl "
                  >
                    LogOut
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link to={"/shop/whislist"}>
            <LiaGlassWhiskeySolid className="max-md:hidden hover:text-[#ff69b4] max-md:w-[24px] max-md:h-[24px] w-[32px] h-[32px]  text-white cursor-pointer" />
          </Link>
          <div className="max-sm:hidden">
            <CiSearch
              onClick={() => {
                setIsSearchOpen(true);
                console.log("Opening search overlay");
              }}
              className="hover:text-[#ff69b4]  w-[32px] max-lg:hidden max-md:w-[24px] max-md:h-[24px]
h-[32px] text-white cursor-pointer"
            />
          </div>

          <Link to={"/shop/cart"}>
            <CiShoppingCart
              className="hover:text-[#ff69b4] relative max-md:hidden
             w-[32px] max-md:w-[24px] max-md:h-[24px]
h-[32px] text-white cursor-pointer"
            />{" "}
            <div className=" top-[10%] right-6 text-red-600 text-[28px] absolute">
              {totalQuant}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};
