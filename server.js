// server.js
require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { flash } = require('express-flash-message')
const session = require('express-session')
const connectDB = require('./config/db')

const app = express();
const port = process.env.PORT;

// Connect to DB
connectDB();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Static files
app.use(express.static('public'))

// Express Session
app.use(
  session({ 
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    }
  })
);

// Flash Messages
app.use(flash({ sessionKeyName: 'flashMessage' }));

//Templating engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/userRoutes'));

// About
app.get('/about', (req, res) => {
  res.render('about');
});

// Handle 404
app.get('*', (req, res) => {
  const fail = {
    title: '404 Error - Page Not Found'
  }
  res.status(404).render('404', fail);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

