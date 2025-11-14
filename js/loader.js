    // for loader code start


        // Wait for the page to fully load
        window.addEventListener('load', function () {
            setTimeout(function () {
                const loader = document.getElementById('page-loader');
                const mainContent = document.querySelector('body > :not(#page-loader)');

                if (loader) {
                    // Add fade-out class to loader
                    loader.classList.add('fade-out');

                    // Remove loader after animation completes
                    setTimeout(function () {
                        loader.remove();

                        // Enable smooth scrolling for the entire page
                        document.documentElement.style.scrollBehavior = 'smooth';
                        document.body.style.scrollBehavior = 'smooth';
                    }, 500); // Match with your CSS transition time
                }
            }, 2000); // Adjust this delay to control loader visibility duration
        });;

        // for smoth scrolling end
         // Additional JavaScript for enhanced functionality
        document.addEventListener('DOMContentLoaded', function() {
            const links = document.querySelectorAll('nav a');
            
            links.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        });