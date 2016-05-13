var express = require("express");
var app = express();

//app.set("views",__dirname);
//app.set('view engine', 'ejs');
//var routes = require('./routes.js');

//app.get("/:name", function(req,res){
//
//	res.render("template", { name: req.params.name});
//});
app.get('/', routes.sayHello)

app.listen(3000);
console.log("Seriver running ....");

