const express = require('express');
const router = express.Router();

const data = [
    { id: 1, name: "Shoes", price: 35, stock: true, createAt: new Date() },
    { id: 2, name: "Shirts", age: 17, stock: true, createAt: new Date() },
    { id: 3, name: "Jackets", age: 5, stock: false, createAt: new Date() },
    { id: 4, name: "Socks", age: 6, stock: false, createAt: new Date() }
];

router.get('/', function(req, res) {
    res.status(200).json(data)
});

router.get('/:id', function(req, res) {
    let found = data.find(function(item) {
        return item.id === parseInt(req.params.id);
    });

    if (found) {
        //TODO: Retornar los valores de la variable found
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;