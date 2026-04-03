# Reto 1 - NodeJS y MongoDB

## Descripcion
Aplicacion web para gestionar una lista de compras con Express y MongoDB.

## Requisitos
- Node.js 18+
- MongoDB local o en la nube

## Configuracion
1. `npm install`
2. Crear `.env` basado en `.env.example`
3. Iniciar MongoDB

## Ejecutar
- `npm run dev`

## Rutas
- `POST /items` crear item
- `GET /items/pendientes` listar pendientes
- `GET /items/completados` listar completados
- `PATCH /items/:id/completar` completar item

## Campos del item
- `nombre` (string)
- `descripcion` (string)
- `fecha` (date)
- `esCompletado` (boolean)
