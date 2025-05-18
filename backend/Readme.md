# Proyecto Backend con Python 3.13 y Django REST Framework

Este README proporciona instrucciones para inicializar y ejecutar el proyecto backend desarrollado con Python 3.13 y Django REST Framework.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu sistema:

* **Python:** Versión 3.13 o superior. Puedes verificar tu versión de Python ejecutando en la terminal:
    ```bash
    python --version
    ```
* **pip:** El gestor de paquetes de Python. Generalmente viene instalado con Python. Puedes verificar su instalación con:
    ```bash
    pip --version
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
    cd backend
    ```

2.  **Crear y Activar el Entorno Virtual:**
    Es altamente recomendado utilizar un entorno virtual para aislar las dependencias del proyecto.

    ```bash
    python -m venv venv  # Crea un entorno virtual llamado 'venv'
    ```

    Activa el entorno virtual:

    * **En Linux/macOS:**
        ```bash
        source venv/bin/activate
        ```
    * **En Windows:**
        ```bash
        venv\Scripts\activate
        ```

    Una vez activado, verás el nombre del entorno virtual (`(venv)`) al principio de tu línea de comandos.

3.  **Instalar las Dependencias:**
    Las dependencias del proyecto están listadas en el archivo `requirements.txt`. Utiliza `pip` para instalarlas:
    ```bash
    pip install -r requirements.txt
    ```
    Si aún no tienes este archivo, lo crearás más adelante cuando instales tus primeras dependencias de Django y DRF.

4.  **Realizar las Migraciones de Django:**
    Django utiliza un sistema de migraciones para gestionar los cambios en los modelos de la base de datos. Ejecuta las migraciones iniciales:
    ```bash
    python manage.py migrate
    ```

5.  **Crear un Superusuario (Opcional):**
    Si necesitas acceder al panel de administración de Django, crea un superusuario:
    ```bash
    python manage.py createsuperuser
    ```
    Sigue las instrucciones en la terminal para ingresar un nombre de usuario, correo electrónico y contraseña.

## Ejecución del Servidor de Desarrollo

Para iniciar el servidor de desarrollo local de Django, ejecuta el siguiente comando:

```bash
python manage.py runserver