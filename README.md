# Chat Flotante MVP - Electron

MVP de un chat flotante desarrollado en Electron con **diseño inspirado en Raycast**. **Solo UI - sin lógica de backend**.

## 🎨 Filosofía de Diseño

La interfaz presenta un diseño profesional, funcional y elegante inspirado en Raycast. Fondo oscuro con blur, espaciado compacto, acento rojo característico y una experiencia optimizada para productividad.

### Elementos Visuales Clave:
- **Tema oscuro** con fondo #1C1C1E y blur fuerte
- **Acento rojo distintivo** (#FF6363) como Raycast
- **Superficies elevadas** en #2C2C2E con hover en #3A3A3C
- **Glassmorphism** con blur 40px y saturación 180%
- **Sombras profundas** pero suaves para dar depth
- **Mensajes con hover** - fondo cambia al pasar el cursor
- **Avatares cuadrados** con bordes redondeados (rx=8)
- **Espaciado compacto** - diseño eficiente y funcional
- **Transiciones rápidas** (0.15s) para respuesta inmediata
- **Tipografía SF Pro** para look profesional

## ✨ Características UI

- 🌑 Tema oscuro profesional (#1C1C1E background)
- ⚡ Acento rojo Raycast (#FF6363) en indicadores y botones
- 💎 Glassmorphism fuerte con blur 40px y saturación 180%
- 🎯 Mensajes con hover state - fondo cambia a #2C2C2E
- 🔴 Avatar cuadrado con bordes redondeados y acento rojo
- ⚪ Sin diferencias visuales entre mensajes enviados/recibidos
- 💨 Transiciones rápidas (0.15s) para respuesta instantánea
- 💬 Scroll minimalista con scrollbar sutil
- ✏️ Input con focus ring rojo al enfocar
- 🔴 Indicador de estado con glow rojo pulsante
- ⌨️ Indicador de escritura simple
- 🎯 Controles de ventana con hover en #3A3A3C
- 📱 Espaciado compacto y eficiente
- 🚀 Diseño optimizado para productividad
- 🎨 Header y footer con superficie elevada (#2C2C2E)

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

Este MVP se enfoca en **productividad y funcionalidad** inspirado en Raycast. El diseño oscuro con blur profundo y acento rojo crea una experiencia profesional y elegante. Cada interacción es rápida y precisa.

**Filosofía**: "Profesional, funcional y elegante" - Inspirado en herramientas de productividad modernas.

La lógica de negocio (backend, API, WebSocket, autenticación) se implementará en fases posteriores, manteniendo esta base visual de Raycast como fundamento.

## 🖼 Preview

La aplicación presenta:
- **Ventana**: 400x600px, flotante, siempre visible
- **Fondo**: Oscuro con blur (#1C1C1E con backdrop-filter)
- **Mensajes**: Lista compacta con hover states
- **Input**: Campo oscuro con focus ring rojo
- **Controles**: Botones cuadrados con bordes redondeados
- **Paleta**: Grises oscuros con acento rojo (#FF6363)

## 🎨 Personalización

Las variables CSS están centralizadas en `:root` (styles.css:7-31):

```css
/* Raycast Dark Theme */
--raycast-bg: #1C1C1E;              /* Fondo principal */
--raycast-surface: #2C2C2E;         /* Superficies elevadas */
--raycast-surface-hover: #3A3A3C;   /* Hover states */
--raycast-accent: #FF6363;          /* Acento rojo */
--raycast-accent-hover: #FF7A7A;    /* Acento hover */

/* Text */
--text-primary: rgba(255, 255, 255, 0.95);
--text-secondary: rgba(255, 255, 255, 0.65);
--text-tertiary: rgba(255, 255, 255, 0.45);
```

### Efectos Clave:
- **Glassmorphism**: `backdrop-filter: blur(40px) saturate(180%)`
- **Sombras profundas**: 0.25-0.45 opacity para depth
- **Hover states**: Cambio a surface-hover en 0.15s
- **Focus ring**: Rojo con 15% opacity
- **Avatares**: Cuadrados con rx=8 y fondo rojo
- **Transiciones**: Todas usan 0.15s para respuesta rápida
- **Tamaño de ventana**: `main.js` líneas 8-9
