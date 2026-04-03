# Hackaton 10 - Lista de Compras (Node.js + MongoDB)

API REST construida con Express y MongoDB para gestionar una lista de compras.

## Requisitos

- Node.js 18+
- Docker y Docker Compose

## Levantar el proyecto

1. Ir a la carpeta del proyecto:

```bash
cd Hackaton10/sv72672266
```

2. Levantar MongoDB con Docker:

```bash
docker compose up -d
```

3. Instalar dependencias (si aun no estan instaladas):

```bash
npm install
```

4. Verificar variables de entorno en `.env`:

```env
PORT=3000
MONGO_URI=mongodb://root:root123@localhost:27017/?authSource=admin
DB_NAME=hackaton10
```

5. Iniciar la API:

```bash
npm run dev
```

Servidor: `http://localhost:3000`

## Endpoints

Base URL: `http://localhost:3000`

### 1) Crear item de compra

- Metodo: `POST`
- URL: `/compras`

Body JSON:

```json
{
  "nombre": "Leche",
  "descripcion": "1 litro",
  "fecha": "2026-03-29",
  "esCompletado": false
}
```

### 2) Listar pendientes

- Metodo: `GET`
- URL: `/compras/pendientes`

### 3) Listar completados

- Metodo: `GET`
- URL: `/compras/completados`

### 4) Completar item

- Metodo: `PATCH`
- URL: `/compras/:id/completar`

Ejemplo:

```bash
PATCH /compras/67e7aef2f8e716f7c9f2d111/completar
```

## Endpoint de salud

- Metodo: `GET`
- URL: `/`
- Respuesta esperada:

```json
{
  "message": "online"
}
```
