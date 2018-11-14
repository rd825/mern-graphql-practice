const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const schema = require('./schema/schema');
const graphqlHTTP = require('express-graphql'); // the const name is a graphQL convention
// we use it as middleware on a single route (our supercharged single endpoint)

const server = express();
server.use(cors());

mongoose.connect('mongodb://rahul:test123@ds037698.mlab.com:37698/gql-rahul')
mongoose.connection.once('open', () => console.log('Connected to DB'))

server.use('/graphql', graphqlHTTP({
    // the schema goes in here
    schema,
    graphiql: true
})); 

const port = process.env.PORT || 9000;
server.listen(port, () => console.log(`Listening on port ${port}`))