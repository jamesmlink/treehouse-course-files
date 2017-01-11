// need a simple way to access users badge count and javascript points

// solution: use node.js to connect to treehouse api to get info

var profile = require("./profile.js");


var users = ["jamesmlink","chalkers", "davemcfarland"];

users.forEach(profile.get);

