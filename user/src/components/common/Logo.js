import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../context/data";
import icon from "../../assets/icons.png";

const Logo = ({ to, showName, city }) => {
  const { companyName } = useData();
  return (
    <Link
      to={to ? "/admin/dashboard" : `/`}
      className="flex flex-row space-x-2 items-center justify-center"
    >
      <img
        src={icon}
        alt="logo"
        className="h-16 w-24"
      />
      <div
        className={`${
          showName ? "" : "hidden sm:block"
        } text-xl font-normal text-gray-900`}
      >
        {companyName}
      </div>
    </Link>
  );
};

export default Logo;