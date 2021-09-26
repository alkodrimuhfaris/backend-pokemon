const router = require('express').Router();

const pokemon = require('../controllers/pokemon');

router.get('/catch', pokemon.catch);
router.get('/release', pokemon.relase);
router.post('/release', pokemon.changeName);

module.exports = router;
