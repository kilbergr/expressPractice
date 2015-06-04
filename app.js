var express = require("express");

var app = express();

app.set("view engine", "ejs");


//with decimals handled
app.get("/:sign/:num1/:num2", function(req, res){
	var signs = {
		'add': function(a, b){return a + b},
		'subtract': function(a, b){return a-b},
		'multiply': function(a, b){return a*b},
		'divide': function(a,b){return a/b}
	};

	if (req.params.sign==="add"){
		sign = signs.add;}
	else if (req.params.sign==="subtract"){
		sign = signs.subtract;
	}
	else if (req.params.sign==="multiply"){
		sign = signs.multiply;
	}
	else {
		sign = signs.divide;
	}
 	var ans = sign(parseFloat(req.params.num1), parseFloat(req.params.num2));
	res.render("mathOps", {solution: ans})
})

/*separately

app.get("/add/:num1/:num2", function(req, res){
	var ans = parseFloat(req.params.num1) + parseFloat(req.params.num2);
	res.render("mathOps", {solution: ans})
})


app.get("/subtract/:num1/:num2", function(req, res){
	var ans = parseFloat(req.params.num1) - parseFloat(req.params.num2);
	res.render("mathOps", {solution: ans})
})


app.get("/multiply/:num1/:num2", function(req, res){
	var ans = parseFloat(req.params.num1) * parseFloat(req.params.num2);
	res.render("mathOps", {solution: ans})
})


app.get("/divide/:num1/:num2", function(req, res){
	var ans = parseFloat(req.params.num1)/parseFloat(req.params.num2);
	res.render("mathOps", {solution: ans})
})
*/
//localhost:3000
app.listen(3000, function(){
})