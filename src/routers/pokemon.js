const router = require('express').Router();

const pokemon = require('../controllers/pokemon');

router.get('/catch', pokemon.catch);
router.get('/release', pokemon.relase);
router.post('/rename', pokemon.changeName);

module.exports = router;
