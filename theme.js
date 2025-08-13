// Theme Management System for Hindi Cell Website
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.html = document.documentElement;
        this.init();
    }
    
    init() {
        // Check for saved theme preference, system preference, or default to light theme
        const currentTheme = this.getInitialTheme();
        this.applyTheme(currentTheme);
        
        // Add event listeners
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
        this.listenForSystemChanges();
    }
    
    getInitialTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        
        return 'light';
    }
    
    applyTheme(theme) {
        this.html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.updateThemeButton(theme);
        
        // Dispatch custom event for other scripts
        window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
    }
    
    toggleTheme() {
        const currentTheme = this.html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
    }
    
    listenForSystemChanges() {
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', (e) => {
                // Only auto-switch if user hasn't manually set a preference
                if (!localStorage.getItem('theme')) {
                    const newTheme = e.matches ? 'dark' : 'light';
                    this.applyTheme(newTheme);
                }
            });
        }
    }
    
    updateThemeButton(theme) {
        const icon = this.themeToggle.querySelector('.icon');
        const text = this.themeToggle.querySelector('.text');
        
        if (theme === 'dark') {
            icon.textContent = '☀️';
            text.textContent = 'Light';
            this.themeToggle.setAttribute('data-theme', 'dark');
        } else {
            icon.textContent = '🌙';
            text.textContent = 'Dark';
            this.themeToggle.removeAttribute('data-theme');
        }
    }
    
    // Get current theme
    getCurrentTheme() {
        return this.html.getAttribute('data-theme') || 'light';
    }
    
    // Set theme programmatically
    setTheme(theme) {
        if (['light', 'dark'].includes(theme)) {
            this.applyTheme(theme);
        }
    }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ThemeManager;
} 