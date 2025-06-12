import { RiArrowDropDownLine } from "react-icons/ri";
import { LiaGlassWhiskeySolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { getAuth, signOut, type Auth } from "firebase/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export const logOut = async (auth: Auth) => {
  try {
    await signOut(auth);
    window.location.reload();
    toast.success("LogOut successfully");
  } catch (error) {
    console.log("Error has been occured with logout", error);
    toast.error("LogOut Un-successful");
  }
};
export const NavBar = () => {
  const [showProduct, setShowProduct] = useState(false);
  const [ShowPage, setShowPage] = useState(false);
  const auth = getAuth();
  const logOutHandler = async (auth: Auth) => {
    await logOut(auth);
  };
  const showProdut = () => {
    setShowProduct(!showProduct);
  };
  const showPage = () => {
    setShowPage(!ShowPage);
  };

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
            <Link to={"/"}>
              <li className=" flex items-center uppercase hover:opacity-90 cursor-pointer">
                <span>Home</span>
              </li>
            </Link>
            <Link to={"/shop"}>
              {" "}
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
                       ? "opacity-100 translate-y-0"
                       : "opacity-0 translate-y-2"
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
                </Link>{" "}
                <Link
                  to={
                    "/shop/weapon/a0219ea9-0c2f-44f4-a431-f38a22d3e725/Mossberg 500 - Model"
                  }
                >
                  <li className="px-9 py-3 hover:bg-gray-100 rounded-xl ">
                    Mossberg 500- Model
                  </li>
                </Link>{" "}
                <li className="px-9 py-3 hover:bg-gray-100 rounded-xl ">
                  Product 3
                </li>{" "}
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
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }
                group-hover:opacity-100
                pointer-events-auto
              -translate-x-5 flex-col opacity-0
               transition-all  duration-500 ease-in-out top-full
                left-0  md:group-hover:translate-y-0 translate-y-7 group-hover:block bg-white text-black
                  shadow-md`}
              >
                <Link to={"/shop/contactUs"}>
                  {" "}
                  <li className="px-4 py-2 hover:bg-gray-100 rounded-xl ">
                    Contact us
                  </li>
                </Link>
                <li className="px-4 py-2 hover:bg-gray-100 rounded-xl ">
                  My account
                </li>{" "}
                <Link to={"/shop/FAQs"}>
                  {" "}
                  <li className="px-4 py-2 hover:bg-gray-100 rounded-xl ">
                    FAQs
                  </li>
                </Link>
              </ul>
            </li>

            <Link to={"/shop/aboutUs"}>
              {" "}
              <li className=" flex items-center uppercase hover:opacity-90 cursor-pointer">
                <span>About us</span>
              </li>{" "}
            </Link>
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
          {/* {auth.currentUser && (
            <div className="relative  group flex items-center uppercase hover:opacity-90 cursor-pointer">
              {" "}
              <FaRegUserCircle
                className="hover:text-[#ff69b4]  w-[32px]
h-[32px] text-white cursor-pointer"
              />
              <ul
                className={`absolute mt-2 whitespace-nowrap
                  rounded-xl
                     
                group-hover:opacity-100
                pointer-events-auto
              -translate-x-5 flex-col opacity-0
               transition-all  duration-500 ease-in-out top-full
                left-0  md:group-hover:translate-y-0 translate-y-7 group-hover:block bg-white text-black
                  shadow-md`}
              >
                <li className="px-4 py-2 hover:bg-gray-100 rounded-xl ">
                  My Profile
                </li>
                <li
                  onClick={() => {
                    logOutHandler(auth);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 rounded-xl "
                >
                  LogOut
                </li>{" "}
              </ul>
            </div>
          )} */}
        </div>
      </div>
    </nav>
  );
};
