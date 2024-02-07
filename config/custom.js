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
        enableChatbot: true,
        debugMode: false,
        // Ollama Configuration
        // Read from environment when available (Next.js: NEXT_PUBLIC_OLLAMA_URL)
        // or from a global `window.OLLAMA_URL` set at runtime. Fallback to localhost.
        ollamaUrl: (typeof process !== 'undefined' && process.env && process.env.NEXT_PUBLIC_OLLAMA_URL)
            ? process.env.NEXT_PUBLIC_OLLAMA_URL
            : (typeof window !== 'undefined' && window.OLLAMA_URL) ? window.OLLAMA_URL : 'http://localhost:11434',
        ollamaModel: 'llama3.2'  // Change to your preferred model
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
    // AI CHATBOT (Ollama)
    // ========================================

    /**
     * Initialize the AI Chatbot
     */
    function initChatbot() {
        if (!CONFIG.enableChatbot) return;

        // Create chatbot container
        const chatbotHTML = `
            <div id="chatbot-container" class="chatbot-hidden">
                <div id="chatbot-header">
                    <span>🤖 ASB Assistant</span>
                    <button id="chatbot-minimize">−</button>
                </div>
                <div id="chatbot-messages">
                    <div class="chat-message bot-message">
                        Hi! I'm your ASB Solutions assistant. How can I help you today?
                    </div>
                </div>
                <div id="chatbot-input-container">
                    <input type="text" id="chatbot-input" placeholder="Type your message..." />
                    <button id="chatbot-send">Send</button>
                </div>
            </div>
            <button id="chatbot-toggle">💬</button>
        `;

        // Add chatbot to page
        const chatbotWrapper = document.createElement('div');
        chatbotWrapper.id = 'chatbot-wrapper';
        chatbotWrapper.innerHTML = chatbotHTML;
        document.body.appendChild(chatbotWrapper);

        // Get elements
        const container = document.getElementById('chatbot-container');
        const toggleBtn = document.getElementById('chatbot-toggle');
        const minimizeBtn = document.getElementById('chatbot-minimize');
        const sendBtn = document.getElementById('chatbot-send');
        const input = document.getElementById('chatbot-input');
        const messages = document.getElementById('chatbot-messages');

        // Toggle chatbot visibility
        toggleBtn.addEventListener('click', function () {
            container.classList.toggle('chatbot-hidden');
            toggleBtn.classList.toggle('chatbot-toggle-hidden');
        });

        minimizeBtn.addEventListener('click', function () {
            container.classList.add('chatbot-hidden');
            toggleBtn.classList.remove('chatbot-toggle-hidden');
        });

        // Send message
        async function sendMessage() {
            const userMessage = input.value.trim();
            if (!userMessage) return;

            // Add user message to chat
            addMessage(userMessage, 'user');
            input.value = '';

            // Show typing indicator
            const typingId = showTypingIndicator();

            try {
                const response = await callOllama(userMessage);
                removeTypingIndicator(typingId);
                addMessage(response, 'bot');
            } catch (error) {
                removeTypingIndicator(typingId);
                addMessage('Sorry, I encountered an error. Please check if Ollama is running.', 'bot');
                console.error('Chatbot error:', error);
            }
        }

        sendBtn.addEventListener('click', sendMessage);
        input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });

        /**
         * Add message to chat
         */
        function addMessage(text, sender) {
            const msgDiv = document.createElement('div');
            msgDiv.className = `chat-message ${sender}-message`;
            msgDiv.textContent = text;
            messages.appendChild(msgDiv);
            messages.scrollTop = messages.scrollHeight;
        }

        /**
         * Show typing indicator
         */
        function showTypingIndicator() {
            const typingDiv = document.createElement('div');
            typingDiv.className = 'chat-message bot-message typing-indicator';
            typingDiv.id = 'typing-' + Date.now();
            typingDiv.innerHTML = '<span></span><span></span><span></span>';
            messages.appendChild(typingDiv);
            messages.scrollTop = messages.scrollHeight;
            return typingDiv.id;
        }

        /**
         * Remove typing indicator
         */
        function removeTypingIndicator(id) {
            const indicator = document.getElementById(id);
            if (indicator) indicator.remove();
        }

        /**
         * Call Ollama API
         */
        async function callOllama(prompt) {
            const systemPrompt = `You are a helpful assistant for ASB Solutions Homepage. 
You help users navigate the dashboard, understand services, and answer questions about the homelab setup.
Keep responses concise and friendly. If asked about specific services, provide helpful information.`;

            const response = await fetch(`${CONFIG.ollamaUrl}/api/generate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: CONFIG.ollamaModel,
                    prompt: prompt,
                    system: systemPrompt,
                    stream: false
                })
            });

            if (!response.ok) {
                throw new Error(`Ollama API error: ${response.status}`);
            }

            const data = await response.json();
            return data.response;
        }

        debugLog('Chatbot initialized');
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
                    // Also close chatbot
                    const container = document.getElementById('chatbot-container');
                    const toggleBtn = document.getElementById('chatbot-toggle');
                    if (container) {
                        container.classList.add('chatbot-hidden');
                        toggleBtn.classList.remove('chatbot-toggle-hidden');
                    }
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

                case 'c':
                    // Toggle chatbot
                    const container = document.getElementById('chatbot-container');
                    const toggleBtn = document.getElementById('chatbot-toggle');
                    if (container) {
                        container.classList.toggle('chatbot-hidden');
                        toggleBtn.classList.toggle('chatbot-toggle-hidden');
                        if (!container.classList.contains('chatbot-hidden')) {
                            document.getElementById('chatbot-input').focus();
                        }
                    }
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
c     - Toggle chatbot
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
      right: 70px;
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
      z-index: 9998;
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
        console.log(
            '%c🤖 AI Chatbot powered by Ollama',
            'font-size: 12px; color: #22c55e;'
        );
    }

    /**
     * Initialize fancy bookmark tooltips
     */
    function initBookmarkTooltips() {
        const bookmarks = document.querySelectorAll('.bookmark');

        bookmarks.forEach(bookmark => {
            // Get description source
            // 1. data-description (added in item.jsx)
            // 2. .bookmark-description (visible text in list view)
            let description = bookmark.getAttribute('data-description');

            if (!description) {
                const descEl = bookmark.querySelector('.bookmark-description');
                if (descEl) description = descEl.textContent.trim();
            }

            if (description) {
                // Find icon container
                const iconContainer = bookmark.querySelector('.bookmark-icon');
                if (iconContainer && !iconContainer.querySelector('.custom-tooltip')) {
                    // Create tooltip
                    const tooltip = document.createElement('span');
                    tooltip.className = 'custom-tooltip';
                    tooltip.textContent = description;

                    iconContainer.appendChild(tooltip);

                    // Remove native title from link to avoid double tooltip
                    const link = bookmark.querySelector('a');
                    if (link && link.hasAttribute('title')) {
                        // Only remove if it matches description or if we just want to suppress it
                        // link.removeAttribute('title'); 
                        // Actually, let's keep it as fallback for accessibility, but standard browser behavior might show both.
                        // Often better to remove it if we have a custom one.
                        link.removeAttribute('title');
                    }
                }
            }
        });

        debugLog('Bookmark tooltips initialized');
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
        initBookmarkTooltips(); // Add this line
        initChatbot();
        showConsoleBranding();

        debugLog('All custom scripts initialized!');
        debugLog('Greeting: ' + getGreeting());
    });

})();
