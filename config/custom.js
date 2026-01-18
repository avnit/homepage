/**
 * Custom JavaScript for Homepage Dashboard
 * Author: ASB Solutions
 */

(function () {
    'use strict';

    // ========================================
    // CONFIGURATION
    // ========================================
    const CONFIG = {
        enableKeyboardShortcuts: true,
        enableServiceSearch: true,
        enableNotifications: true,
        debugMode: false
    };

    // ========================================
    // UTILITY FUNCTIONS
    // ========================================

    /**
     * Log messages only in debug mode
     */
    function debugLog(message) {
        if (CONFIG.debugMode) {
            console.log('[Homepage Custom]', message);
        }
    }

    /**
     * Wait for DOM to be ready
     */
    function onReady(callback) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', callback);
        } else {
            callback();
        }
    }

    // ========================================
    // KEYBOARD SHORTCUTS
    // ========================================

    /**
     * Initialize keyboard shortcuts
     * Press '/' to focus search
     * Press 'Escape' to blur search
     * Press '?' to show help
     */
    function initKeyboardShortcuts() {
        if (!CONFIG.enableKeyboardShortcuts) return;

        document.addEventListener('keydown', function (e) {
            // Don't trigger if user is typing in an input
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                if (e.key === 'Escape') {
                    e.target.blur();
                }
                return;
            }

            switch (e.key) {
                case '/':
                    e.preventDefault();
                    const searchInput = document.querySelector('input[type="search"], input[type="text"]');
                    if (searchInput) {
                        searchInput.focus();
                    }
                    break;

                case '?':
                    showKeyboardHelp();
                    break;

                case 'r':
                    // Refresh the page
                    if (!e.ctrlKey && !e.metaKey) {
                        location.reload();
                    }
                    break;

                case 't':
                    // Toggle theme (if supported)
                    toggleTheme();
                    break;
            }
        });

        debugLog('Keyboard shortcuts initialized');
    }

    /**
     * Show keyboard shortcuts help
     */
    function showKeyboardHelp() {
        const helpText = `
Homepage Keyboard Shortcuts:
━━━━━━━━━━━━━━━━━━━━━━━━━━━
/     - Focus search
Esc   - Blur search/Close dialogs
r     - Refresh page
t     - Toggle theme
?     - Show this help
    `;
        alert(helpText);
    }

    // ========================================
    // THEME TOGGLE
    // ========================================

    /**
     * Toggle between light and dark theme
     */
    function toggleTheme() {
        const html = document.documentElement;
        const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        html.classList.remove(currentTheme);
        html.classList.add(newTheme);

        // Store preference
        localStorage.setItem('homepage-theme', newTheme);

        debugLog('Theme toggled to: ' + newTheme);
    }

    // ========================================
    // SERVICE STATUS CHECK
    // ========================================

    /**
     * Add visual indicator for service status
     */
    function enhanceServiceStatus() {
        const serviceCards = document.querySelectorAll('.service-card, [class*="service"]');

        serviceCards.forEach(card => {
            // Add status indicator animation class
            const statusDot = card.querySelector('[class*="status"]');
            if (statusDot && !statusDot.classList.contains('status-enhanced')) {
                statusDot.classList.add('status-enhanced');
            }
        });

        debugLog('Service status enhanced');
    }

    // ========================================
    // CLOCK UPDATE
    // ========================================

    /**
     * Update any custom clocks
     */
    function initClock() {
        const clockElement = document.getElementById('custom-clock');
        if (!clockElement) return;

        function updateClock() {
            const now = new Date();
            clockElement.textContent = now.toLocaleTimeString();
        }

        updateClock();
        setInterval(updateClock, 1000);

        debugLog('Clock initialized');
    }

    // ========================================
    // GREETING MESSAGE
    // ========================================

    /**
     * Show time-based greeting
     */
    function getGreeting() {
        const hour = new Date().getHours();

        if (hour < 5) return '🌙 Late night browsing?';
        if (hour < 12) return '🌅 Good morning!';
        if (hour < 17) return '☀️ Good afternoon!';
        if (hour < 21) return '🌆 Good evening!';
        return '🌙 Good night!';
    }

    // ========================================
    // SMOOTH SCROLL TO TOP
    // ========================================

    /**
     * Create scroll to top button
     */
    function initScrollToTop() {
        const button = document.createElement('button');
        button.innerHTML = '↑';
        button.id = 'scroll-to-top';
        button.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: linear-gradient(135deg, #06b6d4, #8b5cf6);
      color: white;
      border: none;
      cursor: pointer;
      font-size: 18px;
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;
      z-index: 9999;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    `;

        button.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        document.body.appendChild(button);

        // Show/hide based on scroll position
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                button.style.opacity = '1';
                button.style.transform = 'scale(1)';
            } else {
                button.style.opacity = '0';
                button.style.transform = 'scale(0.8)';
            }
        });

        debugLog('Scroll to top initialized');
    }

    // ========================================
    // CONSOLE BRANDING
    // ========================================

    /**
     * Show custom console message
     */
    function showConsoleBranding() {
        console.log(
            '%c🏠 ASB Solutions Homepage',
            'font-size: 20px; font-weight: bold; color: #06b6d4;'
        );
        console.log(
            '%cCustom JS loaded successfully!',
            'font-size: 12px; color: #8b5cf6;'
        );
    }

    // ========================================
    // INITIALIZATION
    // ========================================

    onReady(function () {
        debugLog('Initializing custom scripts...');

        // Initialize all features
        initKeyboardShortcuts();
        enhanceServiceStatus();
        initClock();
        initScrollToTop();
        showConsoleBranding();

        debugLog('All custom scripts initialized!');
        debugLog('Greeting: ' + getGreeting());
    });

})();
