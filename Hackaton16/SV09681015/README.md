# 💳 PagoClick — Sistema de Pagos Online

Proyecto hackathon: sistema de pagos persistente con OAuth, Stripe, MySQL y Socket.io.

## Stack Tecnológico

| Capa          | Tecnología                                            |
|---------------|-------------------------------------------------------|
| Backend       | **Node.js + Express.js**                              |
| Tiempo real   | **Socket.io**                                         |
| Base de datos | **MySQL 8+** (con Stored Procedures, Triggers, Vistas)|
| Autenticación | **Passport.js + OAuth 2.0** (Google y GitHub)         |
| Pagos         | **Stripe Checkout**                                   |
| Vistas        | **EJS**                                               |

---

## Estructura del proyecto

```
payment-system/
├── config/
│   ├── database.js       # Pool de conexiones MySQL
│   └── passport.js       # Estrategias OAuth
├── middleware/
│   └── auth.js           # Protección de rutas
├── routes/
│   ├── auth.js           # Login/logout OAuth
│   └── payments.js       # Productos, checkout, devoluciones
├── views/
│   ├── partials/navbar.ejs
│   ├── index.ejs
│   ├── login.ejs
│   ├── products.ejs
│   ├── dashboard.ejs
│   └── success.ejs
├── public/css/main.css
├── sql/schema.sql        # BD completa con SP, Triggers, Vistas
├── server.js             # Entrada principal
├── .env.example
└── package.json
```

---

## Instalación paso a paso

### 1. Clonar e instalar dependencias
```bash
cd payment-system
npm install
```

### 2. Configurar variables de entorno
```bash
cp .env.example .env
# Editar .env con tus credenciales
```

### 3. Crear la base de datos
```bash
mysql -u root -p < sql/schema.sql
```

### 4. Configurar credenciales OAuth

**Google:**
1. Ve a https://console.cloud.google.com/apis/credentials
2. Crea un proyecto → "Credenciales" → "ID de cliente OAuth 2.0"
3. Tipo: Aplicación web
4. URI de redirección: `http://localhost:3000/auth/google/callback`
5. Copia `Client ID` y `Client Secret` al `.env`

**GitHub:**
1. Ve a https://github.com/settings/developers
2. "OAuth Apps" → "New OAuth App"
3. Homepage URL: `http://localhost:3000`
4. Authorization callback URL: `http://localhost:3000/auth/github/callback`
5. Copia `Client ID` y `Client Secret` al `.env`

### 5. Configurar Stripe
1. Crea cuenta en https://stripe.com
2. Ve al Dashboard → Developers → API keys
3. Copia la `Publishable key` y `Secret key` al `.env`
4. Para webhooks locales usa Stripe CLI:
   ```bash
   stripe listen --forward-to localhost:3000/payments/webhook
   ```

### 6. Iniciar el servidor
```bash
npm run dev
```
Abrir: http://localhost:3000

---

## Flujo de la aplicación

```
Usuario → Login OAuth (Google/GitHub)
        → Catálogo de productos
        → Agregar al carrito (JS)
        → Checkout → Stripe Checkout Session
        → Pago exitoso → Webhook → Estado 'paid' en BD
        → Notificación Socket.io en tiempo real
        → Dashboard con historial (Stored Procedure)
        → Solicitar devolución → Stripe Refund API
```

---

## Objetos de BD utilizados

| Objeto           | Nombre                     | Propósito                     |
|------------------|----------------------------|-------------------------------|
| Stored Procedure | `sp_create_order`          | Crear orden                   |
| Stored Procedure | `sp_user_purchase_history` | Historial del usuario         |
| Stored Procedure | `sp_process_refund`        | Procesar devolución           |
| Trigger          | `trg_order_status_log`     | Auditoría de cambios de estado|
| Vista            | `vw_sales_summary`         | Resumen de ventas por día     |
| Vista            | `vw_product_sales`         | Ventas por producto           |

---

## Tarjetas de prueba Stripe

| Número              | Resultado                 |
|---------------------|---------------------------|
| 4242 4242 4242 4242 | Pago exitoso              |
| 4000 0000 0000 0002 | Tarjeta declinada         |
| 4000 0025 0000 3155 | Requiere autenticación 3D |

Fecha: cualquier futura · CVC: cualquier 3 dígitos

---

## Tecnologías clave explicadas

**Socket.io:** Permite notificaciones en tiempo real. Cuando Stripe confirma un pago vía webhook, el servidor emite un evento al socket del usuario que hizo la compra.

**OAuth 2.0:** El usuario no crea contraseña. Se autentica con Google/GitHub, que devuelve un token. Passport.js gestiona el flujo y almacena el perfil en MySQL.

**Stored Procedures:** La lógica de devolución vive en `sp_process_refund()`. Verifica el estado, crea el registro de reembolso y actualiza la orden en una transacción atómica.

**Trigger:** `trg_order_status_log` registra automáticamente cada cambio de estado en `payment_logs`, creando un historial de auditoría sin código extra en el servidor.
