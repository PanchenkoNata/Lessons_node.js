const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  const address = req.body.inputAddress;
  console.log(address);
  res.send(`You want to search address: ${address}`);
});

module.exports = router;
