const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const locationRouter = require('./src/router/location.router')

 

require('dotenv').config();

app.use(bodyParser.json());
app.use('/api/v1/location', locationRouter);

module.exports = app;
