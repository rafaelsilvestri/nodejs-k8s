const express = require('express');
const app = express();
const router = express.Router();

// Routes
const index = require('./routes/index');
const helloRoute = require('./routes/hello-route');
app.use('/', index);
app.use('/hello', helloRoute);

module.exports = app;
