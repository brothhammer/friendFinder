var friends = require("../data/friends");

module.exports = function(app){

	//when user goes to a page
	app.get("/api/friends", function(request, response){
		response.json(friends);
	});

	//when user submits the form
	app.post("/api/friends", function(request, response){
		

		var userAnswers = req.body;
		var userScores = userData.scores;
		var compareFriends;

		var match = {
			name: "",
			photo: "",
			friendMatch: Infinity
		};

		for (var i = 0; i < friends.length; i++){
			var x;
		}

	});



}