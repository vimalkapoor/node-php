const express = require('express');
const app = express();
const HOST = '0.0.0.0';
const PORT = 80;

app.get('/', (req, res) => {
  res.json({
    players: ['Vimal', 'Mohsen', 'Ahmad', 'Nitin', 'Danial', 'Hossien']
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
