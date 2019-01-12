const express = require('express');
const knex = require('knex');

const db_config = require('./knexfile.js')

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.send('API is active');
});

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
});