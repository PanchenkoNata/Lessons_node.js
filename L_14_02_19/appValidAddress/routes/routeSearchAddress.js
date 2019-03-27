const express = require('express');

const router = express.Router();

router.all('/', (req, res) => {
  res.render('searchAddress',
    {
      title: '',
    });
});
// router.post('/', (req, res) => {
//   const address = req.body.inputAddress;
//   console.log(address);
// });

module.exports = router;
