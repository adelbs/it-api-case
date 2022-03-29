
const db = require('../db');
const { v4: uuidv4 } = require('uuid');

const express = require('express');
const router = express.Router();

router.post('', async (req, res) => {

    if (!req.body || !req.body.name) {
        res.status(400).send(`Missing fields: {'name': string}`);
    }
    else {
        const categorias = db.read('categorias') || [];
        const categoria = { id: uuidv4(), name: req.body.name };
        categorias.push(categoria);
        db.write('categorias', categorias);
        res.send(categoria);
    }

});

router.get('/:id', async (req, res) => {
    const categorias = db.read('categorias') || [];
    const categoria = categorias.find(item => item.id == req.params.id);
    res.status(categoria ? 200 : 404).send(categoria);
});

router.delete('/:id', async (req, res) => {
    const categorias = db.read('categorias') || [];
    const i = categorias.findIndex(item => item.id == req.params.id);

    if (categorias.length > 0 && i > -1) {
        categorias.splice(i, 1);
        db.write('categorias', categorias);
    }

    res.status(i > -1 ? 200 : 404).send();
});

router.get('', async (req, res) => {
    const categorias = db.read('categorias') || [];
    res.send(categorias);
});

module.exports = router;