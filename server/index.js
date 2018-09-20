const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const db = require('../database/index.js');


app.use(cors());

app.use(express.static(path.join(__dirname, '/../client/dist')));

// get request
app.get('/api/restaurant/carousel/:id', (req, res) => {
  const num = req.params.id;
  db.get(num, (err, data) => {
    if (err) {
      console.log('get error from EXPRESS GET');
    } else {
      res.send(data);
    }
  });
});

// listening on
const PORT = process.env.PORT || 8888;
app.listen(PORT, (error) => {
  if (error) {
    console.log(`NOT LISTENING TO PORT ${PORT}`);
  } else {
    console.log(`LISTENING TO PORT ${PORT}`);
  }
});
