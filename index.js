function toggleMenu() {
        const menu = document.getElementById('mobileNav');
        menu.classList.toggle('open');
    }

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    function goToSlide(index) {
        showSlide(index);
    }

    setInterval(nextSlide, 5000); // Auto slide every 5 seconds







    document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const dotsContainer2 = document.querySelector('.slider-dots');
    let currentIndex = 0;


    function toggleMenu() {
    document.getElementById("mobileNav").classList.toggle("open");
}

// Enable submenus on mobile
document.querySelectorAll('.mobile-nav .dropdown > a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        this.parentElement.classList.toggle('open');
    });
});

    // Create dots dynamically
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        dotsContainer2.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot'); // Re-select dots after they are created

    function updateSlider() {
        const offset = -currentIndex * 100;
        sliderWrapper.style.transform = `translateX(${offset}%)`;

        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        if (index < 0) {
            currentIndex = slides.length - 1; // Loop to last slide
        } else if (index >= slides.length) {
            currentIndex = 0; // Loop to first slide
        } else {
            currentIndex = index;
        }
        updateSlider();
    }

    prevArrow.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
    });

    nextArrow.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
    });

    // Optional: Auto-play functionality (uncomment to enable)
    // let autoSlideInterval = setInterval(() => {
    //     goToSlide(currentIndex + 1);
    // }, 5000); // Change slide every 5 seconds

    // Optional: Pause auto-play on hover (if auto-play is enabled)
    // sliderWrapper.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    // sliderWrapper.addEventListener('mouseleave', () => {
    //     autoSlideInterval = setInterval(() => {
    //         goToSlide(currentIndex + 1);
    //     }, 5000);
    // });

    // Initialize slider position
    updateSlider();
});



function openTab(evt, tabId) {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(btn => btn.classList.remove('active'));
  tabPanes.forEach(pane => pane.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  evt.currentTarget.classList.add('active');
}


document.addEventListener('DOMContentLoaded', () => {
            const petCareSection = document.getElementById('petCareSection');
            const imageContainer = petCareSection.querySelector('.image-background-shape');
            const textElements = petCareSection.querySelectorAll('.fade-in-up');
            const accordionHeaders = document.querySelectorAll('.accordion-header');

            // Intersection Observer for initial animations
            const observerOptions = {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 0.3 // Trigger when 30% of the section is visible
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Animate image
                        imageContainer.classList.add('animate-in');

                        // Animate text elements with a delay
                        textElements.forEach((el, index) => {
                            el.style.transitionDelay = `${index * 0.1}s`;
                            el.classList.add('animate');
                        });

                        // Only observe once
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            observer.observe(petCareSection);

            // Accordion functionality
            accordionHeaders.forEach(header => {
                header.addEventListener('click', () => {
                    const accordionItem = header.closest('.accordion-item');
                    const accordionContent = accordionItem.querySelector('.accordion-content');

                    // Close any currently open accordion item if a new one is clicked
                    document.querySelectorAll('.accordion-content.open').forEach(openContent => {
                        if (openContent !== accordionContent) {
                            openContent.style.maxHeight = '0';
                            openContent.classList.remove('open');
                            openContent.closest('.accordion-item').querySelector('.accordion-header').classList.remove('active');
                        }
                    });

                    // Toggle active class on header for icon rotation
                    header.classList.toggle('active');

                    // Toggle content visibility and animate height
                    if (accordionContent.classList.contains('open')) {
                        accordionContent.style.maxHeight = '0';
                        accordionContent.classList.remove('open');
                    } else {
                        // Set max-height to scrollHeight for smooth transition
                        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                        accordionContent.classList.add('open');
                    }
                });
            });
        });


      