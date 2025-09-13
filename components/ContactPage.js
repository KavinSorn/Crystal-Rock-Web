import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hostel: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <div className="container">
      <div className="page-hero">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">Ready to join Crystal Rock? Get in touch with us today</p>
      </div>

      <div className="contact-content">
        <div className="contact-form-section">
          <h2>Send us a message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                className="form-control" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="form-control" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                className="form-control" 
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="hostel">Preferred Location</label>
              <select 
                id="hostel" 
                className="form-control" 
                value={formData.hostel}
                onChange={handleChange}
                required
              >
                <option value="">Select a hostel</option>
                <option value="adugodi">Crystal Rock Adugodi</option>
                <option value="hennur">Crystal Rock Hennur</option>
                <option value="hsr">Crystal Rock HSR</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                className="form-control" 
                rows="4" 
                placeholder="Tell us about your requirements..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn--primary btn--full-width">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <div className="contact-details">
            <div className="contact-item">
              <strong>Phone:</strong>
              <p>+91 98765 43210</p>
            </div>
            <div className="contact-item">
              <strong>Email:</strong>
              <p>hello@crystalrockhostels.com</p>
            </div>
            <div className="contact-item">
              <strong>Business Hours:</strong>
              <p>Monday - Sunday: 9:00 AM - 8:00 PM</p>
            </div>
          </div>

          <div className="locations">
            <h3>Our Locations</h3>
            <div className="location-item">
              <h4>Crystal Rock Adugodi</h4>
              <p>Adugodi, Near Metro Station<br />Bengaluru, Karnataka 560030</p>
            </div>
            <div className="location-item">
              <h4>Crystal Rock Hennur</h4>
              <p>Hennur Road, IT Corridor<br />Bengaluru, Karnataka 560043</p>
            </div>
            <div className="location-item">
              <h4>Crystal Rock HSR</h4>
              <p>HSR Layout, Sector 1<br />Bengaluru, Karnataka 560102</p>
            </div>
          </div>

          <div className="social-media">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#" target="_blank">📷 Instagram</a>
              <a href="#" target="_blank">📘 Facebook</a>
              <a href="#" target="_blank">💼 LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
