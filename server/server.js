const express = require('express');
const server = express();
const port = process.env.PORT || 9000;

server.listen(port, () => console.log(`Listening on port ${port}`))