import React from "react";

const TabButton = ({ isActive, onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className={`focus:outline-none  ${
        isActive
          ? "border-b-4 bg-primary text-white shadow-[0 2px 80px 2px rgba(0,0,0,.06)]"
          : "text-primary bg-white"
      }`}
      style={{
        border: "1px solid #bababa",
        borderRadius: "45px",
        fontSize: "14px",
        lineHeight: "130%",
        letterSpacing: "0.16em",
        padding: "10px 30px",
        isolation: "isolate",
      }}
    >
      {label}
    </button>
  );
};

export default TabButton;
