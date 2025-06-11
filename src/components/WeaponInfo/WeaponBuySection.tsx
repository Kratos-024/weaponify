import { useState } from "react";
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { LuArrowLeftRight } from "react-icons/lu";
import { HiMiniShare } from "react-icons/hi2";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { FaShippingFast } from "react-icons/fa";
import { SiFreenet } from "react-icons/si";
import { addToWishlist } from "../../apis/app";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

// function parseSketchfabEmbed(
//   weaponObject: weaponObjectType,
//   description = "Auto-generated description"
// ): SketchfabModel | null {
//   const sketchfabUri = weaponObject["sketchFabUrl"];
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(sketchfabUri, "text/html");

//   const iframe = doc.querySelector("iframe");
//   const embedSrc = iframe?.getAttribute("src") || "";

//   const authorLink = doc.querySelectorAll("a")[1];
//   const author = authorLink?.textContent?.trim() || "Unknown";

//   if (!embedSrc) return null;

//   const review = Math.floor(Math.random() * 5) + 1;

//   return {
//     id: weaponObject["uniqueCode"],
//     author,
//     description,
//     embedUrl: embedSrc.split("?")[0],
//     review,
//   };
// }
// export const WeaponCard = ({ weapon }: { weapon: any }) => {
//   const parsedWeapon = parseSketchfabEmbed(weapon) || {
//     id: "",
//     author: "",
//     description: "",
//     embedUrl: "",
//     review: 0,
//   };
//   const [thumbnail, setThumbnail] = useState("");

// useEffect(() => {
//   const modelUrl = parsedWeapon.embedUrl;

//   fetch(`https://sketchfab.com/oembed?url=${modelUrl}`)
//     .then((res) => res.json())
//     .then((data) => {
//       setThumbnail(data.thumbnail_url);
//     })
//     .catch((err) => {
//       console.error("Failed to fetch thumbnail", err);
//     });
// }, [weapon]);
export const getSketchfabThumbnail = async (
  embedUrl: string
): Promise<string | null> => {
  try {
    const match = embedUrl.match(/models\/([a-z0-9]+)\//i);
    if (!match || !match[1]) {
      console.error("Invalid Sketchfab embed URL");
      return null;
    }
    const modelId = match[1];
    const oembedUrl = `https://sketchfab.com/oembed?url=https://sketchfab.com/models/${modelId}`;
    const response = await fetch(oembedUrl);
    const data = await response.json();

    return data.thumbnail_url || null;
  } catch (error) {
    console.error("Failed to fetch Sketchfab thumbnail:", error);
    return null;
  }
};

export const WeaponBuySection = ({ embedUrl }: { embedUrl: string }) => {
  const [stocks, setStocks] = useState(1);
  const weaponId = useParams()["id"] || "";
  const subtract = () => {
    setStocks((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const add = () => {
    setStocks((prev) => prev + 1);
  };
  const addToWhilistHandler = async (
    weaponId: string,
    name: string,
    inStocks: number
  ) => {
    try {
      const imgSrc = (await getSketchfabThumbnail(embedUrl)) || "";

      const response = await addToWishlist(weaponId, imgSrc, name, inStocks);
      if (response.status) {
        toast.success("Added to whislist");
      }
    } catch (error) {
      toast.error("Something went wrong, Please login");
      console.log("Error has been occured in whislist handler");
    }
  };
  return (
    <section className="relative">
      <div className="mt-1 space-y-5">
        <h2 className=" font-semibold text-[28px]">RPG T-90 Tank</h2>
        <div className="flex items-center">
          {[...Array(2)].map((_, i) => (
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
          <svg
            className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <p className="text-gray-400 ml-3">(1 Customer reivew)</p>
        </div>
        <p className=" mb-4 font-bold text-[42px]">$240.99</p>
        <p>
          Full of flavour but with palate cleansing acidity, our kiwifruit are
          rich in fibre and packed with the enzyme actinidin which are brilliant
          for digestion.
        </p>
        <p className="text-[#0f834d] mb-4">107 in Stocks</p>
        <div className="flex w-full gap-3 justify-between">
          {" "}
          <div className="bg-[#ececec]  w-[150px] flex gap-3  justify-between rounded-2xl px-4 py-4">
            <button
              className="hover:opacity-90 cursor-pointer"
              onClick={subtract}
            >
              <RiSubtractFill className="w-[24px] h-[24px]" />
            </button>
            <span>{stocks}</span>
            <button className="hover:opacity-90 cursor-pointer" onClick={add}>
              <IoMdAdd className="w-[24px] h-[24px]" />
            </button>
          </div>
          <button
            className="hover:opacity-90 bg-[#ececec] w-full
           hover:pinkishBg   rounded-2xl px-4 py-4 cursor-pointer"
          >
            Add to Cart
          </button>
          <div
            onClick={() => {
              addToWhilistHandler(weaponId, "name", 15);
            }}
            className="bg-[#ececec] cursor-pointer bg-pinkishBg rounded-full p-4 mx-auto"
          >
            <CiStar className=" w-[28px] h-[28px]  hover:text-[#ffffff]" />
          </div>
        </div>
        <button
          className="hover:opacity-90 bg-[#ececec] w-full
          pinkishBg   rounded-full px-4 py-4 cursor-pointer"
        >
          {" "}
          Buy it
        </button>
        <div className=" flex gap-4 items-center ">
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#ff4da9]">
            {" "}
            <LuArrowLeftRight />
            <span>Compare</span>
          </div>{" "}
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#ff4da9]">
            {" "}
            <HiOutlineQuestionMarkCircle />
            <span>Questions</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#ff4da9]">
            {" "}
            <HiMiniShare />
            <span>Share</span>
          </div>
        </div>
        <div className="w-full text-center flex justify-center items-center h-[96px] bg-[#ececec] roudned-2xl">
          {" "}
          Accepting UPI only
        </div>
        <div className=" flex justify-center text-[18px] flex-col gap-3 ">
          <div className="flex gap-3  items-center">
            <FaShippingFast className=" w-[28px] h-[28px]" />
            <p>
              <span className="font-semibold">Get the buyer at: </span>{" "}
              <span>1 min</span>
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <SiFreenet />

            <span className=" font-semibold text-[#000] ">
              Buy 3 and get 1 free{" "}
            </span>
          </div>
        </div>
        <hr></hr>
        <div>
          <div className="flex gap-2">
            <p className="font-semibold">SKU:</p>
            <span>Model T</span>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold">Categories:</p>
            <span> Tank</span>
          </div>
        </div>
      </div>
    </section>
  );
};
