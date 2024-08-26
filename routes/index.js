const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { 
        title: 'Chocolate', 
        welcomeMessage: 'Bienvenido a la mejor tienda de chocolate artesanal.'
    });
});

module.exports = router;
