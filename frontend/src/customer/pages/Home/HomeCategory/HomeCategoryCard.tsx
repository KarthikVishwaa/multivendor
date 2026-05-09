import React from "react";
import { useNavigate } from "react-router-dom";

const HomeCategoryCard = ({ item }: any) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/products/${item.categoryId}`)}
      className="flex flex-col items-center justify-center cursor-pointer group transition-transform duration-300 hover:scale-110 min-w-[70px] lg:min-w-[90px]"
    >
      <div className="w-[60px] lg:w-[80px] h-[60px] lg:h-[80px] rounded-full bg-gray-100 shadow-md overflow-hidden flex items-center justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover object-top rounded-full"
        />
      </div>
      <h1 className="mt-2 text-xs lg:text-sm font-medium text-center truncate w-[60px] lg:w-[80px]">
        {item.name}
      </h1>
    </div>
  );
};

// Container for row of categories
export const HomeCategoryRow = ({ categories }: any) => {
  return (
    <div className="flex gap-4 overflow-x-auto px-4 py-2 scrollbar-hide">
      {categories.map((item: any) => (
        <HomeCategoryCard key={item.categoryId} item={item} />
      ))}
    </div>
  );
};

export default HomeCategoryCard;
