const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const BOOK = require('../models/Book');

ROUTER.get('/', (req, res) => {
    BOOK.find()
    .then(data => {
        res.json(data);
    })
    .catch(e => {
        res.json({message: e});
    })
});

ROUTER.post('/', (req, res) => {
    const NEW_BOOK = new BOOK({
        title: req.body.title,
        description: req.body.description
    });
    NEW_BOOK.save()
    .then(data => {
        res.json(data);
    })
    .catch(e => {
        res.json({message: e});
    })
});

ROUTER.delete('/:id', (req, res) => {
    BOOK.deleteOne({_id: req.params.id})
    .then(data => {
        res.json(data);
    })
    .catch(e => {
        res.json({message: e});
    })
});

ROUTER.patch('/:id', (req, res) => {
    BOOK.updateOne({_id: req.params.id}, 
        {$set: {description: req.body.description}})
    .then(data => {
        res.json(data);
    })
    .catch(e => {
        res.json({message: e});
    })
});

module.exports = ROUTER;
