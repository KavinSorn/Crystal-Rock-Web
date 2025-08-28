// Crystal Rock Accommodations - Interactive JavaScript

// Make functions globally available immediately
window.AppState = {
    currentPage: 'home',
    currentTestimonial: 0,
    isMenuOpen: false,
    testimonialInterval: null
};

// Hostel Data - Global
window.hostelData = {
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
            "Printing facilities",
            "Air conditioning",
            "Power backup",
            "Common kitchen",
            "Gym access",
            "Parking available"
        ]
    },
    hsr: {
        id: "hsr",
        name: "Crystal Rock HSR",
        location: "HSR Layout, Bengaluru",
        monthlyPrice: 12000,
        description: "Vibrant location near cafes, restaurants and nightlife with a lively community atmosphere.",
        highlights: ["Vibrant nightlife", "Cafes & restaurants", "Young crowd"],
        fullDescription: "Located in the heart of HSR Layout, this property offers the best of Bengaluru's social scene. Surrounded by trendy cafes, restaurants, and entertainment options, it's perfect for those who love an active lifestyle.",
        amenities: [
            "Premium WiFi (150 Mbps)",
            "24/7 Security",
            "Vibrant neighborhood",
            "Nearby cafes & restaurants",
            "Nightlife access",
            "Young professional community",
            "Modern amenities",
            "Rooftop parties",
            "Social events",
            "Game nights",
            "Movie screenings",
            "Fitness area"
        ]
    }
};

// Navigation Functions - Global
window.navigateToPage = function(pageName) {
    if (window.AppState.currentPage === pageName) return;
    
    console.log('Navigating to:', pageName);
    
    // Update active nav link
    updateActiveNavLink(pageName);
    
    // Show target page
    showPage(pageName);
    
    // Update app state
    window.AppState.currentPage = pageName;
    
    // Close mobile menu if open
    if (window.AppState.isMenuOpen) {
        closeMobileMenu();
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

function updateActiveNavLink(pageName) {
    const navLinks = document.querySelectorAll('.nav__link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + pageName) {
            link.classList.add('active');
        }
    });
}

function showPage(pageName) {
    const pages = document.querySelectorAll('.page');
    
    pages.forEach(page => {
        page.classList.remove('active');
        if (page.id === pageName) {
            page.classList.add('active');
        }
    });
}

// Scroll Functions - Global
window.scrollToSection = function(sectionId) {
    console.log('Scrolling to section:', sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
};

window.scrollToPage = function(pageName) {
    console.log('Scrolling to page:', pageName);
    window.navigateToPage(pageName);
};

// Hostel Modal Functions - Global
window.showHostelDetails = function(hostelId) {
    console.log('Showing hostel details for:', hostelId);
    const hostel = window.hostelData[hostelId];
    if (!hostel) {
        console.error('Hostel not found:', hostelId);
        return;
    }
    
    const modal = document.getElementById('hostelModal');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalBody) {
        console.error('Modal elements not found');
        return;
    }
    
    modalBody.innerHTML = `
        <div class="hostel-details">
            <div class="hostel-details__header">
                <div class="hostel-details__image">
                    <div class="hostel-card__gradient ${hostelId === 'hennur' ? 'hostel-card__gradient--hennur' : hostelId === 'hsr' ? 'hostel-card__gradient--hsr' : ''}"></div>
                </div>
                <div class="hostel-details__info">
                    <h1 class="hostel-details__title">${hostel.name}</h1>
                    <p class="hostel-details__location">${hostel.location}</p>
                    <div class="hostel-details__price">₹${hostel.monthlyPrice.toLocaleString()}<span>/month</span></div>
                </div>
            </div>
            
            <div class="hostel-details__content">
                <div class="hostel-details__description">
                    <h2>About This Location</h2>
                    <p>${hostel.fullDescription}</p>
                </div>
                
                <div class="hostel-details__highlights">
                    <h2>Key Highlights</h2>
                    <div class="highlights-grid">
                        ${hostel.highlights.map(highlight => `
                            <span class="highlight">${highlight}</span>
                        `).join('')}
                    </div>
                </div>
                
                <div class="hostel-details__amenities">
                    <h2>Amenities & Features</h2>
                    <div class="amenities-list">
                        ${hostel.amenities.map(amenity => `
                            <div class="amenity-item">
                                <span class="amenity-check">✓</span>
                                <span>${amenity}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="hostel-details__actions">
                    <button class="btn btn--primary btn--lg" onclick="contactForBooking('${hostelId}')">Book This Room</button>
                    <button class="btn btn--outline btn--lg" onclick="requestTour('${hostelId}')">Request Tour</button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
};

window.closeModal = function() {
    const modal = document.getElementById('hostelModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
};

window.contactForBooking = function(hostelId) {
    window.closeModal();
    window.navigateToPage('contact');
    
    // Pre-fill the hostel selection in contact form
    setTimeout(() => {
        const hostelSelect = document.getElementById('hostel');
        if (hostelSelect) {
            hostelSelect.value = hostelId;
        }
    }, 100);
};

window.requestTour = function(hostelId) {
    window.closeModal();
    window.navigateToPage('contact');
    
    // Pre-fill the form with tour request
    setTimeout(() => {
        const hostelSelect = document.getElementById('hostel');
        const messageField = document.getElementById('message');
        
        if (hostelSelect) hostelSelect.value = hostelId;
        if (messageField) messageField.value = 'I would like to schedule a tour of this property.';
    }, 100);
};

// Testimonial Functions - Global
window.showTestimonial = function(index) {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.testimonials__dot');
    
    // Hide all testimonials
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show selected testimonial
    if (testimonials[index]) {
        testimonials[index].classList.add('active');
    }
    
    // Activate corresponding dot
    if (dots[index]) {
        dots[index].classList.add('active');
    }
    
    window.AppState.currentTestimonial = index;
};

// Mobile Menu Functions
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.getElementById('navToggle');
    
    if (window.AppState.isMenuOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function openMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.style.display = 'flex';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = 'white';
        navMenu.style.flexDirection = 'column';
        navMenu.style.padding = '1rem';
        navMenu.style.boxShadow = '0 10px 30px rgba(74, 74, 122, 0.15)';
        navMenu.style.borderRadius = '0 0 12px 12px';
        navMenu.style.zIndex = '1001';
    }
    
    window.AppState.isMenuOpen = true;
}

function closeMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.style.display = '';
        navMenu.style.position = '';
        navMenu.style.top = '';
        navMenu.style.left = '';
        navMenu.style.right = '';
        navMenu.style.background = '';
        navMenu.style.flexDirection = '';
        navMenu.style.padding = '';
        navMenu.style.boxShadow = '';
        navMenu.style.borderRadius = '';
        navMenu.style.zIndex = '';
    }
    window.AppState.isMenuOpen = false;
}

// Contact Form Functions
function handleContactSubmission(e) {
    e.preventDefault();
    
    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        hostel: document.getElementById('hostel').value,
        message: document.getElementById('message').value
    };
    
    // Basic validation
    if (!data.name || !data.email || !data.phone) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    if (!isValidEmail(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Show loading state
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        showNotification('Thank you for your message! We\'ll get back to you within 24 hours.', 'success');
        e.target.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 1500);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    // Add styles
    const styles = {
        position: 'fixed',
        top: '100px',
        right: '20px',
        background: type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        zIndex: '3000',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease',
        maxWidth: '300px'
    };
    
    Object.assign(notification.style, styles);
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

function startTestimonialRotation() {
    window.AppState.testimonialInterval = setInterval(() => {
        const nextIndex = (window.AppState.currentTestimonial + 1) % 3;
        window.showTestimonial(nextIndex);
    }, 5000); // Change every 5 seconds
}

function stopTestimonialRotation() {
    if (window.AppState.testimonialInterval) {
        clearInterval(window.AppState.testimonialInterval);
        window.AppState.testimonialInterval = null;
    }
}

// Initialize App
function initializeApp() {
    console.log('Initializing Crystal Rock Accommodations app...');
    
    // Setup navigation listeners
    setupNavigationListeners();
    
    // Setup mobile menu
    setupMobileMenu();
    
    // Setup testimonial slider
    setupTestimonialSlider();
    
    // Setup contact form
    setupContactForm();
    
    // Setup modal listeners
    setupModalListeners();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Start testimonial auto-rotation
    startTestimonialRotation();
    
    // Show home page initially
    showPage('home');
    
    console.log('Crystal Rock Accommodations app initialized successfully!');
}

function setupNavigationListeners() {
    const navLinks = document.querySelectorAll('.nav__link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('href').substring(1);
            console.log('Nav link clicked:', targetPage);
            window.navigateToPage(targetPage);
        });
    });
}

function setupMobileMenu() {
    const menuToggle = document.getElementById('navToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
        console.log('Mobile menu setup complete');
    }
}

function setupTestimonialSlider() {
    const dots = document.querySelectorAll('.testimonials__dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => window.showTestimonial(index));
    });
    console.log('Testimonial slider setup complete');
}

function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmission);
        console.log('Contact form setup complete');
    }
}

function setupModalListeners() {
    const modal = document.getElementById('hostelModal');
    if (modal) {
        // Close modal when clicking backdrop
        modal.addEventListener('click', function(e) {
            if (e.target === modal || e.target.classList.contains('modal__backdrop')) {
                window.closeModal();
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                window.closeModal();
            }
        });
        
        console.log('Modal listeners setup complete');
    }
}

function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections for scroll animations
    const animatedElements = document.querySelectorAll(
        '.hostel-card, .amenity-card, .testimonial-card, .value-card, .mess-card'
    );
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    console.log('Scroll animations setup complete');
}

// Handle window resize for responsive behavior
window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && window.AppState.isMenuOpen) {
        closeMobileMenu();
    }
});

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

console.log('Crystal Rock Accommodations JavaScript loaded!');