import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const PrimaryButton = (props) => {
  return (
    <Link
      to={props.to}
      className="border-2 border-primary rounded-[45px] bg-primary text-white hover:bg-white hover:text-primary text-[14px] flex justify-center items-center"
      style={{
        padding: "7px 20px",
        transition: "all 0.35s",
      }}
    >
      {props.name}
      {props.trailingIcon && (
        <span className="ml-2">
          <FaArrowRightLong />
        </span>
      )}
    </Link>
  );
};

export default PrimaryButton;
