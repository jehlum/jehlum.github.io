document.addEventListener('DOMContentLoaded', () => {
    // Optional: Add smooth scrolling to sections
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(link.getAttribute('href'));
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Optional: Add subtle animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe project cards and sections
    const sections = document.querySelectorAll('.about-me, .featured-projects');
    sections.forEach(section => observer.observe(section));
});