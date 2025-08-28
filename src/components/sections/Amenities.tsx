import React from 'react'
import Image from 'next/image'
import { amenitiesData } from '@/lib/data'

const Amenities: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Amenities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for comfortable living and productive work
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Image from About Page Our Story section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <Image
                src="/hostel_pic 5.jpeg"
                alt="Crystal Rock Hostel Premium Amenities"
                width={500}
                height={600}
                className="object-cover w-full h-[600px] group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Right side - Amenities in 2-column grid */}
          <div className="grid grid-cols-2 gap-4">
            {amenitiesData.map((amenity, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {amenity.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {amenity.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Amenities
