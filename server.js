const http = require('http');
const express = require('express');
const products = require('./routes/products');

const app = express();

app.use(express.json());

app.use('/products', products);

app.use('/', function(req, res) {
    res.send('Application Working');
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.log('Application running in: ' + port);