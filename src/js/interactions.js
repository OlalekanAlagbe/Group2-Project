document.addEventListener('DOMContentLoaded', () => {
    // Price cards hover effect
    const priceCards = document.querySelectorAll('.hover-card');
    
    priceCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Feature cards animation
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.feature-icon');
            icon.classList.add('animate-spin-slow');
        });

        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.feature-icon');
            icon.classList.remove('animate-spin-slow');
        });
    });
}); 