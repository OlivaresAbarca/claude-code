# Chat Flotante MVP - Electron

MVP de un chat flotante desarrollado en Electron con diseño vibrante inspirado en **Sky (ChatGPT Voice)** y **Arc Browser**. **Solo UI - sin lógica de backend**.

## 🎨 Filosofía de Diseño

La interfaz presenta un diseño flotante y vibrante, inspirado en la estética moderna de Sky y Arc Browser. Transmite energía, creatividad y dinamismo con gradientes fluidos y efectos de granularidad que le dan vida y profundidad.

### Elementos Visuales Clave:
- **Gradientes vibrantes animados** con 5 colores que rotan suavemente (hue-rotate)
- **Efecto de granularidad/noise** con SVG fractal para textura orgánica
- **Mesh gradients flotantes** con múltiples capas radiales que se mueven
- **Paleta vibrante**: Electric Blue (#6B8AFF), Vivid Purple (#B57BFF), Coral Pink (#FF6B9D), Sky Cyan (#5DFDCB)
- **Vidrio esmerilado con saturación alta** para intensificar colores
- **Sombras con glow** para dar sensación de luz emanando
- **Mensajes translúcidos** con gradientes vibrantes y bordes luminosos
- **Microanimaciones spring** en cada interacción
- **Tipografía redondeada** (SF Pro Rounded) para calidez

## ✨ Características UI

- 🌈 Gradientes vibrantes con animación hue-rotate continua
- 🎨 Efecto de granularidad/noise con SVG fractal (mix-blend-mode: overlay)
- 🌊 Mesh gradients flotantes con 4 capas radiales animadas
- 💎 Glassmorphism con blur 60px y saturación 200%
- ✨ Mensajes con fondos translúcidos vibrantes y glow shadows
- 🔵 Mensajes del asistente: gradiente azul-púrpura con efecto de luz
- 🔴 Mensajes del usuario: gradiente coral-melocotón con warmth
- 💫 Animaciones spring orgánicas (cubic-bezier)
- 💬 Scroll suave con easing personalizado
- ✏️ Input con glow azul/púrpura al enfocar
- 🟢 Indicador de estado con glow pulsante cyan/azul
- ⌨️ Indicador de escritura con bounce spring y glow
- 🎯 Controles de ventana con backdrop-filter
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
- **Fondo**: Gradiente vibrante de 5 colores con animación hue-rotate y mesh flotante
- **Textura**: Efecto de granularidad SVG con fractal noise (overlay)
- **Mensajes**: 3 ejemplos precargados con fondos translúcidos y glow
- **Input**: Campo expandible con glow azul/púrpura al enfocar
- **Controles**: Botones translúcidos con microinteracciones
- **Paleta**: Electric Blue (#6B8AFF), Vivid Purple (#B57BFF), Coral Pink (#FF6B9D), Sky Cyan (#5DFDCB)

## 🎨 Personalización

Las variables CSS están centralizadas en `:root` (styles.css:7-30):

```css
--electric-blue: #6B8AFF;     /* Azul eléctrico */
--vivid-purple: #B57BFF;      /* Púrpura vibrante */
--coral-pink: #FF6B9D;        /* Rosa coral */
--sky-cyan: #5DFDCB;          /* Cyan cielo */
--lavender-dream: #C79EFF;    /* Lavanda soñador */
--peach: #FFAD87;             /* Melocotón */
```

### Efectos Clave:
- **Gradiente principal**: `.chat-container` - 5 colores con saturación 200%
- **Animación hue-rotate**: `gradientShift` 15s con saturación dinámica
- **Noise texture**: SVG inline con feTurbulence (baseFrequency: 0.9)
- **Mesh gradients**: 4 capas radiales con animación `meshFloat` 20s
- **Blur intensity**: `backdrop-filter: blur(60px) saturate(200%)`
- **Animaciones**: Todas usan `cubic-bezier(0.34, 1.56, 0.64, 1)` para efecto spring
- **Tamaño de ventana**: `main.js` líneas 8-9
