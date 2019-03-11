const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {

   //получаем данные из гет запроса -- гет параметры
   // напр из строки http://localhost:3000/page?articleId=1&header=12345
   // получаю значения articleId и header
   
   // const {articleId, header} = req.query;
   // if ( articleId === undefined ) {
   //    articleId = ''
   // }
   // console.log('articleId ' + articleId);
   // console.log('header ' + header);

   //генерирую страничку по шаблону page.ejs с переменными - 
   //ключи в объекте который передаем
   res.render('page', 
      {
         title: 'Article Page',
         urlLogo: '/images/logo_green.png',
         header1: `Заголовок `,
         // header1: `Заголовок ${header}`,
         about: 'About',
         articleText: `Вы выбрали статью под номером`,
         // articleText: `Вы выбрали статью под номером ${articleId}`,
         team: 'Our team',
         products: 'Our Products',
         address: 'My address: Ukraine, Kyiv, str. Tolstogo, 1',
         tel: 'tel:+380501234567',
         telFormat: '+38050 123 45 96'
      })
      
});

module.exports = router;