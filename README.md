# 🌐 Three.js Interactive Demo: Threejs-Name

## 👨‍💻 Demo

Este repositorio contiene una demostración interactiva 3D desarrollada con **Three.js** (WebGL) y configurada con **Vite**.
-----

## ✨ Características Clave

  * **Renderizado 3D con Three.js:** Implementación de una escena 3D dinámica, incluyendo iluminación, materiales y geometría personalizada (o cargada).
  * **Flujo de Desarrollo Moderno (Vite):** Utiliza Vite para un entorno de desarrollo rápido con **Hot Module Replacement (HMR)** y una *build* optimizada para producción.
  * **Arquitectura Modular:** El código está estructurado en módulos ES6 para facilitar la mantenibilidad, escalabilidad y la carga perezosa de recursos.

-----

## 🚀 Acceso al Proyecto

La demostración está desplegada en GitHub Pages y es accesible en el siguiente enlace:

`https://alejosv07.github.io/Threejs-Name/`

### ⚙️ Habilitar el Panel de Depuración

Para acceder al panel de control de **Debug (lil-gui/tweakpane)** y modificar los parámetros de la escena en tiempo real, añade el *hash* `#debug` al final de la URL:

**Enlace de Ejemplo (con Debug):**
`https://alejosv07.github.io/Threejs-Name/#debug`

-----

## 🛠️ Stack Tecnológico

| Herramienta | Tipo | Propósito |
| :--- | :--- | :--- |
| **Three.js** | Librería 3D | Motor de renderizado 3D basado en WebGL. |
| **Vite** | Build Tool | Servidor de desarrollo ultrarrápido y empaquetador de producción. |
| **JavaScript (ESM)** | Lenguaje | Lógica principal de la aplicación. |
| **lil-gui / Tweakpane** | Utilidad | Panel de control para depuración y experimentación de variables de escena. |

-----

## 🏗️ Estructura del Repositorio

Los componentes principales del proyecto se encuentran en:

```
.
├── dist/                # (IGNORADA) Archivos de producción generados por Vite.
├── node_modules/        # (IGNORADA) Dependencias del proyecto.
├── public/
│   └── font/          # Letra utilizada.
│   └── img/             # Imágenes y assets del sitio (favicon, og:image).
└── src/
    └── css/
        └── styles.css     # Estilos utilizados.
    └── js/
        └── index.js     # Tenemos todo la parte de implementacion de three js en este archivo.
└── .gitignore
└── index.html
└── package.json
```

-----

## ⬇️ Configuración Local

Si deseas clonar el proyecto y ejecutarlo localmente:

### Prerrequisitos

Asegúrate de tener [Node.js](https://nodejs.org/) instalado.

### Instalación

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/AlejosV07/Threejs-Name.git
    cd Threejs-Name
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    ```
3.  Inicia el servidor de desarrollo (acceso en `http://localhost:5173` o similar):
    ```bash
    npm run dev
    ```
4.  Genera los archivos para producción (la salida se guarda en la carpeta `dist/`):
    ```bash
    npm run build
    ```

-----

## 👤 Autor

**Alejandro Romero**

  * **Rol:** Ingeniero en Desarrollo de Software
  * https://www.linkedin.com/in/alejandro-romero-dev/
