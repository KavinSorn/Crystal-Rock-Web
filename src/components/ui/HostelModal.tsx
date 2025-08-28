import React from 'react'
import { Button } from '@/components/ui/button'
import { useAppStore } from '@/stores/appStore'
import { formatCurrency } from '@/lib/utils'

const HostelModal: React.FC = () => {
  const { modalData, closeModal } = useAppStore()

  if (!modalData) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">{modalData.name}</h2>
          <button
            onClick={closeModal}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <p className="text-gray-600 font-medium mb-2">{modalData.location}</p>
            <div className="text-3xl font-bold text-gray-900 mb-4">
              {formatCurrency(modalData.monthlyPrice)}
              <span className="text-lg font-normal text-gray-500">/month</span>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">{modalData.fullDescription}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Highlights</h3>
            <div className="flex flex-wrap gap-2">
              {modalData.highlights.map((highlight, index) => (
                <span 
                  key={index}
                  className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Amenities & Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {modalData.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="flex-1 bg-primary-500 hover:bg-primary-600">
              Book Now
            </Button>
            <Button variant="outline" size="lg" className="flex-1">
              Schedule Visit
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostelModal
