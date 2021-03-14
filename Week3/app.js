const express = require("express");
const app = express();

//Assignment1
app.set("view engine", "pug");
app.get("/", (req, res) => {
	res.render("index");
});

app.use(express.static("public"));


//Assignment2
app.get("/getData", (req, res, next) => {

	let n = parseInt(req.query.number);
	
	if (req.query.number === undefined){
		res.send("Lack of Parameter");
	} else if (isNaN(req.query.number)){
		res.send("Wrong Parameter");
	} else if ( n > 0) {
		res.send((n*(n+1))/2);
	}
	else {
		res.send("Wrong Parameter");	
	}
});

app.listen(3000);

module.exports = app;
















