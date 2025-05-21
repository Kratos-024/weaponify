import { FaRegSquare } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";

const options = [
  "Default Sorting",
  "Sort by Popularity",
  "Sort by Average Rating",
  "Sort by Latest",
  "Price: Low to High",
  "Price: High to Low",
];

export default function CheckboxDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    //@ts-ignore
    function handleClickOutside(event) {
      //@ts-ignore

      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  //@ts-ignore

  function toggleOption(option) {
    //@ts-ignore

    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option));
    } else {
      //@ts-ignore

      setSelected([...selected, option]);
    }
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="w-56 bg-gray-200 rounded px-4 py-2 text-left"
      >
        {selected.length > 0 ? selected.join(", ") : "Select Sorting Options"}
      </button>

      {open && (
        <div className="absolute mt-1 w-56 bg-white border rounded shadow-lg z-20 max-h-60 overflow-auto">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              <input
                type="checkbox"
                //@ts-ignore

                checked={selected.includes(option)}
                onChange={() => toggleOption(option)}
                className="mr-3"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

const ShowingHeader2 = () => {
  return (
    <div className="bg-[#E5E7EB] rounded-lg px-2 py-2">
      <div>
        {" "}
        <div>
          <FaRegSquare />
        </div>{" "}
        <div>
          <FaRegSquare />
        </div>{" "}
        <div>
          <FaRegSquare />
        </div>
      </div>
      <h3>Showin all 7 results</h3>
      <div>
        <CheckboxDropdown />
      </div>
    </div>
  );
};
export const ShowingHeader = () => {
  return (
    <section>
      <div>
        <ShowingHeader2 />
      </div>
    </section>
  );
};
