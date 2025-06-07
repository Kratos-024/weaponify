import { useEffect, useState } from "react";

type CardProps = {
  image: string;
  title: string;
};
const cardData = [
  { image: "../tank.png", title: "Tanks" },
  { image: "../sniper.png", title: "Sniper" },
  { image: "../dagger.png", title: "Dagger" },
  { image: "../grenade.png", title: "Grenade" },
];

const CardComponent = ({ image, title }: CardProps) => {
  return (
    <div className="w-fit bg-[#1c1c1c] rounded-md px-4 py-4">
      <img className="w-[328px]" src={image} alt={title} />
      <div className="w-fit">
        <p className="text-white text-[22px]">{title}</p>
        <h4 className="bg-gradient-to-r from-[#d253ff] to-[#ff4da9] bg-clip-text text-transparent">
          <span>Shop now</span>
          <div className="inline-block transition-transform duration-300 hover:rotate-[4deg]">
            ----→
          </div>
        </h4>
      </div>
    </div>
  );
};

export const Categories = () => {
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

  const maxIndex = Math.max(0, cardData.length - cardsPerView);
  const safeIndex = Math.min(currentIndex, maxIndex);

  const visibleWeapons = cardData.slice(safeIndex, safeIndex + cardsPerView);

  return (
    <section className="bg-[#17171A] max-sm:w-full">
      <div className="py-[126px]  px-[48px] pb-[126px] space-y-[64px]">
        <h2 className=" custom-orbitron text-[28px] text-center font-semibold text-white">
          CATEGORIES
        </h2>
        <div className="">
          <div className=" max-lg:hidden grid grid-cols-4 gap-4">
            {" "}
            {cardData.map((card, index) => (
              <CardComponent
                key={index}
                image={card.image}
                title={card.title}
              />
            ))}
          </div>
          <div className=" max-lg:flex hidden items-center justify-center">
            <div>
              <div className="grid grid-cols-1 max-md:grid-cols-1 max-lg:grid-cols-2 gap-6 transition-transform duration-500 ease-in-out">
                {visibleWeapons.map((weapon) => (
                  <div key={weapon.image} className="w-full">
                    <CardComponent image={weapon.image} title={weapon.title} />
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                {Array.from({
                  length: Math.max(1, cardData.length - (cardsPerView - 1)),
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
        </div>
      </div>
    </section>
  );
};
