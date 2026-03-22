# Backend Hackaton 09

API REST para un sistema de gestión de cursos con soporte para usuarios, cursos, lecciones, inscripciones y comentarios.

## 📋 Requisitos Previos

- Node.js v14+
- MySQL 5.7+
- npm o yarn

## 🚀 Instalación y Setup

```bash
# Instalar dependencias
npm install

# Configurar archivo .env
cp .env.sample .env
# Editar .env con credenciales de BD

# Crear base de datos y ejecutar migraciones
npm run db:migrate

# (Opcional) Ejecutar seeders
npm run db:seed

# Iniciar servidor en desarrollo
npm run dev
```

El servidor estará disponible en `http://localhost:8000`

## 📚 Endpoints API

### Health Check

```bash
GET /health
```

**Response (200 OK):**
```json
{ "status": true }
```

---

## 🔐 Auth (Autenticación)

### POST /auth/login - Iniciar sesión

Autentica un usuario y retorna un token JWT válido por 1 hora.

```bash
curl -X POST http://localhost:8000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "juan.perez@example.com",
    "password": "miPassword123"
  }'
```

**Response (200 OK):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InN0dWRlbnQiLCJlbWFpbCI6Imp1YW4ucGVyZXpAZXhhbXBsZS5jb20iLCJpYXQiOjE2NzUzNDIyMDAsImV4cCI6MTY3NTM0NTgwMH0.abc123xyz..."
}
```

**Uso del token:**
```bash
# Incluir en el header Authorization para endpoints protegidos
curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
  http://localhost:8000/courses
```

**Errores (401 Unauthorized):**
```json
{
  "message": "Credenciales inválidas"
}
```

---

## 3.1 Users (Usuarios)

### POST /users - Crear usuario

Crea un nuevo usuario. El email debe ser único, y el rol por defecto es `student`.

```bash
curl -X POST http://localhost:8000/users \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Juan",
    "lastName": "Pérez",
    "email": "juan.perez@example.com",
    "passwordHash": "hashed_password_123"
  }'
```

**Response (201 Created):**
```json
{
  "id": 1,
  "firstName": "Juan",
  "lastName": "Pérez",
  "email": "juan.perez@example.com",
  "role": "student",
  "createdAt": "2026-03-22T10:30:00Z",
  "updatedAt": "2026-03-22T10:30:00Z"
}
```

### GET /users - Listar usuarios con filtros

Obtiene lista paginada de usuarios con filtros por rol y búsqueda en nombre/apellido/email.

**Parámetros de query:**
- `role`: Filtrar por rol (`admin`, `instructor`, `student`)
- `q`: Búsqueda en firstName, lastName, email
- `page`: Número de página (default: 1)
- `pageSize`: Registros por página (default: 10)

```bash
# Listar todos los usuarios (página 1, 10 por página)
curl http://localhost:8000/users

# Filtrar por rol instructor
curl "http://localhost:8000/users?role=instructor"

# Buscar por nombre o email
curl "http://localhost:8000/users?q=juan&page=1&pageSize=10"

# Combinado
curl "http://localhost:8000/users?role=student&q=perez&page=1&pageSize=10"
```

**Response (200 OK):**
```json
{
  "data": [
    {
      "id": 1,
      "firstName": "Juan",
      "lastName": "Pérez",
      "email": "juan.perez@example.com",
      "role": "student",
      "createdAt": "2026-03-22T10:30:00Z"
    }
  ],
  "total": 1,
  "page": 1,
  "pageSize": 10
}
```

---

## 3.2 Courses (Cursos)

### POST /courses - Crear curso

Crea un nuevo curso (requiere rol `instructor` o `admin`). El slug se genera automáticamente desde el título. Por defecto `published=false`.

```bash
curl -X POST http://localhost:8000/courses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "title": "Introducción a JavaScript",
    "description": "Curso básico de JavaScript para principiantes",
    "ownerId": 2
  }'
```

**Response (201 Created):**
```json
{
  "id": 1,
  "title": "Introducción a JavaScript",
  "slug": "introduccion-a-javascript",
  "description": "Curso básico de JavaScript para principiantes",
  "published": false,
  "ownerId": 2,
  "createdAt": "2026-03-22T10:35:00Z",
  "updatedAt": "2026-03-22T10:35:00Z"
}
```

### GET /courses - Listar cursos con filtros

Obtiene lista paginada de cursos publicados con filtros y búsqueda.

**Parámetros de query:**
- `published`: Filtrar por estado (`true`, `false`)
- `q`: Búsqueda en título y descripción
- `order`: Ordenamiento (`createdAt:ASC`, `createdAt:DESC`, `title:ASC`)
- `page`: Número de página (default: 1)
- `pageSize`: Registros por página (default: 10)

```bash
# Listar todos los cursos publicados
curl "http://localhost:8000/courses?published=true"

# Buscar curso por nombre
curl "http://localhost:8000/courses?published=true&q=javascript"

# Ordenar por fecha descendente con paginación
curl "http://localhost:8000/courses?published=true&order=createdAt:DESC&page=1&pageSize=10"

# Combinado
curl "http://localhost:8000/courses?published=true&q=js&order=createdAt:DESC&page=1&pageSize=5"
```

**Response (200 OK):**
```json
{
  "data": [
    {
      "id": 1,
      "title": "Introducción a JavaScript",
      "slug": "introduccion-a-javascript",
      "description": "Curso básico...",
      "published": true,
      "ownerId": 2,
      "createdAt": "2026-03-22T10:35:00Z"
    }
  ],
  "total": 1,
  "page": 1,
  "pageSize": 10
}
```

### GET /courses/:slug - Obtener detalle del curso

Obtiene información detallada del curso incluyendo propietario, lecciones y conteo de inscripciones.

```bash
curl http://localhost:8000/courses/introduccion-a-javascript
```

**Response (200 OK):**
```json
{
  "id": 1,
  "title": "Introducción a JavaScript",
  "slug": "introduccion-a-javascript",
  "description": "Curso básico de JavaScript...",
  "published": true,
  "ownerId": 2,
  "owner": {
    "id": 2,
    "firstName": "Carlos",
    "lastName": "López",
    "email": "carlos@example.com",
    "role": "instructor"
  },
  "lessons": [
    {
      "id": 1,
      "title": "Variables y Tipos de Datos",
      "order": 1
    },
    {
      "id": 2,
      "title": "Funciones",
      "order": 2
    }
  ],
  "lessonsCount": 2,
  "enrollmentsCount": 15,
  "createdAt": "2026-03-22T10:35:00Z"
}
```

### PUT /courses/:id - Actualizar curso

Actualiza la información del curso.

```bash
curl -X PUT http://localhost:8000/courses/1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "title": "JavaScript Avanzado",
    "description": "Curso avanzado con async/await y más",
    "published": true
  }'
```

**Response (200 OK):**
```json
{
  "id": 1,
  "title": "JavaScript Avanzado",
  "slug": "javascript-avanzado",
  "description": "Curso avanzado...",
  "published": true,
  "updatedAt": "2026-03-22T11:00:00Z"
}
```

### DELETE /courses/:id - Eliminar curso

Elimina el curso (soft delete si `paranoid=true`).

```bash
curl -X DELETE http://localhost:8000/courses/1 \
  -H "Authorization: Bearer <token>"
```

**Response (204 No Content)**

---

## 3.3 Lessons (Lecciones)

### POST /courses/:courseId/lessons - Crear lección

Crea una nueva lección asignando automáticamente un `order` incremental.

```bash
curl -X POST http://localhost:8000/courses/1/lessons \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "title": "Variables y Tipos de Datos",
    "content": "En esta lección aprenderemos sobre variables...",
    "videoUrl": "https://youtube.com/watch?v=abc123"
  }'
```

**Response (201 Created):**
```json
{
  "id": 1,
  "courseId": 1,
  "title": "Variables y Tipos de Datos",
  "content": "En esta lección aprenderemos sobre variables...",
  "videoUrl": "https://youtube.com/watch?v=abc123",
  "order": 1,
  "createdAt": "2026-03-22T10:40:00Z",
  "updatedAt": "2026-03-22T10:40:00Z"
}
```

### GET /courses/:courseId/lessons - Listar lecciones

Obtiene las lecciones del curso ordenadas por `order`, con información del curso.

**Parámetros de query:**
- `order`: Orden de lecciones (`ASC`, `DESC`) - default: `ASC`

```bash
# Listar lecciones del curso 1
curl http://localhost:8000/courses/1/lessons

# Ordenar descendente
curl "http://localhost:8000/courses/1/lessons?order=DESC"
```

**Response (200 OK):**
```json
{
  "course": {
    "id": 1,
    "title": "Introducción a JavaScript",
    "slug": "introduccion-a-javascript"
  },
  "lessons": [
    {
      "id": 1,
      "title": "Variables y Tipos de Datos",
      "content": "En esta lección...",
      "order": 1,
      "createdAt": "2026-03-22T10:40:00Z"
    },
    {
      "id": 2,
      "title": "Funciones",
      "order": 2,
      "createdAt": "2026-03-22T10:41:00Z"
    }
  ]
}
```

### PUT /lessons/:id - Actualizar lección

Actualiza la información de una lección.

```bash
curl -X PUT http://localhost:8000/lessons/1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "title": "Variables, Tipos y Operadores",
    "content": "Contenido actualizado..."
  }'
```

**Response (200 OK):**
```json
{
  "id": 1,
  "courseId": 1,
  "title": "Variables, Tipos y Operadores",
  "order": 1,
  "updatedAt": "2026-03-22T11:05:00Z"
}
```

### DELETE /lessons/:id - Eliminar lección

Elimina la lección (soft delete si `paranoid=true`).

```bash
curl -X DELETE http://localhost:8000/lessons/1 \
  -H "Authorization: Bearer <token>"
```

**Response (204 No Content)**

---

## 3.4 Enrollments (Inscripciones)

### POST /courses/:courseId/enroll - Inscribirse en curso

Inscribe a un usuario en un curso con estado inicial `pending`.

```bash
curl -X POST http://localhost:8000/courses/1/enroll \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "userId": 1
  }'
```

**Response (201 Created):**
```json
{
  "id": 1,
  "userId": 1,
  "courseId": 1,
  "status": "pending",
  "score": null,
  "createdAt": "2026-03-22T11:10:00Z",
  "updatedAt": "2026-03-22T11:10:00Z"
}
```

### PATCH /enrollments/:id/status - Actualizar estado de inscripción

Cambia el estado de la inscripción a `active` (y opcionalmente asigna `score`).

```bash
# Activar inscripción
curl -X PATCH http://localhost:8000/enrollments/1/status \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "status": "active",
    "score": 95
  }'
```

**Response (200 OK):**
```json
{
  "id": 1,
  "userId": 1,
  "courseId": 1,
  "status": "active",
  "score": 95,
  "updatedAt": "2026-03-22T11:15:00Z"
}
```

### GET /courses/:courseId/enrollments - Listar inscripciones

Obtiene las inscripciones del curso con información del usuario, filtrable por estado.

**Parámetros de query:**
- `status`: Filtrar por estado (`pending`, `active`, `completed`, `dropped`)

```bash
# Listar todas las inscripciones del curso
curl http://localhost:8000/courses/1/enrollments

# Solo inscripciones activas
curl "http://localhost:8000/courses/1/enrollments?status=active"

# Solo inscripciones pendientes
curl "http://localhost:8000/courses/1/enrollments?status=pending"
```

**Response (200 OK):**
```json
{
  "data": [
    {
      "id": 1,
      "userId": 1,
      "status": "active",
      "score": 95,
      "user": {
        "id": 1,
        "firstName": "Juan",
        "lastName": "Pérez",
        "email": "juan.perez@example.com"
      },
      "createdAt": "2026-03-22T11:10:00Z"
    }
  ],
  "total": 1
}
```

---

## 3.5 Comments (Comentarios)

### POST /lessons/:lessonId/comments - Crear comentario

Crea un comentario en una lección. El contenido se valida (trim) y debe cumplir longitud mínima.

```bash
curl -X POST http://localhost:8000/lessons/1/comments \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "userId": 1,
    "content": "Excelente explicación, muy clara y concisa. Me ayudó mucho a entender el concepto."
  }'
```

**Response (201 Created):**
```json
{
  "id": 1,
  "lessonId": 1,
  "userId": 1,
  "content": "Excelente explicación, muy clara y concisa. Me ayudó mucho a entender el concepto.",
  "createdAt": "2026-03-22T11:20:00Z",
  "updatedAt": "2026-03-22T11:20:00Z"
}
```

### GET /lessons/:lessonId/comments - Listar comentarios

Obtiene los comentarios de una lección de forma paginada, incluyendo información del autor.

**Parámetros de query:**
- `page`: Número de página (default: 1)
- `pageSize`: Registros por página (default: 10)

```bash
# Listar comentarios de la lección 1
curl http://localhost:8000/lessons/1/comments

# Con paginación
curl "http://localhost:8000/lessons/1/comments?page=1&pageSize=5"
```

**Response (200 OK):**
```json
{
  "data": [
    {
      "id": 1,
      "lessonId": 1,
      "userId": 1,
      "content": "Excelente explicación, muy clara...",
      "author": {
        "id": 1,
        "firstName": "Juan",
        "lastName": "Pérez",
        "email": "juan.perez@example.com"
      },
      "createdAt": "2026-03-22T11:20:00Z"
    }
  ],
  "total": 1,
  "page": 1,
  "pageSize": 10
}
```

---

## ️ Estructura Base de Datos

- **Users**: firstName, lastName, email (único), passwordHash, role
- **Courses**: title (único), slug (único), description, published, ownerId (FK)
- **Lessons**: courseId (FK), title, content, videoUrl, order
- **Enrollments**: userId (FK), courseId (FK), status, score (N:M con atributos)
- **Comments**: lessonId (FK), userId (FK), content

---

## 📝 Variables de Entorno

```env
PORT=8000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=hackaton09
JWT_SECRET=tu_secreto_jwt
NODE_ENV=development
```

---

## 🛠️ Scripts Disponibles

```bash
# Desarrollo con auto-reload
npm run dev

# Migraciones
npm run db:migrate              # Ejecutar migraciones
npm run db:migrate:undo:all     # Revertir todas

# Seeders
npm run db:seed                 # Ejecutar seeders
npm run db:seed:undo:all        # Revertir todos
```

---

## 👤 Autor

nelhoesp
