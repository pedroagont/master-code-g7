# Propiedades de las bases de datos

1. **Independencia lógica y física de datos:**

   - **Lógica**: Capacidad de modificar el esquema conceptual sin necesidad de volver a desarrollar la aplicación web.
   - **Física**: Capacidad de modificar el código de la base de datos sin necesidad de volver a desarrollar la aplicación web.

2. **Redundancia mínima:** Buscar la manera de no repetir datos en nuestra lógica.

3. **Acceso concurrente por parte de múltiples usuarios:** Debemos asegurarnos que nuestra base de datos pueda procesar múltiples peticiones de usuarios de diferentes partes del mundo, sin que esta se colapse.

4. **Integridad de los datos:** Se refiere a la seguridad que implementamos a la hora de almacenar, actualizar y consumir y/o borrar nuestros datos de la base de datos.

5. **Consultas complejas optimizadas:** La capacidad de responder con grandes cantidades de información en el menor tiempo posible. Mas que todo puede ser perceptible en grandes bases de datos como Amazon (a la hora de buscar un producto, nos entrega mucha información como: reseñas, cantidad de artículos disponibles, detalles del producto, métodos de envío, disponibilidad en otras tiendas, valoraciones, productos relacionados, etc).

6. **Seguridad de acceso y de auditoría:** Saber qué o quién realizó una modificación a la base de datos y en qué momento.

7. **Respaldo y recuperación:** Programar un respaldo periódicamente en caso de pérdida de datos, estos puedan ser restaurados a la forma en que se encontraban.
