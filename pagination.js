  document.addEventListener('DOMContentLoaded', () => {
            const postsContainer = document.getElementById('blog-posts-container');
            const blogCards = postsContainer.querySelectorAll('.blog-card');
            const postCountDisplayTop = document.getElementById('post-count-display');
            const postCountDisplayBottom = document.getElementById('bottom-post-count-display');
            const paginationControls = document.getElementById('pagination-controls');
            const prevButton = document.getElementById('prev-page');
            const nextButton = document.getElementById('next-page');

            const postsPerPage = 6; // Number of posts to display per page
            let currentPage = 1;
            const totalPosts = blogCards.length;
            const totalPages = Math.ceil(totalPosts / postsPerPage);

            /**
             * Displays the blog posts for the given page number.
             * @param {number} page - The page number to display.
             */
            function displayPage(page) {
                // Calculate start and end index for the current page
                const startIndex = (page - 1) * postsPerPage;
                const endIndex = Math.min(startIndex + postsPerPage, totalPosts);

                // Hide all posts first
                blogCards.forEach(card => {
                    card.style.display = 'none';
                });

                // Display posts for the current page
                for (let i = startIndex; i < endIndex; i++) {
                    blogCards[i].style.display = 'flex'; // Use 'flex' as per CSS display property
                }

                // Update the post count text
                const displayedStart = startIndex + 1;
                const displayedEnd = endIndex;
                const countText = `Viewing ${displayedStart} - ${displayedEnd} out of ${totalPosts} posts`;
                postCountDisplayTop.textContent = countText;
                postCountDisplayBottom.textContent = countText;

                // Update pagination controls
                updatePaginationButtons();
                updateActivePageButton();

                // Scroll to the top of the blog section for better UX
                document.querySelector('.blog-section').scrollIntoView({ behavior: 'smooth' });
            }

            /**
             * Updates the disabled state of the 'Previous' and 'Next' buttons.
             */
            function updatePaginationButtons() {
                prevButton.disabled = currentPage === 1;
                nextButton.disabled = currentPage === totalPages;
            }

            /**
             * Generates and updates the page number buttons in the pagination control.
             */
            function setupPaginationButtons() {
                // Clear existing page number buttons (keep prev and next)
                const existingPageButtons = paginationControls.querySelectorAll('.page-button');
                existingPageButtons.forEach(button => button.remove());

                for (let i = 1; i <= totalPages; i++) {
                    const button = document.createElement('button');
                    button.textContent = i;
                    button.classList.add('page-button');
                    button.dataset.page = i; // Store page number in a data attribute
                    button.addEventListener('click', () => {
                        currentPage = i;
                        displayPage(currentPage);
                    });
                    // Insert page number buttons between 'Previous' and 'Next'
                    paginationControls.insertBefore(button, nextButton);
                }
                updateActivePageButton(); // Set initial active button
            }

            /**
             * Updates the 'active' class on page number buttons.
             */
            function updateActivePageButton() {
                const pageButtons = paginationControls.querySelectorAll('.page-button');
                pageButtons.forEach(button => {
                    if (parseInt(button.dataset.page) === currentPage) {
                        button.classList.add('active');
                    } else {
                        button.classList.remove('active');
                    }
                });
            }

            // Event listeners for Previous and Next buttons
            prevButton.addEventListener('click', () => {
                if (currentPage > 1) {
                    currentPage--;
                    displayPage(currentPage);
                }
            });

            nextButton.addEventListener('click', () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    displayPage(currentPage);
                }
            });

            // Initial setup on page load
            setupPaginationButtons();
            displayPage(currentPage); // Display the first page
        });