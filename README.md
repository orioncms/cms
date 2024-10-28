[![GoDev](https://img.shields.io/badge/go.dev-reference-007d9c?logo=go&logoColor=white)](https://github.com/Mody-Solutions/orioncms/blob/master/README.md)
[![GitHub](https://img.shields.io/github/license/Mody-Solutions/orioncms)](https://github.com/Mody-Solutions/orioncms/blob/master/LICENSE)
[![Go Report Card](https://goreportcard.com/badge/github.com/Mody-Solutions/orioncms)](https://goreportcard.com/report/github.com/Mody-Solutions/orioncms)

### Instalación de Orion

Sigue estos pasos para instalar y configurar Orion usando `composer`:

1. **Instala el proyecto:**
   ```bash
   composer create-project phycticio/orioncms website --stability=dev
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
