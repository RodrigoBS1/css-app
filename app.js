const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const session = require('express-session');
const passport = require('passport');
require('./config/passport')(passport);

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const basketsRouter = require('./routes/baskets');
const itemsRouter = require('./routes/items');
const ordersRouter = require('./routes/orders');
const authRouter = require('./routes/auth');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'rodrigosilva',
    resave: false,
    saveUninitialized: false,
  })
);
app.use('/auth', authRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/baskets', basketsRouter);
app.use('/items', itemsRouter);
app.use('/orders', ordersRouter);

// app.use(passport.initialize());
// app.use(passport.session());

// app.post('/login/password',
//   passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }),
//   function(req, res) {
//     res.redirect('/~' + req.user.username);
//   });

module.exports = app;
