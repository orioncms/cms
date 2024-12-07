[![Laravel](https://img.shields.io/badge/laravel-docs-red?logo=laravel)](https://laravel.com/docs/11.x/readme)
[![VueJS](https://img.shields.io/badge/vuejs-docs-green?logo=data:image/svg%2bxml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VnVlLmpzPC90aXRsZT48cGF0aCBkPSJNMjQsMS42MUgxNC4wNkwxMiw1LjE2LDkuOTQsMS42MUgwTDEyLDIyLjM5Wk0xMiwxNC4wOCw1LjE2LDIuMjNIOS41OUwxMiw2LjQxbDIuNDEtNC4xOGg0LjQzWiIvPjwvc3ZnPg==&logoColor=#ffffff)](https://github.com/Mody-Solutions/orioncms/blob/master/README.md)
[![GitHub](https://img.shields.io/github/license/Mody-Solutions/orioncms)](https://github.com/Mody-Solutions/orioncms/blob/master/LICENSE)

### Instalación de Orion

Sigue estos pasos para instalar y configurar Orion usando `composer`:

1. **Instala el proyecto:**
   ```bash
   composer create-project orioncms/cms project-name --stability=dev
   ```
   Este comando instalará todo el sistema en el directorio `website`, utilizando una base de datos SQLite por defecto y corriendo automáticamente las migraciones necesarias.

2. **Crea el enlace de Valet:**
   Si usas Laravel Valet, crea el enlace al proyecto y asegúrate de que esté configurado como seguro:
   ```bash
   valet link website --secure
   ```

3. **Accede al sistema:**
   Abre el navegador y dirígete a la URL generada, que normalmente será `https://website.test`. El sistema detectará automáticamente que no está instalado y te guiará a través del asistente de instalación.

---

### Asistente de Instalación

Durante la primera configuración, el asistente de instalación te guiará a través de los siguientes pasos:

1. **Crear el usuario administrador:** Introduce los detalles de tu usuario administrador.

2. **Seleccionar las características a habilitar:**
    - Páginas
    - Blog
    - Componentes

3. **Finalizar la configuración:** Una vez que hayas configurado tus preferencias, serás redirigido al **dashboard** de administración, donde podrás comenzar a gestionar tu sitio web.

---

Estas instrucciones aseguran que Orion se instale correctamente y que el sistema quede listo para ser utilizado desde el dashboard.
