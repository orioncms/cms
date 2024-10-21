# Orion

**Orion** es un sistema de gestión de contenido (CMS) de código abierto y accesible, diseñado para facilitar la creación y gestión de contenido digital y aplicaciones web sin necesidad de conocimientos de programación.

## Descripción

Orion permite a individuos y empresas crear, gestionar y personalizar sus herramientas digitales de manera flexible y escalable. Con una interfaz intuitiva y características personalizables, Orion busca empoderar a sus usuarios y fomentar la colaboración y la innovación dentro de la comunidad.

## Características

- **Interfaz amigable**: Diseñado para usuarios sin conocimientos técnicos.
- **Gestión de contenido**: Crea y gestiona contenido digital fácilmente.
- **Componentes personalizables**: Selecciona y configura componentes web según tus necesidades.
- **Integración de Vue.js**: Utiliza Vue.js para una experiencia de usuario ágil y moderna.
- **Modelo de suscripción inclusivo**: Acceso gratuito para usuarios individuales y pequeñas empresas.

## Instalación

Para instalar y ejecutar Orion localmente, sigue estos pasos:

1. **Clona el repositorio**:
   ```bash
   git@github.com:Mody-Solutions/orioncms.git
   ```

2. **Instala las dependencias**:
   ```bash
   cd orion
   composer install
   ```

3. **Configura el archivo .env**:
    - Renombra el archivo `.env.example` a `.env`.
    - Configura tu base de datos y otras variables de entorno.

4. **Ejecuta las migraciones**:
   ```bash
   php artisan migrate
   ```

5. **Inicia el servidor**:
   ```bash
   php artisan serve
   ```

## Contribución

¡Las contribuciones son bienvenidas! Si deseas contribuir a Orion, por favor sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea tu rama de características (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Añadir nueva característica'`).
4. Haz un push a tu rama (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).

## Contacto

Para más información, preguntas o sugerencias, no dudes en contactarnos en [orion@mody.es].
