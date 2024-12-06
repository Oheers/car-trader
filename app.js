const path = require("path");
const express = require('express');
const app = express();

const http = require("http");
const server = http.createServer(app);

const port = 3000;

app.use(express.json());
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/index.html'))
})

server.listen(port, () => {
    console.log("Server Initiated.");
})