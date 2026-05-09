import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DealCard from "./DealCard";
import { useAppSelector } from "../../../../Redux Toolkit/Store";
import { Deal } from "../../../../types/dealTypes";
import { motion } from "framer-motion";

export default function DealSlider() {
  const { homePage } = useAppSelector((store) => store);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280, // Desktop
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024, // Laptop
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <div className="py-10 px-4 md:px-10 lg:px-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-pink-600 to-red-500 bg-clip-text text-transparent">
          Hot Deals & Offers
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Discover today’s top discounts — shop smarter and save more.
        </p>
      </motion.div>

      {/* SLIDER */}
      <div className="deal-slider-container">
        <Slider {...settings}>
          {homePage.homePageData?.deals?.map((item: Deal, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="px-2"
            >
              <DealCard deal={item} />
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* Optional decorative bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-8 mx-auto w-32 h-1 bg-gradient-to-r from-pink-600 to-red-500 rounded-full"
      />
    </div>
  );
}
