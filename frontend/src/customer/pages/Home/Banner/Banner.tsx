import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const offers = [
  "https://www.libas.in/cdn/shop/files/eoss-desktop.jpg?v=1719849154&width=1920",
  "https://www.libas.in/cdn/shop/files/eoss-desktop.jpg?v=1719849154&width=1920",
  "https://www.libas.in/cdn/shop/files/eoss-desktop.jpg?v=1719849154&width=1920",
  "https://www.libas.in/cdn/shop/files/eoss-desktop.jpg?v=1719849154&width=1920",
];

const TopOffers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % offers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants for sliding horizontally
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full overflow-hidden mt-4">
      {/* Desktop Carousel */}
      <div className="hidden md:block relative w-full h-64 lg:h-80 overflow-hidden rounded-lg">
        <AnimatePresence initial={false} custom={1}>
          <motion.img
            key={currentIndex}
            src={offers[currentIndex]}
            alt={`Offer ${currentIndex + 1}`}
            custom={1}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Bottom Dots */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
          {offers.map((_, index) => (
            <motion.div
              key={index}
              className="h-1 rounded-full bg-gray-400"
              animate={{
                width: currentIndex === index ? 20 : 6,
                backgroundColor: currentIndex === index ? "#F87171" : "#D1D5DB",
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden relative w-full h-48 sm:h-56 overflow-hidden rounded-lg">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={offers[currentIndex]}
            alt={`Offer ${currentIndex + 1}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Bottom Dots */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
          {offers.map((_, index) => (
            <motion.div
              key={index}
              className="h-1 rounded-full bg-gray-400"
              animate={{
                width: currentIndex === index ? 16 : 6,
                backgroundColor: currentIndex === index ? "#F87171" : "#D1D5DB",
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopOffers;
