import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useAppStore } from '@/stores/appStore'
import { hostelsData } from '@/lib/data'
import { formatCurrency } from '@/lib/utils'

const Hostels: React.FC = () => {
  const { setModalData } = useAppStore()

  return (
    <section id="hostels" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Locations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our three carefully curated hostels across Bengaluru
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {hostelsData.map((hostel) => (
            <Card key={hostel.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg">
              <div className="relative h-48 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 flex items-center justify-center">
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                    {hostel.badge}
                  </span>
                </div>
                <div className="text-white text-6xl font-bold opacity-20">
                  {hostel.id.toUpperCase().slice(0, 2)}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {hostel.name}
                </CardTitle>
                <p className="text-gray-600 font-medium">{hostel.location}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {hostel.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {hostel.highlights.map((highlight, index) => (
                    <span 
                      key={index}
                      className="bg-primary-50 text-primary-700 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="text-2xl font-bold text-gray-900">
                    {formatCurrency(hostel.monthlyPrice)}
                    <span className="text-base font-normal text-gray-500">/month</span>
                  </div>
                  <Button 
                    onClick={() => setModalData(hostel)}
                    className="bg-primary-500 hover:bg-primary-600"
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hostels
