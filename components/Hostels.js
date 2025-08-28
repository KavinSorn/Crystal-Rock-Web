const hostelData = {
  adugodi: {
    id: "adugodi",
    name: "Crystal Rock Adugodi", 
    location: "Adugodi, Bengaluru",
    monthlyPrice: 11500,
    description: "Premium location with easy metro connectivity and modern amenities in the heart of Bengaluru.",
    highlights: ["Metro connectivity", "IT hub proximity", "Shopping centers nearby"],
    fullDescription: "Our Adugodi location offers the perfect blend of convenience and comfort. Located just minutes away from the metro station, you'll have easy access to all parts of Bengaluru. The area is surrounded by IT hubs, making it ideal for working professionals.",
    amenities: [
      "High-speed WiFi (100 Mbps)",
      "24/7 Security with CCTV",
      "Metro station 5 minutes walk",
      "Shopping malls nearby",
      "Restaurants and cafes",
      "Air-conditioned rooms",
      "Daily housekeeping",
      "Laundry services",
      "Common kitchen",
      "Co-working space",
      "Games room",
      "Rooftop terrace"
    ]
  },
  hennur: {
    id: "hennur",
    name: "Crystal Rock Hennur",
    location: "Hennur, Bengaluru", 
    monthlyPrice: 10800,
    description: "Modern amenities in the IT corridor with excellent connectivity and professional environment.",
    highlights: ["IT corridor", "Professional crowd", "Modern facilities"],
    fullDescription: "Strategically located in the IT corridor, our Hennur property caters to working professionals who value productivity and community. With state-of-the-art facilities and a professional atmosphere.",
    amenities: [
      "Ultra-fast WiFi (200 Mbps)",
      "24/7 Security",
      "IT corridor location", 
      "Professional community",
      "Modern co-working spaces",
      "Conference rooms",
      "Air-conditioned rooms",
      "Daily housekeeping",
      "Laundry services",
      "Common kitchen",
      "Gym facilities",
      "Rooftop terrace"
    ]
  },
  hsr: {
    id: "hsr",
    name: "Crystal Rock HSR",
    location: "HSR Layout, Bengaluru",
    monthlyPrice: 12000,
    description: "Vibrant location near cafes, restaurants and nightlife with a lively community atmosphere.",
    highlights: ["Vibrant nightlife", "Cafes & restaurants", "Young crowd"],
    fullDescription: "Located in the heart of HSR Layout, this property offers the perfect blend of social life and comfort. Surrounded by trendy cafes, restaurants, and nightlife spots, it's ideal for young professionals who love an active social scene.",
    amenities: [
      "High-speed WiFi (150 Mbps)",
      "24/7 Security",
      "Vibrant neighborhood",
      "Young community",
      "Co-working spaces",
      "Event spaces",
      "Air-conditioned rooms",
      "Daily housekeeping",
      "Laundry services",
      "Common kitchen",
      "Games room",
      "Rooftop party area"
    ]
  }
}

export default function Hostels({ onShowHostelDetails }) {
  const handleViewDetails = (hostelId) => {
    onShowHostelDetails(hostelData[hostelId])
  }

  return (
    <section className="hostels" id="hostels">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Premium Locations</h2>
          <p className="section-subtitle">Choose from our three carefully curated hostels across Bengaluru</p>
        </div>
        <div className="hostels__grid">
          <div className="hostel-card" data-hostel="adugodi">
            <div className="hostel-card__image">
              <div className="hostel-card__gradient"></div>
              <div className="hostel-card__badge">Premium Location</div>
            </div>
            <div className="hostel-card__content">
              <h3 className="hostel-card__title">Crystal Rock Adugodi</h3>
              <p className="hostel-card__location">Adugodi, Bengaluru</p>
              <p className="hostel-card__description">Premium location with easy metro connectivity and modern amenities in the heart of Bengaluru.</p>
              <div className="hostel-card__highlights">
                <span className="highlight">Metro connectivity</span>
                <span className="highlight">IT hub proximity</span>
                <span className="highlight">Shopping centers nearby</span>
              </div>
              <div className="hostel-card__price">₹11,500<span>/month</span></div>
              <button 
                className="btn btn--primary hostel-card__btn" 
                onClick={() => handleViewDetails('adugodi')}
              >
                View Details
              </button>
            </div>
          </div>

          <div className="hostel-card" data-hostel="hennur">
            <div className="hostel-card__image">
              <div className="hostel-card__gradient hostel-card__gradient--hennur"></div>
              <div className="hostel-card__badge">IT Corridor</div>
            </div>
            <div className="hostel-card__content">
              <h3 className="hostel-card__title">Crystal Rock Hennur</h3>
              <p className="hostel-card__location">Hennur, Bengaluru</p>
              <p className="hostel-card__description">Modern amenities in the IT corridor with excellent connectivity and professional environment.</p>
              <div className="hostel-card__highlights">
                <span className="highlight">IT corridor</span>
                <span className="highlight">Professional crowd</span>
                <span className="highlight">Modern facilities</span>
              </div>
              <div className="hostel-card__price">₹10,800<span>/month</span></div>
              <button 
                className="btn btn--primary hostel-card__btn" 
                onClick={() => handleViewDetails('hennur')}
              >
                View Details
              </button>
            </div>
          </div>

          <div className="hostel-card" data-hostel="hsr">
            <div className="hostel-card__image">
              <div className="hostel-card__gradient hostel-card__gradient--hsr"></div>
              <div className="hostel-card__badge">Vibrant Area</div>
            </div>
            <div className="hostel-card__content">
              <h3 className="hostel-card__title">Crystal Rock HSR</h3>
              <p className="hostel-card__location">HSR Layout, Bengaluru</p>
              <p className="hostel-card__description">Vibrant location near cafes, restaurants and nightlife with a lively community atmosphere.</p>
              <div className="hostel-card__highlights">
                <span className="highlight">Vibrant nightlife</span>
                <span className="highlight">Cafes & restaurants</span>
                <span className="highlight">Young crowd</span>
              </div>
              <div className="hostel-card__price">₹12,000<span>/month</span></div>
              <button 
                className="btn btn--primary hostel-card__btn" 
                onClick={() => handleViewDetails('hsr')}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
