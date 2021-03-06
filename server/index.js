const express = require('express');
const app = express();
const PORT = '3001';
const shoes = require('../model');

app.use(express.static('public'));

app.get('/shoes/:shoeId/colors', (req, res) => {
  let shoeId = req.params.shoeId;
  shoes.get.colors(shoeId)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    console.error(err);
    res.end();
  });
});

app.get('/shoes/:shoeId/sizes', (req, res) => {
  let shoeId = req.params.shoeId;
  shoes.get.sizes(shoeId)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    console.error(err);
    res.end();
  });
});

app.get('/shoes/:shoeId/colors/:colorId/quantities', (req, res) => {
  let { shoeId, colorId } = req.params;
  shoes.get.quantity(shoeId, colorId)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    console.error(err);
    res.end();
  });
});

app.listen(PORT, () => {
  console.log(`Listening on localhost:${PORT}`);
});
