const express = require('express');
const router = express.Router();

const data = [
    { "id": 1, "name": "Shoes", "price": 35, "stock": true, "createAt": new Date() },
    { "id": 2, "name": "Shirts", "price": 17, "stock": true, "createAt": new Date() },
    { "id": 3, "name": "Jackets", "price": 5, "stock": false, "createAt": new Date() },
    { "id": 4, "name": "Socks", "price": 6, "stock": false, "createAt": new Date() }
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

router.post('/', function(req, res) {

    let itemIds = data.map(item => item.id);

    let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;

    //TODO: Completar con nuevo producto
    let newItem = {
        "id": newId,
        "name": req.body.name,
        "price": req.body.price,
        "stock": req.body.stock,
        "createAt": new Date()
    }

    data.push(newItem);

    res.status(201).json(newItem);
});

router.patch('/:id', function (req, res) {

    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
  
    if (found) {

        let updated = {
            "id": found.id,
            "name": req.body.name,
            "price": req.body.price,
            "stock": req.body.stock,
            "createAt": found.createAt,
        }
  
        let targetIndex = data.indexOf(found);
  
        data.splice(targetIndex, 1, updated);
  
        res.sendStatus(204)
    } else {
        res.sendStatus(404)
    }
});

router.delete('/:id', function (req, res) {
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    if (found) {
        let targetIndex = data.indexOf(found);

        data.splice(targetIndex, 1);
    }

    res.sendStatus(204);
});

module.exports = router;
