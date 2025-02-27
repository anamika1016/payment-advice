import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import { useData } from "../context/data";

const AboutUs = () => {
  const {city} = useData();
  return (
    <Layout NoEmail={true}>
      <div className="px-[5vw] md:px-[10vw] lg:px-[15vw] xl:px-[20vw] 2xl:px-[25vw] py-[70px]">
        <div className="flex justify-center items-center rounded-xl shadow-md bg-secondary h-[200px] text-white">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-4xl font-semibold">About Us</div>
            <div className="text-sm">Home &gt; about Us</div>
          </div>
        </div>
        <br />
        <br />
        <div className="mt-4 text-lg text-gray">
          <p>
            At Rental Masters, we aim to redefine the car rental experience for
            self-drive enthusiasts across India. As a proud subsidiary of a
            globally recognized car rental leader, we bring a combination of
            world-class service and unmatched convenience, providing you the
            freedom to explore with ease. With a fleet of meticulously
            maintained cars and a seamless rental process, Rental Masters is
            your perfect companion on every road trip, whether it's a weekend
            getaway, a business trip, or simply a change from your everyday
            vehicle.
            <br />
            <br /> Rental Masters is now present in 20+ major cities across
            India, including Bangalore, Mumbai, Delhi-NCR, Pune, Hyderabad,
            Chennai, Jaipur, Ahmedabad, and more. Our <Link to={`/${city}/car-rentals`} className="text-blue-700 font-bold">self-drive rental </Link> options
            cater to a wide range of preferences—from compact hatchbacks and
            sleek sedans to spacious SUVs, MUVs, and luxury cars—ensuring
            there's something for everyone.
            <br />
            <br /> Our journey began in 2018, born out of a desire to cater to
            modern travelers who value privacy, flexibility, and freedom.
            Responding to customer demand, we launched Rental Masters to offer a
            premium self-drive car rental service that blends affordability with
            top-tier quality. With us, the car is yours to enjoy as you please,
            whether you're hitting the highway or exploring a new city.
            <br />
            <br /> We understand that the best journeys are those where you're
            in complete control, which is why all our rentals come with
            unlimited kilometers. No limits, no extra charges—just the open
            road. With transparent pricing, no hidden costs, and the lowest
            fares guaranteed, we make sure that your experience with Rental
            Masters is smooth and stress-free.
            <br />
            <br />
          </p>

          <div className="text-semibold text-xl">What sets Rental Masters apart?</div>
          <ul className="list-disc pl-5 mt-2">
            <li className="mt-2">
              Flexible rental plans: Choose from daily, weekly, or monthly
              rentals.
            </li>
            <li className="mt-2">
              Unlimited kilometers: Enjoy every drive without worrying about
              limits or logs.
            </li>
            <li className="mt-2">
              Newest fleet: Drive the latest models across all car categories.
            </li>
            <li className="mt-2">
              No hidden charges: All-inclusive fares covering insurance, taxes,
              and pollution fees.
            </li>
            <li className="mt-2">
              Hassle-free bookings: Doorstep and airport delivery for maximum
              convenience.
            </li>
            <li className="mt-2">
              Complete peace of mind: In case of an accident, your liability is
              limited to your refundable security deposit.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
