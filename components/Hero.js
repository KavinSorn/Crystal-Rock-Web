export default function Hero() {
  const scrollToHostels = () => {
    const hostelsSection = document.getElementById('hostels')
    if (hostelsSection) {
      hostelsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="hero__background">
        <div className="hero__logo-bg">CR</div>
        <div className="hero__particles"></div>
      </div>
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title animate-in">Premium Hostel Living in Bengaluru</h1>
          <p className="hero__subtitle animate-in" style={{animationDelay: '0.2s'}}>
            Experience comfort, community & convenience at Crystal Rock
          </p>
          <div className="hero__buttons animate-in" style={{animationDelay: '0.4s'}}>
            <button 
              className="btn btn--primary hero__btn" 
              onClick={scrollToHostels}
            >
              Explore Hostels
            </button>
            <button className="btn btn--outline hero__btn">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  )
}
