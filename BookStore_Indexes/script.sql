SELECT * FROM pg_indexes 
WHERE tablename IN('customers', 'books', 'orders');
CREATE INDEX customer_id_idx ON orders (customer_id);
CREATE INDEX book_id_idx ON orders (book_id);

EXPLAIN ANALYZE SELECT
original_language, title, sales_in_millions
FROM books
WHERE original_language = 'French';

SELECT pg_size_pretty (pg_total_relation_size('books'));
CREATE INDEX  orign_lang_title_sales_sold_idx ON books 
(original_language, title, sales_in_millions);

EXPLAIN ANALYZE SELECT
original_language, title, sales_in_millions
FROM books
WHERE original_language = 'French';

SELECT pg_size_pretty (pg_total_relation_size('books'));

DROP INDEX IF EXISTS orign_lang_title_sales_sold_idx;


DROP INDEX IF EXISTS customer_id_idx;
DROP INDEX IF EXISTS book_id_idx;


SELECT NOW();
 
\COPY orders FROM 'orders_add.txt' DELIMITER ',' CSV HEADER;
 
SELECT NOW();

CREATE INDEX customer_id_idx ON orders (customer_id);
CREATE INDEX book_id_idx ON orders (book_id);
EXPLAIN ANALYZE SELECT *
FROM orders
WHERE customer_id = 1 AND book_id = 1;

SELECT pg_size_pretty (pg_total_relation_size('orders'));
CREATE INDEX  firstname_email_idx ON customers
(first_name, email_address);

EXPLAIN ANALYZE SELECT
first_name, email_address
FROM customers
WHERE first_name = 'John' and email_address = 'asdasd@gmail.com';

SELECT pg_size_pretty (pg_total_relation_size('customers'));
