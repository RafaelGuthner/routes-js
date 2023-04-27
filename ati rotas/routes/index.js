const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Página inicial' });
  });

router.get('/main', (req, res) => {    
    res.render('main', { title: 'Página principal' });
});

router.get('/tarefa', (req, res) => {
    res.render('tarefa', { title: 'Alterar tarefa' });
});


module.exports = router;