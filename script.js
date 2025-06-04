// Tab functionality
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    document.querySelector(`.tab-links[onclick="opentab('${tabname}')"]`).classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Form submission with EmailJS
const form = document.getElementById("contact-form");
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    emailjs.sendForm('service_p4ev0qe', 'template_h07xili', form, 'n46Q3KgNQmJPTHzjC')
        .then(() => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        }, (error) => {
            console.error('Failed to send email:', error);
            msg.innerHTML = "Failed to send message. Please try again.";
        });
});

// Scroll Animation and Loader
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    const services = document.querySelectorAll('.services-list > div');
    const projects = document.querySelectorAll('.work');

    services.forEach(service => observer.observe(service));
    projects.forEach(project => observer.observe(project));

    // Initialize Vanilla Tilt for project cards
    VanillaTilt.init(document.querySelectorAll('.work'), {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.5
    });

    // Loader
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.innerHTML = '<div class="loader-particle"></div>';
    document.body.prepend(loader);

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 1500);
    });

    // Auto-activate Skills tab when navigating to About section
    document.querySelector('nav ul li a[href="#about"]').addEventListener('click', () => {
        setTimeout(() => opentab('Skills'), 100); // Delay to ensure smooth scroll
    });
});