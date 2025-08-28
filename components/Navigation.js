import { useState } from 'react'

export default function Navigation({ currentPage, onPageChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  
  const handleNavClick = (page) => {
    onPageChange(page)
    setIsMenuOpen(false)
  }

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__brand">
          <div className="logo">
            <div className="logo__icon">CR</div>
            <div className="logo__text">Crystal Rock</div>
          </div>
        </div>
        <ul className={`nav__menu ${isMenuOpen ? 'active' : ''}`} id="navMenu">
          <li>
            <a 
              href="#home" 
              className={`nav__link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('home')
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#mess" 
              className={`nav__link ${currentPage === 'mess' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('mess')
              }}
            >
              CR Mess
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={`nav__link ${currentPage === 'about' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('about')
              }}
            >
              About Us
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`nav__link ${currentPage === 'contact' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('contact')
              }}
            >
              Contact
            </a>
          </li>
        </ul>
        <button 
          className="nav__toggle" 
          id="navToggle"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
