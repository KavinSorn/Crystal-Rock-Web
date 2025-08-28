import React from 'react'
import Image from 'next/image'

const MessPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pt-32 pb-20">
      <div className="text-center mb-16">
        {/* CR Logo Fire Image */}
        <div className="mb-8 flex justify-center hover:scale-105 transition-transform duration-300">
          <Image
            src="/cr_logo_fire_upscaled-removebg-preview.png"
            alt="CR Mess Fire Logo"
            width={250}
            height={120}
            className="object-contain"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"></h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Delicious, nutritious meals for our hostel community
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Healthy & Tasty Meals</h2>
          <p className="text-gray-700 leading-relaxed">
            Our in-house mess provides fresh, home-style cooking with both vegetarian and non-vegetarian options. We focus on nutritious, balanced meals that fuel your busy lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Daily Meals</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Breakfast: 7:00 AM - 10:00 AM</li>
              <li>Lunch: 12:00 PM - 2:30 PM</li>
              <li>Dinner: 7:00 PM - 9:30 PM</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Plans</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Full Meal Plan: ₹4,500/month</li>
              <li>Lunch + Dinner: ₹3,500/month</li>
              <li>Breakfast Only: ₹1,500/month</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Special Features</h3>
            <ul className="space-y-2 text-gray-700">
              <li>South Indian & North Indian cuisine</li>
              <li>Fresh ingredients daily</li>
              <li>Customizable meal options</li>
              <li>Hygienic cooking environment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessPage
