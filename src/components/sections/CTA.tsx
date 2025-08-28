import React from 'react'
import { Button } from '@/components/ui/button'
import { useAppStore } from '@/stores/appStore'

const CTA: React.FC = () => {
  const { setCurrentPage } = useAppStore()

  return (
    <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-700 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-bounce-subtle" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-bounce-subtle" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto animate-slide-up">
            Experience premium hostel living with Crystal Rock. Book your room today and become part of our vibrant community where excellence is forged daily.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button 
              size="lg"
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-primary-600 hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-4 font-semibold shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-600 hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-4 font-semibold"
            >
              Call +91 98765 43210
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
