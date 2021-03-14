//Carregando os Módulos
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('admin/index');
});

router.get('/catPagamentos', (req, res) => {
    res.render('admin/catPagamento');
});

router.get('/cadCatPagamentos', (req, res) => {
    res.render('admin/cadCatPagamentos');
});


router.post('/addPagamentos', (req, res) => {
    res.render('admin/catPagamento');
});

router.get('/pagamentos', (req, res) => {
    res.send('Página de Pagamentos');
});


//Exportar o Módulo de Rotas
module.exports = router;