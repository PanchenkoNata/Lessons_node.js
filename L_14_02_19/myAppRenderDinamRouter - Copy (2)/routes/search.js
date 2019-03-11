const express = require('express');
const router = express.Router();

const articleInfo = {
        1: 'Республика Сингапу́р (англ. Republic of Singapore; малайск. Republik Singapura; кит. упр. 新加坡共和国, пиньинь: Xīnjiāpō Gònghéguó; там. சிங்கப்பூர் குடியரசு Ciŋkappūr Kudiyarasu) — город-государство, расположенный на островах в Юго-Восточной Азии, отделённых от южной оконечности Малаккского полуострова узким Джохорским проливом. Граничит с султанатом Джохор, входящим в состав Малайзии, и с провинцией Острова Риау, ',
        2: 'Название Сингапур произошло от малайского синга (лев), заимствованного от санскритского',
        3: 'Площадь Сингапура составляет 724,2 км² (2018 год), она постепенно увеличивается благодаря программе намыва территории, действующей с 1960-х годов. В настоящее время государство Сингапур состоит из 63 островов. Самые крупные из них — Сингапур (главный остров), Убин, Теконг-Бесар, Брани, Сентоса, Семакау и Судонг. Высшая точка — холм Букит-Тимах (163,3 м).',
        4: 'Первые упоминания о Сингапуре имеются в китайских хрониках III века. Остров был оплотом империи Шривиджая, с центром на Суматре, и носил яванское имя Тумасик. Тумасик какое-то время был важным торговым центром, но потом пришёл в упадок. О нём сохранилось очень мало свидетельств кроме отдельных археологических находок. В XV—XVI веках Сингапур входил в состав султаната Джохор. Во время Голландско-португальской войны 1617 года Сингапур был атакован португальскими войсками.',
    };

router.get('/', (req, res, next) => {
    const {arHeaderSearch, arIdSearch} = req.query;
    let header, articleId, text;

    if ( arHeaderSearch === undefined) {
        header = 'The search require is empty';
        articleId = '';
        text = '';
    } else {
        header = arHeaderSearch;

        if ( arIdSearch === undefined) {
            articleId = 'There are no articles with this Id.';
        } else {
            articleId = "You get article with id - " + arIdSearch;
        }

        if ( articleInfo[arIdSearch] === undefined ) {
            text = 'There are no articles with this Id';
        } else {
            text = articleInfo[arIdSearch];
        }
    }
    
    res.render('search', 
        {
            arHeader: `${header}`,
            arId: `${articleId}`,
            arText: `${text}`,
        }
    );
})

module.exports = router;