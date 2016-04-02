var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
             "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST", "GET")
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients = [
  {"id":"234kjw","text":"Ham"},
  {"id":"as82w","text":"Cheese"},
  {"id":"234sk1","text":"Potatoes"},
  {"id":"43nkd","text":"Chicken"},
  {"id":"nas83n","text":"Beef"}
];

app.get('/ingredients', function(req, res) {
    res.send(ingredients);
});

app.post('/ingredients', function(req, res) {
  var ingredient = req.body;
  console.log(ingredient);
  ingredients.push(ingredient)
  res.status(200).send('Successfully posted ingredient')
})

app.listen(6060, function() {
  console.log("Server running at http://localhost:6060");
});
