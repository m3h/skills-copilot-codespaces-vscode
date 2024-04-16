// Create web server and listen on port 3000
const express = require('express');
const app = express();
const port = 3000;

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Use res.render to load up an ejs view file
app.get('/', function(req, res) {
    res.render('index');
});

// Listen on port 3000
app.listen(port, function() {
    console.log('Server is running on http://localhost:' + port);
});