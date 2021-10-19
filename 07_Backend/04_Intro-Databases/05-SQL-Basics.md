# SQL Basics

- **DDL(Data Definition Language):** Nos sirven para definir tablas y modificarlas en una base de datos.
  - Por ejemplo: `CREATE (crear), ALTER (actualizar), DROP (eliminar)`
- **DML(Data Manipulation Language):** Nos sirven para modificar datos de las tablas de una base de datos.
  - Por ejemplo: `INSERT (insertar), UPDATE (actualizar), DELETE (Eliminar), SELECT (seleccionar)`

## CODIGO SQL DDL

- `CREATE TABLE test( id INTEGER, firstname VARCHAR(25), lastname VARCHAR(25), age INTEGER )`
- `DROP TABLE test`
- `ALTER TABLE test ADD date DATE`

## CODIGO SQL DML

- `INSERT INTO Test (id, firstname, lastname, age) VALUES (1, 'Rafael', 'Rodriguez', 10)` // Agregar unos 7 registros
- `UPDATE Test SET firstname = 'Pablo' WHERE id = 1` //Actualizará solo ese registro en el campo firstname
- `UPDATE Test SET lastname = 'Jimenez'` //Actualizará todos los registros en el campo lastname
- `DELETE FROM Test WHERE id = 1` //Borrará solamente ese registro
- `DELETE FROM Test` //Borrará todos los registros de la tabla
- `SELECT \* FROM Test` //Mostrará todos los registros de la tabla
- `SELECT \* FROM Test WHERE id = 2` //Mostrará solo ese registro
- `SELECT \* FROM Test WHERE id > 2` //Mostrará todos los registros cuyo id sea mayor a 2

### COMANDOS DE CONSULTAS SQL

- `\dt` : Muestra las tablas de la base de datos

- `\d nombre_de_tabla`: Muestra los detalles de una tabla de la base de datos

- `SELECT * FROM nombre_de_tabla`: sirve para mostrar todos los registros de una tabla

- `SELECT nombre_de_columna FROM nombre_de_tabla`: sirve para mostrar solo la columna o columnas que queramos (si queremos mostrar varias columnas, las separamos por comas)

- `SELECT COUNT(*) FROM nombre_de_tabla`: sirve para saber cuantos registros existen en la tabla

- `LIMIT`: Sirve para delimitar el numero de registros de un SELECT.

  - `SELECT first_name FROM actor LIMIT 10`

- `OFFSET`: Sirve para omitir registros de un SELECT (En este caso omite los primeros 10)

  - `SELECT first_name, last_update FROM actor OFFSET 10`

- `WHERE: Sirve para agregar una o más condiciones específicas en un SELECT, podemos usar los operadores >, <, >=, <=, !=, =, AND, OR (EJEMPLO):
  - `SELECT * FROM payment WHERE staff_id !=1;`
  - `SELECT * FROM customer WHERE first_name='Barbara' OR first_name='Rebecca';`
  - `SELECT * FROM customer WHERE store_id=2;`
  - `SELECT * FROM customer WHERE store_id=2 AND customer_id=4;`

* `BETWEEN`: Sirve para mostrar los registros que están entre un valor y otro valor. Se puede usar en conjunto con otras instrucciones sql. EJEMPLO:

  - `SELECT mount FROM payment WHERE amount between 5 and 10;`

* `IN`: Sirve para mostrar registros específicos dependiendo una condición con un WHERE. EJEMPLO:

  - `SELECT * FROM payment WHERE customer_id IN(341,347);`

* `IS NULL`: Sirve para mostrar los registros que en algún campo estén como NULL. No es lo mismo NULL que ' ' (cadena vacía).

* `ORDER BY`: Sirve para ordenar registros segun el campo que se le indique. EJEMPLO:

  - `SELECT * FROM rental ORDER BY customer_id;`
  - `SELECT * FROM rental ORDER BY customer_id desc OFFSET 5 LIMIT 5;`

* `DISTINCT`: Sirve para omitir registros que esten repetidos. Al campo o campos que esten despues del DISTINCT se aplicara la instruccion de no repetir registros. Ejemplo:

  - `SELECT DISTINCT customer_id FROM payment;`

* `GROUP BY`: Sirve para agrupar registros por columnas. En este caso agrupamos por customer_id y nos hace un conteo de cuantos registros hay por cada customer_id. Ejemplo :
  - `SELECT customer_id, COUNT(*) FROM rental GROUP BY customer_id;`
