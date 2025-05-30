import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { IoOptionsSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

export const TopBar = () => {
  const [options, setOptions] = useState<boolean>(false);
  const showOptions = () => {
    setOptions(!options);
  };
  return (
    <nav className="bg-[#17171A] ">
      <div className=" w-full px-[12px] py-[16px] items-center flex justify-between">
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

          {/* <div className={` ${options? "flex":" hidden" }`}>
            {" "}
            <CiFacebook className="hover:text-[#ff69b4] text-[26px] text-white cursor-pointer" />
            <FaXTwitter className="hover:text-[#ff69b4] text-[26px] text-white  cursor-pointer" />
            <FaInstagram className="hover:text-[#ff69b4] text-[26px] text-white cursor-pointer" />
          </div> */}
        </div>
        <div className="cursor-pointer flex gap-3 items-center">
          {" "}
          <CiUser className="hover:text-[#ff69b4] text-[26px] text-white" />
          <h3>Account</h3>
        </div>
      </div>
    </nav>
  );
};
