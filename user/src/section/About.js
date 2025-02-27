import React from "react";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col gap-[32px] md:flex-row w-full mx-auto px-[5%] md:mx-0 mb-10 py-[5rem]"
    >
      <div className="md:w-[50%]">
        <img src={aboutImg} alt="about us" className="w-full h-full object-contain" />
      </div>

      <div className="flex flex-col gap-[14px] sm:gap-[20px] md:gap-[48px] md:w-[50%]">
        <h2>
          <span className="text-[#222222]">About </span>
          <span className="text-[#1961FD]">Us</span>
          <span className="text-[#222222]">.</span>
        </h2>

        <div className="py-4">
          <h6 className="max-w-[700px] text-primary text-sm">
            At Rental Master, we offer a convenient and reliable car rental
            service tailored to meet your travel needs. Whether you're planning
            a weekend getaway, a business trip, or just need a vehicle for
            everyday errands, our fleet of well-maintained cars is ready to take
            you wherever you need to go.
            <br />
            <br />
            With a wide range of vehicles from compact cars to luxury sedans and
            SUVs, we ensure that you find the perfect ride for your journey. Our
            rental process is quick, simple, and hassle-free, offering flexible
            booking options and affordable pricing.
            <br />
            <br />
            At Rental Master, we prioritize customer satisfaction by providing
            24/7 customer support and ensuring that each rental vehicle is
            clean, safe, and in excellent condition. Let us be your trusted
            travel companion, helping you reach your destination comfortably and
            stress-free.
          </h6>
        </div>
      </div>
    </section>
  );
};

export default About;