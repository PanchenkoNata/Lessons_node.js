const createError = require('http-errors');
const helmet = require('helmet');
const express = require('express');
const path = require('path');
const sassMiddleware = require('node-sass-middleware');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const routeSearchAddressRouter = require('./routes/routeSearchAddress');
const testRouter = require('./routes/test');

const app = express();

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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true,
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/searchAddress', routeSearchAddressRouter);
app.use('/test', testRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler. Don`t remove 'next' attribute
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.end();
});

const enableRoutes = () => {
  if (isRoutesEnabled === true) {
    console.log('Routes already enabled');
    return;
  }
  isRoutesEnabled = true;
};


module.exports = app;
module.exports.enableRoutes = enableRoutes;
