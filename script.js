// Portfolio Website JavaScript
// Author: Manus AI
// Description: Interactive functionality for Sohail Yasser's portfolio website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initThemeToggle();
    initMobileNavigation();
    initSmoothScrolling();
    initProjectModals();
    initContactForm();
    initScrollAnimations();
    initActiveNavigation();
    initTypingEffect();
    
    console.log('Portfolio website initialized successfully!');
});

// Theme Toggle Functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        icon.className = 'fas fa-sun';
    } else {
        // Default to dark mode
        icon.className = 'fas fa-moon';
    }
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            icon.className = 'fas fa-sun';
        } else {
            localStorage.setItem('theme', 'dark');
            icon.className = 'fas fa-moon';
        }
        
        // Add a subtle animation to the toggle
        themeToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
    });
}

// Mobile Navigation
function initMobileNavigation() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Project Modal Functionality
function initProjectModals() {
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('projectModal');
    const closeButton = document.querySelector('.close-button');
    
    // Project data
    const projectData = {
        blockchain: {
            title: 'Blockchain-Based Cryptocurrency System',
            tech: ['Node.js', 'REST API', 'TCP', 'SHA256', 'JavaScript', 'HTML/CSS'],
            description: 'A comprehensive full-stack cryptocurrency system built from scratch, demonstrating deep understanding of blockchain technology and distributed systems. This project showcases advanced programming skills and knowledge of cryptographic principles.',
            features: [
                'Complete blockchain implementation with proof-of-work consensus',
                'RESTful API for wallet operations and transaction management',
                'TCP-based peer-to-peer network synchronization',
                'SHA256 cryptographic hashing for block integrity',
                'Responsive web interface for user interactions',
                'Wallet simulation with balance tracking',
                'Transaction validation and mining functionality',
                'Real-time network status monitoring'
            ],
            github: 'https://github.com/0xshl7/blockchain-cryptocurrency',
            demo: '#'
        },
        scanner: {
            title: 'Web Vulnerability Scanner',
            tech: ['Python', 'HTTP Requests', 'OWASP Top 10', 'Security Testing', 'Automation'],
            description: 'An automated security testing tool designed to identify common web vulnerabilities. Built with Python and following OWASP guidelines, this scanner helps security professionals identify potential threats in web applications.',
            features: [
                'Automated SQL Injection detection with multiple payload types',
                'Cross-Site Scripting (XSS) vulnerability identification',
                'Custom HTTP request crafting and response analysis',
                'Comprehensive vulnerability reporting system',
                'OWASP Top 10 compliance and classification',
                'Multi-threaded scanning for improved performance',
                'False positive reduction algorithms',
                'Export reports in multiple formats (JSON, HTML, PDF)'
            ],
            github: 'https://github.com/0xshl7/web-vulnerability-scanner',
            demo: '#'
        }
    };
    
    // Open modal when project card is clicked
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectKey = this.getAttribute('data-project');
            const project = projectData[projectKey];
            
            if (project) {
                populateModal(project);
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                
                // Add animation
                setTimeout(() => {
                    modal.querySelector('.modal-content').style.transform = 'scale(1)';
                    modal.querySelector('.modal-content').style.opacity = '1';
                }, 10);
            }
        });
    });
    
    // Close modal functionality
    function closeModal() {
        modal.querySelector('.modal-content').style.transform = 'scale(0.9)';
        modal.querySelector('.modal-content').style.opacity = '0';
        
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }
    
    closeButton.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
    
    // Populate modal with project data
    function populateModal(project) {
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalDescription').textContent = project.description;
        
        // Populate tech stack
        const modalTech = document.getElementById('modalTech');
        modalTech.innerHTML = project.tech.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        // Populate features
        const modalFeatures = document.getElementById('modalFeatures');
        modalFeatures.innerHTML = `
            <h4>Key Features</h4>
            <ul>
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;
        
        // Update action buttons
        document.getElementById('modalGithub').href = project.github;
        document.getElementById('modalDemo').href = project.demo;
        
        // Hide demo button if no demo available
        const demoButton = document.getElementById('modalDemo');
        if (project.demo === '#') {
            demoButton.style.display = 'none';
        } else {
            demoButton.style.display = 'inline-flex';
        }
    }
    
    // Initialize modal content styles
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.transform = 'scale(0.9)';
    modalContent.style.opacity = '0';
    modalContent.style.transition = 'all 0.3s ease';
}

// Contact Form Validation
function initContactForm() {
    const form = document.getElementById('contactForm');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const subjectField = document.getElementById('subject');
    const messageField = document.getElementById('message');
    const successMessage = document.getElementById('formSuccess');
    
    // Real-time validation
    nameField.addEventListener('blur', () => validateField(nameField, 'nameError', validateName));
    emailField.addEventListener('blur', () => validateField(emailField, 'emailError', validateEmail));
    subjectField.addEventListener('blur', () => validateField(subjectField, 'subjectError', validateSubject));
    messageField.addEventListener('blur', () => validateField(messageField, 'messageError', validateMessage));
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields
        const isNameValid = validateField(nameField, 'nameError', validateName);
        const isEmailValid = validateField(emailField, 'emailError', validateEmail);
        const isSubjectValid = validateField(subjectField, 'subjectError', validateSubject);
        const isMessageValid = validateField(messageField, 'messageError', validateMessage);
        
        if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
            // Simulate form submission
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! Your message has been sent successfully.';
                successMessage.classList.add('show');
                
                // Reset form
                form.reset();
                
                // Reset button
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.classList.remove('show');
                }, 5000);
            }, 2000);
        }
    });
    
    // Validation functions
    function validateField(field, errorId, validationFunction) {
        const errorElement = document.getElementById(errorId);
        const result = validationFunction(field.value);
        
        if (result.isValid) {
            field.style.borderColor = 'var(--success-color)';
            errorElement.textContent = '';
            errorElement.classList.remove('show');
            return true;
        } else {
            field.style.borderColor = 'var(--error-color)';
            errorElement.textContent = result.message;
            errorElement.classList.add('show');
            return false;
        }
    }
    
    function validateName(name) {
        if (!name.trim()) {
            return { isValid: false, message: 'Name is required' };
        }
        if (name.trim().length < 2) {
            return { isValid: false, message: 'Name must be at least 2 characters long' };
        }
        return { isValid: true };
    }
    
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            return { isValid: false, message: 'Email is required' };
        }
        if (!emailRegex.test(email)) {
            return { isValid: false, message: 'Please enter a valid email address' };
        }
        return { isValid: true };
    }
    
    function validateSubject(subject) {
        if (!subject.trim()) {
            return { isValid: false, message: 'Subject is required' };
        }
        if (subject.trim().length < 5) {
            return { isValid: false, message: 'Subject must be at least 5 characters long' };
        }
        return { isValid: true };
    }
    
    function validateMessage(message) {
        if (!message.trim()) {
            return { isValid: false, message: 'Message is required' };
        }
        if (message.trim().length < 10) {
            return { isValid: false, message: 'Message must be at least 10 characters long' };
        }
        return { isValid: true };
    }
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.skill-category, .project-card, .blog-card, .timeline-item, .about-stats .stat, .contact-item'
    );
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Active Navigation Highlighting
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveNav() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call
}

// Typing Effect for Hero Section
function initTypingEffect() {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (!heroSubtitle) return;
    
    const titles = [
        'Aspiring SOC Intern & Cybersecurity Professional',
        'Threat Detection Specialist',
        'Incident Response Analyst',
        'Vulnerability Assessment Expert'
    ];
    
    let currentTitleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const currentTitle = titles[currentTitleIndex];
        
        if (isDeleting) {
            heroSubtitle.textContent = currentTitle.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            heroSubtitle.textContent = currentTitle.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && currentCharIndex === currentTitle.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentTitleIndex = (currentTitleIndex + 1) % titles.length;
            typeSpeed = 500; // Pause before starting new title
        }
        
        setTimeout(typeEffect, typeSpeed);
    }
    
    // Start typing effect after a delay
    setTimeout(typeEffect, 1000);
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    // Add any scroll-based functionality here
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Preload critical resources
function preloadResources() {
    const criticalImages = [
        // Add any critical images here
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
preloadResources();

// Error handling for missing elements
function safeQuerySelector(selector, callback) {
    const element = document.querySelector(selector);
    if (element && callback) {
        callback(element);
    }
    return element;
}

// Add loading states
function addLoadingState(element) {
    element.classList.add('loading');
}

function removeLoadingState(element) {
    element.classList.remove('loading');
}

// Social media sharing (future enhancement)
function shareOnSocialMedia(platform, url, text) {
    const shareUrls = {
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    };
    
    if (shareUrls[platform]) {
        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
}

// Analytics tracking (placeholder for future implementation)
function trackEvent(eventName, eventData) {
    // Placeholder for analytics tracking
    console.log(`Event tracked: ${eventName}`, eventData);
}

// Accessibility enhancements
function initAccessibility() {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--accent-primary);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1001;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main landmark
    const main = document.querySelector('main');
    if (main) {
        main.id = 'main';
    }
}

// Initialize accessibility features
initAccessibility();

// Service Worker registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker registration would go here
        console.log('Service Worker support detected');
    });
}

console.log('Portfolio website JavaScript loaded successfully!');
