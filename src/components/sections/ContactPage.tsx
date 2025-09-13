import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    // Clear error when user starts typing
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.values(newErrors).every(error => error === '')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData)
      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' })
      alert('Thank you for your message! We will get back to you soon.')
    }
  }

  return (
    <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
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
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help you find your perfect home. Reach out to us anytime!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-10"
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 7411141114"
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us how we can help you..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors text-lg"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Quick Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-6 text-white"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <p className="text-white/90">+91 7411141114</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-6 text-white"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-white/90">info@crystalrock.com</p>
                </motion.div>
              </div>

              {/* Location Cards */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Our Locations</h3>
                <div className="space-y-6">
                  {[
                    {
                      name: "Crystal Rock Adugodi",
                      address: "Adugodi, Bengaluru",
                      color: "from-blue-500 to-blue-700"
                    },
                    {
                      name: "Crystal Rock Hennur",
                      address: "Hennur, Bengaluru",
                      color: "from-green-500 to-green-700"
                    },
                    {
                      name: "Crystal Rock HSR",
                      address: "HSR Layout, Bengaluru",
                      color: "from-orange-500 to-orange-700"
                    }
                  ].map((location, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center space-x-4"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${location.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                        {location.name.split(' ')[2][0]}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{location.name}</h4>
                        <p className="text-gray-600">{location.address}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-4">Working Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">11:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
