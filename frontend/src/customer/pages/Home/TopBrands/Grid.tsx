import React, { useRef, useEffect, useState } from "react";
import { useAppSelector } from "../../../../Redux Toolkit/Store";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

const TopBrand = () => {
  const { homePage } = useAppSelector((store) => store);
  const grid = homePage.homePageData?.grid || [];
  const isMobile = useMediaQuery("(max-width:1024px)");
  const scrollRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);

  // Looping animation for mobile
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        setScrollX((prev) => (prev >= maxScroll ? 0 : prev + 1));
        scrollRef.current.scrollLeft = scrollX;
      }
    }, 20); // smooth speed
    return () => clearInterval(interval);
  }, [scrollX, isMobile]);

  // Desktop layout (full width)
  const desktopLayout = (
    <div className="grid grid-cols-12 grid-rows-12 gap-4 lg:h-[700px]">
      {grid[0] && (
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          className="col-span-6 row-span-6 rounded-lg overflow-hidden relative group cursor-pointer shadow-lg"
        >
          <img
            src={grid[0].image}
            alt={grid[0].name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white p-3 text-lg font-semibold">
            {grid[0].name}
          </div>
        </motion.div>
      )}

      {grid[1] && (
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          className="col-span-3 row-span-6 rounded-lg overflow-hidden relative group cursor-pointer shadow-lg"
        >
          <img
            src={grid[1].image}
            alt={grid[1].name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white p-3 text-lg font-semibold">
            {grid[1].name}
          </div>
        </motion.div>
      )}

      {grid[2] && (
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          className="col-span-3 row-span-12 rounded-lg overflow-hidden relative group cursor-pointer shadow-lg"
        >
          <img
            src={grid[2].image}
            alt={grid[2].name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white p-3 text-lg font-semibold">
            {grid[2].name}
          </div>
        </motion.div>
      )}

      {grid[3] && (
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          className="col-span-6 row-span-6 rounded-lg overflow-hidden relative group cursor-pointer shadow-lg"
        >
          <img
            src={grid[3].image}
            alt={grid[3].name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white p-3 text-lg font-semibold">
            {grid[3].name}
          </div>
        </motion.div>
      )}

      {grid[4] && (
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          className="col-span-6 row-span-6 rounded-lg overflow-hidden relative group cursor-pointer shadow-lg"
        >
          <img
            src={grid[4].image}
            alt={grid[4].name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white p-3 text-lg font-semibold">
            {grid[4].name}
          </div>
        </motion.div>
      )}

      {grid[5] && (
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          className="col-span-6 row-span-6 rounded-lg overflow-hidden relative group cursor-pointer shadow-lg"
        >
          <img
            src={grid[5].image}
            alt={grid[5].name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white p-3 text-lg font-semibold">
            {grid[5].name}
          </div>
        </motion.div>
      )}
    </div>
  );

  // Mobile layout with looping carousel
  const mobileLayout = (
    <div className="relative overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-4 w-full overflow-x-auto snap-x snap-mandatory scroll-smooth"
      >
        {grid.concat(grid).map((item, idx) => (
          <motion.div
            key={`${item.categoryId}-${idx}`}
            whileHover={{ scale: 1.08 }}
            className="flex-none w-40 h-48 rounded-lg overflow-hidden relative group cursor-pointer snap-start"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white p-2 text-sm font-medium">
              {item.name}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="px-5 lg:px-20 py-8 bg-gray-50">
      <h2 className="text-2xl lg:text-3xl font-semibold mb-6">Top Brands & Categories</h2>
      {isMobile ? mobileLayout : desktopLayout}
    </div>
  );
};

export default TopBrand;
