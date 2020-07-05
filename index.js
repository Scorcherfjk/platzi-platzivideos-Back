const express = require('express');

const app = express();

const { port } = require('./config');
const moviesApi = require('./routes/movies');
const { logErrors, wrapErrors, errorHandler } = require('./middlewares/errorHandlers');
const notFoundHandler = require('./middlewares/notFoundHandler');

app.use(express.json());

moviesApi(app);
app.use(notFoundHandler);

app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(port, (err) => {
  if (err) console.error(err.message);
  console.log(`listening on http://localhost:${port}`)
});