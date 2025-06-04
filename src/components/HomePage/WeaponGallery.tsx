import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ReadMoreIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
//@ts-ignore
const WeaponCard = ({ weapon }) => {
  return (
    <div className="bg-[#1C1C1C] rounded-xl shadow-lg w-full">
      <div className="w-full">
        <iframe
          className="rounded-xl rounded-b-none"
          title={weapon.title}
          frameBorder="0"
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src={weapon.embedUrl}
          style={{ width: "100%", height: "410px" }}
        ></iframe>
      </div>
      <div className="px-9 py-5 space-y-3">
        <h3 className="text-gray-600">By {weapon.author}</h3>
        <p className="text-white text-xl">{weapon.title}</p>
        <p className="text-white text-lg">{weapon.description}</p>
        <p className="flex items-center gap-2 text-white cursor-pointer">
          <span>Read More</span>
          <ReadMoreIcon />
        </p>
      </div>
    </div>
  );
};

const weapons = [
  {
    id: 1,
    title: "The T-90, Used in combat",
    author: "Admin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae obcaecati illo optio",
    embedUrl: `<div class="sketchfab-embed-wrapper"> <iframe title="AK-47" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/ZMhWW9znpiBAhxDSomqX2kSSfg/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/ak-47-ZMhWW9znpiBAhxDSomqX2kSSfg?utm_medium=embed&utm_campaign=share-popup&utm_content=ZMhWW9znpiBAhxDSomqX2kSSfg" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> AK-47 </a> by <a href="https://sketchfab.com/millenia3d?utm_medium=embed&utm_campaign=share-popup&utm_content=ZMhWW9znpiBAhxDSomqX2kSSfg" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Azure Midsummer (millenia3d) </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=ZMhWW9znpiBAhxDSomqX2kSSfg" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`,
  },
  {
    id: 2,
    title: "AK-47, Legendary Firearm",
    author: "Admin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae obcaecati illo optio",
    embedUrl:
      "https://sketchfab.com/models/9bb8af8876a6478aa92089eff058d4db/embed",
  },
  {
    id: 3,
    title: "M1 Abrams Tank",
    author: "Admin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae obcaecati illo optio",
    embedUrl:
      "https://sketchfab.com/models/9bb8af8876a6478aa92089eff058d4db/embed",
  },
  {
    id: 4,
    title: "M16 Assault Rifle",
    author: "Admin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae obcaecati illo optio",
    embedUrl:
      "https://sketchfab.com/models/9bb8af8876a6478aa92089eff058d4db/embed",
  },
  {
    id: 5,
    title: "RPG-7 Launcher",
    author: "Admin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae obcaecati illo optio",
    embedUrl:
      "https://sketchfab.com/models/9bb8af8876a6478aa92089eff058d4db/embed",
  },
];

export default function WeaponGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1280) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, weapons.length - cardsPerView);
  const safeIndex = Math.min(currentIndex, maxIndex);

  const visibleWeapons = weapons.slice(safeIndex, safeIndex + cardsPerView);

  return (
    <section className="bg-[#1e1e20] py-24 px-5">
      <div className="2xl:w-[1400px] max-md:w-[600px] max-lg:w-[900px] max-sm:w-[500px] mx-auto px-4 md:px-16">
        <div className="mb-12">
          <h2 className="text-4xl text-white font-bold text-center">
            Legendary Weapons & War Machines
          </h2>
          <p className="text-center text-white mt-2">
            Explore elite firepower and armored beasts
          </p>
        </div>

        <div className="relative">
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.2 }}
            className="overflow-hidden px-10 w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-6 transition-transform duration-500 ease-in-out">
              {visibleWeapons.map((weapon) => (
                <div key={weapon.id} className="w-full">
                  <WeaponCard weapon={weapon} />
                </div>
              ))}
            </div>
          </motion.div>

          <div className="flex justify-center mt-8">
            {Array.from({
              length: Math.max(1, weapons.length - (cardsPerView - 1)),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`mx-1 h-4 w-4 rounded-full transition-all duration-300 ${
                  index === safeIndex
                    ? "bg-white scale-110"
                    : "bg-gray-500 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
