-- ============================================
-- SISTEMA DE PAGOS - ESQUEMA DE BASE DE DATOS
-- ============================================

CREATE DATABASE IF NOT EXISTS payment_system CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE payment_system;

-- ─────────────────────────────────────────────
-- TABLAS PRINCIPALES
-- ─────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS users (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  oauth_id      VARCHAR(255) NOT NULL,
  provider      ENUM('google', 'github') NOT NULL,
  name          VARCHAR(150) NOT NULL,
  email         VARCHAR(255),
  avatar        VARCHAR(500),
  stripe_customer_id VARCHAR(100),
  created_at    DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at    DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_oauth (oauth_id, provider)
);

CREATE TABLE IF NOT EXISTS products (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  name        VARCHAR(200) NOT NULL,
  description TEXT,
  price       DECIMAL(10,2) NOT NULL,
  stock       INT DEFAULT 0,
  image_url   VARCHAR(500),
  active      BOOLEAN DEFAULT TRUE,
  created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS orders (
  id              INT AUTO_INCREMENT PRIMARY KEY,
  user_id         INT NOT NULL,
  total           DECIMAL(10,2) NOT NULL,
  status          ENUM('pending','paid','refunded','cancelled') DEFAULT 'pending',
  stripe_payment_id VARCHAR(200),
  created_at      DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at      DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS order_items (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  order_id    INT NOT NULL,
  product_id  INT NOT NULL,
  quantity    INT NOT NULL,
  unit_price  DECIMAL(10,2) NOT NULL,
  subtotal    DECIMAL(10,2) GENERATED ALWAYS AS (quantity * unit_price) STORED,
  FOREIGN KEY (order_id)  REFERENCES orders(id)  ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE IF NOT EXISTS refunds (
  id              INT AUTO_INCREMENT PRIMARY KEY,
  order_id        INT NOT NULL,
  user_id         INT NOT NULL,
  amount          DECIMAL(10,2) NOT NULL,
  reason          TEXT,
  stripe_refund_id VARCHAR(200),
  status          ENUM('pending','processed','failed') DEFAULT 'pending',
  created_at      DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (user_id)  REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS payment_logs (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  user_id     INT,
  order_id    INT,
  event       VARCHAR(100),
  payload     JSON,
  created_at  DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id)  REFERENCES users(id),
  FOREIGN KEY (order_id) REFERENCES orders(id)
);

-- ─────────────────────────────────────────────
-- STORED PROCEDURES
-- ─────────────────────────────────────────────

DELIMITER $$

-- Crear orden completa con sus items
CREATE PROCEDURE sp_create_order(
  IN  p_user_id   INT,
  OUT p_order_id  INT,
  OUT p_total     DECIMAL(10,2)
)
BEGIN
  DECLARE v_total DECIMAL(10,2) DEFAULT 0;

  -- Calcular total del carrito temporal (en producción vendría de cart_items)
  -- Por simplicidad calculamos desde la llamada en Node

  INSERT INTO orders (user_id, total, status)
  VALUES (p_user_id, 0, 'pending');

  SET p_order_id = LAST_INSERT_ID();
  SET p_total    = 0;
END$$

-- Obtener resumen de compras de un usuario
CREATE PROCEDURE sp_user_purchase_history(IN p_user_id INT)
BEGIN
  SELECT
    o.id            AS order_id,
    o.total,
    o.status,
    o.stripe_payment_id,
    o.created_at    AS purchased_at,
    COUNT(oi.id)    AS items_count,
    GROUP_CONCAT(p.name SEPARATOR ', ') AS product_names
  FROM orders o
  JOIN order_items oi ON oi.order_id = o.id
  JOIN products    p  ON p.id = oi.product_id
  WHERE o.user_id = p_user_id
  GROUP BY o.id
  ORDER BY o.created_at DESC;
END$$

-- Procesar devolución
CREATE PROCEDURE sp_process_refund(
  IN p_order_id INT,
  IN p_user_id  INT,
  IN p_reason   TEXT,
  OUT p_refund_id INT,
  OUT p_amount    DECIMAL(10,2)
)
BEGIN
  DECLARE v_status VARCHAR(20);
  DECLARE v_total  DECIMAL(10,2);

  SELECT status, total INTO v_status, v_total
  FROM orders WHERE id = p_order_id AND user_id = p_user_id;

  IF v_status != 'paid' THEN
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Solo se pueden devolver órdenes pagadas';
  END IF;

  INSERT INTO refunds (order_id, user_id, amount, reason, status)
  VALUES (p_order_id, p_user_id, v_total, p_reason, 'pending');

  SET p_refund_id = LAST_INSERT_ID();
  SET p_amount    = v_total;

  UPDATE orders SET status = 'refunded' WHERE id = p_order_id;
END$$

DELIMITER ;

-- ─────────────────────────────────────────────
-- TRIGGER: Registrar cada cambio de estado
-- ─────────────────────────────────────────────

DELIMITER $$
CREATE TRIGGER trg_order_status_log
AFTER UPDATE ON orders
FOR EACH ROW
BEGIN
  IF OLD.status != NEW.status THEN
    INSERT INTO payment_logs (user_id, order_id, event, payload)
    VALUES (
      NEW.user_id,
      NEW.id,
      CONCAT('status_change:', OLD.status, '->', NEW.status),
      JSON_OBJECT('old_status', OLD.status, 'new_status', NEW.status, 'ts', NOW())
    );
  END IF;
END$$
DELIMITER ;

-- ─────────────────────────────────────────────
-- VISTAS
-- ─────────────────────────────────────────────

CREATE OR REPLACE VIEW vw_sales_summary AS
SELECT
  DATE(o.created_at)  AS sale_date,
  COUNT(DISTINCT o.id) AS total_orders,
  SUM(o.total)         AS revenue,
  COUNT(DISTINCT o.user_id) AS unique_buyers
FROM orders o
WHERE o.status = 'paid'
GROUP BY DATE(o.created_at)
ORDER BY sale_date DESC;

CREATE OR REPLACE VIEW vw_product_sales AS
SELECT
  p.id,
  p.name,
  p.price,
  COALESCE(SUM(oi.quantity), 0)   AS total_sold,
  COALESCE(SUM(oi.subtotal), 0)   AS total_revenue
FROM products p
LEFT JOIN order_items oi ON oi.product_id = p.id
LEFT JOIN orders o       ON o.id = oi.order_id AND o.status = 'paid'
GROUP BY p.id, p.name, p.price
ORDER BY total_revenue DESC;

-- ─────────────────────────────────────────────
-- DATOS DE PRUEBA
-- ─────────────────────────────────────────────

INSERT INTO products (name, description, price, stock, image_url) VALUES
('Curso Node.js Pro',     'Domina el backend con Node.js y Express', 49.99,  999, 'https://picsum.photos/seed/node/400/300'),
('Curso React Avanzado',  'Hooks, Context, Redux y más',             69.99,  999, 'https://picsum.photos/seed/react/400/300'),
('Pack Full Stack',       'Node + React + MySQL completo',           99.99,  999, 'https://picsum.photos/seed/full/400/300'),
('Curso SQL Experto',     'Stored procedures, triggers y más',       39.99,  999, 'https://picsum.photos/seed/sql/400/300'),
('Mentorship 1 mes',      'Sesiones 1:1 con un experto',            199.99, 50,  'https://picsum.photos/seed/mentor/400/300');
