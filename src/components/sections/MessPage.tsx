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
    <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
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
              <div className="relative w-[600px] h-[800px] mx-auto max-w-[90vw] max-h-[70vh]">
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
                      sizes="(max-width: 768px) 90vw, 600px"
                    />
                    
                    {/* Page number */}
                    <div className="absolute bottom-6 right-6 bg-black/70 text-white px-4 py-2 rounded-full text-lg">
                      {currentPage + 1} / {menuImages.length}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Simple Dot Navigation */}
            <div className="flex justify-center mt-8 gap-3">
              {menuImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentPage(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
          className="mt-20"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍽️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fresh Ingredients</h3>
              <p className="text-gray-700">All our dishes are prepared with the freshest ingredients sourced locally.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Chefs</h3>
              <p className="text-gray-700">Our experienced chefs bring authentic flavors to every meal.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Timely Service</h3>
              <p className="text-gray-700">Meals served on time, every time, to keep you satisfied.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MessPage;
