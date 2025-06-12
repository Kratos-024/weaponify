import { useState } from "react";
import { IoIosOptions } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import {
  FiUser,
  FiSettings,
  FiHome,
  FiShoppingCart,
  FiHeart,
  FiSearch,
} from "react-icons/fi";
// const data = [
//   { icon: FiHome, label: "Home", active: true },
//   { icon: FiShoppingCart, label: "Shop" },
//   { icon: FiHeart, label: "Favorites" },
//   { icon: FiSearch, label: "Search" },
//   { icon: FiSettings, label: "Settings" },
// ];
const SlideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleItemClick = (label: any) => {
    setActiveItem(label);
  };
  return (
    <div className="relative z-50 ">
      <div className="w-fit z-50">
        <button
          onClick={toggleMenu}
          className="flex items-center
           justify-center w-[32px] h-[32px] max-md:w-[24px]
            max-md:h-[24px]
          text-white rounded-full shadow-lg transition-all 
          duration-200 hover:scale-105"
        >
          <IoIosOptions className="w-6 h-6" />
        </button>
      </div>
      <div
        className={`z-50 fixed inset-0 bg-black
           bg-opacity-30 backdrop-blur-sm transition-all
            duration-300  ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        onClick={closeMenu}
      />

      <div
        className={`fixed top-0 left-0 h-full w-[90%] sm:w-[80%] md:w-1/2 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Menu</h2>
          <button
            onClick={closeMenu}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <IoClose className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
              <FiUser className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-gray-800">John Doe</h3>
              <p className="text-sm text-gray-500">john@example.com</p>
            </div>
          </div>

          <nav className="space-y-2">
            {[
              { icon: FiHome, label: "Home" },
              { icon: FiShoppingCart, label: "Shop" },
              { icon: FiHeart, label: "Favorites" },
              { icon: FiSearch, label: "Search" },
              { icon: FiSettings, label: "Settings" },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(item.label)}
                className={`w-full flex items-center p-3 rounded-lg transition-colors text-left ${
                  activeItem === item.label
                    ? "bg-pink-50 text-pink-600 border-l-4 border-pink-500"
                    : "hover:bg-gray-50 text-gray-700"
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 font-medium">
              Subcribe to Pro
            </button>

            <button className="w-full mt-3 text-gray-500 hover:text-gray-700 py-2 transition-colors">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideMenu;
