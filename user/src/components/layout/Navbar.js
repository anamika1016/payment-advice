import React, { useEffect, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import Logo from "../common/Logo";
import { Drawer, ThemeProvider, createTheme } from "@mui/material";
import DrawerList from "./DrawerList";
import PrimaryButton from "../common/PrimaryButton";
import { useData } from "../../context/data";

const theme = createTheme();

const Navbar = () => {
  const { isModalOpen, city } = useData();
  const [isOpen, setIsOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("");

  const navLinks = [
    { label: "About Us", to: `about-us` },
    { label: "Contact Us", to: `contact-us` },
  ];

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveNavItem(currentPath.substring(1));
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <ThemeProvider theme={theme}>
      <nav
        className={`bg-white p-4 w-full z-50 shadow-lg fixed top-0 pr-[15px]
          ${isModalOpen ? "lg:pr-[15px]" : "lg:pr-0"}
          `}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Logo city={city} />

          <ul className="hidden lg:flex justify-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                className={`cursor-pointer hover:bg-[#F8F9FA] hover:rounded-sm px-3 py-1 flex items-center`}
                href={link.to}
              >
                <span
                  style={{
                    lineHeight: "1.5",
                    fontWeight: "500",
                    fontSize: "1em",
                    color:
                      activeNavItem === link.to
                        ? "var(--color-primary)"
                        : "#5F6368",
                  }}
                >
                  {link.label}
                </span>
              </a>
            ))}
          </ul>

          <div className="flex flex-row gap-5">
            <PrimaryButton name="Admin" to="/admin/dashboard" />

            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-900 focus:outline-none h-8 w-8 hover:bg-gray-100 rounded-md flex items-center justify-center"
              >
                <IoMenuOutline className="h-[24px] w-[24px]" />
              </button>
            </div>
          </div>

          <div className="hidden lg:flex mr-5">
            <PrimaryButton name="Login" to="/login" />
          </div>
        </div>
        <Drawer
          anchor="right"
          open={isOpen}
          onClose={toggleDrawer(false)}
          className="lg:hidden"
        >
          <DrawerList navLinks={navLinks} city={city} />
        </Drawer>
      </nav>
    </ThemeProvider>
  );
};

export default Navbar;
