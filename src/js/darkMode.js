// Check for saved theme preference, otherwise use system preference
const getThemePreference = () => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme');
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Apply theme
const applyTheme = (theme) => {
    console.log('Applying theme:', theme);
    const root = document.documentElement;
    const isDark = theme === 'dark';
    
    if (isDark) {
        root.classList.add('dark');
        root.classList.remove('light');
    } else {
        root.classList.add('light');
        root.classList.remove('dark');
    }
    
    console.log('Current classes:', root.classList.toString());
    localStorage.setItem('theme', theme);
    
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        themeIcon.style.transform = isDark ? 'rotate(180deg)' : 'rotate(0)';
    }
};

// Initialize theme
const initializeTheme = () => {
    const theme = getThemePreference();
    console.log('Initial theme:', theme);
    applyTheme(theme);
    
    // Add click event listener to theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        console.log('Theme toggle button found');
        themeToggle.addEventListener('click', () => {
            console.log('Theme toggle clicked');
            const current = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
            console.log('Switching to theme:', current);
            applyTheme(current);
        });
    } else {
        console.error('Theme toggle button not found');
    }
};

export { initializeTheme }; 