document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    let isMenuOpen = false;

    // Handle scroll behavior
    let lastScroll = 0;
    const navbar = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.classList.remove('shadow-lg');
            navbar.classList.remove('-translate-y-full');
        }
        
        if (currentScroll > lastScroll && currentScroll > 80) {
            // Scrolling down & past navbar
            navbar.classList.add('-translate-y-full');
        } else {
            // Scrolling up
            navbar.classList.remove('-translate-y-full');
            navbar.classList.add('shadow-lg');
        }
        
        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    mobileMenuButton.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('animate-fade-in-down');
            menuIcon.classList.add('rotate-90');
        } else {
            mobileMenu.classList.add('animate-fade-out-up');
            menuIcon.classList.remove('rotate-90');
            
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('animate-fade-out-up');
            }, 300);
        }
    });


    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (isMenuOpen && !mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
            isMenuOpen = false;
            mobileMenu.classList.add('animate-fade-out-up');
            menuIcon.classList.remove('rotate-90');
            
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('animate-fade-out-up');
            }, 300);
        }
    });
}); 