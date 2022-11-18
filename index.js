'use strict'

const { makeExecutableSchema } = require('@graphql-tools/schema');
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs');
const { join } = require('path');
const resolvers = require('./lib/resolvers_clase3');

const app = express()
const port = process.env.port || 3000

// definiendo el esquema
const typeDefs = readFileSync(
  join(`${__dirname}`, 'lib', 'schema.graphql'), 'utf8'
);
const schema = makeExecutableSchema({ typeDefs, resolvers })

app.use('/api', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`)
})
