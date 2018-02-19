const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/urls');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.listen(process.env.PORT || 8081)

var Url = require("../models/url");

app.post('/urls', (req, res) => {
  var request = require('request');
  var cheerio = require('cheerio');
  var db = req.db;
  var url = req.body.url;
  request(url, function(err, resp, body){
    $ = cheerio.load(body);
    links = $('a');
    $(links).each(function(i, link){
      var new_url = new Url({
        name: $(link).text(),
        url: $(link).attr('href')
      })
        new_url.save(function (error) {
          if (error) {
            console.log(error)
          }
        })
      console.log($(link).text() + ':\n  ' + $(link).attr('href'));
    });
  }); 
  res.send({
    success: true,
    message: 'Urls saved successfully!'
  })
})

app.get('/urls', (req, res) => {
  Url.find({}, function (error, urls) {
    if (error) { console.error(error); }
    res.send({
      urls: urls
    })
  }).sort({_id:-1})
})

app.delete('/urls', (req, res) => {
  var db = req.db;
  Url.remove({}, function(err, url){
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})

