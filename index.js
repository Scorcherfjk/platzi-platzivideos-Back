const express = require('express');

const app = express();

const { port } = require('./config');
const moviesApi = require('./routes/movies');

moviesApi(app);

app.listen(port, (err) => {
  if (err) console.log(err.message);
  console.log(`listening on http://localhost:${port}`)
});