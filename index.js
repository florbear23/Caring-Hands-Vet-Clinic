function toggleMenu() {
        const menu = document.getElementById('mobileNav');
        menu.classList.toggle('open');
    }

    function toggleMenu() {
    document.getElementById("mobileNav").classList.toggle("open");
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




         // Get the button
        let scrollToTopBtn = document.getElementById("scrollToTopBtn");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() { scrollFunction() };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        function scrollToTop() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }


         
        // No specific JavaScript functionality is needed for this single article layout,
        // but a basic window.onload log is kept for consistency.
        window.onload = () => {
            console.log('Single article page loaded successfully.');
        };

        window.addEventListener('resize', () => {
            console.log('Window resized. Layout should adapt.');
        });



            // Get references to the loading page and main content elements
        const loadingPage = document.getElementById('loadingPage');
        const mainContent = document.getElementById('mainContent');

        // Function to hide the loading page and show the main content
        function hideLoadingPage() {
            // Add the 'hidden' class to fade out the loading page
            loadingPage.classList.add('hidden');

            // After the transition, completely hide the loading page and display main content
            loadingPage.addEventListener('transitionend', () => {
                loadingPage.style.display = 'none'; // Completely remove from layout
                mainContent.style.display = 'block'; // Show the main content
            }, { once: true }); // Ensure the event listener only runs once
        }

        // Simulate a network request or content loading delay
        // You can replace this with actual data fetching logic
        window.addEventListener('load', () => {
            // Set a timeout to hide the loading page after 3 seconds (3000 milliseconds)
            setTimeout(hideLoadingPage, 5000);
        });

        