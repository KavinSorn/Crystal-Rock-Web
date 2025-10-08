import React from 'react'
import { Button } from '@/components/ui/button'
import { useAppStore } from '@/stores/appStore'
import { formatCurrency } from '@/lib/utils'
import { motion } from 'framer-motion'

const HostelModal: React.FC = () => {
  const { modalData, closeModal, setCurrentPage } = useAppStore()

  if (!modalData) return null

  const handleBookNow = () => {
    const phoneNumber = '917411141114'
    const message = encodeURIComponent(
      `Hi! I'm interested in booking at ${modalData.name}, ${modalData.location}. The monthly price is ${formatCurrency(modalData.monthlyPrice)}. Please provide more details.`
    )
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const handleScheduleVisit = () => {
    closeModal()
    setCurrentPage('contact')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeModal}
    >
      <motion.div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-900">{modalData.name}</h2>
          <button
            onClick={closeModal}
            className="text-gray-400 hover:text-gray-600 text-3xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
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
            <Button 
              onClick={handleBookNow}
              size="lg" 
              className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book via WhatsApp
            </Button>
            <Button 
              onClick={handleScheduleVisit}
              variant="outline" 
              size="lg" 
              className="flex-1 border-2 border-primary-500 text-primary-600 hover:bg-primary-50 font-semibold"
            >
              Schedule Visit
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default HostelModal
