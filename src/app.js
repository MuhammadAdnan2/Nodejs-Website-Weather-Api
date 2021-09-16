const express = require("express");
const app = express();
const port = process.env.port || 8080
const path = require('path')
const hbs  = require('hbs') 

const pathstatic = path.join(__dirname, '../public');
const pathviews  = path.join(__dirname, '../templates/views');
const pathpartials  = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs')

app.set('views', pathviews);

hbs.registerPartials(pathpartials)

app.use(express.static(pathstatic));


app.get("", (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/weather', (req, res) => {
    res.render('weather');
})

app.get('/*', (req, res) => {
    res.render('404error')
})







app.listen(port, ()=>{
    console.log("Server Is Running On port 8000....");
})