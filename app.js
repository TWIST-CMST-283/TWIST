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