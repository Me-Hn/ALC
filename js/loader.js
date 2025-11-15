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

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav a[href^="#"], .navbar a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Only apply smooth scroll if:
            // 1. href starts with # (anchor on same page) AND
            // 2. the target actually exists on the current page
            if (href === '#' || href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault(); // Safe to prevent now
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Optional: Update URL without jumping
                    history.pushState(null, null, href);
                }
            }
            // If href is about.html, courses.html, contact.html → do NOTHING
            // → normal navigation works perfectly
        });
    });
});
