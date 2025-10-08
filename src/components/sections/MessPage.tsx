'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const MessPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const menuImages = [
    { src: '/1.jpg', alt: 'Menu Page 1' },
    { src: '/2.jpg', alt: 'Menu Page 2' },
    { src: '/3.jpg', alt: 'Menu Page 3' },
    { src: '/4.jpg', alt: 'Menu Page 4' },
  ];

  const mealTimings = [
    {
      icon: '🌅',
      name: 'Breakfast',
      time: '7:00 AM - 9:00 AM',
      description: 'Start your day with a nutritious breakfast',
      items: ['Idli/Dosa', 'Poha/Upma', 'Bread & Eggs', 'Fresh Juice', 'Tea/Coffee'],
      gradient: 'from-orange-400 to-orange-600'
    },
    {
      icon: '☀️',
      name: 'Lunch',
      time: '12:00 PM - 2:00 PM',
      description: 'Wholesome meals to fuel your afternoon',
      items: ['Rice & Roti', 'Dal & Curry', 'Vegetables', 'Salad', 'Curd/Buttermilk'],
      gradient: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: '🌙',
      name: 'Dinner',
      time: '7:00 PM - 9:00 PM',
      description: 'End your day with a satisfying dinner',
      items: ['Rice & Roti', 'Dal & Curry', 'Vegetables', 'Special Dish', 'Sweet/Dessert'],
      gradient: 'from-purple-400 to-purple-600'
    }
  ];

  const mealPlans = [
    {
      name: '3 Meals Plan',
      price: '6,500',
      period: 'per month',
      meals: ['Breakfast', 'Lunch', 'Dinner'],
      features: [
        'All meals included',
        'Unlimited servings',
        'Weekly menu variety',
        'Special weekend meals'
      ],
      popular: true,
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      name: '2 Meals Plan',
      price: '4,500',
      period: 'per month',
      meals: ['Lunch', 'Dinner'],
      features: [
        'Lunch & Dinner',
        'Unlimited servings',
        'Weekly menu variety',
        'Flexible timing'
      ],
      popular: false,
      gradient: 'from-green-500 to-green-700'
    },
    {
      name: 'Custom Plan',
      price: 'Contact',
      period: 'us',
      meals: ['Flexible options'],
      features: [
        'Choose your meals',
        'Special dietary needs',
        'Monthly or daily basis',
        'Customizable menu'
      ],
      popular: false,
      gradient: 'from-orange-500 to-orange-700'
    }
  ];

  const foodQuality = [
    {
      icon: '🥬',
      title: 'Fresh Ingredients',
      description: 'Sourced daily from trusted local vendors for maximum freshness and quality'
    },
    {
      icon: '👨‍🍳',
      title: 'Expert Chefs',
      description: 'Experienced cooks who bring authentic home-style flavors to every dish'
    },
    {
      icon: '✨',
      title: 'Hygiene First',
      description: 'Maintained kitchen with strict hygiene protocols and regular inspections'
    },
    {
      icon: '🌱',
      title: 'Balanced Nutrition',
      description: 'Carefully planned meals with the right balance of proteins, carbs, and vitamins'
    }
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
            CR Mess - Homely Food Daily
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto px-4">
            Delicious, nutritious meals prepared with love. Experience the comfort of home-cooked food.
          </p>
        </motion.div>

        {/* Meal Timings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-900">Daily Meal Schedule</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mealTimings.map((meal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="overflow-hidden border-0 shadow-xl h-full">
                  <div className={`h-32 bg-gradient-to-br ${meal.gradient} flex items-center justify-center`}>
                    <span className="text-6xl">{meal.icon}</span>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{meal.name}</h3>
                    <p className="text-primary-600 font-semibold mb-3 text-lg">{meal.time}</p>
                    <p className="text-gray-600 mb-4 text-sm">{meal.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700">Typically Includes:</p>
                      <ul className="space-y-1">
                        {meal.items.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Menu Images Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-900">Our Weekly Menu</h2>
          <div className="flex justify-center">
            <div className="relative max-w-4xl w-full">
              <div className="perspective-1000">
                <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] mx-auto">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentPage}
                      initial={{ rotateY: -90, opacity: 0 }}
                      animate={{ rotateY: 0, opacity: 1 }}
                      exit={{ rotateY: 90, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-white rounded-2xl shadow-2xl overflow-hidden"
                      style={{
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                      }}
                    >
                      <Image
                        src={menuImages[currentPage].src}
                        alt={menuImages[currentPage].alt}
                        fill
                        className="object-contain rounded-2xl"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                      
                      {/* Page number */}
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm sm:text-lg font-semibold">
                        {currentPage + 1} / {menuImages.length}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-6 gap-3">
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
            </div>
          </div>
        </motion.div>

        {/* Meal Plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-gray-900">Choose Your Meal Plan</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Flexible meal plans designed to suit your lifestyle and budget
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mealPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <Card className={`overflow-hidden border-0 shadow-xl h-full ${plan.popular ? 'ring-2 ring-orange-500' : ''}`}>
                  <div className={`h-24 bg-gradient-to-br ${plan.gradient} flex items-center justify-center`}>
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-gray-900 mb-1">
                        ₹{plan.price}
                      </div>
                      <div className="text-gray-600">{plan.period}</div>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Includes:</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {plan.meals.map((meal, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                            {meal}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <span className="text-green-500 mr-2 mt-0.5">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-lg' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}>
                      Choose Plan
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Food Quality Promise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-gray-900">Our Food Quality Promise</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            We are committed to serving you the best quality food with the highest standards of hygiene
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {foodQuality.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Dietary Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Special Dietary Requirements?</h3>
              <p className="text-gray-700 mb-6">
                We understand that everyone has unique dietary needs. Whether you're vegetarian, need gluten-free options, 
                or have specific allergies, we're here to accommodate you. Contact us to discuss your requirements!
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow">🥗 Vegetarian</span>
                <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow">🍗 Non-Vegetarian</span>
                <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow">🌾 Jain Food</span>
                <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow">🚫 Allergy-Friendly</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default MessPage;
