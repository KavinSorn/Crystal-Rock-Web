'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const MessPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const menuImages = [
    { src: '/1.jpg', alt: 'Menu Page 1' },
    { src: '/2.jpg', alt: 'Menu Page 2' },
    { src: '/3.jpg', alt: 'Menu Page 3' },
    { src: '/4.jpg', alt: 'Menu Page 4' },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % menuImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, menuImages.length]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % menuImages.length);
    setIsAutoPlaying(false);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + menuImages.length) % menuImages.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex justify-center mb-6">
            <Image
              src="/cr_logo_fire_upscaled-removebg-preview.png"
              alt="CR Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Menu
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto px-4">
            Discover our delicious offerings with fresh ingredients and authentic flavors
          </p>
        </motion.div>

        {/* Interactive Menu Book */}
        <div className="flex justify-center">
          {/* Book Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="perspective-1000">
              <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:w-[600px] lg:h-[800px] mx-auto max-w-[95vw] max-h-[60vh] sm:max-h-[70vh]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{ rotateY: -90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: 90, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-white rounded-lg shadow-2xl overflow-hidden"
                    style={{
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <Image
                      src={menuImages[currentPage].src}
                      alt={menuImages[currentPage].alt}
                      fill
                      className="object-contain rounded-lg"
                      sizes="(max-width: 640px) 95vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 600px"
                    />
                    
                    {/* Page number */}
                    <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 bg-black/70 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-lg">
                      {currentPage + 1} / {menuImages.length}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Simple Dot Navigation */}
            <div className="flex justify-center mt-6 sm:mt-8 gap-2 sm:gap-3">
              {menuImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentPage(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    currentPage === index
                      ? 'bg-orange-500 scale-125'
                      : 'bg-gray-300 hover:bg-orange-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Menu Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 sm:mt-20"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center px-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl sm:text-2xl">🍽️</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Fresh Ingredients</h3>
              <p className="text-sm sm:text-base text-gray-700">All our dishes are prepared with the freshest ingredients sourced locally.</p>
            </div>
            <div className="text-center px-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl sm:text-2xl">👨‍🍳</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Expert Chefs</h3>
              <p className="text-sm sm:text-base text-gray-700">Our experienced chefs bring authentic flavors to every meal.</p>
            </div>
            <div className="text-center px-4 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl sm:text-2xl">⏰</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Timely Service</h3>
              <p className="text-sm sm:text-base text-gray-700">Meals served on time, every time, to keep you satisfied.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MessPage;
