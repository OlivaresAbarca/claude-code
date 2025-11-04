// renderer.js - UI interactions only (no backend logic)

const { remote } = require('electron');

// Counter for unique gradient IDs
let avatarCounter = 0;

// DOM Elements
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const chatMessages = document.getElementById('chatMessages');
const typingIndicator = document.getElementById('typingIndicator');
const closeBtn = document.getElementById('closeBtn');
const minimizeBtn = document.getElementById('minimizeBtn');
const emojiBtn = document.getElementById('emojiBtn');
const attachBtn = document.getElementById('attachBtn');

// Window Controls with spring animation
closeBtn.addEventListener('click', () => {
    springAnimation(closeBtn, () => {
        const window = remote.getCurrentWindow();
        window.close();
    });
});

minimizeBtn.addEventListener('click', () => {
    springAnimation(minimizeBtn, () => {
        const window = remote.getCurrentWindow();
        window.minimize();
    });
});

// Spring animation helper
function springAnimation(element, callback) {
    element.style.transform = 'scale(0.85)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
        if (callback) setTimeout(callback, 100);
    }, 100);
}

// Auto-resize textarea with smooth transition
chatInput.addEventListener('input', function() {
    this.style.height = 'auto';
    const newHeight = Math.min(this.scrollHeight, 120);
    this.style.height = newHeight + 'px';
});

// Handle Enter key (send message)
chatInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

// Send button click with spring animation
sendBtn.addEventListener('click', () => {
    springAnimation(sendBtn, sendMessage);
});

// Emoji button click (UI only - shows visual feedback with spring)
emojiBtn.addEventListener('click', function() {
    springAnimation(this);
    // Note: Actual emoji picker would be implemented with logic
    console.log('Emoji button clicked - picker would open here');
});

// Attach button click (UI only - shows visual feedback with spring)
attachBtn.addEventListener('click', function() {
    springAnimation(this);
    // Note: Actual file picker would be implemented with logic
    console.log('Attach button clicked - file picker would open here');
});

// Send Message (UI only - adds message to chat)
function sendMessage() {
    const message = chatInput.value.trim();

    if (!message) return;

    // Add sent message to UI
    addMessageToChat('sent', 'Tú', message, getCurrentTime());

    // Clear input
    chatInput.value = '';
    chatInput.style.height = 'auto';

    // Show typing indicator (simulated)
    showTypingIndicator();

    // Simulate response (UI only)
    setTimeout(() => {
        hideTypingIndicator();
        addMessageToChat('received', 'Asistente', 'Esta es una respuesta simulada. La lógica real se implementará después.', getCurrentTime());
    }, 1500);
}

// Add message to chat UI
function addMessageToChat(type, author, text, time) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;

    let avatarHTML = '';
    if (type === 'received') {
        const gradientId = `avatarGradient${++avatarCounter}`;
        avatarHTML = `
            <div class="message-avatar">
                <svg width="36" height="36" viewBox="0 0 36 36">
                    <defs>
                        <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#6B8AFF;stop-opacity:1" />
                            <stop offset="50%" style="stop-color:#B57BFF;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#C79EFF;stop-opacity:1" />
                        </linearGradient>
                    </defs>
                    <circle cx="18" cy="18" r="18" fill="url(#${gradientId})"/>
                    <circle cx="18" cy="18" r="17" fill="none" stroke="white" stroke-width="2" opacity="0.4"/>
                    <text x="18" y="24" text-anchor="middle" fill="white" font-size="16" font-weight="600" font-family="-apple-system, SF Pro Rounded">A</text>
                </svg>
            </div>
        `;
    }

    messageDiv.innerHTML = `
        ${avatarHTML}
        <div class="message-content">
            <div class="message-header">
                <span class="message-author">${author}</span>
                <span class="message-time">${time}</span>
            </div>
            <div class="message-text">${escapeHtml(text)}</div>
        </div>
    `;

    chatMessages.appendChild(messageDiv);
    smoothScrollToBottom();
}

// Show typing indicator
function showTypingIndicator() {
    typingIndicator.style.display = 'flex';
    smoothScrollToBottom();
}

// Hide typing indicator
function hideTypingIndicator() {
    typingIndicator.style.display = 'none';
}

// Smooth scroll to bottom with easing
function smoothScrollToBottom() {
    const targetScroll = chatMessages.scrollHeight;
    const startScroll = chatMessages.scrollTop;
    const distance = targetScroll - startScroll;
    const duration = 300;
    let startTime = null;

    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    function animateScroll(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeOutCubic(progress);

        chatMessages.scrollTop = startScroll + (distance * ease);

        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    }

    requestAnimationFrame(animateScroll);
}

// Instant scroll for initial load
function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Get current time in HH:MM format
function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Escape HTML to prevent XSS (basic security)
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Focus input on load
window.addEventListener('DOMContentLoaded', () => {
    chatInput.focus();
    scrollToBottom();
});

// Add some example interactions on load (demo purposes)
window.addEventListener('DOMContentLoaded', () => {
    console.log('🌈 Chat Flotante Vibrante - Estilo Sky/Arc');
    console.log('✨ Características implementadas:');
    console.log('  - Gradientes vibrantes animados (hue-rotate)');
    console.log('  - Efecto de granularidad/noise con SVG');
    console.log('  - Mesh gradients flotantes multicapa');
    console.log('  - Paleta vibrante: Electric Blue, Vivid Purple, Coral Pink');
    console.log('  - Mensajes con fondos translúcidos y glow');
    console.log('  - Animaciones spring orgánicas');
    console.log('  - Scroll suave con easing');
    console.log('  - Avatares con gradientes vibrantes');
    console.log('  - Indicador de estado con glow pulsante');
    console.log('  - Input con focus glow azul/púrpura');
    console.log('  - Botón de envío con gradiente vibrante');
    console.log('');
    console.log('🎨 Inspirado en Sky (ChatGPT) y Arc Browser');
});
