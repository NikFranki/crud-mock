const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const autoLostRouter = require('./routes/auto_lost');
const apiRouter = require('./routes/api');
const dashboardRouter = require('./routes/dashboard_v1_5');

const app = express();
const ip = require("ip");

// start commond line
// DEBUG=mock-crud:* npm start

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: '*',
}));

// set actual url header
app.use(function(req, res, next) {
  res.header("x-actual-url", `http://${ip.address()}:${app.get('port')}${req.url}`);
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auto_lost', autoLostRouter);
app.use('/api', apiRouter);
app.use('/dashboard', dashboardRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
