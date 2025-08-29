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
    <div className="relative h-[600px] w-full">
      {/* Main Display */}
      <div className="relative h-[450px] w-full rounded-2xl overflow-hidden bg-gray-900">
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
          className="absolute bottom-0 left-0 right-0 p-6 text-white"
        >
          <h3 className="text-2xl font-bold mb-2">Facility View {currentImage + 1}</h3>
          <p className="text-white/80">Explore our premium accommodations and amenities</p>
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={() => {
            setCurrentImage((prev) => (prev - 1 + hostelImages.length) % hostelImages.length)
            setIsAutoPlaying(false)
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => {
            setCurrentImage((prev) => (prev + 1) % hostelImages.length)
            setIsAutoPlaying(false)
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors"
        >
          {isAutoPlaying ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>
      </div>

      {/* Thumbnail Gallery */}
      <div className="mt-4 relative">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {hostelImages.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => handleImageClick(index)}
              className={`relative flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden ${
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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Amenities
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Experience comfort, community & convenience with our world-class facilities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Left side - Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Explore Our Facilities</h3>
            <ImageShowcase />
          </motion.div>

          {/* Right side - Amenities Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h3>
            <div className="grid grid-cols-2 gap-4">
              {amenitiesData.map((amenity, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <motion.div 
                    className="text-4xl mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {amenity.icon}
                  </motion.div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {amenity.title}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {amenity.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Amenities
