import { useEffect, useState } from "react";
import { NavBar } from "../components/ShopPage/NavBar";
import { TiDelete } from "react-icons/ti";
import { getWishlist } from "../apis/app";
import { toast } from "react-toastify";

interface WishlistItem {
  imgSrc: string;
  inStock: number;
  name: string;
  weaponId: string;
  price?: number;
}

const Wishlist = () => {
  const [wishlistData, setWishlistData] = useState<WishlistItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [deletingItems, setDeletingItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    const getWishlistHandler = async () => {
      try {
        setIsLoading(true);
        const response = await getWishlist();
        const data = response.data?.wishlist || []; // Fixed typo: whislist -> wishlist
        setWishlistData(data);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
        toast.error("Failed to load wishlist");
      } finally {
        setIsLoading(false);
      }
    };

    getWishlistHandler();
  }, []);

  // const handleRemoveFromWishlist = async (weaponId: string) => {
  //   if (deletingItems.has(weaponId)) return; // Prevent multiple clicks

  //   setDeletingItems((prev) => new Set(prev).add(weaponId));

  //   try {
  //     // const response = await removeFromWishlist(weaponId);
  //     // if (response.status) {
  //     //   setWishlistData((prev) =>
  //     //     prev.filter((item) => item.weaponId !== weaponId)
  //     //   );
  //     //   toast.success("Removed from wishlist");
  //     // }
  //   } catch (error) {
  //     console.error("Error removing from wishlist:", error);
  //     toast.error("Failed to remove item");
  //   } finally {
  //     setDeletingItems((prev) => {
  //       const newSet = new Set(prev);
  //       newSet.delete(weaponId);
  //       return newSet;
  //     });
  //   }
  // };

  const handleAddToCart = (item: WishlistItem) => {
    // Add your cart logic here
    toast.success(`${item.name} added to cart`);
  };

  if (isLoading) {
    return (
      <section>
        <NavBar />
        <div className="flex justify-center items-center h-screen">
          <div className="text-xl">Loading wishlist...</div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <NavBar />
      <section className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-[48px] text-center my-9 font-bold">Wishlist</h2>

          <div className="max-w-6xl mx-auto">
            {wishlistData.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-gray-500 text-xl mb-4">
                  Your wishlist is empty
                </div>
                <p className="text-gray-400">
                  Add some items to your wishlist to see them here
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Header */}
                <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-100 font-semibold text-gray-700 border-b">
                  <div className="col-span-1"></div>
                  <div className="col-span-4">Product</div>
                  <div className="col-span-2">Price</div>
                  <div className="col-span-2">Stock</div>
                  <div className="col-span-3">Action</div>
                </div>

                {/* Wishlist Items */}
                <div className="divide-y divide-gray-200">
                  {wishlistData.map((item) => (
                    <div
                      key={item.weaponId}
                      className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 items-center hover:bg-gray-50 transition-colors"
                    >
                      {/* Delete Button */}
                      <div className="col-span-1 flex justify-center">
                        <button
                          // onClick={() =>
                          //   // handleRemoveFromWishlist(item.weaponId)
                          // }
                          // disabled={deletingItems.has(item.weaponId)}
                          // className={`text-red-500 hover:text-red-700 transition-colors ${
                          //   deletingItems.has(item.weaponId)
                          //     ? "opacity-50 cursor-not-allowed"
                          //     : ""
                          // }`}
                          title="Remove from wishlist"
                        >
                          <TiDelete className="w-[28px] h-[28px]" />
                        </button>
                      </div>

                      {/* Product Info */}
                      <div className="col-span-4 flex items-center gap-4">
                        <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                          {item.imgSrc ? (
                            <img
                              src={item.imgSrc}
                              alt={item.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "/placeholder-image.png"; // Add fallback image
                              }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                              No Image
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            ID: {item.weaponId}
                          </p>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="col-span-2">
                        <span className="text-lg font-semibold text-gray-900">
                          ${item.price ? item.price.toFixed(2) : "N/A"}
                        </span>
                      </div>

                      {/* Stock */}
                      <div className="col-span-2">
                        <span
                          className={`px-2 py-1 rounded-full text-sm font-medium ${
                            item.inStock > 0
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {item.inStock > 0
                            ? `${item.inStock} in stock`
                            : "Out of stock"}
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="col-span-3">
                        <button
                          onClick={() => handleAddToCart(item)}
                          disabled={item.inStock === 0}
                          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                            item.inStock > 0
                              ? "bg-[#ff4da9] text-white hover:bg-[#e63d93]"
                              : "bg-gray-200 text-gray-500 cursor-not-allowed"
                          }`}
                        >
                          {item.inStock > 0 ? "Add to Cart" : "Out of Stock"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </section>
  );
};
export default Wishlist;
