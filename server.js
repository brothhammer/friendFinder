
//NPM packages used
var express = require("express");
var bodyParser = require("body-parser");

//Create the express server in node
var app = express();

//Initial port
var port = process.env.PORT || 8080;

//tell express app to use npm body-parser
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//tell the server where to find the routes based on user input
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//start the server
app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});