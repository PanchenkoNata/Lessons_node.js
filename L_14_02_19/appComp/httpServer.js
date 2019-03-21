const createError = require('http-errors');
const helmet = require('helmet');
const express = require('express');

// OK const { logger, express: expressLogger } = require('logger');

// const indexRouter = require('httpRoutes/index');
// const routesRouter = require('httpRoutes/routes');
// const stationsRouter = require('httpRoutes/stations');
// OK const mapRouter = require('httpRoutes/map');
// OK const traficRouter = require('httpRoutes/trafic');


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
// app.use('/', indexRouter);
// app.use('/routes', routesRouter);
// app.use('/stations', stationsRouter);
// app.use('/map', mapRouter);
// app.use('/trafic', traficRouter);

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

const modelUserProfile = require('./storage/db/models/userProfile');

modelUserProfile.findOne({ name: 'Iren' })
  .then((doc) => {
    console.log(`full name:   ${doc.fullName}`);
  });

module.exports = app;
module.exports.enableRoutes = enableRoutes;
