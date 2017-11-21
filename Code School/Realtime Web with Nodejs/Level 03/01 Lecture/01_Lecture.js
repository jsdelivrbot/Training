// Streaming response

http.createSever(function(request, response){

	response.writeHead(200);
	response.write('<p>Dog is running</p>');
	setTimeout(function(){
	    response.write('<p>Dog is done.</p>');
	    response.end();
    }, 5000)
}).listen(8000);

// request - readable stream
// response = writeable stream

// print data we get from client

http.createSever(function(request, response){
        response.writeHead(200);
        request.on('readable', function(){
        var chunk = null;
        while(null !== (chunk = request.read())){
            console.log(chunk.toString());
        }
    });

    request.on('end', function(){
        response.end();
    });
}).listen(8000);
    
// how to echo back to client the data we get in the request?

http.createSever(function(request, response){
        response.writeHead(200);
        request.on('readable', function(){
        var chunk = null;
        while(null !== (chunk = request.read())){
        // console.log(chunk.toString());
            response.write(chunk);
        }
    });
    request.on('end', function(){
        response.end();
    });
}).listen(8000);

// as you read from a readable stream - thereis a method to connect.  “PIPE”

http.createSever(function(request, response){
    response.writeHead(200);
    request.pipe(response);
}).listen(8000);

// if you:
// curl -d ‘hello’ http://localhost:8080
// you’ll get “Hello” on the client

var fs = require('fs');

var file = fs.createReadStream('readme.md');
var newFile = fs.createWriteStream('readme_copy.md');

file.pipe(newFile);


var fs = require('fs');
var http = require('http');

http.createServer(function(request, response){
	var newFile = fs.createWriteStream('readme_copy.md');
	request.pipe(newFile);

	request.on('end', function() {
		response.end('uploaded!');
    })
}).listen(8080);

// curl --upload-file readme.md http://localhost:8080

var fs = require('fs');
var http = require('http');

http.createServer(function(request, response){
	var newFile = fs.createWriteStream('readme_copy.md');
    // need size of tile - content length header
	var fileBytes = request.headers['content-length'];
	// upload bytes Var - keep track of uplaoded
	var uploadedBytes = 0;
	
	// listen to readable, (becase with readable we can keep track of current progress)
	request.on('readable', function(){
		var chunk = null;
		// loop through and read every chunk of the request
		while(null !== (chunk == request.read())){
			// increment the uploadedBytes var with lenght of each chunk
            uploadedBytes += chunk.length;
            // caluculate progressby dividing
            var progress = (uploadedBytes / fileBytes) * 100;
            // send progres back by using the respose write function
            response.write('progress: ' + parseInt(progress, 10) + '%\n');
        }
    });

    request.pipe(newFile);

	request.on('end', function() {
		response.end('uploaded!');
    });
    
}).listen(8080);
