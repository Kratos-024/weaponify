import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavBar } from "./NavBar";
import { Link } from "react-router-dom";

const heroImages = [
  "./images/image/cod-bg-gun.jpg",
  "./images/image/cod-bg-gun2.jpg",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const currentImage = heroImages[currentIndex];

  return (
    <section className="w-full relative">
      <div
        className="relative w-full 
        min-h-[450px]
        md:min-h-[700px] lg:min-h-[790px] 
        xl:min-h-[980px] 2xl:min-h-screen
        text-white"
        style={{
          backgroundImage: `url(${currentImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="hidden md:block max-w-[1960px]
         mx-auto min-w-[480px] max-sm:w-full pt-[14px]"
        >
          <NavBar />
        </div>

        {pageLoaded && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
            <div className="flex flex-col items-start">
              <motion.h2
                initial={{ opacity: 0, y: -100 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7 },
                }}
                className="text-3xl max-sm:text-[21px] custom-orbitron md:text-4xl font-extrabold text-white text-start"
              >
                Explore Military Tech Like Never Before{" "}
              </motion.h2>

              <motion.h3
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.7 },
                }}
                className="custom-orbitron md:text-lg text-gray-200 mt-4 max-w-xl"
              >
                Discover detailed 3D models and insights on assault rifles,
                tanks, snipers, and more — all in one place. Weaponify brings
                you realistic visuals
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, y: 700 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 150,
                    damping: 25,
                  },
                }}
                className="mt-8 flex justify-center"
              >
                <Link to={"/shop"}>
                  <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 font-medium">
                    Get Started
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
