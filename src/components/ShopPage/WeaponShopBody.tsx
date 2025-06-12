import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import type { Tank } from "../../pages/ShopPage";
import { Link } from "react-router-dom";

interface SketchfabModel {
  id: string;
  author: string;
  description: string;
  embedUrl: string;
  review: number;
}
interface weaponObjectType {
  sNo: number;
  category: string;
  uniqueCode: string;
  sketchFabUrl: string;
}

function parseSketchfabEmbed(
  weaponObject: weaponObjectType,
  description = "Auto-generated description"
): SketchfabModel | null {
  const sketchfabUri = weaponObject["sketchFabUrl"];
  const parser = new DOMParser();
  const doc = parser.parseFromString(sketchfabUri, "text/html");

  const iframe = doc.querySelector("iframe");
  const embedSrc = iframe?.getAttribute("src") || "";

  const authorLink = doc.querySelectorAll("a")[1];
  const author = authorLink?.textContent?.trim() || "Unknown";

  if (!embedSrc) return null;

  const review = Math.floor(Math.random() * 5) + 1;

  return {
    id: weaponObject["uniqueCode"],
    author,
    description,
    embedUrl: embedSrc.split("?")[0],
    review,
  };
}
export const WeaponCard = ({ weapon }: { weapon: any }) => {
  const parsedWeapon = parseSketchfabEmbed(weapon) || {
    id: "",
    author: "",
    description: "",
    embedUrl: "",
    review: 0,
  };
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    const modelUrl = parsedWeapon.embedUrl;

    fetch(`https://sketchfab.com/oembed?url=${modelUrl}`)
      .then((res) => res.json())
      .then((data) => {
        setThumbnail(data.thumbnail_url);
      })
      .catch((err) => {
        console.error("Failed to fetch thumbnail", err);
      });
  }, [weapon]);

  return (
    <div className="rounded-t-md flex flex-col w-full h-full pb-9 hover:shadow-[0_10px_30px_10px_rgba(255,77,169,0.3)]">
      <Link
        to={`/shop/weapon/${parsedWeapon.id}/${weapon.name}`}
        className="flex flex-col h-full"
      >
        <div className="w-full aspect-[4/3] overflow-hidden rounded-xl rounded-b-none bg-gray-100">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={weapon.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white bg-gray-600">
              Loading thumbnail...
            </div>
          )}
        </div>

        <div className="flex flex-col items-center gap-3 flex-grow justify-between pt-4">
          <div className="flex flex-col items-center gap-3">
            <p className="font-semibold text-center max-lg:text-[18px] text-[24px] line-clamp-2">
              {weapon.name}
            </p>

            <div className="flex">
              {Array.from({ length: parsedWeapon["review"] }).map((_, i) => (
                <CiStar key={i} className="text-yellow-400" />
              ))}
            </div>
          </div>

          <span className="font-bold text-[24px] mt-auto">$90.00</span>
        </div>
      </Link>
    </div>
  );
};

export const WeaponShopBody = ({ weaponData }: { weaponData: Tank[][] }) => {
  return (
    <section className="py-[24px] ">
      <div>
        <div
          className="w-full grid-cols-3  
        max-md:grid-cols-2  gap-5 max-xl:gap-2 grid "
        >
          {weaponData.map((subWeaponData) =>
            subWeaponData.map((item) => (
              <WeaponCard key={item.uniqueCode} weapon={item} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};
