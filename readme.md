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
