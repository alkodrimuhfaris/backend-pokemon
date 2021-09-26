/* eslint-disable no-unused-vars */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const response = require('./helpers/response');
const port = 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(morgan('prod'));
app.use(cors());

app.get('/', (req, res) => {
  return response(res, 'POKEMON API');
});

// auth router
const pokeRouter = require('./routers/pokemon');
app.use('/', pokeRouter);

app.listen(process.env.PORT || port, () => {
  console.log(`App listening on port ${port}`);
});
