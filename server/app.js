const express = require('express');
const path = require('path');
const axios = require('axios');

const reservationsProxy = 'http://localhost:3002';
const reviewsProxy = 'http://localhost:3004';

const app = express();
const PORT = 1984;
const indexPath = path.join(`${__dirname}/../public/index.html`);

app.use(express.static('public'));

app.get('/businesses/:id', (req, res) => {
  res.sendFile(indexPath);
});

app.get('/api/reservations/', (req, res) => {
  axios.get(`${reservationsProxy}/api/reservations`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      res.status(404).send(error);
    });
});

app.get('/api/reviews/:id', (req, res) => {
  const { id } = req.params;
  axios.get(`${reviewsProxy}/api/reviews/${id}`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      res.status(404).send(error);
    });
});

app.get('/businesses/Pictures/:id', (req, res) => {
  const { id } = req.params;
  axios.get(`${reviewsProxy}/businesses/Pictures/${id}`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      res.status(404).send(error);
    });
});

app.listen(PORT, () => {
  console.log('Listening on port 1984');
});
