const express = require('express');
const app = express();
const HOST = 'localhost';
const PORT = '3001';


app.use(express.static('public'));

app.listen(PORT, HOST, () => {
  console.log(`Listening on ${HOST}:${PORT}`);
});