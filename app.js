const express = require('express');
const path = require('path');

// Init Web App
const app = express();

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Homepage Route
app.get('/', (req, res) => {
    res.render('index');
});

// Register Route
app.get('/register', (req, res) => {
    res.render('register');
});

// Success Route
app.get('/success', (req, res) => {
    res.render('success');
});

// Admin Route
app.get('/admin', (req, res) => {
    res.render('admin');
});

// Debug
app.listen(3000, () => {
    console.log('Port opened on 3000...');
});




//This should be a template we can use for all databases we need in the future
//------------------------------------------------------------------------------------

const MongoClient = require('mongodb').MongoClient
const uri = //PUT DATABASE WE WANT TO USE HERE

// BUG FIX REMINDER!!!!! 
// userNewUrlParser is actually useNewUrlParser 
const client = new MongoClient(uri, { userNewUrlParser: true })
client.connect(err => {
  const collection = client.db("crmdb").collection("customers")
  
  client.close()
})
const bodyparser = require('body-parser') 
const http = require('http').Server(app)

//Middlware Setup
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true}))




