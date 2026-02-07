# Tribe

Una aplicación web moderna y de alto rendimiento construida con tecnologías web de última generación y mejores prácticas para desarrollo dirigido por componentes.

## 📋 Tabla de Contenidos

- [Stack Tecnológico](#-stack-tecnológico)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Desarrollo](#-desarrollo)
- [Construcción](#-construcción)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Contribución](#-contribución)
- [Scripts Disponibles](#-scripts-disponibles)

## 🛠️ Stack Tecnológico

Este proyecto está construido con las siguientes tecnologías:

### Framework Principal
- **[Next.js 16.1.6](https://nextjs.org/)** - Framework React para producción con renderizado del lado del servidor y generación estática
- **[React 19](https://react.dev/)** - Biblioteca JavaScript para construir interfaces de usuario
- **[TypeScript 5.7.3](https://www.typescriptlang.org/)** - Superconjunto de JavaScript tipado para desarrollo más seguro

### UI & Estilos
- **[Radix UI](https://www.radix-ui.com/)** - Componentes accesibles sin estilos
  - Biblioteca completa de componentes incluyendo diálogos, menús desplegables, tooltips y más
  - Construido sobre estándares WAI-ARIA para accesibilidad
- **[shadcn/ui](https://ui.shadcn.com/)** - Biblioteca de componentes construida sobre Radix UI y Tailwind CSS
- **[TailwindCSS 3.4.17](https://tailwindcss.com/)** - Framework CSS de utilidades
- **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)** - Utilidad para fusionar clases de Tailwind CSS de forma segura

### Formularios & Validación
- **[React Hook Form 7.54.1](https://react-hook-form.com/)** - Biblioteca de formularios performante y flexible
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Resolvedores de validación para React Hook Form
- **[Zod 3.24.1](https://zod.dev/)** - Validación de esquemas con tipado TypeScript

### Gráficos y Visualización de Datos
- **[Recharts 2.15.0](https://recharts.org/)** - Biblioteca de gráficos componibles construida con componentes React

### Utilidades UI
- **[Lucide React 0.544.0](https://lucide.dev/)** - Biblioteca de iconos hermosa y consistente
- **[Embla Carousel React 8.5.1](https://www.embla-carousel.com/)** - Componente carrusel/slider
- **[Input OTP 1.4.1](https://input-otp.js.org/)** - Componente de entrada de contraseña de una sola vez
- **[Sonner](https://sonner.emilkowal.ski/)** - Biblioteca de notificaciones toast
- **[Class Variance Authority 0.7.1](https://cva.style/)** - Biblioteca CSS-in-JS para variantes de estilos
- **[CLSX 2.1.1](https://github.com/lukeed/clsx)** - Utilidad para cadenas de className condicionales
- **[React Resizable Panels](https://github.com/bvaughn/react-resizable-panels)** - Componentes de paneles redimensionables
- **[Vaul](https://vaul.emilkowal.ski/)** - Biblioteca de componentes drawer
- **[React Day Picker 8.10.1](https://daypicker.js.org/)** - Componente selector de fecha
- **[Date FNS 4.1.0](https://date-fns.org/)** - Biblioteca moderna de utilidades de fecha

### Temas
- **[Next Themes 0.4.6](https://github.com/pacocoursey/next-themes)** - Gestión de modo oscuro y temas para Next.js

### Gestión de Paquetes & Runtime
- **[Bun](https://bun.sh/)** - Runtime JavaScript rápido todo en uno y gestor de paquetes

### Herramientas de Desarrollo
- **[ESLint](https://eslint.org/)** - Utilidad de linting de JavaScript

## ✅ Requisitos Previos

Antes de comenzar, asegúrate de tener lo siguiente instalado:

- **[Bun](https://bun.sh/)** (v1.0.0 o superior)
  - Instalar desde: https://bun.sh
  - Verificar instalación: `bun --version`

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd tribe
   ```

2. **Instalar dependencias usando Bun**
   ```bash
   bun install
   ```

   Esto creará un archivo `bun.lock` que debe ser guardado en el control de versiones.

## 🚀 Desarrollo

### Iniciar el servidor de desarrollo
```bash
bun dev
```

La aplicación estará disponible en `http://localhost:3000`

### Ejecutar linting
```bash
bun lint
```

### Ejecutar verificación de tipos
```bash
bun type-check
```

## 🏗️ Construcción

### Crear una compilación para producción
```bash
bun build
```

Esto genera una compilación optimizada en el directorio `.next`.

### Iniciar el servidor de producción
```bash
bun start
```

La aplicación estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
tribe/
├── app/                      # Directorio App Router de Next.js
│   ├── layout.tsx           # Componente de layout raíz
│   └── page.tsx             # Página de inicio
├── components/              # Componentes React reutilizables
│   ├── ui/                  # Componentes basados en Radix UI
│   └── [feature]/           # Componentes específicos de características
├── hooks/                   # Hooks React personalizados
├── lib/                     # Funciones utilitarias y helpers
├── styles/                  # Estilos globales
├── public/                  # Activos estáticos (imágenes, fuentes, etc.)
├── next.config.mjs          # Configuración de Next.js
├── tailwind.config.ts       # Configuración de TailwindCSS
├── tsconfig.json            # Configuración de TypeScript
├── package.json             # Dependencias del proyecto
├── bun.lock                 # Archivo de bloqueo de Bun (auto-generado)
└── README.md               # Este archivo
```

## 🤝 Contribución

Seguimos una estrategia de ramificación Git Flow para gestionar cambios de código y versiones. Esta sección describe el proceso de contribución.

### Descripción General de Git Flow

Nuestra estrategia de ramificación utiliza las siguientes ramas:

- **`main`** - Código listo para producción. Solo se actualiza a través de PRs de versión.
- **`develop`** - Rama de integración para características. Rama base para PRs de características.
- **`feature/*`** - Ramas de características para nueva funcionalidad
- **`bugfix/*`** - Ramas para corrección de errores
- **`hotfix/*`** - Correcciones críticas para problemas de producción

### Flujo de Trabajo de Contribución

#### 1. **Crear una Rama de Característica**

Crea una nueva rama de característica desde `develop`:

```bash
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name
```

Convenciones de nombre de rama:
- Características: `feature/descriptive-name`
- Correcciones de errores: `bugfix/descriptive-name`
- Correcciones rápidas: `hotfix/descriptive-name`

Usa kebab-case para nombres de rama.

#### 2. **Realizar Tus Cambios**

- Escribe código limpio y bien documentado
- Sigue el estilo de código y convenciones existentes
- Realiza commits con mensajes claros y descriptivos:
  ```bash
  git commit -m "feat: add new component for user authentication"
  git commit -m "fix: resolve issue with theme toggle not persisting"
  ```

Usa commits convencionales:
- `feat:` para nuevas características
- `fix:` para correcciones de errores
- `refactor:` para refactorización de código
- `docs:` para cambios de documentación
- `style:` para cambios de estilo de código (formato, etc.)
- `test:` para adiciones de pruebas
- `chore:` para compilación, dependencias, etc.

#### 3. **Mantén tu Rama Actualizada**

Sincroniza regularmente tu rama con `develop`:

```bash
git fetch origin
git rebase origin/develop
```

#### 4. **Envía tus Cambios**

```bash
git push origin feature/your-feature-name
```

#### 5. **Crear una Solicitud de Extracción**

1. Envía tu rama y crea un PR desde tu rama de característica a `develop`
2. Completa la plantilla de PR con:
   - Descripción clara de cambios
   - Números de problemas relacionados (si los hay)
   - Instrucciones de prueba
3. Espera a que se complete la revisión de código y las verificaciones de CI
4. Aborda cualquier retroalimentación de los revisores

#### 6. **Fusionar a Develop**

Una vez aprobado:
- Aplasta y fusiona o fusiona normalmente (los mantenedores especificarán)
- Elimina la rama de característica después de fusionar

#### 7. **Liberar a Main**

Las versiones se manejan a través de PRs de versión:

1. Crea un PR de versión desde `develop` a `main`
2. Actualiza la versión en `package.json`
3. Actualiza CHANGELOG (si se mantiene)
4. Fusiona a `main`
5. Etiqueta la versión: `git tag v1.0.0`

### Estándares de Revisión de Código

- Todos los PRs requieren al menos una aprobación
- Las verificaciones de CI/CD deben pasar
- El código debe seguir las convenciones del proyecto
- Los cambios deben ser probados adecuadamente

### Mejores Prácticas de Desarrollo

1. **Antes de comenzar el trabajo:**
   - Verifica los problemas y PRs existentes para evitar duplicar trabajo
   - Discute características grandes en un problema primero

2. **Mientras codificas:**
   - Mantén los commits enfocados y lógicos
   - Escribe código autodocumentado
   - Usa modo estricto de TypeScript para seguridad de tipos

3. **Antes de enviar PR:**
   - Ejecuta `bun lint` para verificar el estilo del código
   - Ejecuta `bun type-check` para verificar tipos
   - Prueba tus cambios localmente con `bun dev`
   - Actualiza la documentación si es necesario

## 📜 Scripts Disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| Desarrollo | `bun dev` | Inicia el servidor de desarrollo de Next.js con recarga en caliente |
| Compilar | `bun build` | Crea una compilación de producción optimizada |
| Producción | `bun start` | Inicia el servidor de producción |
| Linting | `bun lint` | Ejecuta ESLint para verificar la calidad del código |
| Verificación de Tipos | `bun type-check` | Ejecuta el compilador de TypeScript sin emitir archivos |

## 📝 Licencia

Este proyecto es privado. Todos los derechos reservados.

## 🔗 Recursos

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de React](https://react.dev)
- [Manual de TypeScript](https://www.typescriptlang.org/docs/)
- [Documentación de TailwindCSS](https://tailwindcss.com/docs)
- [Documentación de Radix UI](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [Documentación de Bun](https://bun.sh/docs)
- [Conventional Commits](https://www.conventionalcommits.org/)
