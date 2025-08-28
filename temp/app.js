// Crystal Rock Accommodations - Enhanced with Engraved Logo Interactions (Fixed)

// Global app state
window.AppState = {
    currentPage: 'home',
    currentTestimonial: 0,
    isMenuOpen: false,
    testimonialInterval: null,
    isLoading: true,
    scrollPosition: 0
};

// Hostel Data - Global
window.hostelData = {
    adugodi: {
        id: "adugodi",
        name: "Crystal Rock Adugodi", 
        location: "Adugodi, Bengaluru",
        monthlyPrice: 11500,
        description: "Premium location with easy metro connectivity and modern amenities.",
        highlights: ["Metro connectivity", "IT hub proximity", "Shopping centers nearby"],
        fullDescription: "Our Adugodi location offers the perfect blend of convenience and comfort. Located just minutes away from the metro station, you'll have easy access to all parts of Bengaluru.",
        amenities: [
            "High-speed WiFi (100 Mbps)", "24/7 Security with CCTV", "Metro station 5 minutes walk",
            "Shopping malls nearby", "Restaurants and cafes", "Air-conditioned rooms",
            "Daily housekeeping", "Laundry services", "Common kitchen", "Co-working space"
        ]
    },
    hennur: {
        id: "hennur",
        name: "Crystal Rock Hennur",
        location: "Hennur, Bengaluru", 
        monthlyPrice: 10800,
        description: "Modern amenities in the IT corridor with excellent connectivity.",
        highlights: ["IT corridor", "Professional crowd", "Modern facilities"],
        fullDescription: "Strategically located in the IT corridor, our Hennur property caters to working professionals who value productivity and community.",
        amenities: [
            "Ultra-fast WiFi (200 Mbps)", "24/7 Security", "IT corridor location",
            "Professional community", "Modern co-working spaces", "Conference rooms",
            "Air conditioning", "Power backup", "Common kitchen", "Gym access"
        ]
    },
    hsr: {
        id: "hsr",
        name: "Crystal Rock HSR",
        location: "HSR Layout, Bengaluru",
        monthlyPrice: 12000,
        description: "Vibrant location near cafes, restaurants and nightlife.",
        highlights: ["Vibrant nightlife", "Cafes & restaurants", "Young crowd"],
        fullDescription: "Located in the heart of HSR Layout, this property offers the best of Bengaluru's social scene.",
        amenities: [
            "Premium WiFi (150 Mbps)", "24/7 Security", "Vibrant neighborhood",
            "Nearby cafes & restaurants", "Young professional community", "Modern amenities",
            "Social events", "Game nights", "Fitness area", "Rooftop terrace"
        ]
    }
};

// Loading sequence
function initLoadingSequence() {
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        completeLoading();
    }, 3000);
}

function completeLoading() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
        document.body.style.overflow = 'auto';
        window.AppState.isLoading = false;
        
        setTimeout(() => {
            setupParallaxEffect();
            setupNavLogoTransformation();
        }, 500);
    }
}

// Navigation functions - FIXED
window.navigateToPage = function(pageName) {
    console.log('Navigating to:', pageName);
    
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show target page
    const targetPage = document.getElementById(pageName);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update nav links
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + pageName) {
            link.classList.add('active');
        }
    });
    
    window.AppState.currentPage = pageName;
    
    if (window.AppState.isMenuOpen) {
        closeMobileMenu();
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Scroll functions - FIXED
window.scrollToSection = function(sectionId) {
    console.log('Scrolling to section:', sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({ 
            top: offsetTop,
            behavior: 'smooth'
        });
    }
};

window.scrollToPage = function(pageName) {
    window.navigateToPage(pageName);
};

// Hostel modal functions - FIXED
window.showHostelDetails = function(hostelId) {
    console.log('Showing hostel details for:', hostelId);
    const hostel = window.hostelData[hostelId];
    if (!hostel) return;
    
    const modal = document.getElementById('hostelModal');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalBody) return;
    
    modalBody.innerHTML = `
        <div class="hostel-details">
            <div class="hostel-details__header">
                <div class="hostel-details__image">
                    <div class="hostel-card__gradient ${hostelId === 'hennur' ? 'hostel-card__gradient--hennur' : hostelId === 'hsr' ? 'hostel-card__gradient--hsr' : ''}"></div>
                    <div class="engraved-logo modal-engraved">
                        <div class="engraved-logo__symbol">CR</div>
                        <div class="metallic-shine"></div>
                    </div>
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
                        ${hostel.highlights.map(highlight => `<span class="highlight">${highlight}</span>`).join('')}
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
        
        <style>
        .hostel-details__image {
            position: relative;
            height: 200px;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 2rem;
        }
        .modal-engraved {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80px;
            height: 80px;
            font-size: 32px;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
        }
        .hostel-details__info { text-align: center; }
        .hostel-details__title {
            font-size: 2rem;
            color: var(--primary-navy);
            margin-bottom: 0.5rem;
        }
        .hostel-details__location {
            color: var(--neutral-dark);
            opacity: 0.7;
            margin-bottom: 1rem;
        }
        .hostel-details__price {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--primary-navy);
            margin-bottom: 2rem;
        }
        .hostel-details__content h2 {
            color: var(--primary-navy);
            margin: 2rem 0 1rem 0;
        }
        .highlights-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 2rem;
        }
        .amenities-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 0.5rem;
            margin-bottom: 2rem;
        }
        .amenity-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 0;
        }
        .amenity-check {
            color: var(--primary-navy);
            font-weight: bold;
        }
        .hostel-details__actions {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-top: 2rem;
        }
        @media (max-width: 768px) {
            .hostel-details__actions { flex-direction: column; }
        }
        </style>
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
    
    setTimeout(() => {
        const hostelSelect = document.getElementById('hostel');
        const messageField = document.getElementById('message');
        
        if (hostelSelect) hostelSelect.value = hostelId;
        if (messageField) messageField.value = 'I would like to schedule a tour of this property.';
    }, 100);
};

// Testimonial functions
window.showTestimonial = function(index) {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.testimonials__dot');
    
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if (testimonials[index]) testimonials[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');
    
    window.AppState.currentTestimonial = index;
};

// Parallax effect - FIXED
function setupParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        window.AppState.scrollPosition = scrollPosition;
        
        // Parallax background effect
        const parallaxBg = document.querySelector('.engraved-parallax-bg');
        if (parallaxBg) {
            const parallaxSpeed = 0.5;
            const offset = scrollPosition * parallaxSpeed;
            parallaxBg.style.transform = `translateY(${offset}px)`;
        }
        
        // Navigation logo transformation
        updateNavLogoTransformation(scrollPosition);
    });
}

// Navigation logo transformation - FIXED
function setupNavLogoTransformation() {
    window.addEventListener('scroll', () => {
        updateNavLogoTransformation(window.pageYOffset);
    });
}

function updateNavLogoTransformation(scrollPosition) {
    const nav = document.getElementById('mainNav');
    const simpleLogo = document.querySelector('.simple-logo');
    const engravedLogo = document.querySelector('.nav-engraved');
    const heroHeight = document.querySelector('.hero')?.offsetHeight || 600;
    
    if (scrollPosition > heroHeight * 0.3) {
        nav?.classList.add('scrolled');
        simpleLogo?.classList.add('hidden');
        engravedLogo?.classList.add('active');
    } else {
        nav?.classList.remove('scrolled');
        simpleLogo?.classList.remove('hidden');
        engravedLogo?.classList.remove('active');
    }
}

// Hostel card hover effects - FIXED
function setupHostelCardInteractions() {
    const hostelCards = document.querySelectorAll('.hostel-card');
    
    hostelCards.forEach(card => {
        const engravedElement = card.querySelector('.hostel-card__engraved');
        
        card.addEventListener('mouseenter', () => {
            if (engravedElement) {
                engravedElement.classList.remove('hidden');
                const shine = engravedElement.querySelector('.metallic-shine');
                if (shine) {
                    shine.style.animation = 'none';
                    setTimeout(() => {
                        shine.style.animation = 'shine 1s ease-in-out';
                    }, 10);
                }
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (engravedElement) {
                setTimeout(() => {
                    engravedElement.classList.add('hidden');
                }, 300);
            }
        });
    });
}

// Mobile touch interactions
function setupMobileTouchInteractions() {
    const engravedLogos = document.querySelectorAll('.engraved-logo');
    
    engravedLogos.forEach(logo => {
        logo.addEventListener('touchstart', (e) => {
            e.preventDefault();
            logo.classList.add('touch-active');
            setTimeout(() => logo.classList.remove('touch-active'), 600);
        });
        
        logo.addEventListener('mouseenter', () => {
            if (window.innerWidth > 768) {
                logo.classList.add('touch-active');
            }
        });
        
        logo.addEventListener('mouseleave', () => {
            if (window.innerWidth > 768) {
                setTimeout(() => logo.classList.remove('touch-active'), 600);
            }
        });
    });
}

// Scroll animations for About section
function setupAboutSectionAnimations() {
    const forgedSection = document.querySelector('.forged-section');
    if (!forgedSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const aboutEngraved = entry.target.querySelector('.about-engraved');
                const forgedContent = entry.target.querySelector('.forged-content');
                
                if (aboutEngraved) {
                    aboutEngraved.style.animation = 'aboutLogoGlow 4s ease-in-out infinite';
                }
                
                if (forgedContent) {
                    forgedContent.style.opacity = '0';
                    forgedContent.style.transform = 'translateX(50px)';
                    setTimeout(() => {
                        forgedContent.style.transition = 'all 0.8s ease-out';
                        forgedContent.style.opacity = '1';
                        forgedContent.style.transform = 'translateX(0)';
                    }, 300);
                }
            }
        });
    }, { threshold: 0.3 });

    observer.observe(forgedSection);
}

// Contact form handling
function handleContactSubmission(e) {
    e.preventDefault();
    
    const data = {
        name: document.getElementById('name')?.value,
        email: document.getElementById('email')?.value,
        phone: document.getElementById('phone')?.value,
        hostel: document.getElementById('hostel')?.value,
        message: document.getElementById('message')?.value
    };
    
    if (!data.name || !data.email || !data.phone) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    if (!isValidEmail(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Stamping effect
    submitButton.style.transform = 'scale(0.95)';
    submitButton.style.boxShadow = 'inset 0 0 20px rgba(139, 157, 195, 0.5)';
    
    setTimeout(() => {
        submitButton.style.transform = '';
        submitButton.style.boxShadow = '';
        showNotification('Thank you! We\'ll get back to you within 24 hours.', 'success');
        e.target.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 1500);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showNotification(message, type = 'info') {
    document.querySelectorAll('.notification').forEach(notif => notif.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    Object.assign(notification.style, {
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
    });
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.style.transform = 'translateX(0)', 100);
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Mobile menu functions
function toggleMobileMenu() {
    if (window.AppState.isMenuOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function openMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        Object.assign(navMenu.style, {
            display: 'flex',
            position: 'absolute',
            top: '100%',
            left: '0',
            right: '0',
            background: 'white',
            flexDirection: 'column',
            padding: '1rem',
            boxShadow: '0 10px 30px rgba(74, 74, 122, 0.15)',
            borderRadius: '0 0 12px 12px',
            zIndex: '1001'
        });
    }
    window.AppState.isMenuOpen = true;
}

function closeMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        Object.assign(navMenu.style, {
            display: '', position: '', top: '', left: '', right: '',
            background: '', flexDirection: '', padding: '', boxShadow: '',
            borderRadius: '', zIndex: ''
        });
    }
    window.AppState.isMenuOpen = false;
}

// Testimonial rotation
function startTestimonialRotation() {
    window.AppState.testimonialInterval = setInterval(() => {
        const nextIndex = (window.AppState.currentTestimonial + 1) % 3;
        window.showTestimonial(nextIndex);
    }, 5000);
}

function stopTestimonialRotation() {
    if (window.AppState.testimonialInterval) {
        clearInterval(window.AppState.testimonialInterval);
        window.AppState.testimonialInterval = null;
    }
}

// Initialize everything
function initializeApp() {
    console.log('Initializing Crystal Rock with enhanced engraved logo...');
    
    // Start loading sequence
    initLoadingSequence();
    
    // Setup navigation
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('href').substring(1);
            window.navigateToPage(targetPage);
        });
    });
    
    // Setup mobile menu
    const menuToggle = document.getElementById('navToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Setup testimonial controls
    const dots = document.querySelectorAll('.testimonials__dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => window.showTestimonial(index));
    });
    
    // Setup contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmission);
    }
    
    // Setup modal
    const modal = document.getElementById('hostelModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal || e.target.classList.contains('modal__backdrop')) {
                window.closeModal();
            }
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                window.closeModal();
            }
        });
    }
    
    // Setup all engraved logo interactions
    setupHostelCardInteractions();
    setupMobileTouchInteractions();
    setupAboutSectionAnimations();
    
    // Setup scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.hostel-card, .amenity-card, .value-card, .mess-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // Start testimonial rotation
    startTestimonialRotation();
    
    // Handle resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && window.AppState.isMenuOpen) {
            closeMobileMenu();
        }
    });
    
    console.log('Crystal Rock initialization complete!');
}

// Initialize when ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}