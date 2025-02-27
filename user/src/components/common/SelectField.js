import React, { useEffect, useRef, useState } from "react";
import { MdOutlineAccessTime } from "react-icons/md";

const SelectField = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    props.selectedValue || null
  );
  const selectRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (isOpen) {
        const selectRect = selectRef.current?.getBoundingClientRect();
        if (dropdownRef.current && selectRect) {
          dropdownRef.current.style.top = `${selectRect.bottom}px`;
          dropdownRef.current.style.left = `${selectRect.left}px`;
          dropdownRef.current.style.width = `${selectRect.width}px`;
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, true);
    window.addEventListener("resize", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && selectRef.current && dropdownRef.current) {
      const selectRect = selectRef.current.getBoundingClientRect();
      dropdownRef.current.style.position = "fixed";
      dropdownRef.current.style.top = `${selectRect.bottom}px`;
      dropdownRef.current.style.left = `${selectRect.left}px`;
      dropdownRef.current.style.width = `${selectRect.width}px`;
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (item) => () => {
    setSelectedOption(item.label);
    setIsOpen(false);
    props.onChange(item.value);
  };

  return (
    <>
      <div className="relative w-full" ref={selectRef}>
        <div
          className="relative inline-flex w-full bg-white rounded-lg border border-[#CCCCCC] focus-within:border-2 focus-within:border-[#5BC9FE] h-[40px]"
          style={{
            border: "1px solid #e5e7eb",
          }}
        >
          <div
            className="w-4/5 px-4 py-2 cursor-pointer flex items-center"
            onClick={handleToggle}
            style={{ color: selectedOption ? "#000000" : "#A0AEC0" }}
          >
            {selectedOption || "Time"}
          </div>
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 flex justify-center items-center cursor-pointer"
            onClick={handleToggle}
          >
            <MdOutlineAccessTime style={{ color: "gray" }} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="fixed z-[9999] mt-1 w-full origin-top-right rounded-md bg-[#2D3748] max-h-[240.3px] overflow-y-auto custom-scrollbar shadow-lg"
          style={{
            boxShadow: "0 6px 18px 1px rgba(0,0,0,0.12)",
          }}
        >
          {props.items.map((item) => (
            <button
              type="button"
              onClick={onOptionClicked(item)}
              key={item.value}
              className="block w-full text-left px-4 py-2 text-sm text-[#E2E8F0] hover:bg-[#63B3ED] hover:text-black focus:outline-none"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default SelectField;
