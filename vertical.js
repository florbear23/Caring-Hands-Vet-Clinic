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