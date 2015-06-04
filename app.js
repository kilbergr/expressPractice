var express = require("express");

var app = express();

app.set("view engine", "ejs");


app.get("/add/:num1/:sign/:num2", function(req, res){
	var ans = parseInt(req.params.num1) + req.params.sign + parseInt(req.params.num2);
	res.render("mathOps", {solution: ans})
})

//localhost:3000
app.listen(3000, function(){
})