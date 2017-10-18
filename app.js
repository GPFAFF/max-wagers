const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');




const app = express();

const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('./public'))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index')
});

app.get('/nhlodds', (req, res) => {
  res.render('nhl')
});

app.get('/mlbodds', (req, res) => {
  res.render('mlb')
});

app.get('/nflodds', (req, res) => {
  res.render('nfl')
});


app.get('/nbaodds', (req, res) => {
  res.render('nba')
});

app.listen(port, () => {
  console.log(`App is not running on port ${port}`);
})
