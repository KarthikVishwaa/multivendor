import React from "react";
import { Deal } from "../../../../types/dealTypes";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const DealCard = ({ deal }: { deal: Deal }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative w-full cursor-pointer overflow-hidden rounded-xl shadow-xl lg:rounded-none lg:shadow-none"
      onClick={() => navigate(`/products/${deal.category.categoryId}`)}
    >
      {/* IMAGE */}
      <div className="relative w-full">
        <img
          src={deal.category.image}
          alt={deal.category.categoryId}
          className="w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover object-center"
        />

        {/* Discount badge */}
        <div className="absolute top-3 left-3 bg-red-600 text-white font-bold px-3 py-1 rounded-full shadow-lg text-xs sm:text-sm">
          {deal.discount}% OFF
        </div>
      </div>

      {/* TEXT OVERLAY */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 flex flex-col items-start">
        <p className="text-gray-300 uppercase tracking-wide text-xs sm:text-sm mb-1">
          {deal.category.categoryId.split("_").join(" ")}
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-red-500 mb-2">
          {deal.discount}% OFF
        </h2>
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/products/${deal.category.categoryId}`);
          }}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1.5 px-5 sm:py-2 sm:px-6 rounded-full shadow-lg transition-all duration-300"
        >
          Shop Now
        </button>
      </div>
    </motion.div>
  );
};

export default DealCard;
