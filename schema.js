const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type User {
    name: String!
    preferredGenres: [String!]!
  }

  type Movie {
    title: String!
    genre: String!
    description: String!
  }

  type Query {
    getUserByName(name: String!): User
    recommendMovies(userName: String!, count: Int!): [Movie!]!
  }

  type Mutation {
    addUser(name: String!): User
    setUserPreferences(name: String!, preferredGenres: [String!]!): User
    addMovie(title: String!, genre: String!, description: String!): Movie
  }
`);

module.exports = schema;
