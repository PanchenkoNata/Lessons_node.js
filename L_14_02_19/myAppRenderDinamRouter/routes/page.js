const express = require('express');
const router = express.Router();

router.all('/', (req, res, next) => {
   res.render('page', 
      {
         title: 'Article Page',
         urlLogo: '/images/logo_green.png',
         header1: `Заголовок `,
         about: 'About',
         articleText: `Вы выбрали статью под номером`,
         team: 'Our team',
         products: 'Our Products',
         address: 'My address: Ukraine, Kyiv, str. Tolstogo, 1',
         tel: 'tel:+380501234567',
         telFormat: '+38050 123 45 96'
      })
      next();
});

router.post('/', (req, res, next) => {
      req.body.txt;
      console.log(req.body.txt);
});

module.exports = router;