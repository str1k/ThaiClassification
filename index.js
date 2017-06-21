var express = require('express');
var app = express();
var fs = require("fs");
var wordcut = require("wordcut");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})
app.get('/:sentence', function (req, res) {
	wordcut.init();
	console.log(wordcut.cut(req.params.sentence));
	res.end(wordcut.cut(req.params.sentence));
   // First read existing users.
   //fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
   //    users = JSON.parse( data );
   //    var user = users["user" + req.params.id] 
   //    console.log( user );
   //    res.end( JSON.stringify(user));
   //});
})
var server = app.listen(process.env.PORT || 1337, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})