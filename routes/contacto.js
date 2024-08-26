const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('contacto', { 
        title: 'Contáctanos', 
        email: 'info@chocolatetienda.com',
        phone: '+52 123 456 7890',
        address: 'Calle del Chocolate, 123, Ciudad Dulce, México'
    });
});

module.exports = router;
