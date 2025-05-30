import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";

interface SketchfabModel {
  id: number;
  title: string;
  author: string;
  description: string;
  embedUrl: string;
  review: number;
}

function parseSketchfabEmbed(
  htmlString: string,
  id: number,
  description = "Auto-generated description"
): SketchfabModel | null {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  const iframe = doc.querySelector("iframe");
  const title = iframe?.getAttribute("title") || "Untitled";
  const embedSrc = iframe?.getAttribute("src") || "";

  const authorLink = doc.querySelectorAll("a")[1];
  const author = authorLink?.textContent?.trim() || "Unknown";

  if (!embedSrc) return null;

  const review = Math.floor(Math.random() * 5) + 1;

  return {
    id,
    title,
    author,
    description,
    embedUrl: embedSrc.split("?")[0],
    review,
  };
}

//@ts-ignore
export const WeaponCard = ({ weapon }) => {
  console.log(weapon);

  const parsedWeapon = parseSketchfabEmbed(weapon, 1) || {
    id: "",
    title: "",
    author: "",
    description: "",
    embedUrl: "",
    review: 0,
  };
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    console.log(parsedWeapon);
    const modelUrl = parsedWeapon.embedUrl;

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
      <a href={`moreInfo/${parsedWeapon.title}`}>
        <div className="w-full ">
          <a target="_blank" rel="noopener noreferrer">
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
            {parsedWeapon.title}
          </p>
          <div></div>
          <div className="flex ">
            {Array.from({ length: parsedWeapon["review"] }).map((_, i) => (
              <CiStar key={i} className="text-[]" />
            ))}
          </div>
          <span className="font-bold text-[24px] ">$90.00</span>
        </div>
      </a>
    </div>
  );
};
export const WeaponShowCaseBody = ({
  weaponUrl,
}: {
  weaponUrl: { category: string; sketchFabUrl: string }[];
}) => {
  return (
    <section className="py-[24px] ">
      <div>
        <div
          className="w-full grid-cols-3 
        max-md:grid-cols-2  gap-5 max-xl:gap-2 grid "
        >
          {weaponUrl.map((weapon) => (
            <WeaponCard weapon={weapon["sketchFabUrl"]} />
          ))}
        </div>
      </div>
    </section>
  );
};
