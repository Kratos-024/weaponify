import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import {
  FiUser,
  FiSettings,
  FiHome,
  FiShoppingCart,
  FiHeart,
  FiSearch,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { logOut } from "./HomePage/NavBar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import { AccountCreation } from "./AccountCreation";

const SlideMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) => {
  const auth = getAuth();
  const [_, setActiveItem] = useState("Home");
  const [details, setDetails] = useState<string>("");
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (label: any) => {
    setActiveItem(label);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email) {
        setDetails(user.email);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="relative z-20 ">
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 left-0 h-full w-[90%] sm:w-[80%] md:w-1/2 bg-white shadow-2xl z-40"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Menu</h2>
          <button
            onClick={toggleMenu}
            className="p-2 translate-x-0 duration-500 ease-in-out transition-all
             hover:bg-gray-100 rounded-full "
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
              <h3 className="font-semibold text-gray-800">{details[0]}</h3>
              <p className="text-sm text-gray-500">{details}</p>
            </div>
          </div>

          <nav className="space-y-2">
            {[
              { icon: FiHome, label: "Home", link: "/" },
              { icon: FiShoppingCart, label: "Shop", link: "/shop" },
              { icon: FiHeart, label: "Favorites", link: "/shop/whislist" },
              { icon: FiSearch, label: "Cart", link: "/shop/cart" },
              { icon: FiSettings, label: "Settings", link: "/account" },
            ].map((item, index) => (
              <Link to={item.link}>
                {" "}
                <button
                  key={index}
                  onClick={() => handleItemClick(item.label)}
                  className={`w-full flex items-center p-3 rounded-lg transition-colors text-left ${"hover:bg-gray-50 text-gray-700"}`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 font-medium">
              Subcribe to Pro
            </button>

            {auth.currentUser ? (
              <button
                onClick={() => {
                  logOut(auth);
                }}
                className="w-full mt-3 text-gray-500 hover:text-gray-700 py-2 transition-colors"
              >
                Sign Out
              </button>
            ) : (
              <button className="w-full mt-3 text-gray-500 hover:text-gray-700 py-2 transition-colors">
                Login
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SlideMenu;
