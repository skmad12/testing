var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 3000));
// view engine setup
app.set('views', 'views');
app.set('view engine', 'jade');

app.use('/static', express.static(__dirname + '/public'));
/// catch 404 and forward to error handler

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/help', function (req, res) {
    res.render('help');
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});