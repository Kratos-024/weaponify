import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import type { weaponType } from "../../pages/ShopPage";
import { Link } from "react-router-dom";

interface SketchfabModel {
  id: string;
  author: string;
  description: string;
  embedUrl: string;
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

  return {
    id: weaponObject["uniqueCode"],
    author,
    description,
    embedUrl: embedSrc.split("?")[0],
  };
}
export const WeaponCard = ({ weapon }: { weapon: weaponType }) => {
  const parsedWeapon = parseSketchfabEmbed(weapon) || {
    id: "",
    author: "",
    description: "",
    embedUrl: "",
  };
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    const modelUrl = parsedWeapon.embedUrl;

    if (modelUrl) {
      fetch(`https://sketchfab.com/oembed?url=${modelUrl}`)
        .then((res) => res.json())
        .then((data) => {
          setThumbnail(data.thumbnail_url);
        })
        .catch((err) => {
          console.error("Failed to fetch thumbnail", err);
        });
    }
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

            <div className="flex items-center gap-1">
              {[...Array(weapon.stars)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-[#ff4da9] ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}

              <h2> {weapon.noOfPeopleReviewed}</h2>
            </div>
          </div>

          <span className="font-bold text-[24px] mt-auto">$ NAN</span>
        </div>
      </Link>
    </div>
  );
};

export const WeaponShopBody = ({
  weaponData,
}: {
  weaponData: weaponType[][];
}) => {
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
