import { FaRegSquare } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

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
  const [selected, setSelected] = useState<string>();
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggleOption(option: string) {
    if (selected == option) {
      setSelected("");
    } else {
      setSelected(option);
    }
  }

  return (
    <div
      className="relative inline-block mr-[18px] 
      text-left"
      ref={dropdownRef}
    >
      <button
        onClick={() => setOpen(!open)}
        className=" bg-white font-semibold 
        ease-in-out cursor-pointer active:opacity-80 
        flex items-center gap-1 w-fit rounded px-5
         py-2 text-left"
      >
        <span> Default Sorting </span>
        <RiArrowDropDownLine className="w-[28px] h-[28px]" />
      </button>

      {open && (
        <div
          className="absolute mt-1 w-[226px] whitespace-nowrap  bg-white border 
        rounded shadow-lg z-20 max-h-60 overflow-auto"
        >
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center px-4 py-2  cursor-pointer hover:bg-gray-100"
            >
              <input
                type="checkbox"
                checked={selected == option}
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

export const SortingHeader = () => {
  return (
    <section className=" min-md:w-[590px] lg:w-full px-2   ">
      <div
        className="bg-[#E5E7EB] rounded-lg 
  mx-1 px-3 py-2 items-center flex justify-between"
      >
        <div className="flex items-center gap-4">
          <div>
            <FaRegSquare />
          </div>{" "}
          <div>
            <FaRegSquare />
          </div>{" "}
          <div className="max-md:hidden">
            <FaRegSquare />
          </div>
        </div>
        <h3 className="max-md:hidden">Showin all 7 results</h3>
        <CheckboxDropdown />
      </div>
    </section>
  );
};
