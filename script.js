// Mobile menu toggle
document.getElementById('menu-btn').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('show');
    this.innerHTML = document.getElementById('nav-links').classList.contains('show') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight - 100) {
            el.classList.add('visible');
        }
    });
}

// Navigation highlighting
function updateNav() {
    const sections = document.querySelectorAll('section');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
}

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Event listeners
window.addEventListener('scroll', function() {
    animateOnScroll();
    updateNav();
});

window.addEventListener('load', animateOnScroll);

// Handle nav clicks
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('nav-links').classList.remove('show');
        document.getElementById('menu-btn').innerHTML = '<i class="fas fa-bars"></i>';
    });
});
