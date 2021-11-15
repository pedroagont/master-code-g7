# Reto: Mini-Proyecto Análisis y Diseño SQL

Abarrotes “Don Rufino”, el mayor distribuidor de abarrotes de México, va a migrar todo su sistema de ventas a una base de datos.

#### Se necesitan registrar los productos que tienen datos como:

- Nombre
- Descripción
- Precio
- SKU

#### Además se necesita guardar los datos de los clientes que son:

- Nombre
- Apellidos
- Email
- Teléfono
- Dirección con calle
- Código postal
- Barrio o Colonia

Las tienditas necesitan registrar las ventas a clientes. La venta puede tener diferentes productos y diferentes cantidades.

### Para este problema es necesario crear:

- #### Diagrama relacional
- #### Diagrama entidad-relación
- #### Crear las tablas en PostgreSQL
- #### Poblar la base de datos (puede ser con pocos registros)
- #### Generar las siguientes queries (consultas) a la base de datos:
  - ID de los clientes de la Ciudad de Monterrey
  - ID y descripción de los productos que cuesten menos de 15 pesos
  - ID y nombre de los clientes, cantidad vendida, y descripción del producto, en las ventas en las cuales se vendieron más de 10 unidades.
  - ID y nombre de los clientes que no aparecen en la tabla de ventas (Clientes que no han comprado productos)
  - ID y nombre de los clientes que han comprado todos los productos de la empresa.
  - ID y nombre de cada cliente y la suma total (suma de cantidad) de los productos que ha comprado. Pista: (https://www.postgresqltutorial.com/postgresql-sum-function/).
  - ID de los productos que no han sido comprados por clientes de Guadalajara.
  - ID de los productos que se han vendido a clientes de Monterrey y que también se han vendido a clientes de Cancún.
  - Nombre de las ciudades en las que se han vendido todos los productos.
