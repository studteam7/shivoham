// Main JavaScript - Navigation and Global Logic

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Navigation Logic ---
    const navLinks = document.querySelectorAll('#main-nav a, #mobile-menu-overlay a');
    const sections = document.querySelectorAll('section');
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu-overlay');
    const closeMenu = document.querySelector('.close-menu');

    // Function to handle section switching
    window.navigateTo = (sectionId) => {
        // Hide all sections
        sections.forEach(sec => sec.classList.remove('active-section'));
        
        // Show target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active-section');
            
            // Update Active Link State
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === sectionId) {
                    link.classList.add('active');
                }
            });

            // Close mobile menu if open
            mobileMenu.classList.remove('active');
            
            // Scroll to top
            window.scrollTo(0, 0);
        }
    };

    // Event Listeners for Nav Links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            navigateTo(sectionId);
        });
    });

    // Mobile Menu Toggle
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    // Close menu when clicking outside (optional enhancement)
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            mobileMenu.classList.remove('active');
        }
    });

    // --- Global Animations / Interactivity ---
    
    // Simple intersection observer for fade-in elements (optional polish)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initial load handling
    // Check if URL has hash, else default to home
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        navigateTo(hash);
    } else {
        navigateTo('home');
    }

    console.log("PathPilot Main JS Loaded");
});
