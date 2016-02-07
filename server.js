var http = require('http');
var fs = require('fs');

// This example was the one i showed you in class
// and it was expected not to work. Or so i thought.
// The reason why the html page is shown in the browser perfectly
// is because the res.write(x) is first evoked when a request from the browser is made.
// even though readfile is assycronous the time for x to be assigned a value is still 
// very fast compared to the speed that i can reload my browser window. 
// So readFile is finnished long before the res.write(x) is evoked, 
// and therefore my example did not work - sorry :)
//   
var x;

fs.readFile('index.html', 'utf-8', function(err, data) {
	x = data;
});


var server = http.createServer(function(req, res) {

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write(x);
    res.end();

});

server.listen(3000);
