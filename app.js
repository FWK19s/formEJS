const http = require('http');
const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();
app.use('/static', express.static('public'));
app.set('view engine', 'ejs');

app.get('/home', function(req, res){
    res.render('home');
});
app.get('/about', function(req, res){
    res.render('about');
});
app.get('/contact', function(req, res){
    res.render('contact');
});
app.get('/login', function(req, res){
    res.render('login');
});
app.get('/signup', function(req, res){
    res.render('signup',{selectCountry: ['','Sweden','USA','Australia']
});
});
app.listen(8080);
 