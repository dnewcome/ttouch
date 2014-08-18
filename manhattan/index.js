/*jslint node: true */
"use strict";

var app = require('./server');

module.exports = require('http').createServer(app);

