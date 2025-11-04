# Chat Flotante MVP - Electron

MVP de un chat flotante desarrollado en Electron. **Solo UI - sin lógica de backend**.

## Características UI

- ✨ Ventana flotante siempre visible
- 🎨 Diseño moderno con gradientes y efectos glassmorphism
- 💬 Área de mensajes con scroll personalizado
- ✏️ Input con auto-resize
- 🎭 Animaciones suaves para mensajes
- ⌨️ Indicador de escritura animado
- 🎯 Controles de ventana (cerrar/minimizar)
- 📱 Interfaz responsive
- 🎨 Botones para emojis y adjuntos (UI placeholder)

## Estructura del Proyecto

```
.
├── package.json      # Configuración y dependencias
├── main.js          # Proceso principal de Electron
├── index.html       # Estructura HTML del chat
├── styles.css       # Estilos del chat
├── renderer.js      # Interacciones UI (sin lógica de backend)
└── README.md        # Este archivo
```

## Instalación

1. Instalar dependencias:
```bash
npm install
```

## Ejecución

```bash
npm start
```

## Características Implementadas (Solo UI)

### ✅ Implementado
- Ventana flotante con transparencia
- Header con indicador de estado
- Área de mensajes con scroll
- Mensajes enviados y recibidos
- Input de texto con auto-resize
- Botón de envío
- Botones para emoji y adjuntos (placeholder)
- Animaciones de mensajes
- Indicador de escritura (typing)
- Controles de ventana (cerrar/minimizar)
- Respuestas simuladas para demo

### 🔜 Pendiente (Lógica)
- Conexión con backend/API
- Envío real de mensajes
- Autenticación de usuarios
- Persistencia de mensajes
- Notificaciones
- Selector de emojis funcional
- Adjuntar archivos funcional
- WebSocket para mensajes en tiempo real

## Tecnologías

- **Electron**: Framework para aplicaciones de escritorio
- **HTML5/CSS3**: Estructura y estilos
- **JavaScript**: Interacciones UI

## Notas de Desarrollo

Este es un MVP enfocado únicamente en la interfaz de usuario. Todas las interacciones son visuales o simuladas. La implementación de la lógica de negocio (backend, API, WebSocket, etc.) se realizará en fases posteriores.

## Preview

La aplicación muestra:
- Una ventana flotante de 400x600px
- Diseño con gradiente morado/azul
- 3 mensajes de ejemplo
- Input funcional que simula respuestas
- Controles de ventana funcionales

## Personalización

Puedes personalizar los colores en `styles.css`:
- Gradiente principal: `.chat-container` (línea 17)
- Color de acento: Variables en los elementos individuales
- Tamaño de ventana: `main.js` (línea 9-10)
