var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/123', (req, res, next) => {
  res.send(`<h1>123 capsom</h1>`);
});
module.exports = router;
