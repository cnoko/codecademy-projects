// routes/index.js
const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.render('index');
});
router.post('/', (req, res) => {
  const {source, attributed, quote} = req.body;
    res.render('index',  {
              source,
              attributed,
              quote});
});

module.exports = router;
