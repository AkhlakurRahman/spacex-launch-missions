const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const path = require('path');

const schema = require('./schema');

const app = express();

// Allow origin
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build'));
});

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
