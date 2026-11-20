# Catálogo de productos PERN

Proyecto de Ingeniería de Software para consultar un catálogo de productos.

## Herramientas

- React y Vite para la interfaz.
- Axios para solicitar los productos.
- Node.js y Express para la API.
- PostgreSQL en Neon para almacenar los productos.

## Flujo de consulta

React envía una petición a `GET /api/products` mediante Axios. Express recibe la petición, consulta los productos y devuelve la respuesta. React muestra el nombre, precio e imagen de cada producto.

## Ejecutar el frontend

En una terminal, entrar a la carpeta frontend:

```text
cd frontend
npm install
npm run dev