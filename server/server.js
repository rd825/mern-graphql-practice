const express = require('express');
const graphqlHTTP = require('express-graphql'); // the const name is a graphQL convention
// we use it as middleware on a single route (our supercharged single endpoint)

const schema = require('./schema/schema');

const server = express();
server.use('/graphql', graphqlHTTP({
    // the schema goes in here
    schema,
    graphiql: true
})); 

const port = process.env.PORT || 9000;
server.listen(port, () => console.log(`Listening on port ${port}`))