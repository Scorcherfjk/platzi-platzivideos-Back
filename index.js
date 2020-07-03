const express = require('express');

const app = express();

const { port } = require('./config');
const moviesApi = require('./routes/movies');
const { logErrors, errorHandler } = require('./middlewares/errorHandlers');

app.use(express.json());

moviesApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, (err) => {
  if (err) console.error(err.message);
  console.log(`listening on http://localhost:${port}`)
});