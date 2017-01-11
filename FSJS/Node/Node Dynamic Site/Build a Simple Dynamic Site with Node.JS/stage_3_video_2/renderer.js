var fs = require("fs");

function view(templateName, values, response) 	
	//read from template files
	var fileContents = fs.readFileSync('./views/' + templateName + '.html');
	//insert values into the content

	//write out response
	reponse.write(fileContents);
}

module.exports.view = view;