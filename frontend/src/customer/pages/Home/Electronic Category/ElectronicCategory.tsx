import React from "react";
import ElectronicCategoryCard from "./ElectronicCategoryCard";
import { useMediaQuery } from "@mui/material";
import { useAppSelector } from "../../../../Redux Toolkit/Store";

const electronics = [
  {
    section: "ELECTRIC_CATEGORIES",
    name: "Laptop",
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/x/9/j/-original-imahyjzh7m2zsqdg.jpeg?q=70",
    categoryId: "laptops",
  },
  {
    section: "ELECTRIC_CATEGORIES",
    name: "Mobile",
    image:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/t/j/edge-50-fusion-pb300002in-motorola-original-imahywzrfagkuyxx.jpeg?q=70&crop=false",
    categoryId: "mobiles",
  },
  {
    section: "ELECTRIC_CATEGORIES",
    name: "Smartwatch",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/f/g/g/-original-imagywnz46fngcks.jpeg?q=70",
    categoryId: "smart_watches",
  },
  {
    section: "ELECTRIC_CATEGORIES",
    name: "Headphones",
    image:
      "https://rukminim2.flixcart.com/image/612/612/kz4gh3k0/headphone/c/v/r/-original-imagb7bmhdgghzxq.jpeg?q=70",
    categoryId: "headphones_headsets",
  },
  {
    section: "ELECTRIC_CATEGORIES",
    name: "Speaker",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/6/z/2/-original-imahfgfkr5gkk9aq.jpeg?q=70",
    categoryId: "speakers",
  },
  {
    section: "ELECTRIC_CATEGORIES",
    name: "Tv",
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/television/9/p/9/-original-imah2v29z86u7b79.jpeg?q=70",
    categoryId: "television",
  },
  {
    section: "ELECTRIC_CATEGORIES",
    name: "Camera",
    image:
      "https://rukminim2.flixcart.com/image/312/312/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=70",
    categoryId: "cameras",
  },
];

const ElectronicCategory = () => {
  const { homePage } = useAppSelector((store) => store);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <div className="py-8 lg:px-20 border-b bg-gray-50">
      <h2 className="text-2xl font-semibold mb-5">Electronics</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {homePage.homePageData?.electricCategories
          .slice(0, isSmallScreen ? 5 : electronics.length)
          .map((item) => (
            <div
              key={item.categoryId}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer flex flex-col items-center text-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-28 w-28 object-contain mb-3"
              />
              <p className="text-sm font-medium text-gray-700">{item.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ElectronicCategory;
