const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  return res.status(200).send('Hola desde el server con GET!');
});

router.post('/', (req, res) => {
  return res.status(200).send('Hola desde el server con POST!');
});

module.exports = router;
