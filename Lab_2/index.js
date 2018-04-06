var express = require('express');
var app = express();
const status = require('http-status');

app.get('/',function(req,res){
	return res.send('Hello, World');
});

app.post('/',function(req,res){
	return res.sendStatus(status.METHOD_NOT_ALLOWED);
	res.send('Hello, World');
});

var port = 3000;
app.listen(port, function() {
	console.log('Listening on port ' + port);
});

