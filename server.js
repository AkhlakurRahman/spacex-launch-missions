const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = process.env.BACKEND_PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));