import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useAppStore } from '@/stores/appStore'
import Image from 'next/image'

const AboutPage: React.FC = () => {
  const { setCurrentPage } = useAppStore()

  const values = [
    {
      title: 'Community',
      description: 'Building lasting friendships and professional networks through shared experiences.',
      icon: '🤝',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Quality',
      description: 'Premium accommodations with modern amenities and exceptional maintenance standards.',
      icon: '⭐',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'Safety',
      description: 'Secure facilities with 24/7 security, CCTV monitoring, and safe living environment.',
      icon: '🛡️',
      gradient: 'from-red-500 to-pink-600'
    },
    {
      title: 'Convenience',
      description: 'Strategic locations with excellent connectivity to IT hubs and city centers.',
      icon: '🚀',
      gradient: 'from-orange-500 to-yellow-600'
    }
  ]

  const milestones = [
    { year: '2020', event: 'Crystal Rock Founded', description: 'Started with a vision to redefine hostel living' },
    { year: '2021', event: 'First Hostel Launch', description: 'Opened our flagship property in Adugodi' },
    { year: '2022', event: 'Expansion Phase', description: 'Launched hostels in Hennur and HSR Layout' },
    { year: '2024', event: 'Community Growth', description: 'Serving 500+ residents across Bengaluru' },
  ]

  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      description: 'Visionary leader with 10+ years in hospitality industry',
      image: '/hostel_pic 1.jpeg'
    },
    {
      name: 'Priya Sharma',
      role: 'Operations Head',
      description: 'Ensuring excellence in daily operations and resident satisfaction',
      image: '/hostel_pic 2.jpeg'
    },
    {
      name: 'Amit Patel',
      role: 'Community Manager',
      description: 'Building vibrant communities and organizing resident events',
      image: '/hostel_pic 3.jpeg'
    }
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 pt-32 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-bounce-subtle" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-bounce-subtle" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary-100 rounded-full opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="mb-8 flex justify-center hover:scale-105 transition-transform duration-300">
            <Image
              src="/steel-logo.png"
              alt="Crystal Rock Steel Logo"
              width={350}
              height={150}
              className="object-contain"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
            About{' '}
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              Crystal Rock
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-slide-up">
            Forged in Excellence. We're not just providing accommodation - we're crafting a lifestyle that combines 
            comfort, community, and convenience for the modern professional.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="mb-20 animate-slide-up">
          <Card className="p-12 bg-white/80 backdrop-blur-sm border-primary-100 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Crystal Rock Accommodations was born from a simple yet powerful vision: to transform the way young 
                    professionals experience hostel living in Bengaluru. We saw the challenges faced by working individuals 
                    seeking quality, affordable accommodation in India's Silicon Valley.
                  </p>
                  <p>
                    Founded in 2020, we've grown from a single property to a network of premium hostels across strategic 
                    locations in Bengaluru. Our commitment to excellence has been forged through years of listening to our 
                    residents and continuously improving our services.
                  </p>
                  <p>
                    Today, Crystal Rock stands as a beacon of quality hostel living, where every resident feels at home, 
                    builds meaningful connections, and thrives in their professional journey.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <video
                    className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src="/Logo_Animation_Generation_Request.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="p-6 bg-white/80 backdrop-blur-sm border-primary-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Journey Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones that shaped Crystal Rock</p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <Card 
                key={index}
                className="p-8 bg-white/80 backdrop-blur-sm border-primary-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102 animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="md:w-1/4">
                    <div className="text-3xl font-bold text-primary-500 mb-2">{milestone.year}</div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                    <p className="text-gray-600 text-lg">{milestone.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The people behind Crystal Rock's success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                className="p-6 bg-white/80 backdrop-blur-sm border-primary-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="relative overflow-hidden rounded-full w-32 h-32 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <Card className="p-12 bg-gradient-to-r from-primary-500 to-primary-700 text-white shadow-2xl animate-fade-in">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Why Choose Crystal Rock?</h2>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
                  <p>Top-notch facilities and services that exceed expectations</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌟</div>
                  <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
                  <p>500+ satisfied residents and growing community</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">💝</div>
                  <h3 className="text-xl font-bold mb-2">Value for Money</h3>
                  <p>Affordable pricing without compromising on quality</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Back Button */}
        <div className="text-center animate-fade-in">
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

export default AboutPage
