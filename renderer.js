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
        avatarHTML = `
            <div class="message-avatar">
                <svg width="32" height="32" viewBox="0 0 32 32">
                    <rect width="32" height="32" rx="8" fill="#FF6363"/>
                    <text x="16" y="21" text-anchor="middle" fill="white" font-size="14" font-weight="600" font-family="-apple-system, SF Pro Text">AI</text>
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
    console.log('⚡ Chat Flotante - Estilo Raycast');
    console.log('🎨 Características implementadas:');
    console.log('  - Diseño oscuro elegante inspirado en Raycast');
    console.log('  - Fondo con blur y profundidad (#1C1C1E)');
    console.log('  - Acento rojo característico (#FF6363)');
    console.log('  - Mensajes con hover states sutiles');
    console.log('  - Avatares cuadrados con bordes redondeados');
    console.log('  - Input con focus ring rojo');
    console.log('  - Sombras profundas pero suaves');
    console.log('  - Espaciado compacto y funcional');
    console.log('  - Transiciones rápidas y precisas (0.15s)');
    console.log('');
    console.log('🚀 Profesional, funcional y elegante');
});
