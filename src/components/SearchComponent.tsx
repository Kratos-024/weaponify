import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";

const fakeWeapons = [
  { id: 1, name: "AK-47", category: "Assault Rifle", price: "$2700" },
  { id: 2, name: "M4A4", category: "Assault Rifle", price: "$3100" },
  { id: 3, name: "AWP", category: "Sniper Rifle", price: "$4750" },
  { id: 4, name: "Glock-18", category: "Pistol", price: "$200" },
  { id: 5, name: "Desert Eagle", category: "Pistol", price: "$700" },
  { id: 6, name: "MP9", category: "SMG", price: "$1250" },
  { id: 7, name: "P90", category: "SMG", price: "$2350" },
  { id: 8, name: "Nova", category: "Shotgun", price: "$1200" },
  { id: 9, name: "M249", category: "Machine Gun", price: "$5200" },
  { id: 10, name: "USP-S", category: "Pistol", price: "$200" },
];

export const SearchOverlay = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: any;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<
    { id: number; name: string; category: string; price: string }[]
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
    if (searchQuery.trim()) {
      const filtered = fakeWeapons.filter(
        (weapon: {
          id: number;
          name: string;
          category: string;
          price: string;
        }) =>
          weapon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          weapon.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSearchSubmit = (query: string) => {
    console.log("Searching for:", query);
  };

  const handleResultClick = (weapon: {
    id: number;
    name: string;
    category: string;
    price: string;
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
                      name: string;
                      category: string;
                      price: string;
                    }) => (
                      <div
                        key={weapon.id}
                        onClick={() => handleResultClick(weapon)}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors border border-gray-100"
                      >
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">
                            {weapon.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {weapon.category}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">
                            {weapon.price}
                          </p>
                        </div>
                      </div>
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
