import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginSignUp from "./pages/signup/LoginSignUp";
import TermsAndConditions from "./pages/TermsAndCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Layout from "./admin/layout/Layout";
import CityPage from "./pages/CityPage";

const App = () => {
  const user = { role: "admin" };

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<CityPage />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Admin Routes */}
        {user.role === "admin" && (
          <Route path="/admin/*" element={<Layout />} />
        )}
      </Routes>
    </>
  );
};

export default App;
