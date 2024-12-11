const path = require("path");
const express = require('express');
const app = express();

const http = require("http");
const server = http.createServer(app);

const search = require("./search-responder");
const req = require("express/lib/request");

const port = 3000;

app.use(express.json());
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/index.html'))
})

app.get('/api/filter/make', (req, res) => {
    res.status(200).json(search.getMakes())
})

app.get('/api/filter/model', (req, res) => {
    const make = req.query.make;
    res.status(200).send(search.getModels(make))
})

server.listen(port, () => {
    console.log("Server Initiated.");
})