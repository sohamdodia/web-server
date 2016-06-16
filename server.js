var express = require('express');
var app=express();

var middleware = {
	requireAuthentication : function (req,res,next) {
		console.log('Private route hit!');
		next();
	},
	logger : function(req,res,next) {
		console.log(req.method);
		next();
	}
};

// app.use(middleware.requireAuthentication);
app.use(middleware.logger);
app.get('/about',function (req,res) {
	res.send('About us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(3000,function() {
	console.log("Express Server Started");
});