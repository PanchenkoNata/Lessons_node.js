const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('page', 
            {
               title: 'Rendered Page',
               urlLogo: '/images/logo_green.png',
               header1: 'Welcome to my page',
               about: 'About',
               team: 'Our team',
               products: 'Our Products',
               address: 'My address: Ukraine, Kyiv, str. Tolstogo, 1',
               tel: 'tel:+380501234567',
               telFormat: '+38050 123 45 96'
            })
});

module.exports = router;