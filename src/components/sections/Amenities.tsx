'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { amenitiesData } from '@/lib/data'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'

const hostelImages = Array.from({ length: 15 }, (_, i) => `/hostel_pic ${i + 1}.jpeg`)

const ImageShowcase = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const controls = useAnimation()

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % hostelImages.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying])

  const handleImageClick = (index: number) => {
    setCurrentImage(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
      {/* Main Display */}
      <div className="relative h-[240px] sm:h-[320px] md:h-[400px] lg:h-[450px] w-full rounded-2xl overflow-hidden bg-gray-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={hostelImages[currentImage]}
              alt={`Hostel facility ${currentImage + 1}`}
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Image Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 text-white"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">Facility View {currentImage + 1}</h3>
          <p className="text-sm sm:text-base text-white/80">Explore our premium accommodations and amenities</p>
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={() => {
            setCurrentImage((prev) => (prev - 1 + hostelImages.length) % hostelImages.length)
            setIsAutoPlaying(false)
          }}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => {
            setCurrentImage((prev) => (prev + 1) % hostelImages.length)
            setIsAutoPlaying(false)
          }}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 p-1.5 sm:p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors"
        >
          {isAutoPlaying ? (
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>
      </div>

      {/* Thumbnail Gallery */}
      <div className="mt-3 sm:mt-4 relative">
        <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {hostelImages.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => handleImageClick(index)}
              className={`relative flex-shrink-0 w-16 h-12 sm:w-20 sm:h-16 md:w-24 md:h-20 rounded-lg overflow-hidden ${
                currentImage === index ? 'ring-2 ring-primary-500' : ''
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
              {currentImage === index && (
                <motion.div
                  layoutId="activeThumb"
                  className="absolute inset-0 bg-primary-500/20"
                />
              )}
            </motion.button>
          ))}
        </div>
        
        {/* Progress Bar */}
        {isAutoPlaying && (
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-primary-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "linear", repeat: Infinity }}
            key={currentImage}
          />
        )}
      </div>
    </div>
  )
}

const Amenities: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Amenities
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-medium px-4">
            Experience comfort, community & convenience with our world-class facilities
          </p>
        </motion.div>

        {/* Full-width Image Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-7xl mx-auto mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Explore Our Facilities</h3>
            <p className="text-gray-600">Take a visual tour of our premium accommodations</p>
          </div>
          <ImageShowcase />
        </motion.div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gradient-to-b from-gray-50 to-white px-6 text-lg font-semibold text-gray-900">
                What We Offer
              </span>
            </div>
          </div>
        </div>

        {/* Amenities Grid - 4 columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {amenitiesData.map((amenity, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <motion.div 
                  className="text-3xl sm:text-4xl mb-3 sm:mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {amenity.icon}
                </motion.div>
                <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                  {amenity.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {amenity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Amenities
