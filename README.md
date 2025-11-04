# Chat Flotante MVP - Electron

MVP de un chat flotante desarrollado en Electron con diseño refinado inspirado en macOS. **Solo UI - sin lógica de backend**.

## 🎨 Filosofía de Diseño

La interfaz presenta un diseño flotante y elegante, inspirado en la estética de macOS, pero con una personalidad propia que la hace reconocible y única. Transmite ligereza, inteligencia y calidez, como una extensión natural del sistema.

### Elementos Visuales Clave:
- **Vidrio esmerilado translúcido** con `backdrop-filter` de 60px
- **Bordes redondeados amplios** (24px) para suavidad
- **Sombras difusas** multicapa para profundidad
- **Paleta neutra** con acentos árticos y lavanda (#A8D5E2, #D4C5E2)
- **Halo ambiental** animado que respira y pulsa
- **Mensajes iridiscentes** para el asistente con degradados
- **Mensajes cálidos** para el usuario con tonos perla
- **Microanimaciones spring** en cada interacción
- **Tipografía redondeada** (SF Pro Rounded) para calidez

## ✨ Características UI

- 🪟 Ventana flotante siempre visible con transparencia real
- 💎 Glassmorphism refinado con blur de 60px
- 🌈 Efectos iridiscentes en mensajes del asistente
- 🔥 Efectos cálidos en mensajes del usuario
- ✨ Animaciones spring orgánicas (cubic-bezier)
- 💬 Scroll suave con easing personalizado
- ✏️ Input con auto-resize y foco animado
- 🎭 Halo ambiental que respira
- ⌨️ Indicador de escritura con bounce spring
- 🎯 Controles de ventana con microinteracciones
- 📱 Responsive y adaptativo
- ♿ Soporte para prefers-reduced-motion

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

## 🎯 Características Implementadas (Solo UI)

### ✅ Diseño Visual
- Vidrio esmerilado con múltiples capas de blur
- Halo ambiental animado con gradientes radiales
- Paleta de colores neutra con variables CSS
- Bordes inset con highlights sutiles
- Sombras multicapa para profundidad
- Efectos iridiscentes y degradados

### ✅ Animaciones
- Spring animations (cubic-bezier: 0.34, 1.56, 0.64, 1)
- Entrada de mensajes con bounce orgánico
- Avatar con animación de scale flotante
- Typing indicator con bounce vertical
- Microinteracciones en todos los botones
- Scroll suave con easing cúbico
- Hover states con transforms

### ✅ Componentes
- Header con indicador de estado pulsante
- Área de mensajes con scroll personalizado
- Mensajes del asistente (iridiscentes)
- Mensajes del usuario (cálidos)
- Input con auto-resize y foco animado
- Botones emoji y adjuntos (UI placeholder)
- Controles de ventana macOS-style
- Avatares con gradientes SVG

### ✅ Interactividad
- Enter para enviar, Shift+Enter para nueva línea
- Respuestas simuladas con delay
- Focus automático en input
- Scroll automático al recibir mensajes
- Feedback visual en todos los clics

### 🔜 Pendiente (Lógica)
- Conexión con backend/API
- Envío real de mensajes
- Autenticación de usuarios
- Persistencia de mensajes
- Notificaciones push
- Selector de emojis funcional
- Adjuntar archivos funcional
- WebSocket para tiempo real
- Estado de lectura/entrega

## 🛠 Tecnologías

- **Electron 28+**: Framework de escritorio con transparencia
- **HTML5/CSS3**: Estructura y estilos modernos
- **JavaScript ES6+**: Interacciones y animaciones
- **CSS Variables**: Sistema de diseño dinámico
- **SVG**: Iconos y avatares vectoriales
- **Backdrop Filter**: Efectos de vidrio esmerilado
- **RequestAnimationFrame**: Animaciones suaves

## 📝 Notas de Desarrollo

Este MVP se enfoca **exclusivamente en la experiencia visual y sensorial**. Cada elemento respira, flota y responde al usuario con microanimaciones orgánicas. La implementación busca el equilibrio entre sofisticación técnica y accesibilidad emocional.

La lógica de negocio (backend, API, WebSocket, autenticación) se implementará en fases posteriores, manteniendo esta base visual como fundamento.

## 🖼 Preview

La aplicación presenta:
- **Ventana**: 400x600px, flotante, siempre visible
- **Fondo**: Gradiente neutro translúcido con halo ambiental
- **Mensajes**: 3 ejemplos precargados con estilos diferenciados
- **Input**: Campo expandible con foco animado
- **Controles**: Botones estilo macOS con microinteracciones
- **Paleta**: Arctic Blue (#A8D5E2) y Lavender (#D4C5E2)

## 🎨 Personalización

Las variables CSS están centralizadas en `:root` (styles.css:7-22):

```css
--arctic-blue: #A8D5E2;      /* Acento principal */
--lavender: #D4C5E2;          /* Acento secundario */
--pearl: #F5F3F0;             /* Neutro cálido */
--glass-light: rgba(255, 255, 255, 0.7);  /* Vidrio */
```

Otros ajustes:
- **Tamaño de ventana**: `main.js` líneas 8-9
- **Animaciones**: Todas usan `cubic-bezier(0.34, 1.56, 0.64, 1)`
- **Blur intensity**: `backdrop-filter: blur(60px)`
