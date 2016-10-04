// need a simple way to access users badge count and javascript points

// solution: use node.js to connect to treehouse api to get info

var https = require("https");
var username = "jamesmlink";

// print out message
function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(message);
}

// print out error messages

function printError(error) {
	console.error(error.message);
};

// connect to api url

function get(username) {
	var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response){
		var body = "";
		// read and parse data from response
		response.on("data", function(chunk){
			body += chunk;
		});
		// print data out
		response.on("end", function(){
			if(response.statusCode === 200){
				try {
					var profile = JSON.parse(body);
					printMessage(username,profile.badges.length,profile.points.JavaScript);
				} catch(error){
					// parse error
					printError(error);
				}
			}
		});
	});
	// connection
	request.on("error", printError);
}





module.exports.get = get;