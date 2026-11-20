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
```

Abre en el navegador la dirección que muestre Vite.

## Ejecutar el backend

En otra terminal, desde la carpeta principal del proyecto:

```text
cd backend
npm install
npm run dev
```

El backend requiere variables de entorno. Sus nombres aparecen en `backend/.env.example`.

## Estado de la jornada 1

El frontend está preparado y compila correctamente. Queda pendiente comprobar la consulta completa, las pruebas de aceptación y las evidencias cuando la conexión del backend esté disponible.