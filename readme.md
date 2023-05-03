# GraphQLforMovies
 Test de GraphQL made with love by Moibe ❤️ 

Este proyecto consiste en un servidor GraphQL que permite agregar películas, usuarios y hacer recomendaciones de películas en base a los géneros favoritos de un usuario.

Archivos

server.js

Este archivo es el archivo principal que inicia el servidor. Se encarga de crear una instancia de express, conectar la aplicación a la base de datos y definir el endpoint de GraphQL. Además, utiliza los archivos de schema y resolvers para configurar el esquema de GraphQL y los resolvers respectivamente.

schema.js

Este archivo define el esquema de GraphQL que será utilizado por el servidor. Define los tipos de datos que serán utilizados, las queries y mutaciones que estarán disponibles y los campos correspondientes para cada uno.

resolvers.js

Este archivo contiene los resolvers correspondientes a cada query y mutación definida en el esquema. Es aquí donde se especifica la lógica que se ejecutará al hacer una query o una mutación.

Funcionamiento
El servidor permite agregar películas y usuarios a través de mutaciones específicas, y además permite hacer recomendaciones de películas en base a los géneros favoritos de un usuario utilizando la query recommendMovies.

El servidor se ejecuta en el puerto 4000 por defecto, aunque puede ser cambiado utilizando la variable de entorno PORT.


Coeficiente de Jaccard para optimizar las recomendaciones: 

El índice de Jaccard es una medida de similitud entre dos conjuntos, definido como la intersección de los conjuntos dividida por su unión. Podemos usar este índice para comparar los géneros preferidos de un usuario con los géneros de cada película en nuestra base de datos y así obtener una puntuación de similitud.

Estaría definido por ésta fórmula: 

J(A, B) = |A ∩ B| / |A ∪ B|


Donde A y B son dos conjuntos, y |A ∩ B| es el tamaño de la intersección de A y B, mientras que |A ∪ B| es el tamaño de la unión de A y B.

agregué el código nuevo dentro de resolvers.js (a solución original la dejé comentada). 

Este código busca al usuario en la base de datos, luego busca todas las películas y calcula la similitud de Jaccard entre los géneros preferidos del usuario y los géneros de cada película. Luego, ordena las películas por similitud de mayor a menor y selecciona las primeras "count" películas, devolviendo sus títulos y descripciones como recomendaciones.

Es importante tener en cuenta que esta implementación es sólo una idea general y podría requerir modificaciones para que funcione correctamente en su aplicación específica.

Moisés Briseño Estrello.


