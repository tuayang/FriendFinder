// DEPENDENCIES

var express = require("express");
var path = require("path");

// EXPRESS CONFIG

var app = express();

var PORT = process.env.PORT || 8080;

// MIDDLEWARE TO HANDLE PARSE OF CODE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


module.exports.lookForFriends = function () {
	let scoreArray = [];
	let current = apiRoutes.user;

  // FOR LOOP THROUGH ARRAY TO LOOK FOR MATCH
	for (let i = 0; i < friends.array.length; i++) {
		let friendScore = 0;
		if (friends.array[i].name !== current.name) {

				for (let j = 0; j < friends.array[i].scores.length; j++) {
				let score = friends.array[i].scores[j];
				let difference = Math.abs(score - current.scores[j])
				friendScore+=difference;
			}

			let friendObj = {};
			friendObj.friend = friends.array[i];
			friendObj.score = friendScore;
			scoreArray.push(friendObj)
		}
	}

	scoreArray.sort(function (a,b) {
		return a.score - b.score;
	});
	return scoreArray[0]
}

//LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


