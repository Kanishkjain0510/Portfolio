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
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Side menu functionality
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

// Form submission with EmailJS
const form = document.getElementById("contact-form");
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();

    // Send email via EmailJS
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