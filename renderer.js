// renderer.js - UI interactions only (no backend logic)

const { remote } = require('electron');

// DOM Elements
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const chatMessages = document.getElementById('chatMessages');
const typingIndicator = document.getElementById('typingIndicator');
const closeBtn = document.getElementById('closeBtn');
const minimizeBtn = document.getElementById('minimizeBtn');
const emojiBtn = document.getElementById('emojiBtn');
const attachBtn = document.getElementById('attachBtn');

// Window Controls
closeBtn.addEventListener('click', () => {
    const window = remote.getCurrentWindow();
    window.close();
});

minimizeBtn.addEventListener('click', () => {
    const window = remote.getCurrentWindow();
    window.minimize();
});

// Auto-resize textarea
chatInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

// Handle Enter key (send message)
chatInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

// Send button click
sendBtn.addEventListener('click', sendMessage);

// Emoji button click (UI only - shows visual feedback)
emojiBtn.addEventListener('click', function() {
    this.style.transform = 'scale(0.9)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
    // Note: Actual emoji picker would be implemented with logic
    console.log('Emoji button clicked - picker would open here');
});

// Attach button click (UI only - shows visual feedback)
attachBtn.addEventListener('click', function() {
    this.style.transform = 'scale(0.9)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
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
                    <circle cx="16" cy="16" r="16" fill="#4A90E2"/>
                    <text x="16" y="21" text-anchor="middle" fill="white" font-size="14" font-weight="bold">A</text>
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
    scrollToBottom();
}

// Show typing indicator
function showTypingIndicator() {
    typingIndicator.style.display = 'flex';
    scrollToBottom();
}

// Hide typing indicator
function hideTypingIndicator() {
    typingIndicator.style.display = 'none';
}

// Scroll chat to bottom
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
    console.log('Chat flotante cargado - Solo UI (sin lógica)');
    console.log('Características UI implementadas:');
    console.log('- Auto-resize del textarea');
    console.log('- Scroll automático');
    console.log('- Animaciones de mensajes');
    console.log('- Indicador de escritura');
    console.log('- Controles de ventana (cerrar/minimizar)');
    console.log('- Respuestas simuladas');
});
