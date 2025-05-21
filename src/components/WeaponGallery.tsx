import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

export default function WeaponGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  // Sample weapon data
  const weapons = [
    {
      id: 1,
      title: "The T-90, Used in combat",
      author: "Admin",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae obcaecati illo optio",
      embedUrl:
        "https://sketchfab.com/models/9bb8af8876a6478aa92089eff058d4db/embed",
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

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // Tablet: 2 cards
      } else {
        setCardsPerView(3); // Desktop: 3 cards
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigation functions - fixed to ensure they work correctly at all screen sizes
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= weapons.length - (cardsPerView - 1) ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex <= 0
        ? Math.max(0, weapons.length - cardsPerView)
        : prevIndex - 1;
    });
  };

  // Make sure index doesn't go out of bounds
  const maxIndex = Math.max(0, weapons.length - cardsPerView);
  const safeIndex = Math.min(currentIndex, maxIndex);

  // Get visible weapons for the current view
  const visibleWeapons = weapons.slice(safeIndex, safeIndex + cardsPerView);

  return (
    <section className="bg-[#1e1e20] py-24 px-5">
      <div className="2xl:w-[1200px] max-md:w-[800px] mx-auto px-4 md:px-16">
        <div className="mb-12">
          <h2 className="text-4xl text-white font-bold text-center">
            Legendary Weapons & War Machines
          </h2>
          <p className="text-center text-white mt-2">
            Swipe through elite firepower and armored beasts
          </p>
        </div>

        <div className="relative">
          {/* Navigation buttons - z-index ensures they stay on top */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full shadow-md hover:bg-white/40 text-white z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full shadow-md hover:bg-white/40 text-white z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider container with grid */}
          <div className="overflow-hidden px-10 w-full bg-red-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-transform duration-500 ease-in-out">
              {visibleWeapons.map((weapon) => (
                <div key={weapon.id} className="w-full">
                  <WeaponCard weapon={weapon} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8">
            {Array.from({
              length: Math.max(1, weapons.length - (cardsPerView - 1)),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`mx-1 h-3 w-3 rounded-full ${
                  index === safeIndex ? "bg-white" : "bg-gray-500"
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
