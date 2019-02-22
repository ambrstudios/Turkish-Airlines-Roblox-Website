// Modules and services
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const crypto = require('crypto');
const mongodb = require('mongodb').MongoClient;

// Settings
const port = process.env.PORT || 80

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(favicon("public/assets/img/icon.png")); 

app.use(bodyParser.urlencoded({
  extended: true,
}))
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public', {
    extensions: ['html'],
}))


const url = 'mongodb://admin:' + encodeURIComponent('RmSAJJH$C4&2RaRb@ds241664') + '.mlab.com:41664/tkrblx'
console.log(url)

// Use connect method to connect to the server
/* mongodb.connect(url, function(err, db) {
  if (!err) {
      console.log("Connected correctly to server");

      client.close();
  } else {
      throw err
  }
    
}); */


// Index page
app.get('/', function (req, res) {
    if (false) {
        // If logged in redirect to my account
    }
    else {
        res.status = 200;
        res.render('index', function(err) {
            if (err) {
                res.status = 500;
                res.send('Could not render page. Please contact a member of customer support on our discord server: https://discord.gg/nZRWfJR');
            }
        })
    }
})

// Errors and redirects
app.get('/*', function(req, res){
    if (false) {
        // TO DO: Redirect to / if not trying to access page and not logged in
    }
    else 
    {   // Render 404 page
        res.status = 404;  
        res.render('404')
    }
})

// Listen
app.listen(port, function() {
	console.log('Sublivion\'s web server is now listening on port ' + port);
})