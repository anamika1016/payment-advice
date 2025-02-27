import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import { useData } from "../context/data";

const AboutUs = () => {
  const { city } = useData();
  return (
    <Layout NoEmail={true}>
      <div className="px-[5vw] md:px-[10vw] lg:px-[15vw] xl:px-[20vw] 2xl:px-[25vw] py-[70px]">
        <div className="flex justify-center items-center rounded-xl shadow-md bg-secondary h-[200px] text-white">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-4xl font-semibold">About Us</div>
            <div className="text-sm">Home &gt; About Us</div>
          </div>
        </div>
        <br />
        <br />
        <div className="mt-4 text-lg text-gray">
          <p>
            At Payment Masters, we are dedicated to simplifying and enhancing your payment experience across multiple platforms. With our seamless and secure transaction solutions, we ensure that your financial dealings are swift, transparent, and hassle-free.
            <br />
            <br /> Payment Masters is now serving customers in 20+ major cities across India, including Bangalore, Mumbai, Delhi-NCR, Pune, Hyderabad, Chennai, Jaipur, Ahmedabad, and more. Our <Link to={`/${city}/payment-services`} className="text-blue-700 font-bold">payment solutions</Link> cater to a wide range of needs—from individual users to businesses—ensuring secure and reliable transactions every time.
            <br />
            <br /> Our journey began in 2018, driven by the vision to provide cutting-edge financial solutions that prioritize user convenience and security. Responding to the evolving market needs, we launched Payment Masters to offer a trusted platform for seamless transactions.
            <br />
            <br /> We understand that financial transactions should be easy, efficient, and secure. That's why our platform offers real-time processing, competitive transaction fees, and 24/7 customer support to ensure that your experience is always smooth and stress-free.
            <br />
            <br />
          </p>

          <div className="text-semibold text-xl">Why Choose Payment Masters?</div>
          <ul className="list-disc pl-5 mt-2">
            <li className="mt-2">Flexible payment options: Choose from instant transfers, scheduled payments, and bulk transactions.</li>
            <li className="mt-2">Secure transactions: Industry-leading encryption and fraud protection.</li>
            <li className="mt-2">Competitive fees: Transparent pricing with no hidden costs.</li>
            <li className="mt-2">User-friendly interface: Easy-to-use dashboard for seamless payment management.</li>
            <li className="mt-2">24/7 Support: Dedicated assistance to help you whenever needed.</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
