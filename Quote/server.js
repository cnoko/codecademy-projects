const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;
app.
app.use(express.static('public'));


express.listen(PORT, (err) => {
	console.log(`Listening to port ${PORT}`);
});
