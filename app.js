var express = require('express');
const mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
const router = require('./router');
const db = require("./db");

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);

app.use(express.json());


// app.get('/', function (req, res) {
//   res.setHeader('Content-Type', 'text/html');
//   res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
//   res.render('pages/index');
// });

// app.get('/login', function (req, res) {
//   res.setHeader('Content-Type', 'text/html');
//   res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
//   res.render('pages/login');
// });

// app.post('/login', function (req, res) {
//   if (req.body.username === 'admin' && req.body.password === 'admin') {
//     res.render('pages/dashboard', { success: true });
//   } else {
//     res.render('pages/login', { success: false });
//   }
// });

app.listen(3000, () => {
  console.log(`node app running on http://localhost:3000`);
});
