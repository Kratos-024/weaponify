import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { IoOptionsSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

export const TopBar = ({ showAccountHandler }: { showAccountHandler: any }) => {
  const [options, setOptions] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  const showOptions = () => {
    setOptions(!options);
  };
  useEffect(() => {
    const auth = getAuth();
    if (auth.currentUser) {
      setName(auth.currentUser?.email || "");
    }
  });
  return (
    <nav className="bg-[#17171A] max-sm:w-full">
      <div
        className=" w-full  px-[12px] py-[16px]
       items-center flex justify-between"
      >
        <div className="flex gap-6 max-sm:hidden  ">
          {" "}
          <CiFacebook className="hover:text-[#ff69b4] text-[28px] text-white cursor-pointer" />
          <FaXTwitter className="hover:text-[#ff69b4] text-[28px] text-white  cursor-pointer" />
          <FaInstagram className="hover:text-[#ff69b4] text-[28px] text-white cursor-pointer" />
        </div>
        <div className="max-sm:flex gap-3 hidden ">
          <IoOptionsSharp
            onClick={showOptions}
            className="hover:text-[#ff69b4] text-[26px] text-white cursor-pointer"
          />
          <CiSearch className="hover:text-[#ff69b4] text-[26px] text-white cursor-pointer" />
        </div>

        <div className="flex gap-3 items-center">
          {" "}
          {name.length < 1 && (
            <div onClick={showAccountHandler} className="cursor-pointer ">
              <CiUser className="hover:text-[#ff69b4] text-[26px] text-white" />
            </div>
          )}
          <h3>{name ? name : "Account"}</h3>
        </div>
      </div>
    </nav>
  );
};
