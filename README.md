Great! Here's a refined version of your installation guide for **OrionCMS** on Packagist, ensuring it’s simple and clear:

---

### Installation Instructions for OrionCMS

1. **Create a new project:**
   ```bash
   composer create-project phycticio/orioncms project-name --stability=dev
   ```

2. **Navigate to the project directory and install and build the front end:**
   ```bash
   cd project-name && yarn && yarn build
   ```

3. **Navigate to the public directory and set up Valet with SSL:**
   ```bash
   cd public && valet link project-name --secure
   ```

4. **Open your browser and visit the site:**
   ```
   https://project-name.test
   ```

5. **Follow the installation process to set up Orion.**

---

This guide is simple, concise, and should help users get Orion up and running quickly.
