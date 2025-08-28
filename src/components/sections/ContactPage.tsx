import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { useAppStore } from '@/stores/appStore'
import Image from 'next/image'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  hostelLocation: z.string().min(1, 'Please select a hostel location'),
  message: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

const ContactPage: React.FC = () => {
  const { setCurrentPage } = useAppStore()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Contact form submitted:', data)
    setSubmitSuccess(true)
    reset()
    setIsSubmitting(false)
    setTimeout(() => setSubmitSuccess(false), 3000)
  }

  const contactInfo = [
    {
      title: 'Call Us',
      value: '+91 98765 43210',
      icon: '📞',
      href: 'tel:+919876543210'
    },
    {
      title: 'Email Us',
      value: 'info@crystalrock.com',
      icon: '✉️',
      href: 'mailto:info@crystalrock.com'
    },
    {
      title: 'Visit Us',
      value: 'Multiple Locations in Bengaluru',
      icon: '📍',
      href: '#'
    },
    {
      title: 'WhatsApp',
      value: '+91 98765 43210',
      icon: '💬',
      href: 'https://wa.me/919876543210'
    }
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 pt-32 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-bounce-subtle" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-bounce-subtle" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="mb-8 flex justify-center hover:scale-105 transition-transform duration-300">
            <Image
              src="/steel-logo.png"
              alt="Crystal Rock Steel Logo"
              width={200}
              height={120}
              className="object-contain"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
            Get in{' '}
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Ready to experience premium hostel living? Contact us today and let's find the perfect accommodation for you at Crystal Rock.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-primary-100 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center p-4 rounded-xl bg-gradient-to-r from-primary-50 to-primary-100 hover:from-primary-100 hover:to-primary-200 transition-all duration-300 group hover:scale-105 hover:translate-x-2"
                  >
                    <div className="text-2xl mr-4 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Location Cards */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Locations</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Crystal Rock Adugodi', address: 'Adugodi, Bengaluru' },
                    { name: 'Crystal Rock Hennur', address: 'Hennur, Bengaluru' },
                    { name: 'Crystal Rock HSR', address: 'HSR Layout, Bengaluru' }
                  ].map((location, index) => (
                    <div
                      key={index}
                      className="p-3 bg-white rounded-lg border border-primary-200 hover:border-primary-300 transition-all duration-300 hover:scale-102 hover:shadow-md"
                    >
                      <h4 className="font-medium text-gray-900">{location.name}</h4>
                      <p className="text-sm text-gray-600">{location.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="p-8 bg-white/90 backdrop-blur-sm border-primary-100 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg text-green-700 animate-fade-in">
                  ✅ Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="focus-within:scale-105 transition-transform duration-300">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <Input
                    {...register('name')}
                    placeholder="Enter your full name"
                    className="transition-all duration-300 focus:shadow-lg"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div className="focus-within:scale-105 transition-transform duration-300">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    {...register('email')}
                    placeholder="Enter your email address"
                    className="transition-all duration-300 focus:shadow-lg"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div className="focus-within:scale-105 transition-transform duration-300">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    {...register('phone')}
                    placeholder="Enter your phone number"
                    className="transition-all duration-300 focus:shadow-lg"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div className="focus-within:scale-105 transition-transform duration-300">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Location
                  </label>
                  <select
                    {...register('hostelLocation')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a location</option>
                    <option value="adugodi">Crystal Rock Adugodi</option>
                    <option value="hennur">Crystal Rock Hennur</option>
                    <option value="hsr">Crystal Rock HSR</option>
                  </select>
                  {errors.hostelLocation && (
                    <p className="mt-1 text-sm text-red-600">{errors.hostelLocation.message}</p>
                  )}
                </div>

                <div className="focus-within:scale-105 transition-transform duration-300">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>

                <div className="hover:scale-105 active:scale-95 transition-transform duration-300">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-16 animate-fade-in">
          <Button
            variant="outline"
            onClick={() => setCurrentPage('home')}
            className="border-2 border-primary-500 text-primary-500 hover:bg-primary-50 px-8 py-3 font-semibold hover:scale-105 transition-all duration-300"
          >
            ← Back to Home
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
