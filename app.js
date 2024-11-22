const path = require("path");
const express = require('express');
const app = express();

const http = require("http");
const server = http.createServer(app);

const port = 3000;

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/index.html'))
})

app.get('/src/output.css', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './src/output.css'))
})

server.listen(port, () => {
    console.log("Server Initiated.");
})