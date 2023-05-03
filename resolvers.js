const { movies, users } = require('./data');

const resolvers = {
  Query: {
    movie: (_, { title }) => movies.find((movie) => movie.title === title),
    user: (_, { name }) => users.find((user) => user.name === name),
    recommendMovies: (_, { name, count }) => {
      const user = users.find((user) => user.name === name);
      if (!user) {
        throw new Error(`User ${name} not found`);
      }
      const userGenres = user.preferredGenres;
      const recommendedMovies = movies.filter((movie) =>
        movie.genre.includes(userGenres)
      );
      return recommendedMovies.slice(0, count);
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
