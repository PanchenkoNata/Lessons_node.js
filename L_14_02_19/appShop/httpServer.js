const createError = require('http-errors');
const helmet = require('helmet');
const express = require('express');

// OK const { logger, express: expressLogger } = require('logger');

const app = express();

// OK app.use(expressLogger);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let isRoutesEnabled = false;
app.use((req, res, next) => {
  if (isRoutesEnabled) {
    next();
    return;
  }
  next(createError(503));
});

// Routes prefix

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler. Don`t remove 'next' attribute
app.use((err, req, res, next) => {
  // OK logger.warn(err);
  res.status(err.status || 500);
  res.end();
});

const enableRoutes = () => {
  if (isRoutesEnabled === true) {
    // OK logger.warn('Routes already enabled');
    console.log('Routes already enabled');
    return;
  }
  isRoutesEnabled = true;
};

const modelProduct = require('./models/product');
const modelCustomer = require('./models/customer');
const modelArticle = require('./models/article');
const modelTag = require('./models/tag');
const modelOrder = require('./models/order');

modelOrder.find({  })
  // .populate('orderCustomer')
  .populate({ path: 'orderCustomer', select: 'name' })
  .populate({ path: 'product', select: 'orderProduct' })
  .exec()
  .then((doc) => {
    console.log(doc);
  });


module.exports = app;
module.exports.enableRoutes = enableRoutes;
