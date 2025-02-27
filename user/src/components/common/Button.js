import React from "react";

const Button = (props) => {
  return (
    <button
      className="border-2 border-primary rounded-[45px] bg-primary text-white hover:bg-white hover:text-primary text-[14px] flex justify-center items-center"
      onClick={props.onClick}
      style={{
        padding: "7px 20px",
        transition: "all 0.35s",
      }}
    >
      {props.name}
    </button>
  );
};

export default Button;
