import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gray-50">
      {/* Clean background without overlay */}
      
      {/* Centered video container */}
      <div className="relative z-10 w-full flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-7xl">
          {/* Video Card */}
          <div className="relative rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] bg-white/95 backdrop-blur-sm">
            <div className="aspect-video w-full">
              <video
                className="w-full h-full object-cover rounded-2xl"
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/cr-kora-vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
