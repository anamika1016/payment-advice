import React from "react";
import { MdMail, MdPhone, MdChevronRight } from "react-icons/md";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";
import mailImage from "../../assets/mailImage.png";

const Footer = ({ NoEmail }) => {
  return (
    <footer className={`bg-secondary ${NoEmail ? "pt-[5vh]" : "pt-[28vh] md:pt-[20vh]"} pb-8 relative `}>
      <div className="w-[80vw] mx-auto px-4 relative">
        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white tracking-tight">
                PAYMENT ADVICE
                <span className="text-blue-500">.</span>
              </h2>
              <p className="text-white max-w-xs">
                Innovating the future through cutting-edge technology solutions
                and digital transformation.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:info@rentalmaster.com"
                className="flex items-center gap-3 group hover:text-blue-400 transition-colors text-white"
              >
                <MdMail className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                <span>info@rentalmaster.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 group hover:text-blue-400 transition-colors text-white"
              >
                <MdPhone className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                <span>+1 (234) 567-890</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                Quick Links
                <MdChevronRight className="w-4 h-4 text-blue-500 hidden md:inline" />
              </h3>
              <ul className="space-y-3">
                {["Home", "Services", "Products", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group text-white flex items-center hover:text-blue-400 transition-colors"
                    >
                      <span className="relative">
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-full" />
                      </span>
                      <FaArrowUpRightFromSquare className="w-4 h-4 ml-1 opacity-0 -translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                Company
                <MdChevronRight className="w-4 h-4 text-blue-500 hidden md:inline" />
              </h3>
              <ul className="space-y-3">
                {["About Us", "Blog", "Careers", "Team"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group flex items-center text-white hover:text-blue-400 transition-colors"
                    >
                      <span className="relative">
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-full" />
                      </span>
                      <FaArrowUpRightFromSquare className="w-4 h-4 ml-1 opacity-0 -translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGlobe].map(
                  (Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center group hover:border-blue-500 transition-all duration-300"
                    >
                      <Icon className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors" />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-sm text-white">
              © {new Date().getFullYear()} PAYMENT ADVICE. All rights reserved.
            </p>
            <div className="flex gap-6 md:justify-end text-sm text-white">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {!NoEmail && (
        <div className="absolute -top-[20vh] md:-top-[30vh] lg:-top-[40vh] left-[5vw] md:left-[10vw] w-[90vw] md:w-[80vw] h-[40vh] lg:h-[50vh]  bg-grayLight z-10 rounded-3xl flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 lg:w-1/2 h-1/2 md:h-full flex items-center justify-center">
            <img
              src={mailImage}
              alt="Subscribe illustration"
              className="max-w-full max-h-full object-contain p-4 md:p-0"
            />
          </div>

          <div className="w-full md:w-2/3 lg-1/2 h-2/3 md:h-full flex flex-col items-center md:items-start justify-center space-y-6 px-4 md:px-8">
            <div className="text-center text-primary md:text-left">
              <div className="text-lg md:text-xl font-semibold ">
                Would you like to receive
              </div>
              <div className="mt-2 text-2xl md:text-3xl lg:text-4xl font-bold">
                special offers by email?
              </div>
            </div>

            <div className="relative w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 pr-24 md:pr-32 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
              />
              <button className="absolute right-1 top-1 px-4 md:px-6 py-2 bg-primary text-white rounded-full hover:bg-blue-700 transition-colors text-sm md:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
