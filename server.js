// Require modules
const express = require('express');
const path = require('path');
const energyDb = require('./data/energy-db')

  
// Create the Express app
const app = express();
  
// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
  
// Mount middleware (app.use)
  
  
// Mount routes
app.get('/', function(req, res) {
    res.redirect('/energy')
})

app.get('/home', function(req, res) {
    res.render('home')
})

app.get('/energy', function(req, res) {
    const energy = energyDb.getAll()
    res.render('energy/index', {
        energy: energy
    })
})
  
// Tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
});