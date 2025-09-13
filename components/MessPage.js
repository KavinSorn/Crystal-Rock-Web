export default function MessPage() {
  return (
    <div className="container">
      <div className="page-hero">
        <h1 className="page-title">CR Mess</h1>
        <p className="page-subtitle">Delicious, nutritious meals for our hostel community</p>
      </div>

      <div className="mess-content">
        <div className="mess-feature">
          <h2>Healthy & Tasty Meals</h2>
          <p>Our in-house mess provides fresh, home-style cooking with both vegetarian and non-vegetarian options. We focus on nutritious, balanced meals that fuel your busy lifestyle.</p>
        </div>

        <div className="mess-grid">
          <div className="mess-card">
            <h3>Daily Meals</h3>
            <ul>
              <li>Breakfast: 7:00 AM - 10:00 AM</li>
              <li>Lunch: 12:00 PM - 2:30 PM</li>
              <li>Dinner: 7:00 PM - 9:30 PM</li>
            </ul>
          </div>
          <div className="mess-card">
            <h3>Monthly Plans</h3>
            <ul>
              <li>Full Meal Plan: ₹4,500/month</li>
              <li>Lunch + Dinner: ₹3,500/month</li>
              <li>Breakfast Only: ₹1,500/month</li>
            </ul>
          </div>
          <div className="mess-card">
            <h3>Special Features</h3>
            <ul>
              <li>South Indian & North Indian cuisine</li>
              <li>Fresh ingredients daily</li>
              <li>Customizable meal options</li>
              <li>Hygienic cooking environment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
