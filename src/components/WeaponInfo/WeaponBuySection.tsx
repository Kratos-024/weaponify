import { useEffect, useState } from "react";
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { LuArrowLeftRight } from "react-icons/lu";
import { HiMiniShare } from "react-icons/hi2";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { FaShippingFast } from "react-icons/fa";
import { SiFreenet } from "react-icons/si";
import { addToCart, addToWishlist } from "../../apis/app";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

async function parseSketchfabEmbed(modelUrl: string): Promise<string> {
  const response = await fetch(`https://sketchfab.com/oembed?url=${modelUrl}`);
  const jsonData = await response.json();
  return jsonData.thumbnail_url;
}

export const WeaponBuySection = ({
  weaponData,
  embedUrl,
}: {
  weaponData: {
    stars: number;
    noOfPeopleReviewed: number;
    name: string;
    shortDesc: string;
  };
  embedUrl: string;
}) => {
  const [stocks, setStocks] = useState(1);
  const [thumbnail, setThumbnail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const weaponId = useParams()["id"] || "";

  const subtract = () => {
    setStocks((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const add = () => {
    setStocks((prev) => prev + 1);
  };

  useEffect(() => {
    const getImageSrc = async () => {
      try {
        const imgSrc = await parseSketchfabEmbed(embedUrl);
        setThumbnail(imgSrc);
      } catch (error) {
        console.error("Error fetching thumbnail:", error);
      }
    };

    if (embedUrl) {
      getImageSrc();
    }
  }, [embedUrl]);

  const addToWishlistHandler = async (
    weaponId: string,
    name: string,
    inStocks: number
  ) => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      if (!thumbnail) {
        toast.error("Please wait for the image to load");
        return;
      }

      const response = await addToWishlist(weaponId, thumbnail, name, inStocks);
      if (response.status) {
        toast.success("Added to wishlist");
      }
    } catch (error) {
      toast.error("Something went wrong, Please login");
      console.log("Error has occurred in wishlist handler");
    } finally {
      setIsLoading(false);
    }
  };
  const addToCartHandler = async (
    weaponId: string,
    thumbnail: string,
    name: string,
    price: number,
    inStock: number,
    quantity: number
  ) => {
    try {
      const response = await addToCart(
        weaponId,
        thumbnail,
        name,
        price,
        inStock,
        quantity
      );
      if (response.status) {
        toast.success("SuccessFully added to cart");
      } else {
        throw new Error("Please login");
      }
    } catch (error) {
      toast.error("Please Login to add to cart");
    }
  };
  return (
    <section className="relative">
      <div className="mt-1 space-y-5">
        <h2 className="font-semibold text-[28px]">{weaponData.name}</h2>
        <div className="flex items-center">
          {[...Array(weaponData.stars)].map((_, i) => (
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
          <p className="text-gray-400 ml-3">
            ({weaponData.noOfPeopleReviewed} Customer review)
          </p>
        </div>
        <p className="mb-4 font-bold text-[42px]">$240.99</p>
        <p>{weaponData.shortDesc}</p>
        <p className="text-[#0f834d] mb-4">107 in Stock</p>
        <div className="flex w-full gap-3 justify-between">
          <div className="bg-[#ececec] w-[150px] flex gap-3 justify-between rounded-2xl px-4 py-4">
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
            onClick={() => {
              addToCartHandler(
                weaponId,
                thumbnail,
                weaponData.name,
                240,
                170,
                stocks
              );
            }}
            className="hover:opacity-90 bg-[#ececec] w-full hover:bg-[#ff4da9] rounded-2xl px-4 py-4 cursor-pointer"
          >
            Add to Cart
          </button>
          <div
            onClick={() => {
              addToWishlistHandler(weaponId, "RPG T-90 Tank", stocks);
            }}
            className={`bg-[#ececec] cursor-pointer ] rounded-full p-4 mx-auto ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <CiStar className="w-[28px] h-[28px] hover:text-[#ffffff]" />
          </div>
        </div>
        <button className="hover:opacity-90 bg-[#ececec] w-full ] rounded-full px-4 py-4 cursor-pointer">
          Buy it
        </button>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#ff4da9]">
            <LuArrowLeftRight />
            <span>Compare</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#ff4da9]">
            <HiOutlineQuestionMarkCircle />
            <span>Questions</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#ff4da9]">
            <HiMiniShare />
            <span>Share</span>
          </div>
        </div>
        <div>
          <h4 className="font-medium text-gray-900 mb-3">We Accept</h4>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="bg-blue-600 text-white px-2 py-1 rounded">
              PayPal
            </span>
            <span className="bg-purple-600 text-white px-2 py-1 rounded">
              Stripe
            </span>
            <span className="bg-blue-800 text-white px-2 py-1 rounded">
              Pay
            </span>
            <span className="bg-gray-800 text-white px-2 py-1 rounded">G</span>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Get 5 discount coins at the next step
          </p>
        </div>
        <div className="flex justify-center text-[18px] flex-col gap-3">
          <div className="flex gap-3 items-center">
            <FaShippingFast className="w-[28px] h-[28px]" />
            <p>
              <span className="font-semibold">Get the buyer at: </span>
              <span>1 min</span>
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <SiFreenet />
            <span className="font-semibold text-[#000]">
              Buy 3 and get 1 free
            </span>
          </div>
        </div>
        <hr />
        <div>
          <div className="flex gap-2">
            <p className="font-semibold">SKU:</p>
            <span>Model T</span>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold">Categories:</p>
            <span>Tank</span>
          </div>
        </div>
      </div>
    </section>
  );
};
