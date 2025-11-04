# Chat Flotante MVP - Electron

MVP de un chat flotante desarrollado en Electron con **diseño minimalista** y **gradientes sutiles**. **Solo UI - sin lógica de backend**.

## 🎨 Filosofía de Diseño

La interfaz presenta un diseño minimalista, limpio y elegante. Los gradientes sutiles aparecen delicadamente en los bordes, creando profundidad sin distraer. Cada elemento está cuidadosamente refinado para transmitir calma, claridad y sofisticación.

### Elementos Visuales Clave:
- **Fondo blanco limpio** con gradientes sutiles en bordes superior e inferior
- **Gradientes delicados** en tonos azul y púrpura muy suaves (#E8EFFF, #F3EEFF)
- **Bordes con gradiente** en mensajes del asistente (casi imperceptibles)
- **Paleta neutral** con acentos de color discretos
- **Sombras suaves** que apenas se notan pero añaden profundidad
- **Sin efectos excesivos** - sin noise, sin mesh gradients, sin glow
- **Animaciones sutiles** sin bounce exagerado
- **Focus ring delicado** en azul cuando se interactúa
- **Tipografía redondeada** (SF Pro Rounded) para calidez

## ✨ Características UI

- 🤍 Fondo blanco limpio con gradientes sutiles en los bordes
- 🎨 Gradientes delicados que aparecen solo al inicio y final
- 💎 Glassmorphism suave con blur 20px (no excesivo)
- ✨ Mensajes con fondos neutros y bordes sutiles
- 🔵 Mensajes del asistente: borde gradiente azul-púrpura casi imperceptible
- ⚪ Mensajes del usuario: fondo blanco con borde simple
- 💫 Animaciones sutiles sin bounce exagerado
- 💬 Scroll suave con easing personalizado
- ✏️ Input con focus ring azul minimalista al enfocar
- 🟢 Indicador de estado con gradiente suave y pulso delicado
- ⌨️ Indicador de escritura con dots simples en gris
- 🎯 Controles de ventana minimalistas con hover sutil
- 📱 Responsive y adaptativo
- ♿ Soporte para prefers-reduced-motion
- 🧘 Sin distracciones - diseño limpio y elegante

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

Este MVP se enfoca en **elegancia a través de la simplicidad**. El diseño minimalista pone el contenido primero, con gradientes sutiles que añaden profundidad sin distraer. Cada elemento está refinado para transmitir calma y claridad.

**Filosofía**: "Menos es más" - Sin efectos excesivos, sin distracciones innecesarias. Solo lo esencial, ejecutado a la perfección.

La lógica de negocio (backend, API, WebSocket, autenticación) se implementará en fases posteriores, manteniendo esta base visual limpia como fundamento.

## 🖼 Preview

La aplicación presenta:
- **Ventana**: 400x600px, flotante, siempre visible
- **Fondo**: Blanco limpio (#FFFFFF) con gradientes sutiles en bordes
- **Mensajes**: 3 ejemplos precargados con fondos neutros
- **Input**: Campo expandible con borde azul al enfocar
- **Controles**: Botones minimalistas con hover discreto
- **Paleta**: Tonos suaves azul (#E8EFFF) y púrpura (#F3EEFF)

## 🎨 Personalización

Las variables CSS están centralizadas en `:root` (styles.css:7-32):

```css
/* Colores Sutiles */
--soft-blue: #E8EFFF;         /* Azul suave para gradientes */
--soft-purple: #F3EEFF;       /* Púrpura suave para gradientes */
--soft-pink: #FFECF2;         /* Rosa suave (opcional) */

/* Acentos */
--accent-blue: #6B8AFF;       /* Azul para focus y botones */
--accent-purple: #B57BFF;     /* Púrpura para gradientes activos */

/* Backgrounds */
--bg-primary: #FAFBFC;        /* Fondo mensajes asistente */
--bg-secondary: #FFFFFF;      /* Fondo principal y mensajes usuario */
```

### Efectos Clave:
- **Gradiente superior**: `.chat-container::before` - gradiente sutil que se desvanece
- **Gradiente inferior**: `.chat-container::after` - gradiente sutil que se desvanece
- **Borde gradiente**: Mensajes del asistente con mask CSS
- **Blur suave**: `backdrop-filter: blur(20px)` en header/footer
- **Sombras minimalistas**: `box-shadow` muy sutiles (0.04-0.08 opacity)
- **Animaciones**: Spring suaves sin exageración
- **Tamaño de ventana**: `main.js` líneas 8-9
