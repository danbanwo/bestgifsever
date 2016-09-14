//Require http
//Require fs

var http = require('http')
var fs = require('fs')


//Setting up our server
var server = http.createServer(function(request, response) {
	//Get our URL
	var url = request.url;
	console.log('URL: ', url)
	//Create switch statement to server up different URLs
	switch(url) {
		case "/main.css" :
		//code
		fs.readFile('main.css', function(err, data) {
			if(err) throw err;
			response.write(data)
			response.end()
		})
		break;

		case "/" :
		//code
		fs.readFile('index.html', function(err, data) {
			if(err) throw err;
			response.write(data)
			response.end()
		})
		break;
		
		case "/page-2" :
		//code
		fs.readFile("page-2.html", function(err, data) {
			if(err) throw err;
			response.write(data)
			response.end()
		})
		break;

		case "/page-3" :
		//code
		fs.readFile('page-3.html', function(err, data) {
			if(err) throw err;
			response.write(data)
			response.end()
		})
		break;

		default: response.write("404" + '\n' + "Page not found")
		response.end()
		//
	}
	//Using the fs module to read the index.html file
	// fs.readFile('index.html', function(err, data) {
	// 	if(err) throw err;
	// 	response.write(data)
	// 	response.end()
	// })
})
server.listen(3000)