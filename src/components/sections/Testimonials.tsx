import React, { useEffect } from 'react'
import { useAppStore } from '@/stores/appStore'
import { testimonialsData } from '@/lib/data'

const Testimonials: React.FC = () => {
  const { currentTestimonial, setCurrentTestimonial } = useAppStore()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((currentTestimonial + 1) % testimonialsData.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [currentTestimonial, setCurrentTestimonial])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Residents Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of satisfied residents who call Crystal Rock home
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 overflow-hidden">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentTestimonial ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border">
                  <div className="text-yellow-400 text-2xl mb-4">
                    {testimonial.rating}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.author.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.author.name}
                      </h4>
                      <p className="text-gray-600">
                        {testimonial.author.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-primary-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
