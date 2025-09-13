export default function HostelModal({ data, onClose }) {
  if (!data) return null

  return (
    <div className="modal">
      <div className="modal__backdrop" onClick={onClose}></div>
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>&times;</button>
        <div className="modal__body">
          <div className="hostel-details">
            <div className="hostel-details__header">
              <h2 className="hostel-details__title">{data.name}</h2>
              <p className="hostel-details__location">{data.location}</p>
              <div className="hostel-details__price">₹{data.monthlyPrice.toLocaleString()}<span>/month</span></div>
            </div>
            
            <div className="hostel-details__description">
              <p>{data.fullDescription}</p>
            </div>

            <div className="hostel-details__highlights">
              <h3>Key Highlights</h3>
              <div className="highlights-list">
                {data.highlights.map((highlight, index) => (
                  <span key={index} className="highlight-tag">{highlight}</span>
                ))}
              </div>
            </div>

            <div className="hostel-details__amenities">
              <h3>Amenities & Features</h3>
              <div className="amenities-grid">
                {data.amenities.map((amenity, index) => (
                  <div key={index} className="amenity-item">
                    <span className="amenity-check">✓</span>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hostel-details__actions">
              <button className="btn btn--primary btn--lg">Book Now</button>
              <button className="btn btn--outline btn--lg">Schedule Visit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
