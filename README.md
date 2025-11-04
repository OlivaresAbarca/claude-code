# Chat Flotante MVP - Electron

MVP de un chat flotante desarrollado en Electron con **diseño inspirado en Raycast**. **Solo UI - sin lógica de backend**.

## 🎨 Filosofía de Diseño

La interfaz presenta un diseño **ultra-delgado (ultrathink)**, profesional y elegante inspirado en Raycast. Fondo oscuro con blur extremo, espaciado minimalista, acento rojo característico y una experiencia optimizada para productividad con máxima transparencia.

### Elementos Visuales Clave:
- **Tema oscuro** con fondo #1C1C1E ultra-transparente (0.4 opacity)
- **Acento rojo distintivo** (#FF6363) como Raycast
- **Superficies elevadas** ultra-delgadas con máxima transparencia
- **Glassmorphism extremo** con blur 80px y saturación 200%
- **Ultra blur** en múltiples capas (strong: 80px, medium: 50px, light: 30px)
- **Bordes ultra-delgados** - 0.5px para look minimalista
- **Mensajes con hover** - fondo cambia al pasar el cursor
- **Avatares cuadrados** con bordes redondeados (rx=8)
- **Espaciado ultra-compacto** - diseño eficiente y minimalista
- **Transiciones rápidas** (0.15s) para respuesta inmediata
- **Tipografía SF Pro** delgada para look profesional

## ✨ Características UI

- 🌑 Tema oscuro profesional ultra-transparente (rgba 0.4 opacity)
- ⚡ Acento rojo Raycast (#FF6363) en indicadores y botones
- 💎 **Glassmorphism extremo** con blur 80px y saturación 200%
- 🌫️ **Ultra blur background** - blur en 3 niveles (80px/50px/30px)
- 🪟 **Transparencia máxima** - puedes ver completamente a través de la ventana
- 🤖 **Selector de modelos IA ultra-delgado** - dropdown agrupado con blur extremo
- 🌐 **Toggle WebSearch ultra-thin** - botón minimalista para búsqueda web
- 🎯 Mensajes con hover state - fondo cambia a rgba(44, 44, 46, 0.4)
- 🔴 Avatar cuadrado con bordes redondeados y acento rojo
- ⚪ Sin diferencias visuales entre mensajes enviados/recibidos
- 💨 Transiciones rápidas (0.15s) para respuesta instantánea
- 💬 Scroll minimalista con scrollbar ultra-sutil
- ✏️ Input ultra-delgado con focus ring rojo al enfocar
- 🔴 Indicador de estado con glow rojo pulsante
- ⌨️ Indicador de escritura simple
- 🎯 Controles de ventana ultra-thin con hover
- 📱 Espaciado ultra-compacto y minimalista
- 🚀 Diseño optimizado para productividad máxima
- 🎨 Header y footer ultra-transparentes con backdrop-filter extremo
- ✨ Bordes de 0.5px para máxima elegancia

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
- **Selector de modelos IA** con dropdown agrupado por proveedor
  - OpenAI: GPT-4, GPT-4 Turbo, GPT-3.5 Turbo
  - Anthropic: Claude 3 Opus, Claude 3 Sonnet, Claude 3 Haiku
  - Google: Gemini Pro, Gemini Ultra
  - Badges para modelos destacados
  - Animación spring al seleccionar
- **Toggle WebSearch** para habilitar/deshabilitar búsqueda en internet
  - Icono de globo que rota cuando está activo
  - Fondo rojo cuando está habilitado
  - Estado guardado en variable JavaScript
  - Feedback visual con animación spring
- Área de mensajes con scroll personalizado
- Mensajes del asistente (iridiscentes)
- Mensajes del usuario (cálidos)
- Input con auto-resize y foco animado
- Botones emoji y adjuntos (UI placeholder)
- Controles de ventana macOS-style
- Avatares con gradientes SVG

### ✅ Interactividad
- Selector de modelos con dropdown animado (click para abrir/cerrar)
- Toggle WebSearch con cambio de estado visual y logs en consola
- Enter para enviar, Shift+Enter para nueva línea
- Respuestas simuladas con delay
- Focus automático en input
- Scroll automático al recibir mensajes
- Feedback visual en todos los clics con animación spring
- Click fuera del dropdown lo cierra automáticamente

### 🔜 Pendiente (Lógica)
- Conexión con backend/API
- Envío real de mensajes
- **Integración real de WebSearch con API de búsqueda**
- Autenticación de usuarios
- Persistencia de mensajes
- Notificaciones push
- Selector de emojis funcional
- Adjuntar archivos funcional
- WebSocket para tiempo real
- Estado de lectura/entrega

## 🛠 Tecnologías

- **Electron 28+**: Framework de escritorio con transparencia total
- **HTML5/CSS3**: Estructura y estilos ultra-modernos
- **JavaScript ES6+**: Interacciones y animaciones fluidas
- **CSS Variables**: Sistema de diseño dinámico ultra-delgado
- **SVG**: Iconos y avatares vectoriales minimalistas
- **Backdrop Filter Ultra**: Efectos de glassmorphism extremo (80px blur)
- **Multi-layer Blur**: 3 niveles de blur (strong/medium/light)
- **RequestAnimationFrame**: Animaciones suaves y precisas
- **Ultra-thin Borders**: Bordes de 0.5px para máxima elegancia

## 📝 Notas de Desarrollo

Este MVP se enfoca en **productividad, funcionalidad y estética ultradelgada** inspirado en Raycast. El diseño oscuro con **blur extremo (80px)**, transparencia máxima (0.4 opacity) y acento rojo crea una experiencia profesional, elegante y ultra-moderna. Cada interacción es rápida y precisa. La ventana es completamente transparente con glassmorphism en múltiples capas, permitiendo ver todo el contenido detrás mientras mantiene perfecta legibilidad.

**Filosofía**: "Ultra-delgado, profesional y elegante" - Inspirado en herramientas de productividad modernas con transparencia flotante extrema y diseño minimalista.

**Estilo Ultrathink**: Bordes de 0.5px, padding reducido, fonts más delgadas, y blur en 3 niveles para crear la experiencia más refinada y profesional posible.

La lógica de negocio (backend, API, WebSocket, autenticación) se implementará en fases posteriores, manteniendo esta base visual ultra-delgada de Raycast como fundamento.

## 🖼 Preview

La aplicación presenta:
- **Ventana**: 400x600px, flotante, siempre visible, **ultra-transparente**
- **Fondo**: Oscuro ultra-transparente (0.4 opacity) con blur extremo (80px)
- **Mensajes**: Lista ultra-compacta con hover states transparentes
- **Input**: Campo ultra-delgado transparente con focus ring rojo
- **Controles**: Botones ultra-thin con bordes de 0.5px
- **Paleta**: Grises oscuros ultra-transparentes con acento rojo (#FF6363)
- **Efecto**: Glassmorphism extremo - ves completamente a través con blur 30-80px en 3 capas
- **Estilo**: Ultrathink - todo es más delgado, más transparente, más elegante

## 🎨 Personalización

Las variables CSS están centralizadas en `:root` (styles.css:7-31):

```css
/* Raycast Dark Theme Ultra */
--raycast-bg: #1C1C1E;              /* Fondo principal */
--raycast-surface: #2C2C2E;         /* Superficies elevadas */
--raycast-surface-hover: #3A3A3C;   /* Hover states */
--raycast-accent: #FF6363;          /* Acento rojo */
--raycast-accent-hover: #FF7A7A;    /* Acento hover */

/* Text */
--text-primary: rgba(255, 255, 255, 0.95);
--text-secondary: rgba(255, 255, 255, 0.65);
--text-tertiary: rgba(255, 255, 255, 0.45);

/* Ultra Blur Effects */
--blur-strong: blur(80px) saturate(200%);   /* Blur extremo */
--blur-medium: blur(50px) saturate(180%);   /* Blur medio */
--blur-light: blur(30px) saturate(160%);    /* Blur ligero */
```

### Efectos Clave Ultrathink:
- **Glassmorphism extremo**: `backdrop-filter: blur(80px) saturate(200%)`
- **Multi-layer blur**: 3 niveles (80px / 50px / 30px)
- **Ultra transparencia**: Contenedor principal a 0.4 opacity
- **Bordes ultra-delgados**: 0.5px en lugar de 1px
- **Sombras profundas**: 0.25-0.45 opacity para depth
- **Hover states**: Cambio a surface-hover en 0.15s
- **Focus ring**: Rojo con 15% opacity
- **Avatares**: Cuadrados con rx=8 y fondo rojo
- **Padding reducido**: Todo más compacto y delgado
- **Fonts más delgadas**: font-weight 400-500 en lugar de 600
- **Transiciones**: Todas usan 0.15s para respuesta rápida
- **Tamaño de ventana**: `main.js` líneas 8-9
