/* eslint-disable no-unused-vars */
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const response = require('./helpers/response');
const port = '8080';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
  return response(res, 'POKEMON API');
});

// auth router
const pokeRouter = require('./routers/pokemon');
app.use('/', pokeRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
