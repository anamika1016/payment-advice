import React, { useState } from "react";
import Slider from "react-slick";
import PrimaryButton from "../components/common/PrimaryButton";
import { bannerImages } from "../data";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
    adaptiveHeight: false,
  };

   return (
    <div className="relative mb-6 overflow-hidden">
      {Array.isArray(bannerImages) && bannerImages.length > 0 ? (
        <Slider {...settings}>
          {bannerImages?.map((img) => (
            <img
              key={img}
              src={img}
              alt="Banner Images"
              height={724}
              width={1400}
              className="object-cover h-[80vh] md:h-[762px]"
            />
          ))}
        </Slider>
      ) : (
        <div className="h-[80vh] md:h-[762px] bg-slate-400" />
      )}

      <div
        className="absolute top-[8rem] md:top-[10rem] md:left-[5%] lg:left-[10%] flex flex-col text-center items-center
                  md:items-start md:text-left w-full md:w-auto h-[55vh] md:h-auto"
      >
        <div className="flex-grow">
          <h1
            className="text-center md:text-left"
            style={{
              color: "#FFFFFF",
              textTransform: "uppercase",
            }}
          >
            PAYMENT ADVICE
          </h1>
          <h6
            className="teritiary-text"
            style={{
              color: "#F3BF47",
            }}
          >
            Innovating the future through cutting-edge technology solutions
            and digital transformation.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Banner;
