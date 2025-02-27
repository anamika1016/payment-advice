import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchField = ({ placeholder, className, onChange, value }) => {
  return (
    <div
      className={`flex items-center ${className} h-[50px]`}
      style={{ borderRadius: "6px", backgroundColor: "white" }}
    >
      <div className="h-[16px] ms-5">
        <FaSearch width="16px" height="16px"/>
      </div>

      <div className="d-flex align-items-center mx-4" style={{ width: "100%" }}>
        <input
          placeholder={placeholder}
          className="bg-white outline-none w-full font-sans text-[0.95rem]"
          variant="unstyled"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default SearchField;
