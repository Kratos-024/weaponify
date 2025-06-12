import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { getWeaponByName } from "../apis/app";
import { Link } from "react-router-dom";

export const SearchOverlay = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: any;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<
    { id: number; name: string; stars: number; noOfPeopleReviewed: number }[]
  >([]);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      //@ts-ignore
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: any) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || searchQuery.length <= 1) return;

    const fetchWeapon = async () => {
      try {
        const response = await getWeaponByName(searchQuery);
        if (response && response.status && response.data) {
          //@ts-ignore
          setSearchResults(response.data);
        }
      } catch (err) {
        console.error("Error fetching weapon:", err);
      }
    };

    fetchWeapon();
  }, [searchQuery, isOpen]);

  const handleSearchSubmit = (query: string) => {
    console.log("Searching for:", query);
  };

  const handleResultClick = (weapon: {
    id: number;
    stars: number;
    name: string;
    noOfPeopleReviewed: number;
  }) => {
    console.log("Selected weapon:", weapon);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-top-4 duration-300">
        <div className="relative border-b border-gray-200">
          <div className="flex items-center px-6 py-4">
            <Search className="h-5 w-5 text-gray-400 mr-3" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search weapons..."
              className="flex-1 text-lg outline-none placeholder:text-gray-400 text-black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearchSubmit(searchQuery);
                }
              }}
            />
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {searchQuery.trim() && (
            <div className="p-4">
              {searchResults.length > 0 ? (
                <div className="space-y-2">
                  {searchResults.map(
                    (weapon: {
                      id: number;
                      noOfPeopleReviewed: number;
                      name: string;
                      stars: number;
                    }) => (
                      <Link to={`/shop/weapon/${weapon.id}/${weapon.name}`}>
                        <div
                          key={weapon.id}
                          onClick={() => handleResultClick(weapon)}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors border border-gray-100"
                        >
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900">
                              {weapon.name}
                            </h3>
                            <div className="text-sm text-gray-500">
                              <div className="flex items-center">
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

                                <h2 className="ml-2">
                                  {" "}
                                  {weapon.noOfPeopleReviewed}
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-gray-900">$240</p>
                          </div>
                        </div>
                      </Link>
                    )
                  )}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <p>No weapons found for "{searchQuery}"</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
