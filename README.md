# StoreApp

Este es un proyecto desarrollado con React e Ionic para la creación de una aplicación de tienda. A continuación, se detallan los pasos para la configuración, instalación y ejecución del proyecto.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:

- Node.js (>= 12.x)
- Yarn (>= 1.x)
- Ionic CLI (>=7.2.0)

## Instalación

Sigue estos pasos para clonar e instalar las dependencias del proyecto:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/DeveloperKes/StoreApp.git
   ```
### Navega al directorio del proyecto:

```bash
cd StoreApp
```

### Instala las dependencias con Yarn:

```bash
yarn install
```

## Ejecución del Proyecto
Para ejecutar la aplicación en modo de desarrollo:

### Inicia el servidor de desarrollo:

```bash
ionic s
```
Esto iniciará la aplicación en modo de desarrollo. Abre http://localhost:8100 en tu navegador para ver la aplicación.

## Compilar para producción:

Si deseas compilar la aplicación para producción, ejecuta:

```bash
ionic build
```
Esto generará una versión optimizada de la aplicación en la carpeta www.

### Ejecutar en un dispositivo/emulador:

Para ejecutar la aplicación en un dispositivo o emulador, asegúrate de tener configurado Capacitor. Luego, puedes ejecutar:

```bash
ionic capacitor run ios
ionic capacitor run android
```
Esto construirá la aplicación y la ejecutará en el dispositivo o emulador seleccionado.

### Estructura del Proyecto
Esta es una breve descripción de la estructura del proyecto:
```
StoreApp/
├── public/           # Archivos públicos
├── src/              # Código fuente de la aplicación
│   ├── components/   # Componentes reutilizables
|   |  ├── core/      # Componentes principales
|   |  ├── utils/     # Componentes secundarios
│   ├── hooks/        # Custom hooks
│   ├── lottie/       # Archivos de visualización para Lottie
│   ├── pages/        # Páginas de la aplicación
│   ├── stores/       # Manejo de estados globales
│   ├── theme/        # Estilos (Ionic)
│   ├── utils/        # Helpers
│   ├── App.tsx       # Componente principal
│   └── main.tsx     # Punto de entrada
├── www/              # Carpeta de compilación para producción
├── capacitor.config.json  # Configuración de Capacitor
├── package.json      # Configuración del proyecto y dependencias
└── yarn.lock         # Archivo de bloqueo de Yarn
```
## Configuración Adicional
Para configurar variables de entorno u otras configuraciones, crea un archivo .env en la raíz del proyecto y agrega las variables necesarias.

### Contribuir
Si deseas contribuir al proyecto, por favor crea una rama nueva a partir de main, realiza tus cambios y abre un Pull Request.

