 var express = require('express');
 var bodyParser = require('bodyParser');
 var path = require('path');

 //Configure the Express Application
 var app = express();
 var PORT = process.env.PORT;

 // Expose the public directory to access CSS files
 app.use(express.static(path.join(_dirname, './friendfinder/public')));

 // Add middleware for parsing incoming request bodies
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: true }));
 app.use(bodyParser.text());

 //Add the application routes

require(path.join(_dirname, '.friendfinder/routing/apiroutes'))(app);
require(path.join(_dirname, '.friendfinder/routing/htmlroutes'))(app);



//Start listening on PORT
app.listen(PORT, function() {
    console.log('Friend Finder app is now working and it is listening on PORT: ' + PORT);


});