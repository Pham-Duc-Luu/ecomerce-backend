const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const app = express();
const morgan = require('morgan');

// *middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// *init database
require('./dbs/init.mongo');
const { countConnection } = require('./helpers/check.connect');

// utils

// init routes

// hanlding errors
const { checkOverload } = require('./helpers/check.connect');
checkOverload();
app.get('/', function (req, res) {
    return res.status(200).json({});
});

module.exports = app;
