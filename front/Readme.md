# Proyecto Frontend con Vite y React

Este README proporciona instrucciones para inicializar y ejecutar el proyecto frontend desarrollado con Vite y React.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu sistema:

* **NVM (Node Version Manager):** Versión 1.2.2 o superior. NVM es recomendado para gestionar diferentes versiones de Node.js. Puedes verificar tu versión de NVM ejecutando en la terminal:
    ```bash
    nvm --version
    ```
    Si no lo tienes instalado, puedes encontrar las instrucciones de instalación en [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm).

* **Node.js:** Versión 22.1.3. Puedes verificar tu versión de Node.js activa ejecutando en la terminal:
    ```bash
    node --version
    ```
    Si estás utilizando NVM, asegúrate de tener esta versión instalada y activa:
    ```bash
    nvm install 22.1.3
    nvm use 22.1.3
    ```

* **npm (Node Package Manager) o yarn:** Generalmente se instalan con Node.js. Puedes verificar sus versiones con:
    ```bash
    npm --version
    # o
    yarn --version
    ```
* **Git:** Para clonar el repositorio y gestionar versiones. Puedes verificar su instalación con:
    ```bash
    git --version
    ```

## Inicialización del Proyecto

Sigue estos pasos para configurar el entorno y ejecutar el proyecto por primera vez:

1.  **Clonar el Repositorio (Si aún no lo has hecho):**
    Si ya tienes el repositorio en Git, clónalo a tu máquina local:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd frontend
    ```

2.  **Utilizar la Versión Correcta de Node.js con NVM:**
    Si estás utilizando NVM, asegúrate de estar utilizando la versión de Node.js especificada para este proyecto:
    ```bash
    nvm use 22.1.3
    ```

3.  **Instalar las Dependencias:**
    Las dependencias del proyecto están listadas en el archivo `package.json`. Utiliza `npm` o `yarn` para instalarlas.

    * **Con npm:**
        ```bash
        npm install
        ```

    * **Con yarn:**
        ```bash
        yarn install
        ```

4.  **Configurar Variables de Entorno (Si es necesario):**
    Si tu aplicación utiliza variables de entorno, es posible que necesites crear un archivo `.env` en la raíz de la carpeta `frontend` y configurar las variables necesarias. Consulta la documentación específica de tu proyecto para saber qué variables de entorno se requieren.

## Ejecución del Servidor de Desarrollo

Vite proporciona un servidor de desarrollo rápido. Para iniciarlo, ejecuta el siguiente comando:

```bash
npm run dev
# o
yarn dev
```

Por defecto, el servidor se iniciará en una dirección local (generalmente `http://localhost:5173/` o similar). Abre esta URL en tu navegador para ver la aplicación en funcionamiento.

## Próximos Pasos

Una vez que el entorno esté configurado y el servidor esté en ejecución, puedes comenzar a desarrollar tu interfaz de usuario con React. Vite ofrece una experiencia de desarrollo rápida con funcionalidades como Hot Module Replacement (HMR). Consulta la documentación oficial para obtener más información:

* **Vite:** [https://vitejs.dev/](https://vitejs.dev/)
* **React:** [https://react.dev/](https://react.dev/)

## Comandos Comunes

Aquí tienes algunos comandos comunes que puedes utilizar durante el desarrollo:

* `npm run dev` o `yarn dev`: Inicia el servidor de desarrollo.
* `npm run build` o `yarn build`: Construye la aplicación para producción (genera los archivos estáticos en la carpeta `dist`).
* `npm run preview` o `yarn preview`: Inicia un servidor local para previsualizar la build de producción.
* `npm test` o `yarn test`: Ejecuta las pruebas unitarias (si están configuradas).

## Notas Adicionales

* Asegúrate de no commitear la carpeta `node_modules/`. Esta carpeta debe ser ignorada y se genera al instalar las dependencias. El archivo `.gitignore` en la raíz del proyecto debería incluir `node_modules/`.
* Si agregas nuevas dependencias, asegúrate de actualizar el archivo `package.json` ejecutando `npm install <paquete>` o `yarn add <paquete>`.

¡Disfruta desarrollando tu frontend con Vite y React\!
```

**Explicación de las Secciones:**

* **Título:** Un título claro para el archivo README.
* **Descripción:** Una breve introducción al proyecto frontend y las tecnologías principales (Vite y React).
* **Requisitos Previos:** Lista el software necesario, incluyendo las versiones específicas de NVM y Node.js que estás utilizando. También menciona `npm` o `yarn` y Git.
* **Inicialización del Proyecto:** Describe los pasos para configurar el entorno:
    * Clonar el repositorio.
    * Instrucciones para asegurarse de usar la versión correcta de Node.js con NVM.
    * Instalar las dependencias usando `npm` o `yarn`.
    * Menciona la configuración de variables de entorno si es necesario.
* **Ejecución del Servidor de Desarrollo:** Explica cómo iniciar el servidor de desarrollo de Vite.
* **Próximos Pasos:** Sugiere la documentación oficial de Vite y React para continuar aprendiendo y desarrollando.
* **Comandos Comunes:** Lista algunos comandos útiles para el flujo de trabajo de desarrollo.
* **Notas Adicionales:** Incluye recordatorios importantes sobre la carpeta `node_modules` y la gestión de dependencias.

Guarda este contenido como `README.md` dentro de la carpeta `frontend` de tu proyecto. ¡Espero que te sea de gran ayuda para comenzar tu desarrollo frontend\!