const { movies, users } = require('./data');

const resolvers = {
  Query: {
    movie: (_, { title }) => movies.find((movie) => movie.title === title),
    user: (_, { name }) => users.find((user) => user.name === name),

    // Éste es mi código original SIN la optimización agregando el coeficiente de Jaccard: 
    /* recommendMovies: (_, { name, count }) => {
      const user = users.find((user) => user.name === name);
      if (!user) {
        throw new Error(`User ${name} not found`);
      }
      const userGenres = user.preferredGenres;
      const recommendedMovies = movies.filter((movie) =>
        movie.genre.includes(userGenres)
      );
      return recommendedMovies.slice(0, count);
    }, */

    // AQUÍ ESTA LA SOLUCIÓN AGREGANDO EL COEFICIENTE DE JACCARD (lo explico más a detalle en el readme).

    recommendMovies: async (_, { userName, count }) => {
        // Obtener el usuario de la base de datos
        const user = await User.findOne({ name: userName });
      
        // Obtener todas las películas de la base de datos
        const movies = await Movie.find();
      
        // Calcular la similitud de Jaccard entre los géneros preferidos del usuario y los géneros de cada película
        const similarityScores = movies.map((movie) => {
          const movieGenres = new Set(movie.genre.split(", "));
          const userGenres = new Set(user.preferredGenres);
          const intersectionSize = new Set(
            [...movieGenres].filter((genre) => userGenres.has(genre))
          ).size;
          const unionSize = new Set([...movieGenres, ...userGenres]).size;
          const similarityScore = intersectionSize / unionSize;
          return {
            movie,
            similarityScore,
          };
        });
      
        // Ordenar las películas por similitud de mayor a menor
        similarityScores.sort(
          (a, b) => b.similarityScore - a.similarityScore
        );
      
        // Seleccionar las primeras "count" películas y devolver sus títulos y descripciones
        const recommendedMovies = similarityScores.slice(0, count).map((s) => ({
          title: s.movie.title,
          description: s.movie.description,
        }));
      
        return recommendedMovies;
      },


  },
  Mutation: {
    addMovie: (_, { title, genre, description }) => {
      const newMovie = { title, genre, description };
      movies.push(newMovie);
      return newMovie;
    },
    addUser: (_, { name }) => {
      const newUser = { name };
      users.push(newUser);
      return newUser;
    },
    setUserPreferences: (_, { name, preferredGenres }) => {
      const user = users.find((user) => user.name === name);
      if (!user) {
        throw new Error(`User ${name} not found`);
      }
      user.preferredGenres = preferredGenres;
      return user;
    },
  },
};

module.exports = resolvers;
