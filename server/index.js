const express = require('express');
const app = express();
const HOST = 'localhost';
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

app.get('/shoes/:shoeId/colors/:colorId/sizes/:sizeId/quantity', (req, res) => {
  let { shoeId, colorId, sizeId } = req.params;
  shoes.get.quantity(shoeId, colorId, sizeId)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    console.error(err);
    res.end();
  });
});

app.listen(PORT, HOST, () => {
  console.log(`Listening on ${HOST}:${PORT}`);
});