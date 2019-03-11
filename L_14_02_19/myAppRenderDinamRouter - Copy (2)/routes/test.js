const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    req.body.txt;
    console.log(req.body.txt);
    res.send('You input: ' + req.body.txt);
});

module.exports = router;