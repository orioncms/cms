# OrionCMS - Installation Guide

Welcome to **OrionCMS**! Follow this guide to set up and run the project locally.

## Prerequisites
Before starting, make sure you have the following installed:

- **Node.js** (v18+ recommended)
- **pnpm** (Package manager) - Install it globally if not already:
  ```bash
  npm install -g pnpm
  ```
- **MySQL** (or SQLite) database setup and ready.

## Installation Steps

1. **Clone the repository**:
   ```bash
   git clone git@github.com:orioncms/cms.git
   ```

2. **Navigate to the project folder**:
   ```bash
   cd cms
   ```

3. **Install dependencies**:
   ```bash
   pnpm i
   ```

4. **Set up your database**:
    - Ensure you have database credentials ready:
        - **Host**
        - **User**
        - **Password**
        - **Port**
        - **Database name**

    - The application expects a MySQL (or SQLite) database. Update your database details in the appropriate configuration file (`.env` or similar). If an `.env` file is not available, create one in the root of the project.

5. **Start the development server**:
   ```bash
   pnpm dev
   ```

6. **Access the application**:
   Open your browser and go to:
   ```
   https://localhost:3000
   ```

## Notes
- Make sure the database server is running and accessible.
- Default development port: `3000`.
- If you encounter SSL issues with `https://localhost`, check your browser or consider using `http://localhost:3000`.

---

### Enjoy building with OrionCMS 🚀
