
const db = require('../db');
const { v4: uuidv4 } = require('uuid');

const express = require('express');
const router = express.Router();

router.post('', async (req, res) => {

    if (!req.body || !req.body.idCategoria || !req.body.description || !req.body.date || !req.body.value) {
        res.status(400).send(`Missing fields: {'idCategoria': Categoria, 'description': string, 'date': any, 'value': number}`);
    }
    else {
        const categorias = db.read('categorias') || [];
        const categoria = categorias.find(item => item.id == req.body.idCategoria);
        if (!categoria) res.status(404).send(`'idCategoria' not found`);
        else if (isNaN(req.body.value) || typeof req.body.value != 'number') res.status(404).send(`'value' is not a number`);
        else {
            const lancamentos = db.read('lancamentos') || [];
            const lancamento = { 
                id: uuidv4(), 
                idCategoria: req.body.idCategoria,
                description: req.body.description,
                date: req.body.date,
                value: req.body.value
            };
            lancamentos.push(lancamento);
            db.write('lancamentos', lancamentos);
            res.send(lancamento);    
        }
    }

});

router.get('/:id', async (req, res) => {
    const lancamentos = db.read('lancamentos') || [];
    const lancamento = lancamentos.find(item => item.id == req.params.id);
    res.status(lancamento ? 200 : 404).send(lancamento);
});

router.delete('/:id', async (req, res) => {
    const lancamentos = db.read('lancamentos') || [];
    const i = lancamentos.findIndex(item => item.id == req.params.id);

    if (lancamentos.length > 0 && i > -1) {
        lancamentos.splice(i, 1);
        db.write('lancamentos', lancamentos);
    }

    res.status(i > -1 ? 200 : 404).send('');
});

router.get('', async (req, res) => {
    const lancamentos = db.read('lancamentos') || [];
    res.send(lancamentos);
});

module.exports = router;