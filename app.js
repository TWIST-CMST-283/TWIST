const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Init Web App
const app = express();

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Set assets folder
app.use(express.static(__dirname + '/assets'));

// Routes - Note that several routes are subject to change as they should not be accessible until certain actions are performed
// Homepage Route
app.get('/', (req, res) => {
    res.render('index');
});

// Register Route
app.get('/register', (req, res) => {
    res.render('register');
});

// Successful Registration Route - This route will need to be made only accessible after registration form is filled out
app.get('/success', (req, res) => {
    res.render('success');
});

// Admin Login Route
app.get('/login', (req, res) => {
    res.render('login');
});

// This route is for testing purposes only and should be removed before production. The admin page should only be accessible through a successful login.
app.get('/admin', (req, res) => {
    res.render('admin');
});

// This route is for testing purposes only and should be removed before production. The admin page should only be accessible through a successful login.
app.get('/edit', (req, res) => {
    res.render('edit');
});

// Open port 3000
app.listen(3000, () => {
    console.log('Port opened on 3000...');
});

//This should be a template we can use for all databases we need in the future
//------------------------------------------------------------------------------------

const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://TWIST:TWIST@cluster0.jfxqx.mongodb.net/TWIST?retryWrites=true&w=majority'; //Database String

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect(err => {
  const collection = client.db("TWIST").collection("collection");
  
  client.close();
});
const bodyparser = require('body-parser');
const http = require('http').Server(app);

//Middlware Setup
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true}));
