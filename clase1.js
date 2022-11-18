'use strict'

const { graphql, buildSchema } = require('graphql')

// definiendo el esquema
const schema = buildSchema(`
  type Query {
    hello: String,
    saludo: String
  }
`);

const resolvers = {
  hello: () => {
    return 'Hola Mundo'
  },
  saludo: () => {
    return 'Hola a todos'
  }
};

// Ejecutar el query hello
graphql(schema, '{hello, saludo}', resolvers).then((data) => {
  console.log('index.js - 13  >>>>>>>>> data: ', data);
});
