const express = require('express');
const knex = require('knex');

const server = express();
server.use(express.json());

const dbConfig = require('./knexfile.js')
const db = knex(dbConfig.development);

server.get('/', (req, res) => {
    res.send('API is active');
});

server.get('/api/zoos', (req, res) => {
    db('zoos as z')
        .leftJoin('addresses as a', 'a.zoo_id', 'z.id')
        .select('z.id as id', 'z.name as name', 'a.address as address')
    .then(rows => {
        res.json(rows);
    })
    .catch(err => {
        res.status(500).json({error: "Failed to get zoos"});
    });
});

server.get('/api/animals', (req, res) => {
    db('animals as a')
        .leftJoin('species as s', 'a.species_id', 's.id')
        .select('a.id as id', 'a.name as name', 's.name as species')
    .then(rows => {
        res.json(rows);
    })
    .catch(err => {
        res.status(500).json({error: "Failed to get animals"});
    });
});

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
});