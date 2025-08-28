import React from 'react'

const CTA = () => {
  return (
    <section className="py-20 bg-primary-600 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
        <p className="text-xl mb-8">Experience premium hostel living with Crystal Rock.</p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-primary-600 px-8 py-4 rounded font-semibold">
            Contact Us
          </button>
          <button className="border border-white text-white px-8 py-4 rounded font-semibold">
            Call +91 98765 43210
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA
