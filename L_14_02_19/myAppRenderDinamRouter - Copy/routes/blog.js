const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('blog');
});

router.get('/:id', (req, res, next) => {
    console.log(req.params.id);
    res.send('blog');
});

module.exports = router;