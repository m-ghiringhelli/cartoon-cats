const { Router } = require('express');
const { cats } = require('../../data/cats');

module.exports = Router()
  .get('/', (req, res) => {
    const catData = cats.map((cat) => (
      { id: cat.id, name: cat.name }
    ));
    res.json(catData);
  });
