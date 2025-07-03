// Get all sections
const sections = document.querySelectorAll('section');

// Add fade-in animation to each section
sections.forEach((section) => {
    section.classList.add('fade-in');
});

// Get all images
const images = document.querySelectorAll('img');

// Add event listener to each image
images.forEach((image) => {
    image.addEventListener('load', () => {
        // Remove loading animation
        image.classList.remove('loading');
    });
});

// Get all links
const links = document.querySelectorAll('a');

// Add event listener to each link
links.forEach((link) => {
    link.addEventListener('click', (e) => {
        // Prevent default link behavior
        e.preventDefault();
        // Get the href attribute
        const href = link.getAttribute('href');
        // Scroll to the corresponding section
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    });
});