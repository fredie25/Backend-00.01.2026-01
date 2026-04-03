# Lista de Compras - Aplicación Web

## Descripción
Aplicación web para gestionar una lista de compras. Permite agregar items, marcarlos como completados y ver separados los pendientes de los completados.

## Requisitos
- Node.js instalado
- Navegador web

## Instalación

1. Abrir terminal en la carpeta del proyecto
2. Ejecutar: npm install
3. Ejecutar: npm run dev
4. Abrir navegador en: http://localhost:3000

## Uso

- Escribir el nombre del producto y opcionalmente una descripción
- Hacer clic en "Agregar a la lista"
- El item aparecerá en la lista de pendientes
- Para marcar como completado, hacer clic en el botón "Completar"
- Para ver los completados, hacer clic en la pestaña "Completados"

## Estructura del Proyecto

- models/Item.js: Define la estructura de los datos
- routes/items.js: Contiene las rutas de la API
- public/index.html: Interfaz de usuario
- app.js: Configuración principal
- server.js: Inicia el servidor

## Endpoints de la API

- POST /api/items: Crear un nuevo item
- GET /api/items/pendientes: Obtener items pendientes
- GET /api/items/completados: Obtener items completados
- PATCH /api/items/:id/completar: Marcar un item como completado

## Tecnologías utilizadas

- Node.js
- Express
- Base de datos en memoria

## Nota

Los datos se almacenan en memoria mientras el servidor está corriendo. Al reiniciar el servidor, los datos se pierden.