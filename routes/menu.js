const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const chocolates = [
        { tipo: 'Chocolate con leche', porcentaje: '50%, 62%, 70%' },
        { tipo: 'Chocolate clásico', porcentaje: '62%, 70%, 100%' },
        { tipo: 'Chocolate blanco', porcentaje: '33%' }
    ];
    res.render('menu', { 
        title: 'Menú de Chocolates', 
        chocolates 
    });
});

module.exports = router;
