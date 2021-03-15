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
		let result = n*(n+1)/2;
		res.send(`${result}`); //result.toString //${result}
	}
	else {
		res.send("Wrong Parameter");	
	}
});

app.listen(3000);

module.exports = app;

//another way
// else if ( req.query.number > 0) {
// 	res.send(Number(req.query.number)*(Number(req.query.number)+1)/2);
// }














