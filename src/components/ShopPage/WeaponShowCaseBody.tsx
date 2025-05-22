import { useEffect, useState } from "react";

const weapons = [
  {
    id: 1,
    title: "The T-90",
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
//@ts-ignore
export const WeaponCard = ({ weapon }) => {
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    const modelId = weapon.embedUrl.split("/")[4];
    const modelUrl = `https://sketchfab.com/models/${modelId}`;

    fetch(`https://sketchfab.com/oembed?url=${modelUrl}`)
      .then((res) => res.json())
      .then((data) => {
        setThumbnail(data.thumbnail_url);
      })
      .catch((err) => {
        console.error("Failed to fetch thumbnail", err);
      });
  }, [weapon.embedUrl]);

  return (
    <div
      className="rounded-t-md flex flex-col gap-9 items-center 
       justify-center w-full 
    pb-9 hover:shadow-[0_10px_30px_10px_rgba(255,77,169,0.3)]"
    >
      <div className="w-full ">
        <a
          href={`https://sketchfab.com/models/${weapon.embedUrl.split("/")[4]}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={weapon.title}
              className="rounded-xl max-md:h-[210px] rounded-b-none
              "
            />
          ) : (
            <div className="text-white p-4">Loading thumbnail...</div>
          )}
        </a>
      </div>
      <div className="flex flex-col items-center gap-3">
        <p className="font-semibold whitespace-nowrap max-lg:text-[18px] text-[24px]">
          {weapon.title}
        </p>
        <span>Fake review (1)</span>
        <span className="font-bold text-[24px] ">$90.00</span>
      </div>
    </div>
  );
};
export const WeaponShowCaseBody = () => {
  return (
    <section className="py-[24px] ">
      <div>
        <div
          className="w-full grid-cols-3 
        max-md:grid-cols-2  gap-5 max-xl:gap-2 grid "
        >
          <WeaponCard weapon={weapons[0]} />
          <WeaponCard weapon={weapons[0]} />
          <WeaponCard weapon={weapons[0]} />
        </div>
      </div>
    </section>
  );
};
