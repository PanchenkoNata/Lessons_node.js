const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {

   //получаем данные из гет запроса -- гет параметры
   // напр из строки http://localhost:3000/page?articleId=1&header=12345
   // получаю значения articleId и header
   
   const {articleId, header} = req.query;
   if ( articleId === undefined ) {
      articleId = ''
   }
   console.log('articleId ' + articleId);
   console.log('header ' + header);

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


// const arInfo = {
//     1: 'Республика Сингапу́р (англ. Republic of Singapore; малайск. Republik Singapura; кит. упр. 新加坡共和国, пиньинь: Xīnjiāpō Gònghéguó; там. சிங்கப்பூர் குடியரசு Ciŋkappūr Kudiyarasu) — город-государство, расположенный на островах в Юго-Восточной Азии, отделённых от южной оконечности Малаккского полуострова узким Джохорским проливом. Граничит с султанатом Джохор, входящим в состав Малайзии, и с провинцией Острова Риау, ',
//     2: 'Название Сингапур произошло от малайского синга (лев), заимствованного от санскритского',
//     3: 'Площадь Сингапура составляет 724,2 км² (2018 год), она постепенно увеличивается благодаря программе намыва территории, действующей с 1960-х годов. В настоящее время государство Сингапур состоит из 63 островов. Самые крупные из них — Сингапур (главный остров), Убин, Теконг-Бесар, Брани, Сентоса, Семакау и Судонг. Высшая точка — холм Букит-Тимах (163,3 м).',
//     4: 'Первые упоминания о Сингапуре имеются в китайских хрониках III века. Остров был оплотом империи Шривиджая, с центром на Суматре, и носил яванское имя Тумасик. Тумасик какое-то время был важным торговым центром, но потом пришёл в упадок. О нём сохранилось очень мало свидетельств кроме отдельных археологических находок. В XV—XVI веках Сингапур входил в состав султаната Джохор. Во время Голландско-португальской войны 1617 года Сингапур был атакован португальскими войсками.',
// };

// router.get('/', (req, res, next) => {
//     const {arHeaderSearch, arIdSearch} = req.querry;
//     let header, id;


//     if (arHeaderSearch === undefined || arHeaderSearch === nill) {
//         header = 'The search require is empty';
//     } else {
//         header = arHeaderSearch;
//     }
//     if (arIdSearch === undefined || arIdSearch === nill) {
//         id = 'The search require is empty';
//     } else {
//         id = arIdSearch;
//     }

//     router.render('search', {
//         arHeader: header,
//         arId: id,
//         // arText: (arInfo[arIdSearch]) ? arInfo[arIdSearch] : "There aren't article with this Id ",
//     });
// });