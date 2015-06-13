var express = require("express");

global.config = require("./config.js");

var app = express();



app.listen(global.config.apiPort);

var url = 'mongodb://localhost:27017/csilla';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});