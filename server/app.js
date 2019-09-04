const express = require('express');
const path = require('path');

const app = express();
const PORT = 1984;
const indexPath = path.join(`${__dirname}/../public/index.html`);

app.use(express.static('public'));

app.get('/businesses/:id', (req, res) => {
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log('Listening on port 1984');
});
