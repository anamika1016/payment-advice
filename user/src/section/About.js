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
            At Payment Masters, we offer a seamless and secure payment processing service tailored to meet your financial needs. Whether you're managing business transactions, making online purchases, or handling bulk payments, our platform ensures reliability and efficiency.
            <br />
            <br />
            With a wide range of payment solutions, from instant transfers to scheduled payments, we provide flexibility and convenience. Our platform is designed for businesses and individuals alike, ensuring smooth and transparent financial transactions.
            <br />
            <br />
            At Payment Masters, customer satisfaction is our priority. We offer 24/7 customer support, industry-leading security, and a user-friendly interface to make payments easier than ever. Let us be your trusted partner in handling your financial transactions efficiently and securely.
          </h6>
        </div>
      </div>
    </section>
  );
};

export default About;