var express = require('express');
var routes = require('./routes/index.js');
var port = process.env.PORT || 3000;
var app = express();

app.set("view engine", "ejs");
app.use('/public', express.static(process.cwd() + '/public'));


routes(app);

app.listen(port, function() {
 console.log('Server listening on port ' + port + '…');
});