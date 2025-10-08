import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useAppStore } from '@/stores/appStore'

const HSRPromo: React.FC = () => {
  const { setCurrentPage } = useAppStore()

  const handleWhatsAppClick = (roomType: string, price: string) => {
    const phoneNumber = '917411141114'
    const message = encodeURIComponent(
      `Hi! I'm interested in the ${roomType} at HSR Layout hostel (Starting from ₹${price}/person). Please provide more details.`
    )
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const handleBookVisit = () => {
    setCurrentPage('contact')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLearnMore = () => {
    const hostelsSection = document.getElementById('hostels')
    if (hostelsSection) {
      hostelsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  const roomTypes = [
    {
      id: 1,
      title: '2 Sharing',
      subtitle: 'Standard',
      price: '14,000',
      description: 'Comfortable rooms perfect for shared living',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: '2 Sharing',
      subtitle: 'Premium',
      price: '17,000',
      description: 'Spacious premium rooms with enhanced amenities',
      gradient: 'from-purple-500 to-pink-500',
      badge: 'Popular',
    },
    {
      id: 3,
      title: 'Single Room',
      subtitle: 'Private',
      price: '22,500',
      description: 'Your own private sanctuary with complete privacy',
      gradient: 'from-orange-500 to-red-500',
    },
  ]

  const highlights = [
    {
      icon: '📍',
      title: 'Prime Location',
      description: 'Heart of HSR Layout - Bengaluru\'s most vibrant neighborhood',
    },
    {
      icon: '🍽️',
      title: 'Complete Meal Package',
      description: 'Breakfast, Lunch & Dinner included in your stay',
    },
    {
      icon: '💼',
      title: 'Work & Chill',
      description: 'Co-working space + Terrace lounge area',
    },
  ]

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundImage: [
            'radial-gradient(600px at 20% 30%, rgba(59, 130, 246, 0.15), transparent 50%)',
            'radial-gradient(600px at 80% 70%, rgba(139, 92, 246, 0.15), transparent 50%)',
            'radial-gradient(600px at 20% 30%, rgba(59, 130, 246, 0.15), transparent 50%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-md px-4 py-2 rounded-full text-white mb-4 border border-red-400/30"
          >
            <motion.span
              className="w-2 h-2 bg-red-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            ></motion.span>
            <span className="font-semibold">Filling Fast - Limited Beds Left</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            HSR Layout
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400">
              Coming Alive in December
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience premium living in Bengaluru's most sought-after neighborhood. 
            Reserve your spot today and be part of our founding community.
          </motion.p>
        </div>

        {/* Room Types Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {roomTypes.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden border-0 bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all duration-300 group">
                {room.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                      {room.badge}
                    </span>
                  </div>
                )}
                
                {/* Gradient Header */}
                <div className={`h-32 bg-gradient-to-br ${room.gradient} relative flex items-center justify-center`}>
                  <motion.div
                    className="text-white text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-2xl font-bold">{room.title}</h3>
                    <p className="text-sm opacity-90">{room.subtitle}</p>
                  </motion.div>
                </div>

                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-white mb-1">
                      ₹{room.price}
                      <span className="text-base font-normal text-white/60">/person</span>
                    </div>
                    <div className="text-sm text-white/70">Starts from</div>
                  </div>

                  <p className="text-white/80 text-sm mb-6 leading-relaxed">
                    {room.description}
                  </p>

                  <Button 
                    onClick={() => handleWhatsAppClick(`${room.title} (${room.subtitle})`, room.price)}
                    className="w-full bg-white text-primary-900 hover:bg-gray-100 font-semibold group-hover:scale-105 transition-transform"
                  >
                    Reserve Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Highlights Section */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              Why Choose HSR Layout?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-5xl mb-4">{highlight.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{highlight.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{highlight.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-10 pt-8 border-t border-white/20">
              <p className="text-white/90 text-lg mb-4">
                Don't miss out on this opportunity to secure your spot!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  onClick={handleBookVisit}
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:from-yellow-500 hover:to-orange-600 font-bold px-8 shadow-xl"
                >
                  Book Your Visit
                </Button>
                <Button 
                  onClick={handleLearnMore}
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 font-semibold px-8"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HSRPromo

