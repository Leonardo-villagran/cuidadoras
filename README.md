# Cuidadoras Web App

**Este proyecto muestra una aplicación en React construida con Vite y TypeScript, la cual implementa carga perezosa de componentes y efectos de aparición gradual.**

## Índice

- [Características](#características)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Instalación y ejecución](#instalación-y-ejecución)
- [Características destacadas](#características-destacadas)
- [Consideraciones adicionales](#consideraciones-adicionales)

## Características

- **Carga perezosa de componentes:** Los componentes se cargan solo cuando se necesitan, mejorando el rendimiento inicial de la aplicación.
- **Efectos de aparición gradual:** Los componentes aparecen suavemente a medida que se cargan, creando una experiencia de usuario fluida.
- **Uso de Vite:** Vite proporciona un entorno de desarrollo rápido y optimizado para crear aplicaciones React.
- **Tipado con TypeScript:** TypeScript ofrece tipos estáticos, mejorando la seguridad del código y la experiencia de desarrollo.

## Estructura del proyecto

```
src/
├── App.tsx          // Componente principal de la aplicación
├── components/      // Carpeta que contiene todos los componentes de la aplicación
│   ├── HeroSection.tsx
│   ├── About.tsx
│   ├── Personal.tsx
│   ├── Meds.tsx
│   ├── Contact.tsx
│   ├── ServiceTitle.tsx
│   ├── Service.tsx
│   ├── Footer.tsx
│   ├── Menu.tsx   
│   └── Up.tsx        
```

## Instalación y ejecución

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Leonardo-villagran/cuidadoras
   ```
2. Instala las dependencias:
   ```bash
   cd cuidadoras
   npm install
   ```
3. Ejecuta la aplicación:
   ```bash
   npm run dev
   ```
4. Accede a la aplicación en tu navegador: `http://localhost:5173/`

## Características destacadas

- **Carga perezosa con React.lazy:** Los componentes se importan dinámicamente usando `React.lazy`, mejorando la velocidad de carga inicial.
- **Observación de intersecciones con react-intersection-observer:** El componente `FadeInSection` utiliza `useInView` para detectar cuándo un elemento está visible en la pantalla, activando los efectos de aparición gradual.
- **Suspense de React:** El componente `Suspense` maneja la carga perezosa y muestra un indicador de carga mientras los componentes se resuelven.

## Consideraciones adicionales

- **Personalización de la apariencia:** Puedes personalizar los estilos CSS para adaptar la apariencia de la aplicación a tus necesidades.
- **Escalabilidad:** La estructura del proyecto permite agregar fácilmente más componentes y funcionalidades.
- **Optimización adicional:** Puedes explorar técnicas como la división de código (code-splitting) para optimizar aún más la carga de la aplicación.

