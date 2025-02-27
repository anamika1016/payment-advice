import React, { useEffect, useState } from "react";
import { IoHome, IoSettings } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import { NavItem } from "./NavItem";
import Logo from "../../components/common/Logo";
import { FaList, FaTable, FaUsers, FaGlobe } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { MdAdminPanelSettings } from "react-icons/md";

const SideNav = ({ onClose }) => {
  const [isSelected, setIsSelected] = useState("Dashboard");
  const location = useLocation();
  const navigate = useNavigate();

  // Logout function
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        method: "DELETE",
        credentials: "include", // Include session cookies
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        navigate("/login"); // Redirect to login page
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: IoHome },
    { name: "Invoice Data", path: "/admin/bookings", icon: FaList },
    { name: "History", path: "/admin/booking-history", icon: FaTable },
    { type: "text", name: "Manage Services" },
    { name: "Payment", path: "/admin/all-cars", icon: IoCarSportSharp },
    { type: "text", name: "Manage Payment Advice" },
    { name: "Payment Advice", path: "/admin/payment-advice", icon: IoCarSportSharp },
    { name: "Verify Users", path: "/admin/verify-users", icon: FaUsers },
    { name: "Offers", path: "/admin/offers", icon: BiSolidOffer },
    { type: "text", name: "Site Management" },
    { name: "Admin Management", path: "/admin/admin-management", icon: MdAdminPanelSettings },
    { name: "Social Media", path: "/admin/social-media", icon: FaGlobe },
    { name: "Settings", path: "/admin/settings", icon: IoSettings },
    { name: "Logout", icon: HiOutlineLogout, action: handleLogout }, // Call handleLogout on click
  ];

  useEffect(() => {
    const selectedItem = menuItems.find((item) => location.pathname.includes(item.path));
    if (selectedItem) {
      setIsSelected(selectedItem.name);
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col w-[250px] h-full rounded-[1rem]">
      <div className="h-[4.875rem] px-[10px] py-[32px] flex items-center justify-center">
        <Logo to="/" showName={true} />
      </div>

      <hr className="mx-[24px] mt-0 mb-5" />

      <div className="ml-[16px]">
        <nav className="flex flex-col w-full max-h-[calc(100vh-10rem)] overflow-y-auto custom-scrollbar pr-[16px]">
          {menuItems.map((item) =>
            item.type === "text" ? (
              <h6
                key={item.name}
                className="mt-3 mb-1 font-bold text-xs uppercase pl-[1.5rem] ml-[0.5rem]"
                style={{
                  lineHeight: "1.25",
                  opacity: 0.6,
                }}
              >
                {item.name}
              </h6>
            ) : (
              <NavItem
                key={item.name}
                name={item.name}
                SelectedIcon={item.icon}
                isSelected={isSelected}
                path={item.path}
                onClick={item.action ? item.action : onClose} // Use action for logout
              />
            )
          )}
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
