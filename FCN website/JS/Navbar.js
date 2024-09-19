document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    let lastScrollTop = 0;

    // Toggle navbar links for mobile when hamburger is clicked
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Hide or show navbar based on scroll direction
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // User is scrolling down, hide the navbar
            navbar.classList.add('hidden');
        } else {
            // User is scrolling up, show the navbar
            navbar.classList.remove('hidden');
        }

        // When user scrolls back to the top, reset the navbar position
        if (scrollTop === 0) {
            navbar.classList.remove('hidden');
        }

        lastScrollTop = scrollTop;
    });

    // Highlight the active link based on current URL
    const links = document.querySelectorAll('.nav-links li a');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});

// Loader
document.addEventListener('DOMContentLoaded', function () {
    const loader = document.getElementById('loader');
    const spinner = document.getElementById('spinner');
    document.body.classList.add('no-');   
    const randomTime = Math.floor(Math.random() * 2000) + 1000; 
    setTimeout(() => {
        loader.style.display = 'none'; 

        spinner.style.display = 'none';


        setTimeout(() => {
            document.body.classList.remove('no-scroll'); 
        }, 500); 
    }, randomTime);
});

// Loader