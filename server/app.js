const express = require('express'),
      app = express(),
      morgan = require('morgan');

// process.env = 'production'

app.use(morgan('tiny'));

// SET STATIC
app.use('/javascripts', express.static(__dirname+'/../client/javascripts'));
app.use('/stylesheets',express.static(__dirname+'/../client/stylesheets'));
app.use('/views',express.static(__dirname+'/../client/views'));
app.use('/assets', express.static(__dirname+'/../assets'));

// ROUTE
app.get('/', function(req,res){
  res.sendFile('layout.html',{root:'./client/views'})
})

app.get('*', function(req,res){
  res.sendFile('layout.html',{root:'./client/views'})
})


var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`Listening on port ${port}`);
})