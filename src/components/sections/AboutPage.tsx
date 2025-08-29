import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const AboutPage: React.FC = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Image
            src="/steel-logo.png"
            alt="Crystal Rock Steel Logo"
            width={150}
            height={150}
            className="mx-auto mb-8 hover:scale-105 transition-transform"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            About Crystal Rock
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Redefining premium accommodation with a perfect blend of comfort, community, and convenience
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 text-white shadow-xl"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-white/90 leading-relaxed text-sm sm:text-base">
              To provide exceptional living spaces that foster growth, productivity, and meaningful connections 
              for ambitious professionals and students in Bengaluru.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl p-8 text-white shadow-xl"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-white/90 leading-relaxed text-sm sm:text-base">
              To become India's most trusted and innovative co-living brand, setting new standards 
              for quality, community, and resident satisfaction.
            </p>
          </motion.div>
        </div>

        {/* Our Story with Video */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Story</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Crystal Rock was born from a simple observation: young professionals and students in Bengaluru 
                deserved better than cramped PGs and overpriced apartments. We saw an opportunity to create 
                something special - living spaces that felt like home while fostering a vibrant community.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Since our inception, we've grown from a single property to three premium locations across 
                the city, each thoughtfully designed to meet the unique needs of our residents. Our success 
                stems from our unwavering commitment to quality, transparency, and resident satisfaction.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, Crystal Rock is more than just accommodation - it's a lifestyle choice for over 500 
                residents who value comfort, convenience, and community in their living experience.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-[400px] object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/Logo_Animation_Generation_Request.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏡",
                title: "Quality Living",
                description: "Premium accommodations with modern amenities and thoughtful design"
              },
              {
                icon: "🤝",
                title: "Community First",
                description: "Building meaningful connections and fostering a supportive environment"
              },
              {
                icon: "⚡",
                title: "Innovation",
                description: "Continuously improving our services and embracing new technologies"
              },
              {
                icon: "🛡️",
                title: "Trust & Safety",
                description: "Ensuring secure, transparent, and reliable services for all residents"
              },
              {
                icon: "🌱",
                title: "Sustainability",
                description: "Committed to eco-friendly practices and responsible growth"
              },
              {
                icon: "💎",
                title: "Excellence",
                description: "Striving for the highest standards in everything we do"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutPage
