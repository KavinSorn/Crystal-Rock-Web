export default function AboutPage() {
  return (
    <div className="container">
      <div className="page-hero">
        <h1 className="page-title">About Crystal Rock</h1>
        <p className="page-subtitle">Building communities through premium hostel experiences</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>Crystal Rock Accommodations was born from a vision to revolutionize hostel living in India's tech capital. Founded in 2020, we recognized the need for premium, community-focused accommodations that cater to young professionals, students, and entrepreneurs.</p>
          <p>Starting with our flagship property in Adugodi, we've grown to three premium locations across Bengaluru, each carefully chosen for their strategic locations and community potential.</p>
        </div>

        <div className="about-values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🏠</div>
              <h3>Community First</h3>
              <p>We believe in creating spaces where meaningful connections flourish.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Premium Quality</h3>
              <p>No compromise on comfort, cleanliness, and modern amenities.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔒</div>
              <h3>Safety & Security</h3>
              <p>Your safety and peace of mind is our top priority.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Sustainable Living</h3>
              <p>Environmentally conscious practices in all our operations.</p>
            </div>
          </div>
        </div>

        <div className="about-mission">
          <h2>Our Mission</h2>
          <p>To provide premium, affordable accommodation solutions that foster community, support personal growth, and enable young professionals to thrive in Bengaluru's dynamic ecosystem.</p>
        </div>
      </div>
    </div>
  )
}
