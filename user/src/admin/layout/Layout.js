import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../routes";
import SideNav from "./SideNav";
import DrawerIcon from "../assets/Drawer.png";
import { Drawer, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme();

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="flex flex-row gap-7 h-screen w-screen pt-[1rem] sm:p-[1rem] bg-adminBackground">
        {/* Drawer Icon */}
        <div className="absolute left-[27px] sm:hidden">
          <button
            onClick={toggleDrawer(true)}
            className="focus:outline-none h-6 w-6 hover:bg-slate-100 rounded-md flex items-center justify-center"
          >
            <img src={DrawerIcon} alt="Drawer icon" />
          </button>
        </div>

        {/* Left layout */}
        <div className="h-[100%] hidden sm:block">
          <SideNav />
        </div>

        {/* Main content */}
        <div className="flex flex-col flex-grow pt-[2rem] sm:pt-0 h-[100%] w-full">
          <Routes>
            {routes.map(
              ({ layout, pages }) =>
                layout === "dashboard" &&
                pages.map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
                ))
            )}
          </Routes>
        </div>
      </div>

      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
        className="sm:hidden bg-adminBackground"
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "var(--color-adminBackground)",
          },
        }}
      >
        <SideNav onClose={toggleDrawer(false)} />
      </Drawer>
    </ThemeProvider>
  );
};

export default Layout;
