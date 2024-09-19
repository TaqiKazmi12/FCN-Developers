
// Header Starting

document.addEventListener("DOMContentLoaded", function() {
    const headings = [
        "Welcome to FCN Developers",
        "We Provide Real Estate Solutions",
        "Experts in High-Rise Buildings",
        "Let Us Help You Find Your Dream Property"
    ];
    let currentHeadingIndex = 0;
    const dynamicHeading = document.getElementById('dynamic-heading');
    
    function typeEffect(text, callback) {
        dynamicHeading.classList.remove('slide-in'); 
        dynamicHeading.classList.add('slide-out'); 
        setTimeout(() => {
            dynamicHeading.textContent = ''; 
            dynamicHeading.classList.remove('slide-out'); 
            dynamicHeading.classList.add('slide-in'); 

            let i = 0;
            function typing() {
                if (i < text.length) {
                    dynamicHeading.textContent += text.charAt(i);
                    i++;
                    setTimeout(typing, 100); 
                } else {
                    setTimeout(callback, 2000); 
                }
            }
            typing();
        }, 500); 
    }
    function cycleHeadings() {
        typeEffect(headings[currentHeadingIndex], () => {
            currentHeadingIndex = (currentHeadingIndex + 1) % headings.length;
            cycleHeadings(); 
        });
    }

    cycleHeadings();
});
// Header Ending

// Contact Us Starting
document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.contact-us-section');
    const wrapper = document.querySelector('.contact-us-wrapper');
    const form = document.querySelector('.contact-form');
    const companyInfo = document.querySelector('.company-info');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
                
                wrapper.style.opacity = '1';
                wrapper.style.transform = 'translateY(0)';
                
                form.style.opacity = '1';
                form.style.transform = 'translateY(0)';
                
                companyInfo.style.opacity = '1';
                companyInfo.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    observer.observe(section);
});
// Contact Us Ending


   // Galllery Starting
   document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll('.gallery-item');

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    galleryItems.forEach(item => {
        observer.observe(item);
    });
});
// Galllery Ending


  // Testimonial Starting
  document.addEventListener("DOMContentLoaded", function () {
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    testimonialCards.forEach(card => {
        observer.observe(card);
    });
});
// Testimonial Ending

// Faq Starting
document.addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll('.faq-item');
    const images = document.querySelectorAll('.faqs-image');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    faqs.forEach(faq => {
        observer.observe(faq);
        faq.querySelector('.faq-question').addEventListener('click', () => {
            faq.classList.toggle('active');
        });
    });

    images.forEach(image => {
        observer.observe(image);
    });
});

// Faq Ending

// CTA Starting
document.addEventListener("DOMContentLoaded", function() {
    const ctaSection = document.querySelector('.cta-section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeInUp');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(ctaSection);
});

// CTA Ending
