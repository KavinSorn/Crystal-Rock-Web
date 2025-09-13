import { useState, useEffect } from 'react'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      rating: "★★★★★",
      content: "Amazing experience at Crystal Rock! The community vibe is fantastic and all amenities work perfectly. The WiFi is super fast for my work.",
      author: {
        avatar: "PS",
        name: "Priya Sharma",
        role: "Software Engineer"
      }
    },
    {
      rating: "★★★★★",
      content: "Best hostel I've stayed at in Bengaluru. Clean, safe, and the location is perfect for accessing the IT corridor.",
      author: {
        avatar: "RK",
        name: "Rahul Kumar", 
        role: "Digital Marketer"
      }
    },
    {
      rating: "★★★★★",
      content: "Crystal Rock feels like home away from home. The co-working space is great for productivity and I've made amazing friends here.",
      author: {
        avatar: "AP",
        name: "Anjali Patel",
        role: "Startup Founder"
      }
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const showTestimonial = (index) => {
    setCurrentTestimonial(index)
  }

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Residents Say</h2>
          <p className="section-subtitle">Join hundreds of satisfied residents who call Crystal Rock home</p>
        </div>
        <div className="testimonials__slider" id="testimonialsSlider">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`testimonial-card ${index === currentTestimonial ? 'active' : ''}`}
            >
              <div className="testimonial-card__rating">{testimonial.rating}</div>
              <p className="testimonial-card__content">{testimonial.content}</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{testimonial.author.avatar}</div>
                <div className="testimonial-card__info">
                  <h4 className="testimonial-card__name">{testimonial.author.name}</h4>
                  <p className="testimonial-card__role">{testimonial.author.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonials__controls">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              className={`testimonials__dot ${index === currentTestimonial ? 'active' : ''}`}
              onClick={() => showTestimonial(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}
