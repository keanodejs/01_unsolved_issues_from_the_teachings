var fs = require('fs');

var x;

// assync version
fs.readFile('index.html', 'utf-8', function(err, data){
	console.log(data);
	x = 2;
});

// These 2 lines will be executed before the console.log(data) 
// inside the readFile function
console.log('Hello from end of the file');

// x will be undefined because it has not been assigned a value 
// at the time when this line is executed
console.log('x is ' + x); 