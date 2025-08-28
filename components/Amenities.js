export default function Amenities() {
  const amenities = [
    { icon: "📶", title: "High-Speed WiFi", description: "Unlimited high-speed internet" },
    { icon: "🛡️", title: "24/7 Security", description: "CCTV monitoring & secure access" },
    { icon: "🚿", title: "Hot Water Supply", description: "Round-the-clock hot water" },
    { icon: "🧹", title: "Daily Housekeeping", description: "Professional cleaning service" },
    { icon: "🍳", title: "Common Kitchen", description: "Fully equipped kitchen facilities" },
    { icon: "👔", title: "Laundry Services", description: "Washing & ironing facilities" },
    { icon: "💼", title: "Co-working Spaces", description: "Dedicated work areas" },
    { icon: "❄️", title: "Air Conditioning", description: "Climate-controlled rooms" },
    { icon: "🔒", title: "Individual Lockers", description: "Secure personal storage" },
    { icon: "⚡", title: "Power Backup", description: "Uninterrupted power supply" },
    { icon: "🌅", title: "Rooftop Terrace", description: "Relaxing outdoor space" },
    { icon: "🎮", title: "Games Room", description: "Entertainment & recreation" }
  ]

  return (
    <section className="amenities">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Premium Amenities</h2>
          <p className="section-subtitle">Everything you need for comfortable living and productive work</p>
        </div>
        <div className="amenities__grid">
          {amenities.map((amenity, index) => (
            <div key={index} className="amenity-card">
              <div className="amenity-card__icon">{amenity.icon}</div>
              <h4 className="amenity-card__title">{amenity.title}</h4>
              <p className="amenity-card__description">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
