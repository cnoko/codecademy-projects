SELECT * FROM customers LIMIT 10; 
SELECT * FROM orders LIMIT 10; 
SELECT * FROM books  LIMIT 10; 
SELECT *
FROM pg_Indexes 
WHERE tablename IN ('customers', 'orders', 'books');

EXPLAIN ANALYZE SELECT customer_id, quantity
FROM orders
WHERE quantity > 18;

CREATE INDEX orders_customer_id_quantity ON orders (customer_id, quantity) WHERE quantity > 18;

EXPLAIN ANALYZE SELECT customer_id, quantity
FROM orders
WHERE quantity > 18;

EXPLAIN ANALYZE SELECT customer_id
FROM customers
WHERE customer_id = 49516;

ALTER TABLE customers
ADD CONSTRAINT customers_pkey PRIMARY KEY (customer_id);

EXPLAIN ANALYZE SELECT customer_id
FROM customers
WHERE customer_id = 49516;

CLUSTER customers USING customers_pkey;
SELECT * FROM customers LIMIT 10; 

CREATE INDEX customer_id_book_id_idx ON orders (customer_id, book_id);
CREATE INDEX customer_id_book_id_quantity_idx ON orders (customer_id, book_id) WHERE quantity > 18;

CREATE INDEX books_title_author_idx ON books (title, author);

EXPLAIN ANALYZE SELECT *
FROM orders
WHERE quantity * price_base > 100;
CREATE INDEX quantity_by_price_base ON orders ((quantity * price_base));

EXPLAIN ANALYZE SELECT *
FROM orders
WHERE quantity * price_base > 100;

SELECT *
FROM pg_indexes
WHERE tablename IN ('customers', 'books', 'orders')
ORDER BY tablename, indexname;

DROP INDEX IF EXISTS books_author_idx;
DROP INDEX IF EXISTS orders_customer_id_quantity;
CREATE INDEX customers_last_name_first_name_email_address ON customers (last_name, first_name, email_address);

SELECT *
FROM pg_indexes
WHERE tablename IN ('customers', 'books', 'orders')
ORDER BY tablename, indexname;

