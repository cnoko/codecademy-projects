const router = require('express').Router();
const data = require('./data');

router.get('/', (req, res, next) => {
	res.json(data);
});

router.get('/', (req, res, next) => {
	res.json(data);
});

router.post('/', (req, res, next) => {
	res.json(data);
});


router.delete('/', (req, res, next) => {
	res.json(data);
});