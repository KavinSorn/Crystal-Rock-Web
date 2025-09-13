export default function CTA({ onContactClick }) {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta__content">
          <h2 className="cta__title">Ready to Join Our Community?</h2>
          <p className="cta__description">Experience premium hostel living with Crystal Rock. Book your room today and become part of our vibrant community.</p>
          <div className="cta__buttons">
            <button 
              className="btn btn--primary btn--lg" 
              onClick={onContactClick}
            >
              Contact Us
            </button>
            <button className="btn btn--outline btn--lg">Call +91 98765 43210</button>
          </div>
        </div>
      </div>
    </section>
  )
}
