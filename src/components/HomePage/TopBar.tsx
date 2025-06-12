import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaRegUserCircle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoOptionsSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { logOutHandler } from "../ShopPage/NavBar";
import { auth } from "../../apis/app";
import { SearchOverlay } from "../SearchComponent";

export const TopBar = ({ showAccountHandler }: { showAccountHandler: any }) => {
  const [options, setOptions] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [showUserAccount, setShowUserAccount] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const showOptions = () => {
    setOptions(!options);
  };

  const showUserAccountHandler = () => {
    setShowUserAccount(!showUserAccount);
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
    <>
      <SearchOverlay
        onClose={() => setIsSearchOpen(false)}
        isOpen={isSearchOpen}
      />

      <nav className="bg-[#17171A] max-sm:w-full">
        <div className="w-full px-[12px] py-[16px] items-center flex justify-between">
          <div className="flex gap-6 max-sm:hidden">
            <CiFacebook className="hover:text-[#ff69b4] text-[28px] text-white cursor-pointer" />
            <FaXTwitter className="hover:text-[#ff69b4] text-[28px] text-white cursor-pointer" />
            <FaInstagram className="hover:text-[#ff69b4] text-[28px] text-white cursor-pointer" />
          </div>

          <div className="max-sm:flex gap-3 hidden">
            <IoOptionsSharp
              onClick={showOptions}
              className="hover:text-[#ff69b4] text-[26px] text-white cursor-pointer"
            />
            <CiSearch
              onClick={() => {
                setIsSearchOpen(true);
                console.log("Opening search overlay");
              }}
              className="hover:text-[#ff69b4] text-[26px] text-white cursor-pointer"
            />
          </div>

          <div className="flex gap-3 items-center">
            {name.length > 1 ? (
              <div
                onClick={() => {
                  showUserAccountHandler();
                }}
                className="relative z-30 px-5 flex items-center uppercase hover:opacity-90 cursor-pointer"
              >
                <FaRegUserCircle className="hover:text-[#ff69b4] w-[26px] h-[26px] text-white cursor-pointer" />

                <ul
                  className={`absolute mt-2 whitespace-nowrap rounded-xl ${
                    showUserAccount
                      ? "transition-all duration-500 ease-in-out opacity-100 translate-y-0 pointer-events-auto"
                      : "transition-all duration-500 ease-in-out opacity-0 translate-y-7 pointer-events-none"
                  } -translate-x-10 flex-col top-full left-0 bg-white text-black shadow-md`}
                >
                  <li className="px-4 py-2 hover:bg-gray-100 rounded-xl">
                    My Profile
                  </li>
                  <li
                    onClick={() => logOutHandler(auth)}
                    className="px-4 py-2 hover:bg-gray-100 rounded-xl"
                  >
                    LogOut
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <div
                  onClick={() => {
                    showAccountHandler();
                  }}
                >
                  <FaRegUserCircle className="hover:text-[#ff69b4] w-[26px] h-[26px] text-white cursor-pointer" />
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
